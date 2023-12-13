import React from 'react'
import BaseLayout from '../components/BaseLayout/BaseLayout'
import Entry from '../components/Entry'
import AboutMe from '../components/AboutMe'
import Bubbles from '../components/Bubbles'

export default function Home() {
  return (
    <BaseLayout>
        <Entry />
      <div className='landing-page'>
        <AboutMe />
      </div>
      <Bubbles />
    </BaseLayout>
  )
}

