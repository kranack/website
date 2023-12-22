import './sass/App.sass'
import Navbar from './Navbar'
import WorkSection from './sections/WorkSection'
import GithubSection from './sections/GithubSection'
import Footer from './Footer'

import { work, github, navbar, contact } from '../data/data.json'

function App() {

  return (
    <>
      <Navbar navbar={navbar} />
      <WorkSection title={work.title} subtitle={work.subtitle} projects={work.projects} limit={work.limit} />
      <GithubSection username={github.username} />
      <Footer email={contact.email} social={contact.social} />
    </>
  )
}

export default App
