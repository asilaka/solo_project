import React from 'react'
import Hero from '../components/Hero/Hero'
import Header from '../components/Header/Header'
import Total from '../components/Total/Total'
import Footer from '../components/Footer/Footer'
import Wrap from '../components/Wrap/Wrap'
import Top from '../components/Top/Top'
import Lorem from '../components/Lorem/Lorem'
import Step from '../components/Step/Step'
import Blog from '../components/Blog/Blog'
import Anime from '../components/Anime/Anime'

const Home = () => {
  return (
   <>
  <Header/>
   <Hero/>
   <Total/>
   <Footer/>
   <Wrap/>
   <Top/>
   <Lorem/>
   <Step/>
   <Blog/>
   <Anime/>
   </>
  )
}

export default Home