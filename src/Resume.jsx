import { useEffect, useRef, useState } from 'react'
import './sass/Resume.sass'

import { infos, projects } from '../data/resume.json'

class TerminalHelper {
  static compute(cmd) {
    switch (cmd) {
      case 'help':
        return TerminalHelper.help()
      case 'info':
        return TerminalHelper.info()
      case 'skills':
        return TerminalHelper.skills()
      case 'projects':
        return TerminalHelper.projects()
      case 'whoami':
        return <p>@{infos.github} ({infos.name})</p>
      case 'where':
        return <p>Location: Ottawa, ON, Canada</p>
      default:
        break;
    }

    return ''
  }

  static help() {
    return (
      <div className=''>
        <p>info</p>
        <p>education</p>
      </div>
    )
  }

  static info() {
    return (
      <div className='info'>
        <p>name: {infos.name}</p>
        <p>email: {infos.email}</p>
        {infos.github && <p>github: <a href={`https://github.com/${infos.github}`} target='_blank' rel="noreferrer">{infos.github}</a></p>}
      </div>
    )
  }

  static skills() {
    return (
      <div className='skills'>
        <p>Backend: PHP, NodeJS</p>
        <p>Frontend: HTML5, CSS3, Javascript</p>
      </div>
    )
  }

  static projects() {
    return (
      <div className='projects'>
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <p>{project.date}: {project.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

function Terminal() {
  const keyCodes = Array.from(Array(26)).map((e, i) => 'Key' + String.fromCharCode(i + 65))

  const [results, setResults] = useState([])
  const [cmd, setCmd] = useState('')

  const onKeydown = (e) => {
    if (e.code === 'Space' || keyCodes.includes(e.code) || keyCodes.includes('Key' + e.key.toUpperCase())) {
      setCmd(cmd + e.key)
    } else if (e.code === 'Backspace') {
      // delete
      setCmd(cmd.slice(0, -1))
    } else if (e.code === 'Enter') {
      // let's go!
      const result = TerminalHelper.compute(cmd)
      results.push({ el: cmd, class: 'command' })
      results.push({ el: result})
      
      setCmd('') // reset
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeydown, false)

    return () => {
      window.removeEventListener('keydown', onKeydown, false)
    }
  })

  return (
    <>
      <div className='results'>{results.map((result, index) => {
        return (
          <div className={`result ${result.class || ''}`} key={index}>
            {result.el}
          </div>
        )
      })}</div>
      <span className='cursor'>{cmd}</span>
    </>
  )
}


function Resume() {
  return (
    <div className='resume'>
      <Terminal />
    </div>
  )
}

export default Resume
