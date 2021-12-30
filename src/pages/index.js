import React, { useState } from 'react'
import Footer from '../components/Footere';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import homeObjOne from '../components/InfoSection/Data1'
import homeObjTwo from '../components/InfoSection/Data2'
import homeObjThree from '../components/InfoSection/Data3';
import Navbar from '../components/Navbar'
import Services from '../components/services';
import Sidebar from '../components/SideBar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection  {...homeObjOne} />
            <InfoSection  {...homeObjTwo} />
            <Services />
            <InfoSection  {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
