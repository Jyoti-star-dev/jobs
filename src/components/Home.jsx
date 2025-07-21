// e.g., src/components/Home.js or inside App.js


import './Home.css'; // create this CSS file if not there
import React, { useEffect, useState,useRef  } from 'react';
import axios from 'axios';
import { 
  FaUserCog, FaLightbulb, FaAward, FaBriefcase, FaHandshake, FaGlobe 
} from 'react-icons/fa';

 const services = [
  { name: 'Web Services Development', color: '#00E5FF' },
  { name: 'Application Integration', color: '#800080' },
  { name: 'Custom Application Development', color: '#E91E63' },
  { name: 'Application Migration', color: '#8BC34A' },
  { name: 'Product Development', color: '#FF9800' },
  { name: 'Engineering Services', color: '#00BCD4' },
  { name: 'Cloud Management', color: '#800000' },
  { name: 'IOT Services', color: '#00008B' },
  { name: 'Quality Assurance', color: '#E040FB' },
  { name: 'DevOps Services', color: '#F8BBD0' },
];
const propositions = [
  {
    title: 'Skill & Experience',
    icon: <FaUserCog />,
    desc: 'We have a proven track record of delivering high-quality software solutions. Thanks to our highly skilled and experienced professionals.'
  },
  {
    title: 'Innovation & Expertise',
    icon: <FaLightbulb />,
    desc: 'A creative mind and technical expertise break all the barriers. At Deepith, we are a team of curious minds and problem solvers.'
  },
  {
    title: 'Quality Deliverables',
    icon: <FaAward />,
    desc: 'Problem solving, business success, compliance, security, and client satisfaction at optimized cost have been our guidelines from inception.'
  },
  {
    title: 'Diverse Experience',
    icon: <FaBriefcase />,
    desc: 'Our rich and diverse experience helps us drive innovation, gain market insights, manage risk, foster adaptability, and retain top talent.'
  },
  {
    title: 'Long Term Relationship',
    icon: <FaHandshake />,
    desc: 'Trust and long-term relationships go hand in hand. At Deepith, this has been the pillar of success for us and our partners.'
  },
  {
    title: 'Trending Technologies',
    icon: <FaGlobe />,
    desc: 'Technology changes quickly, so do we — constantly updating ourselves with trending technologies and maintaining a strong tech stack.'
  },
];

