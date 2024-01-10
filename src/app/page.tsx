import Image from 'next/image'
import HomeComponent from './core/components/home/HomeComponent'
import Navbar from './core/components/navbar/Navbar'
import About from './core/components/about/About'
import Projects from './core/components/projects/Projects'
import Skills from './core/components/skills/Skills'
import Contact from './core/components/contact/Contact'

export default function Home() {
  return (
   <>
   <Navbar/>
   <HomeComponent/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
   </>
  )
}
