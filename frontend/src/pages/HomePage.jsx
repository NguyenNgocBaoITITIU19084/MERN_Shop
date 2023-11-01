import React from 'react'
import Header from '../components/Layout/Header'
import Hero from '../components/Route/Hero/Hero'
import Category from '../components/Route/Category/Category'

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero />
      <Category />
    </div>
  )
}

export default HomePage