const Home = () => {
    const [stats, setStats] = useState({
    totalBusinessYears: 0,
    customers: 0,
    successfulProjects: 0,
    qualifiedSpecialists: 0
  });
  useEffect(() => {
  console.log('useEffect running');
  axios.get('https://localhost:7278/Jobs/CompanyDetails/',
    {
  params: {
    Flag: 'View'
  }
  })
    .then(response => {
      console.log('API response:', response);
     const polit = response.data.politList[0];

  setStats({
    totalBusinessYears: polit.totalBusinessYears || 0, 
    customers: polit.customers || 0,
    successfulProjects: polit.successfulProjects || 0,  
    qualifiedSpecialists: polit.qualifiedSpecialists || 0
  });
    })
    .catch(error => {
      console.error('Error fetching stats:', error);
    });
}, []);

//  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: "/images/agile.jpg",
      title: "Transform Your Workflow",
      description: "Adopt agile methodologies that increase productivity and team collaboration"
    },
    {
      image: "/images/Digital.jpg",
      title: "Digital Transformation",
      description: "Modernize your business processes with our cutting-edge solutions"
    },
    {
      image: "/images/clodilya_imresizer.jpg",
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure tailored to your needs"
    },
    {
      image: "/images/dataanalist.png",
      title: "Data-Driven Decisions",
      description: "Harness the power of your data with advanced analytics"
    },
    {
      image: "/images/banner1.png",
      title: "Customer-Centric Approach",
      description: "Solutions designed with your success in mind"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    resetAutoSlide();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    slideInterval.current = setInterval(nextSlide, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(slideInterval.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(slideInterval.current);
  }, []);


  return (
    <>
    <div className="home-container">
      <h1 className="blink-heading">
        <span className="black-text">Reinvent your  </span>
        <span className="blue-text">VISION </span>
            <span className='black-text'>with</span>
            <span className='orange-text'> Deepith</span> <span className='black-text'>®</span>
      </h1>
      <div className="marquee">
<h5 className='headings'>
  Deepith offers innovative and flexible solutions at any stage of the product life cycle.
  We blend the experience and knowledge gained over <br />the years from several diverse projects to provide best solutions to our customers.
  Deepith is powered by strong resources and our delivery <br />capabilities incorporate ISO guidelines and SEI CMM process standards.
</h5>

      </div>
      {/* your other content */}
      <div className="stats-cards">
        <div className="stat-card">
          <div className="front">{stats.totalBusinessYears}+<br />years in business</div>
          <div className="back">In the span of last {stats.totalBusinessYears}+ years, we have established ourselves as a strong entity with superior expertise</div>
        </div>
        <div className="stat-card">
          <div className="front">{stats.customers}+<br />customers</div>
          <div className="back">We proudly serve over {stats.customers}+ satisfied customers worldwide</div>
        </div>
        <div className="stat-card">
          <div className="front">{stats.successfulProjects}+<br />successful projects</div>
          <div className="back">Successfully delivered {stats.successfulProjects}+ projects spanning multiple domains</div>
        </div>
        <div className="stat-card">
          <div className="front">{stats.qualifiedSpecialists}+<br />qualified specialist</div>
          <div className="back">Team of {stats.qualifiedSpecialists}+ experienced professionals driving innovation</div>
        </div>
      </div>
    
    </div>
    <section className="problem-solving-section">
      <h2>Problem Solving Is The Deepith Solution </h2>
      <p className="subtitle">
        Our day-to-day life is filled with complex technological problems and we have mastered the art of problem solving through innovative
        and future-proof engineering solutions. Curiosity, expertise, skillset and most importantly, the zeal to get it done, helps us stay ahead of our competitors.
      </p>
      <div className="cards-container">
        <div className="card">
          <img src="/images/wayimage.png" alt="The 5 WHYs" />
          <h3>The <span className="highlight">5 WHYs</span></h3>
        </div>
        <div className="card center-card">
          <img src="/images/ideas.png" alt="Problem Solving" />
        </div>
        <div className="card">
          <img src="/images/howimage.webp" alt="The 5 HOWs" />
          <h3>The <span className="highlight">5 HOWs</span></h3>
        </div>
      </div>
    </section>
    <section className="services-section">
      <h2>Our Services and Expertise</h2>
      <p className="description">
        Deepith offers innovative and flexible solutions at any stage of the product life cycle. 
        We blend the experience and knowledge gained over the years from several diverse projects to provide best solutions to our customers.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            className="service-card" 
            key={index} 
            style={{ backgroundColor: service.color }}
          >
            {service.name}
          </div>
        ))}
      </div>
    </section>
    <div className="nexgile-banner">
      <h1 className="nexgile-title">The Deepith Global Impression</h1>
      <div className="nexgile-content">
        <p>
          Deepith offers innovative and flexible solutions at any 
          stage of the product life cycle. We blend the experience
         and knowledge gained over the years from several diverse 
          projects to provide best solutions to our customers.
        </p>
      </div>
    </div>
    <section className="value-section">
      <h2>Our Unique Value Proposition</h2>
      <div className="value-grid">
        {propositions.map((item, index) => (
          <div className="value-item" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
<div className="carousel-container">
      <div 
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <div className="image-container">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="carousel-image"
                loading="lazy"
              />
            </div>
            <div className="slide-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="carousel-controls">
        <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="carousel-control next" onClick={nextSlide} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>

    </>
  );
};

export default Home;
