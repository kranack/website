import PropTypes from 'prop-types'
import Carousel from '../utils/Carousel'

function Project({ name, description, langs, carousel, status }) {
  const getLangClass = (lang) => {
    return `icon icon-${lang}`
  }

  const getLangIcon = (icon, useIonic) => {
    return (useIonic) ? <ion-icon name={`logo-${icon}`}></ion-icon> : <i className={`fab fa-${icon}`}></i>
  }

  return (
    <div className="tile is-child is-3 box has-ribbon">
      { status && <div className={`ribbon ${status?.style || 'is-info'}`}>{status?.label || status}</div> }
      <p className="title">{name}</p>
      <p className="subtitle is-6">{description || ''}</p>
      <p className="icons">
        {langs.map((lang, index) => {
          return (
            <span className={getLangClass(lang.name)} key={index}>
              {getLangIcon(lang.icon || lang.name, lang.useIonic)}
            </span>
          )
        })}
      </p>
      { carousel && <hr/> }
      { carousel && <Carousel images={carousel.images || []} /> }
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  langs: PropTypes.array.isRequired,
  carousel: PropTypes.object,
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

function Projects({ projects }) {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        {projects.map((project,index) => {
          return <Project name={project.name} description={project.description} langs={project.langs} carousel={project.carousel} status={project.status} key={index}/>
        })}
      </div>
    </div>
  )
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
}

function WorkSection({ title, subtitle, projects }) {
  return (
    <section id="me" className="section is-large has-background-info">
      <p className="title has-text-white">{title}</p>
      <p className="subtitle has-text-grey-lighter">{subtitle || ''}</p>
      <Projects projects={projects} />
    </section>
  )
}

WorkSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  projects: PropTypes.array.isRequired
}

export default WorkSection