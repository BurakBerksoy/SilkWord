import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Instagram, Facebook, Menu, X, ArrowRight, Star, Clock, Heart, MessageCircle } from 'lucide-react';
import ThreeCanvas from './components/ThreeCanvas';
import './index.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Anasayfa', href: '#home' },
    { name: 'Ürünlerimiz', href: '#products' },
    { name: 'Hakkımızda', href: '#about' },
  ];

  return (
    <nav className={`navbar-premium ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo-premium">SILK<span>WORLD</span></div>

        <div className="nav-links-desktop">
          {links.map(link => (
            <a key={link.name} href={link.href} className="nav-item">{link.name}</a>
          ))}
          <a href="https://wa.me/905399135744" target="_blank" className="btn-nav-whatsapp">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-nav"
          >
            {links.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="nav-item">
                {link.name}
              </a>
            ))}
            <a href="tel:+905399135744" className="btn-nav-whatsapp">Hemen Ara</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="hero-premium">
    <div className="hero-3d-bg">
      <ThreeCanvas />
    </div>
    <div className="container hero-content">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-badge">
          <Star size={16} fill="currentColor" /> Premium İç Giyim Mağazası
        </div>
        <h1 className="hero-title">
          Saf Dokunuş, <br />
          <span className="gradient-text-green">Lüksün İmzası</span>
        </h1>
        <p className="hero-desc">
          Sultanbeyli'nin kalbinde, her dokunuşta ipek hissini ve modern şıklığı keşfedin. Kalite ve konforu bir araya getiriyoruz.
        </p>
        <div className="hero-actions">
          <a href="#products" className="btn-main btn-main-primary">Koleksiyonu Keşfet</a>
          <a href="#about" className="btn-main btn-main-outline">Bizi Tanıyın</a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Products = () => {
  const products = [
    { id: 1, name: 'Erkek Termal Takım', cat: 'Comfort Plus', img: '/images/erkektermal.jpeg' },
    { id: 2, name: 'Kadın Termal Seri', cat: 'Luxe Collection', img: '/images/kadıntrrmal.png' },
    { id: 3, name: 'Premium Erkek Boxer', cat: 'Daily Essential', img: '/images/erkekboxer.jpeg' },
  ];

  return (
    <section id="products">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Özel Koleksiyon</h2>
          <p className="section-subtitle">En çok tercih edilen, kurumsal kalitemizi yansıtan modellerimiz.</p>
        </div>
        <div className="products-grid">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="product-card"
            >
              <div className="product-img-wrapper">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="product-info">
                <span className="category-tag">{p.cat}</span>
                <h3>{p.name}</h3>
                <div className="product-footer">
                  <span className="stock-badge">
                    <Star size={14} fill="#16a34a" color="#16a34a" /> Stokta Mevcut
                  </span>
                  <button className="btn-view">
                    İncele <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="about-section">
    <div className="container about-grid">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="about-img"
      >
        <img src="/images/kadıntrrmal.png" alt="SilkWorld Story" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="about-content"
      >
        <h2 className="section-title">Gelenekten Güvene...</h2>
        <p>
          Orhan Gazi Mahallesi, Alparslan Caddesi'nde yer alan SilkWorld, Sultanbeyli'nin iç giyimdeki güvenilir adresi.
          Müşteri memnuniyetini odağımıza alarak, en kaliteli ürünleri sizlere sunuyoruz.
        </p>
        <div className="about-stats">
          <div className="stat-item">
            <h4>10+</h4>
            <p>Yıllık Tecrübe</p>
          </div>
          <div className="stat-item">
            <h4>%100</h4>
            <p>Müşteri Memnuniyeti</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer-main" id="contact">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="logo-premium">SILK<span>WORLD</span></div>
          <p>Kalitenin ve konforun buluştuğu nokta. Sultanbeyli'nin öncü iç giyim markası.</p>
        </div>

        <div className="footer-col">
          <h4>Bağlantılar</h4>
          <ul className="footer-links">
            <li><a href="#home">Anasayfa</a></li>
            <li><a href="#products">Ürünlerimiz</a></li>
            <li><a href="#about">Hakkımızda</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>İletişim</h4>
          <ul className="footer-links">
            <li>
              <a href="tel:+905399135744" className="contact-item">
                <Phone size={18} /> 0539 913 5744
              </a>
            </li>
            <li>
              <a href="tel:+905066271244" className="contact-item">
                <Phone size={18} /> 0506 627 1244
              </a>
            </li>
            <li>
              <a href="https://wa.me/905399135744" target="_blank" className="contact-item">
                <MessageCircle size={18} color="#25d366" /> WhatsApp Destek
              </a>
            </li>
            <li className="contact-item">
              <MapPin size={18} /> Sultanbeyli, Orhan Gazi Mah.
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Konumumuz</h4>
          <div className="footer-map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12053.40049403332!2d29.255562!3d40.927233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad0c2c4314e3d%3A0x6bba4f3d4b3b3b3b!2sOrhan%20Gazi%2C%20Alparslan%20Cd.%2C%20Sultanbeyli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
              width="100%" height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 SilkWorld. Tüm hakları saklıdır.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  );
};

export default App;
