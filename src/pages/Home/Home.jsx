import React, {useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/Navbar/NavBar'
import HomeSection1 from './home-section1'
import HomeSection2 from './home-section2'
import HomeSection3 from './home-section3'
import HomeSection4 from './home-section4'
import HomeSection5 from './home-section5'
import HomeSection6 from './home-section6'


function Home() {

  useEffect(() => {

  }, [])

  return (
    <div className='mt-20 sm:mt-36 '>
      <NavBar/>
      <HomeSection1/>
      <HomeSection2/>
      <HomeSection3/>
      <HomeSection4/>
      {/* <HomeSection5/>  */}
      <HomeSection6/>
      <Footer/>
    </div>
  )
}

export default Home