import React from 'react'


import Layout from '../components/layout'
import Hero from '../components/content/hero'
import Proposition from '../components/content/proposition'
import Footer from '../components/footer'
import Microns from '../components/content/microns'
import Technology from '../components/content/technology'
import About from '../components/content/about'
import Examples from '../components/content/examples'


const IndexPage = () => (
  <Layout>
    <Hero />
    <Proposition />
    <Microns />
    <Examples />
    <Technology />
    <About />
    <Footer />
  </Layout>
)

export default IndexPage
