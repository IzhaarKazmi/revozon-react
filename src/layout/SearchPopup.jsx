export default function SearchPopup() {
  return (
    <div className="search-popup">
      <div className="color-layer"></div>
      <button className="close-search">
        <span className="far fa-times fa-fw"></span>
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group">
          <input type="search" name="search-field" placeholder="Search Here" required />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
