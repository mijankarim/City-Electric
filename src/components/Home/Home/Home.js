import React from 'react'
import About from '../About/About'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import News from '../News/News'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'
import TopBanner from '../TopBanner/TopBanner'

const Home = () => {
    return (
        <div>
            <Header/>
            <TopBanner/>
            <About/>
            <Services/>
            <Projects/>
            <Testimonials/>
            <News/>
            <Footer/>
        </div>
    )
}

export default Home;
