import Head from 'next/head'
import Image from 'next/image'
import About from '../components/HomeComponent/About'
import Faq from '../components/HomeComponent/Faq'
import Hero from '../components/HomeComponent/Hero'
import Speakers from '../components/HomeComponent/Speakers'
import Sponsors from '../components/HomeComponent/Sponsors'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech War</title>
        <meta name="description" content="Tech war is a hackathon platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/war_logo.png" />
      </Head>
      <Hero />
      <About />
      <Sponsors />
      <Speakers />
      <Faq />
      
    </>
  )
}
