import Image from 'next/image'
import HomeComponent from './core/components/home/HomeComponent'
import Navbar from './core/components/navbar/Navbar'
import About from './core/components/about/About'

export default function Home() {
  return (
   <>
   <Navbar/>
   <HomeComponent/>
   <About/>
   </>
  )
}
