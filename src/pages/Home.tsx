import React from 'react'
import BaseLayout from '../components/BaseLayout/BaseLayout'
import Start from '../components/Start'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'

export default function Home() {
  return (
    <BaseLayout>
      <div className='landing-page'>
        <Start />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </BaseLayout>
  )
}

