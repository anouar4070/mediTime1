import React from 'react'
import Header from '../components/Header'

import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import SpecialtyMenu from '../components/SpecialityMenu'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialtyMenu />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home