
function Header() {
  return (
    <div>
      <header id="masthead" className="site-header">
        <div className="container d-flex flex-wrap align-center justify-between-space-between" style={{justifyContent:"space-between"}}>
          {/* <div className="site-branding">
            <a className="navbar-brand" href="https://movies4u.digital">
              <svg viewBox="0 0 330 50" className="sitelogo">
                <symbol id="s-text">
                  <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                    Movies4u
                  </text>
                </symbol>
                <use xlinkHref="#s-text" className="sitelogotext" />
                <use xlinkHref="#s-text" className="sitelogotext" />
                <use xlinkHref="#s-text" className="sitelogotext" />
                <use xlinkHref="#s-text" className="sitelogotext" />
                <use xlinkHref="#s-text" className="sitelogotext" />
              </svg>
              <span className="end-txt">.digital</span>
            </a>
          </div> */}
          <div className="site-branding">
            <img
             src="name.png" 
             alt="Tees Maar Khan"
              style={{width: "310px",height: "90px"}}
            />
          </div>

          {/* .site-branding */}
          <div className="head-search">
            <form
              role="search"
              method="get"
              className="search-form"
              action="https://movies4u.digital/"
            >
              <label>
                <span className="screen-reader-text">Search for:</span>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search …"
                  defaultValue=""
                  name="s"
                />
              </label>
              <input type="submit" className="search-submit" defaultValue="Search" />
            </form>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Header
