import React from 'react'
import Header from '../components/Layout/Header'
import Hero from '../components/Route/Hero/Hero'
import Category from '../components/Route/Category/Category'
import BestDeals from '../components/Route/BestDeals/BestDeals'
import FeaturedProducts from '../components/Route/FeaturedProducts/FeaturedProducts'
import Event from '../components/Event/Event'

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero />
      <Category />
      <BestDeals />
      <Event />
      <FeaturedProducts />
    </div>
  )
}

export default HomePage