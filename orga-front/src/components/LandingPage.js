import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaLeaf, FaRecycle, FaShoppingBasket } from 'react-icons/fa';
import hero3 from '../../src/img/hero14.jpeg';
import hero6 from '../../src/img/img1.jpg';
import hero7 from '../../src/img/Nature Of Life.jpeg';
import hero8 from '../../src/img/hero4.jpeg';
import hero9 from '../../src/img/hero3.jpg';
import Herosection from './Herosection';
import Aboutpage from "./AboutPage";
import Contactus from "./ContactUs";

const images = [hero6];

const phrases = [
  "Transform your garden with natural solutions.",
  "Sustainable fertilizers for a greener planet.",
  "Nurture your plants with love and care.",
  "Discover the power of organic gardening.",
  "Healthy soil, healthy plants, healthy you.",
  "Join the organic movement for a better tomorrow."
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Organic Fertilizer',
      description: 'High-quality organic fertilizer for all plants.',
      image: hero7,
      icon: <FaSeedling />,
    },
    {
      id: 2,
      name: 'Organic Fertilizer',
      description: 'Nutrient-rich fertilizer for healthy growth.',
      image: hero8,
      icon: <FaLeaf />,
    },
    {
      id: 3,
      name: 'Organic Fertilizer',
      description: 'Eco-friendly fertilizer for gardening.',
      image: hero6,
      icon: <FaRecycle />,
    },
    {
      id: 4,
      name: 'Organic Fertilizer',
      description: 'Special blend for flowering plants.',
      image: hero9,
      icon: <FaShoppingBasket />,
    },
  ];

  const styles = {
    landingPage: {
      width: "100%",
    },
    heroSection: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
      textAlign: "center",
    },
    slideImage: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: -1,
      filter: "blur(5px)",
    },
    heroText: {
      position: "relative",
      color: "#FFFFFF",
      padding: "2rem",
      maxWidth: "90%",
    },
    heroTitle: {
      fontSize: "4rem",
      marginBottom: "2rem",
      fontFamily: '"Titan One", sans-serif',
    },
    heroDescription: {
      fontSize: "1.5rem",
      marginBottom: "1.5rem",
      color: "#ffffff",
      fontWeight: "bold",
      textAlign: "center",
    },
    primaryBtn: {
      backgroundColor: '#4CAF50',
      color: '#ffff',
      padding: '1rem 2rem',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      border: '2px solid #388E3C',
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block',
    },
    featuredProducts: {
      padding: '4rem 2rem',
    },
    sectionTitle: {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#388E3C',
      fontFamily: '"Titan One", sans-serif',
    },
    productList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    productCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: '20px',
      padding: '1rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid #388E3C',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    productImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '10px',
    },
    productContent: {
      padding: '1rem',
    },
    productTitle: {
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
      color: '#388E3C',
      fontFamily: '"Titan One", sans-serif',
    },
    productDescription: {
      fontSize: '1rem',
      color: '#000',
    },
    productIcon: {
      fontSize: '1.5rem',
      color: '#4CAF50',
      marginBottom: '0.5rem',
    },
  };

  return (
    <div style={styles.landingPage}>
      <div style={styles.heroSection}>
        <div
          style={{
            ...styles.slideImage,
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        />
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>{phrases[currentIndex]}</h1>
          <p style={styles.heroDescription}>
            Explore the benefits of organic fertilizers and nurture your plants with care.
          </p>
          <Link to="/product" style={styles.primaryBtn}>
            Get Started
          </Link>
        </div>
      </div>

      <section style={styles.featuredProducts}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.productList}>
          {products.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.productImage}
              />
              <div style={styles.productContent}>
                <div style={styles.productIcon}>{product.icon}</div>
                <h3 style={styles.productTitle}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <Link to="/product" style={styles.primaryBtn}>
            View All Products
          </Link>
        </div>
      </section>

      <Herosection />
      <Aboutpage />
      <Contactus />
    </div>
  );
};

export default LandingPage;
