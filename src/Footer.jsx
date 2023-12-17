import Obfuscate from "react-obfuscate";

function Footer({ email, social }) {
  return (
    <footer id="footer" className="footer">
      <div className="content has-text-centered">
        <p>
          {social.map((item, index) => {
            return (
              <span className="icon-text" key={index}>
                <span className="icon">
                  <i className={`fab fa-${item.icon}`}></i>
                </span>
                <span>{item.name}</span>
              </span>
            )
          })}
        </p>
        <p>
          <span className="icon-text">
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span><Obfuscate email={email} /></span>
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer