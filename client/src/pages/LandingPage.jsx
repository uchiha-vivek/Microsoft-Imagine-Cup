import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer"
import Feature from "../components/Feature"



const LandingPage =() => {
    return (
        <>
        
        <div>
            <Navbar/>
            <div className="mt-12">
                <HeroSection/>
                <Feature/>
            </div>
            <Footer/>
        </div>
        </>
    )
}
export default LandingPage