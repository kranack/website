import Obfuscate from "react-obfuscate";

function Footer({ email, social }) {
  return (
    <footer id="footer" className="footer">
      <div className="content has-text-centered">
        <p>
          {social.map((item, index) => {
            return (
              <span className="icon-text" key={index}>
                <span className={`icon icon-${item.icon}`}>
                  <i className={`fab fa-${item.icon}`}></i>
                </span>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <span>{item.name}</span>
                </a>
              </span>
            )
          })}
        </p>
        <p>
          <span className="icon-text">
            <span className="icon has-text-info">
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