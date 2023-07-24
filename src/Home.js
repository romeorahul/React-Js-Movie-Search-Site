import React from 'react'
import Search from './Search'
import Movie from './Movie'
import Footer from './Footer'
import App from './App'
import { useGlobalContext } from './context'

const Home = () => {

  return (
    <>
      <Search />
      <Movie />
      <Footer />
      </>
  )
}

export default Home
