import PropTypes from 'prop-types'

function Navbar({ navbar }) {
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
          {navbar.map((item, index) => {
            return (
              <a className="navbar-item" href={item.url} key={index}>
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="navbar-end">
          
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  navbar: PropTypes.array.isRequired,
}

export default Navbar