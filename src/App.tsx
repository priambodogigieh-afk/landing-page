import { useEffect } from 'react';
import './styles/index.css';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Clients from './components/sections/Clients';
import Community from './components/sections/Community';
import FeatureHighlight from './components/sections/FeatureHighlight';
import Stats from './components/sections/Stats';
import Testimonial from './components/sections/Testimonial';
import Blog from './components/sections/Blog';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('theme');
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Community />

        <div className="body-sections">
          <FeatureHighlight
            title="The unseen of spending three years at Pixelgrade"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
            imageSrc="/rafiki.svg"
            imageAlt="Two people presenting a mobile login form"
            ctaText="Learn More"
            ctaHref="#learn"
            bgLight={false}
          />

          <Stats />

          <FeatureHighlight
            title="How to design your site footer like we did"
            description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
            imageSrc="/monile%20login%202.png"
            imageAlt="Character presenting a mobile sign-up form with padlock security"
            ctaText="Learn More"
            ctaHref="#learn"
            reverse={true}
          />

          <Testimonial />
          <Blog />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
