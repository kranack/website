
function Navbar() {
  let navbarElement = null
  let navbarBurgerElement = null

  const onClickBurgerHandler = () => {
    if (!navbarElement || !navbarBurgerElement) return;
    
    navbarBurgerElement.classList.toggle('is-active')
    navbarElement.classList.toggle('is-active')
  }

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={onClickBurgerHandler} ref={node => navbarBurgerElement = node }>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" ref={node => navbarElement = node}>
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
          <a className="navbar-item" href="#me">
            Moi
          </a>
          <a className="navbar-item" href="#github">
            Github
          </a>
          <a className="navbar-item" href="#footer">
            Contact
          </a>
          <a className="navbar-item" href="/cv">
            CV
          </a>
        </div>

        <div className="navbar-end">
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar