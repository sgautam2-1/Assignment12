import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section/Index';
import Footer from './components/Footer';
import Card from './components/Card';
import Text from './components/Text';
import Logo from './components/logo';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import Contact from './components/Contact';
import './App.css';

// Import images
import cmsImage from './assets/images/cms.jpg';
import ecommerceImage from './assets/images/ecommerce.png';
import freelancerImage from './assets/images/freelancer.png';
import sauravImage from './assets/images/saurav_image.jpg';
import testinomial1Image from './assets/images/testinomial1.jpg';
import testinomial2Image from './assets/images/testinomial2.jpg';
import testinomial3Image from './assets/images/testinomial3.jpg';

const App: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const testinomials = [
    {
      id: '1',
      text: 'Saurav did an excellent job on our project. Highly recommended!',
      author: 'John Doe',
      imageUrl: testinomial1Image,
    },
    {
      id: '2',
      text: 'Amazing work! Very satisfied with the results.',
      author: 'Jane Smith',
      imageUrl: testinomial2Image,
    },
    {
      id: '3',
      text: 'Professional and timely delivery. Will hire again.',
      author: 'Emily Johnson',
      imageUrl: testinomial3Image,
    },
  ];

  const projects = [
    {
      id: '1',
      title: 'CMS Project',
      description: 'A comprehensive content management system that allows users to create, edit, and publish digital content. It supports multiple users and roles, offers version control, and integrates with various third-party tools for enhanced functionality.',
      imageUrl: cmsImage,
    },
    {
      id: '2',
      title: 'E-commerce Project',
      description: 'An advanced e-commerce platform featuring a user-friendly interface, secure payment gateway integration, inventory management, and customizable product listings. It supports multiple payment methods and offers detailed analytics for tracking sales and performance.',
      imageUrl: ecommerceImage,
    },
    {
      id: '3',
      title: 'Freelancing Projects',
      description: 'Various freelance projects ranging from website development to custom software solutions. Each project is tailored to meet the specific needs of the client, ensuring high-quality deliverables and timely completion.',
      imageUrl: freelancerImage,
    },
  ];

  const handleNavigationClick = (sectionId: string) => {
    if (sectionId === 'footer-contact') {
      setShowContactForm(true);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSearch = (term: string) => {
    const elements = document.querySelectorAll('section, h2, p, span, div');
    elements.forEach((element) => {
      element.innerHTML = element.innerHTML.replace(/<span class="underline">(.*?)<\/span>/g, '$1');
    });
    if (term) {
      elements.forEach((element) => {
        const regex = new RegExp(`(${term})`, 'gi');
        element.innerHTML = element.innerHTML.replace(regex, `<span class="underline">$1</span>`);
      });
    }
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header id="header" className="header">
        <div className="header-content">
          <Logo src="path_to_logo" alt="Site Logo" />
          <div className="navbar-desktop">
          <Navbar
  links={[
    { href: '#header', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#footer-contact', label: 'Contact' },
  ]}
  activeLink="#header" 
/>
          </div>
          <div className="navbar-mobile">
            <Dropdown
              options={[
                { label: 'Home', onClick: () => handleNavigationClick('header') },
                { label: 'About', onClick: () => handleNavigationClick('about') },
                { label: 'Projects', onClick: () => handleNavigationClick('projects') },
                { label: 'Testimonials', onClick: () => handleNavigationClick('testimonials') },
                { label: 'Contact', onClick: () => handleNavigationClick('footer-contact') },
              ]}
            />
          </div>
        </div>
        <div className="search-bar">
          <SearchBar onSearch={handleSearch} placeholder="Search..." />
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <Section
          title="About Myself"
          content={
            <div className="about-content">
              <img src={sauravImage} alt="About Me" className="about-img" />
              <div className="about-text">
                <Text>I am Saurav Gautam, a full stack web developer with a passion for creating dynamic and responsive web applications. I also take on freelance projects, delivering high-quality work to my clients.</Text>
              </div>
            </div>
          }
        />
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <Section
          title="My Projects"
          content={
            <div className="card-container">
              {projects.map(project => (
                <Card
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  visible={true}
                  disabled={false}
                />
              ))}
            </div>
          }
        />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <Section
          title="Testimonials"
          content={
            <div className="card-container">
              {testinomials.map(testimonial => (
                <Card
                  key={testimonial.id}
                  title={testimonial.author}
                  description={testimonial.text}
                  imageUrl={testimonial.imageUrl}
                  visible={true}
                  disabled={false}
                />
              ))}
            </div>
          }
        />
      </section>

      {/* Contact Section */}
      {showContactForm && (
        <section id="footer-contact" className="contact-section">
          <Contact />
        </section>
      )}

      {/* Footer Section */}
      <Footer
  socialLinks={[
    { href: 'https://twitter.com', label: 'Twitter' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
  ]}
  miniNavLinks={[
    { href: '#header', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#footer-contact', label: 'Contact' }
  ]}
  privacyPolicy="© 2024 Saurav Gautam. All rights reserved."
/>

    </div>
  );
};

export default App;
