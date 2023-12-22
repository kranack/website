import PropTypes from 'prop-types'
import Carousel from '../utils/Carousel'
import { useState } from 'react'

function Project({ name, description, langs, carousel, status, link }) {
  const getLangClass = (lang) => {
    return `icon icon-${lang}`
  }

  const getLangIcon = (icon, useIonic) => {
    return (useIonic) ? <ion-icon name={`logo-${icon}`}></ion-icon> : <i className={`fab fa-${icon}`}></i>
  }

  const getLink = () => {
    if (!link) return ''

    return (
      <div className='link'>
        <a href={link?.url || link} target='_blank' rel='noreferrer'><span className='icon'><i className={link?.icon || 'fas fa-globe'}></i></span></a>
      </div>
    )
  }

  return (
    <div className="tile is-child is-12 box has-ribbon">
      { status && <div className={`ribbon ${status?.style || 'is-info'}`}>{status?.label || status}</div> }
      { getLink() }
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
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

function Projects({ projects, limit }) {
  const [currentPage, setCurrentPage] = useState(1)
  
  const paginate = true
  const _limit = limit || 3
  const pages = Math.ceil(projects.length / _limit)

  const onPreviousHandler = () => {
    if (currentPage > 1) setCurrentPage(currentPage-1)
  }

  const onNextHandler = () => {
    if (currentPage < pages) setCurrentPage(currentPage+1)
  }

  const renderPagination = () => {
    if (!paginate) return ''

    return (
      <nav className="pagination projects-pagination" role="navigation" aria-label="pagination">
        <a className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviousHandler}>
          <span className='icon'><i className='fas fa-angle-left'></i></span>
        </a>
        <a className={`pagination-next ${currentPage === pages ? 'is-disabled' : ''}`} onClick={onNextHandler}>
          <span className='icon'><i className='fas fa-angle-right'></i></span>
        </a>
      </nav>
    )
  }
  
  return (
    <>
      {renderPagination()}
      <div className="tile is-ancestor">
          {projects.slice((currentPage-1)*_limit, (currentPage*_limit)).map((project,index) => {
            return (
              <div className="tile is-4 is-parent" key={index}>
                <Project name={project.name} description={project.description} langs={project.langs} carousel={project.carousel} status={project.status} link={project.link} />
              </div>
            )
          })}
      </div>
    </>
  )
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  limit: PropTypes.number,
}

function WorkSection({ title, subtitle, limit, projects }) {
  return (
    <section id="me" className="section is-large has-background-info">
      <p className="title has-text-white">{title}</p>
      <p className="subtitle has-text-grey-lighter">{subtitle || ''}</p>
      <Projects projects={projects} limit={limit} />
    </section>
  )
}

WorkSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  limit: PropTypes.number,
  projects: PropTypes.array.isRequired
}

export default WorkSection