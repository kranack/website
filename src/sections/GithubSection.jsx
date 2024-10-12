import GitHubCalendar from "react-github-calendar";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

function GithubSection({ username }) {
  const [dataTheme, setDataTheme] = useState('light');

  const onChange = (mutationList) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        const theme = (mutation.target).getAttribute('data-theme')

        switch (theme) {
          case 'dark':
            setDataTheme('dark')
            break
          case 'light':
            setDataTheme('light')
            break
          default:
            setDataTheme(null)
            break
        }
      }
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(onChange)

    observer.observe(window.document.documentElement, { attributes: true })

    return () => {
      observer.disconnect()
    };
  })

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
        <GitHubCalendar username={username} colorScheme={dataTheme} />
      </div>
    </section>
  )
}

GithubSection.propTypes = {
  username: PropTypes.string.isRequired
}

export default GithubSection