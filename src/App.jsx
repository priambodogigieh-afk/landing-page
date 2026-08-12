import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Community from './components/Community'
import FeatureHighlight1 from './components/FeatureHighlight1'
import Stats from './components/Stats'
import FeatureHighlight2 from './components/FeatureHighlight2'
import Testimonial from './components/Testimonial'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Clients/>
        <Community/>
        <FeatureHighlight1/>
        <Stats/>
        <FeatureHighlight2/>
        <Testimonial/>
        <Blog/>
        <CTA/>
      </main>
      <Footer/>
    </>
  )
}

export default App
