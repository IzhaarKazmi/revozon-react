import { useEffect } from 'react';

// Same order as the original parts/scripts.php (full list — a couple of
// entries were missing before; not fatal on their own, but let's match
// the source theme exactly).
const SCRIPTS = [
  '/assets/js/jquery-latest.js',
  '/assets/js/bootstrap.bundle.min.js',
  '/assets/js/jarallax.min.js',
  '/assets/js/jquery.ajaxchimp.min.js',
  '/assets/js/jquery.appear.min.js',
  '/assets/js/swiper.min.js',
  '/assets/js/jquery.circle-progress.min.js',
  '/assets/js/knob.js',
  '/assets/js/jquery.magnific-popup.min.js',
  '/assets/js/jquery.validate.min.js',
  '/assets/js/odometer.min.js',
  '/assets/js/wNumb.min.js',
  '/assets/js/wow.js',
  '/assets/js/isotope.js',
  '/assets/js/owl.carousel.min.js',
  '/assets/js/jquery-ui.js',
  '/assets/js/jquery.circleType.js',
  '/assets/js/jquery.lettering.min.js',
  '/assets/js/jquery.fittext.js',
  '/assets/js/jquery.nice-select.min.js',
  '/assets/js/marquee.min.js',
  '/assets/js/countdown.min.js',
  '/assets/js/jquery-sidebar-content.js',
  '/assets/js/twentytwenty.js',
  '/assets/js/jquery.event.move.js',
  '/assets/js/aos.js',
  '/assets/js/gsap/gsap.js',
  '/assets/js/gsap/ScrollTrigger.js',
  '/assets/js/gsap/SplitText.js',
  '/assets/js/particles.js',
  '/assets/js/app.js',
  '/assets/js/script.js',
];

// Module-level, deliberately NOT reset by React — these vendor scripts are
// meant to load exactly once for the whole lifetime of the SPA.
let started = false;

/**
 * The original theme (jQuery + WOW.js + AOS + Owl Carousel + Swiper + ...)
 * expects to run once against a fully-rendered DOM. We load it here, after
 * React has mounted, instead of via plain <script> tags in index.html
 * (which would run before React had rendered anything).
 *
 * Caveat: these scripts run ONCE for the life of the SPA. Animations that
 * are triggered on initial page load (WOW/AOS reveal-on-scroll, sliders)
 * will work, but anything that only initializes elements present at
 * first load won't automatically pick up elements rendered later after a
 * client-side route change. For a 4-page marketing site this is a minor,
 * fixable-later concern — flag it if you add more dynamic pages.
 */
function hidePreloaderFallback() {
  // Belt-and-braces: make sure the preloader can never get stuck on
  // screen even if a legacy script errors out or jQuery never becomes
  // available for some reason.
  const el = document.querySelector('.js-preloader');
  if (el) {
    el.style.transition = 'opacity 300ms ease';
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.display = 'none';
    }, 300);
  }
}

function loadNext(i, safetyTimer) {
  if (i >= SCRIPTS.length) {
    // All legacy scripts (jQuery, WOW, AOS, Swiper, script.js, ...) are
    // now loaded. The theme's own init code lives inside
    // `$(window).on('load', ...)` handlers in script.js. Because we
    // inject these scripts AFTER React has mounted, the browser's real
    // `load` event has usually already fired by this point, so those
    // handlers would otherwise never run (this is what caused the
    // preloader to spin forever and sliders/masonry layouts to never
    // initialize). Firing it manually via jQuery re-runs every handler
    // that was bound to it, exactly as if the page had just finished
    // loading.
    const $ = window.jQuery;
    if ($) {
      $(window).trigger('load');
    } else {
      hidePreloaderFallback();
    }
    clearTimeout(safetyTimer);
    return;
  }

  const script = document.createElement('script');
  script.src = SCRIPTS[i];
  script.async = false;
  script.onload = () => loadNext(i + 1, safetyTimer);
  script.onerror = () => loadNext(i + 1, safetyTimer);
  document.body.appendChild(script);
}

export default function useLegacyScripts() {
  useEffect(() => {
    // NOTE: this intentionally has no cleanup function. React's
    // StrictMode runs effects twice in development (mount → cleanup →
    // mount) specifically to surface bugs like "effect starts an async
    // chain, cleanup cancels it, and the flag meant to prevent a second
    // run now blocks the real run too." These <script> tags are a
    // one-time, app-lifetime side effect on `document`, not something
    // tied to this component's mount/unmount — so we guard against
    // double-loading with a plain module flag and deliberately do NOT
    // try to "cancel" anything on cleanup.
    if (started) return;
    started = true;

    // Absolute fallback in case the script chain never finishes for some
    // other reason (e.g. a 404 short-circuits nothing since onerror also
    // advances the chain, but this is cheap insurance either way).
    const safetyTimer = setTimeout(hidePreloaderFallback, 4000);

    loadNext(0, safetyTimer);
  }, []);
}
