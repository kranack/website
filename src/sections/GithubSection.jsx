import GitHubCalendar from "react-github-calendar";
import PropTypes from 'prop-types';

function GithubSection({ username }) {
  return (
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
        <GitHubCalendar username={username} colorScheme="light" />
      </div>
    </section>
  )
}

GithubSection.propTypes = {
  username: PropTypes.string.isRequired
}

export default GithubSection