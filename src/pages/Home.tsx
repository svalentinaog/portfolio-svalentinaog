import React from 'react'
import BaseLayout from '../components/BaseLayout/BaseLayout'
import Entry from '../components/Entry'

export default function Home() {
  return (
    <BaseLayout>
        <Entry />
      <div className='landing-page'>
      </div>
    </BaseLayout>
  )
}

