import GitHubCalendar from 'react-github-calendar'
import './App.sass'
import Navbar from './Navbar'
import Obfuscate from 'react-obfuscate'
//import Carousel from './Carousel'

function App() {

  return (
    <>
      <Navbar />
      <section id="me" className="section is-large has-background-info">
        <p className="title has-text-white">Mes réalisations</p>
        <p className="subtitle has-text-grey-lighter">Des trucs que j&apos;ai fait</p>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child is-3 box">
              <p className="title">Spotify UI</p>
              <p className="icons">
                <span className="icon icon-spotify">
                  <i className="fab fa-spotify"></i>
                </span>
                <span className="icon icon-javascript">
                  <i className="fab fa-js"></i>
                </span>
                <span className="icon icon-reactjs">
                  <i className="fab fa-react"></i>
                </span>
                <span className="icon icon-sass">
                  <i className="fab fa-sass"></i>
                </span>
                <span className="icon icon-nodejs">
                  <i className="fab fa-node"></i>
                </span>
                <span className="icon icon-electronjs">
                  <ion-icon name="logo-electron"></ion-icon>
                </span>
              </p>
              <hr/>
              {
                /*
                <Carousel images={[ 'spotify-ui-splash.png', 'spotify-ui-connect.png' ]} />
                */
              }
            </div>
            <div className="tile is-child is-3 box">
              <p className="title">Genealogy</p>
              <p className="icons">
                <span className="icon icon-javascript">
                  <i className="fab fa-js"></i>
                </span>
                <span className="icon icon-reactjs">
                  <i className="fab fa-react"></i>
                </span>
                <span className="icon icon-sass">
                  <i className="fab fa-sass"></i>
                </span>
                <span className="icon icon-nodejs">
                  <i className="fab fa-node"></i>
                </span>
                <span className="icon icon-electronjs">
                  <ion-icon name="logo-electron"></ion-icon>
                </span>
              </p>
              <hr/>
            </div>
            <div className="tile is-child is-3 box">
              <p className="title">VOD</p>
              <p className="icons">
                <span className="icon icon-html5">
                  <ion-icon name="logo-html5"></ion-icon>
                </span>
                <span className="icon icon-css3">
                  <ion-icon name="logo-css3"></ion-icon>
                </span>
                <span className="icon icon-sass">
                  <i className="fab fa-sass"></i>
                </span>
                <span className="icon icon-php">
                  <i className="fab fa-php"></i>
                </span>
                <span className="icon icon-laravel">
                  <i className="fab fa-laravel"></i>
                </span>
              </p>
              <hr/>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium">
        <div id="github" className="section-github">
          <p className="title">
            <span className="icon-text">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span>Mes contributions</span>
            </span>
          </p>
          <GitHubCalendar username="kranack" colorScheme="light" />
        </div>
      </section>
      <footer id="footer" className="footer">
        <div className="content has-text-centered">
          <p>
            <span className="icon-text">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span>Github</span>
            </span>
            <span className="icon-text">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>Twitter</span>
            </span>
            <span className="icon-text">
              <span className="icon">
                <i className="fab fa-linkedin"></i>
              </span>
              <span>Linkedin</span>
            </span>
          </p>
          <p>
            <span className="icon-text">
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span><Obfuscate email="damien@calesse.fr"/></span>
            </span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
