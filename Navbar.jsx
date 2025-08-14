const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg py-3"
      style={{
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div className="container-fluid">
        {/* Brand */}
        <a
          className="navbar-brand fw-bold text-uppercase"
          href="#"
          style={{
            letterSpacing: "2px",
            color: "#ffd700",
            fontSize: "1.5rem",
          }}
        >
          <span className="badge bg-warning text-dark px-3 py-2 shadow">
            NewsMag
          </span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2">
            {[
              "technology",
              "business",
              "health",
              "science",
              "sports",
              "entertainment",
            ].map((category) => (
              <li key={category} className="nav-item">
                <div
                  className="nav-link text-light px-3 py-2 rounded"
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "rgba(255,255,255,0.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                  onClick={() => setCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
