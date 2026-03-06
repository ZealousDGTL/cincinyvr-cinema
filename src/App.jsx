"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, Check, MapPin, Phone, Mail, Calendar, Home, TrendingUp, Users, Shield, Clock, Heart, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ============ COMPONENT: NAVIGATION - "Floating Island" ============
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'top-4' : 'top-6'}`}>
      <div className={`flex items-center gap-8 px-8 py-4 rounded-full transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0D0D12]/60 backdrop-blur-xl border border-[#C9A84C]/20' 
          : 'bg-transparent border border-transparent'
      }`}>
        <a href="#" className="text-xl font-bold tracking-tight text-[#FAF8F5]">
          CINC<span className="text-[#C9A84C]">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-[#FAF8F5]/80 hover:text-[#C9A84C] transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-[#FAF8F5]/80 hover:text-[#C9A84C] transition-colors">About</a>
          <a href="#testimonials" className="text-sm font-medium text-[#FAF8F5]/80 hover:text-[#C9A84C] transition-colors">Testimonials</a>
          <a href="#faq" className="text-sm font-medium text-[#FAF8F5]/80 hover:text-[#C9A84C] transition-colors">FAQ</a>
          <a href="#contact" className="px-6 py-2.5 bg-[#C9A84C] text-[#0D0D12] text-sm font-semibold rounded-full hover:bg-[#D4B85E] transition-all duration-300 overflow-hidden relative magnetic-btn">
            <span className="relative z-10">Get Started</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============ COMPONENT: HERO - "Opening Shot" ============
function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      // Hero word animations with stagger
      tl.from('.hero-line', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
      })
      .from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from('.hero-btn', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.4')
      .from('.hero-badge', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
      }, '-=0.8');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-end pb-24 overflow-hidden">
      {/* Background with gradient - image mood: luxury interior, gold accents */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury Vancouver vacation rental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/60 to-transparent" />
      </div>

      {/* Abstract decorative - concentric rings / organic */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C9A84C]/10 to-transparent blur-[80px]" />
        <div className="absolute inset-10 rounded-full border border-[#C9A84C]/5" />
        <div className="absolute inset-20 rounded-full border border-[#C9A84C]/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-[#C9A84C]/20 blur-[60px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
          <span className="text-[#C9A84C] text-sm font-medium">Vancouver's Premier Co-Host</span>
        </div>

        {/* Hero text - display style */}
        <div className="text-[#FAF8F5] mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.92]">
            <span className="hero-line block">Your</span>
            <span className="hero-line block">Vancouver</span>
            <span className="hero-line block">Property.</span>
            <span className="hero-line block font-serif italic text-[#C9A84C]">VIP Treatment.</span>
          </h1>
        </div>

        <p className="hero-sub text-xl md:text-2xl text-[#FAF8F5]/60 max-w-xl mb-12 leading-relaxed">
          Personalized co-hosting that maximizes your rental income while we handle everything. 
          Experience the Butler difference.
        </p>

        <div className="hero-btn flex flex-wrap gap-4">
          <a href="#contact" className="group px-8 py-4 bg-[#C9A84C] text-[#0D0D12] font-semibold rounded-full hover:bg-[#D4B85E] transition-all duration-300 overflow-hidden relative magnetic-btn">
            <span className="relative z-10 flex items-center gap-2">
              Book Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#services" className="px-8 py-4 border border-[#C9A84C]/30 text-[#FAF8F5] font-semibold rounded-full hover:bg-[#C9A84C]/10 transition-colors">
            Our Services
          </a>
        </div>

        {/* Trust badges */}
        <div className="hero-sub flex flex-wrap gap-8 mt-16">
          <div className="flex items-center gap-2 text-[#FAF8F5]/60">
            <Star className="w-5 h-5 text-[#C9A84C]" fill="#C9A84C" />
            <span className="text-sm font-medium">5.0 Rating</span>
          </div>
          <div className="flex items-center gap-2 text-[#FAF8F5]/60">
            <Clock className="w-5 h-5 text-[#C9A84C]" />
            <span className="text-sm font-medium">24/7 Guest Support</span>
          </div>
          <div className="flex items-center gap-2 text-[#FAF8F5]/60">
            <MapPin className="w-5 h-5 text-[#C9A84C]" />
            <span className="text-sm font-medium">Vancouver Based</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FAF8F5]/20">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ============ COMPONENT: VALUE PROPS - "Diagnostic Shuffler" ============
function ValueProps() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Card 1: Diagnostic Shuffler - rotating cards
  const valueProps = [
    { label: "Personalized Co-Hosting", sublabels: ["Tailored Strategy", "Dedicated Manager", "Custom Pricing"] },
    { label: "Maximized Income", sublabels: ["Dynamic Pricing", "Revenue Optimization", "Market Analysis"] },
    { label: "Hassle-Free Hosting", sublabels: ["Full Service", "24/7 Support", "Zero Stress"] },
  ];

  useEffect(() => {
    // Auto-rotate cards every 3 seconds
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % valueProps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.value-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#0D0D12] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute inset-0 bg-[#0D0D12]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="value-title text-[#C9A84C] text-sm font-mono tracking-[0.3em] uppercase">Why Choose Us</span>
          <h2 className="value-title text-4xl md:text-6xl font-bold text-[#FAF8F5] mt-6">
            The Butler <span className="font-serif italic">Difference</span>
          </h2>
        </div>

        {/* Card 1: Diagnostic Shuffler */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#FAF8F5] rounded-[2rem] p-12 shadow-2xl relative overflow-hidden">
            {/* Shuffling cards effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              {valueProps.map((vp, i) => (
                <div 
                  key={i}
                  className={`absolute transition-all duration-500 ${
                    i === activeIndex 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : i === (activeIndex + 1) % valueProps.length 
                        ? 'opacity-50 scale-95 translate-y-4' 
                        : 'opacity-0 scale-90 translate-y-8'
                  }`}
                >
                  <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#0D0D12] mb-6">{vp.label}</h3>
                    <div className="space-y-2">
                      {vp.sublabels.map((sub, j) => (
                        <div key={j} className="text-sm text-[#2A2A35]/60 font-mono">{sub}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicator dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {valueProps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeIndex ? 'bg-[#C9A84C] w-8' : 'bg-[#2A2A35]/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ COMPONENT: SERVICES - "Teletype" ============
function Services() {
  const sectionRef = useRef(null);
  const [displayedText, setDisplayedText] = useState('');
  const teletypeText = "We don't just manage properties. We craft experiences that guests remember and recommend.";
  
  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(teletypeText.slice(0, i + 1));
      i++;
      if (i >= teletypeText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-item', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const services = [
    "Listing Optimization",
    "Dynamic Pricing", 
    "Guest Communication",
    "Cleaning Coordination",
    "Review Management",
    "Multi-Platform Management",
  ];

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="service-item text-[#C9A84C] text-sm font-mono tracking-widest uppercase">What We Do</span>
          <h2 className="service-item text-4xl md:text-5xl font-bold text-[#0D0D12] mt-4">Full-Service <span className="text-[#C9A84C]">Management</span></h2>
        </div>

        {/* Card 2: Teletype */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-[#0D0D12] rounded-2xl p-8 font-mono">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[#FAF8F5]/40 text-xs ml-2">terminal</span>
            </div>
            <p className="text-[#C9A84C] text-lg leading-relaxed">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="service-item bg-white rounded-2xl p-8 border border-zinc-100 hover:border-[#C9A84C]/30 hover:shadow-xl transition-all group">
              <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-4 group-hover:bg-[#C9A84C] transition-colors">
                <Check className="w-5 h-5 text-[#C9A84C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-[#0D0D12]">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ COMPONENT: PROCESS - "Protocol Scheduler" ============
function Protocol() {
  const sectionRef = useRef(null);
  const [activeDay, setActiveDay] = useState(2);
  
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const steps = [
    { num: '01', title: 'Discovery Call', desc: 'We learn about your property, goals, and expectations.' },
    { num: '02', title: 'Custom Strategy', desc: 'We create a tailored management plan for your rental.' },
    { num: '03', title: 'Launch & Optimize', desc: 'We list, manage, and continuously optimize for revenue.' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.protocol-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#0D0D12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="protocol-card text-[#C9A84C] text-sm font-mono tracking-widest uppercase">How It Works</span>
          <h2 className="protocol-card text-4xl md:text-5xl font-bold text-[#FAF8F5] mt-4">The <span className="font-serif italic">Protocol</span></h2>
        </div>

        {/* Card 3: Protocol Scheduler - weekly calendar */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#FAF8F5] rounded-[2rem] p-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-mono text-[#2A2A35]/40 uppercase tracking-widest">Schedule</span>
              <div className="flex gap-1">
                {days.map((day, i) => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(i)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                      i === activeDay 
                        ? 'bg-[#C9A84C] text-[#0D0D12]' 
                        : 'text-[#2A2A35]/40 hover:bg-[#C9A84C]/10'
                    }`}
                  >
                    {day.charAt(0)}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-center py-8">
              <p className="text-2xl font-bold text-[#0D0D12]">
                {activeDay < 5 ? 'Operations Active' : 'Weekend - Review Mode'}
              </p>
              <p className="text-[#2A2A35]/60 mt-2">System running optimally</p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="protocol-card bg-[#FAF8F5] rounded-2xl p-8 relative">
              <div className="text-6xl md:text-7xl font-mono text-[#C9A84C]/20 absolute top-4 right-6">{step.num}</div>
              <h3 className="text-xl font-bold text-[#0D0D12] mb-4 relative z-10">{step.title}</h3>
              <p className="text-[#2A2A35]/70 relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ COMPONENT: TESTIMONIALS ============
function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const testimonials = [
    { name: "Anna, Toronto", text: "Great stay, accommodating hosts", rating: 5 },
    { name: "Cassandra, Edmonton", text: "Matched photos perfectly, peaceful", rating: 5 },
    { name: "Eric, Coquitlam", text: "Perfect escape, hospitality above and beyond", rating: 5 },
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-mono tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D12] mt-4">What Guests <span className="font-serif italic">Say</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-[#C9A84C]" fill="#C9A84C" />
                ))}
              </div>
              <p className="text-[#0D0D12] text-lg mb-4">"{t.text}"</p>
              <p className="text-[#C9A84C] font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ COMPONENT: FAQ ============
function FAQ() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "What does an Airbnb co-hosting company do?", a: "We handle all aspects of your vacation rental - from creating listings and optimizing pricing to guest communication and cleaning coordination." },
    { q: "How do you maximize rental income?", a: "We use dynamic pricing algorithms, professional listing optimization, and strategic timing to maximize your revenue across all booking platforms." },
    { q: "What's included in full-service management?", a: "Everything! Listing creation, professional photography, pricing strategy, guest screening, 24/7 communication, check-in/check-out, cleaning coordination, and maintenance." },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-32 bg-[#0D0D12]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-mono tracking-widest uppercase">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAF8F5] mt-4">Questions <span className="text-[#C9A84C]">Answered</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item bg-[#FAF8F5] rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <span className="font-semibold text-[#0D0D12] pr-4">{faq.q}</span>
                <span className={`text-[#C9A84C] text-2xl transition-transform ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-[#2A2A35]/70">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ COMPONENT: CTA - Manifesto ============
function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-line', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#0D0D12] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80" className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute inset-0 bg-[#0D0D12]/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="manifesto-line text-xl md:text-2xl text-[#FAF8F5]/50 mb-8">
          Most property managers focus on occupancy.
        </p>
        <p className="manifesto-line text-3xl md:text-5xl font-serif italic text-[#FAF8F5]">
          We focus on <span className="text-[#C9A84C]">experience.</span>
        </p>
        <p className="manifesto-line text-lg text-[#FAF8F5]/40 mt-12 max-w-2xl mx-auto">
          Your property isn't just an asset. It's an opportunity to create unforgettable moments for guests. We make that happen.
        </p>
        
        <div className="manifesto-line mt-12">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#C9A84C] text-[#0D0D12] font-semibold rounded-full hover:bg-[#D4B85E] transition-all hover:scale-105 text-lg"
          >
            <Calendar className="w-5 h-5" />
            Schedule Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ COMPONENT: FOOTER ============
function Footer() {
  return (
    <footer id="contact" className="bg-[#0D0D12] pt-24 pb-8 rounded-t-[4rem] border-t border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-bold text-[#FAF8F5] mb-4">
              CINC<span className="text-[#C9A84C]">.</span>
            </div>
            <p className="text-[#FAF8F5]/50">
              Vancouver's premier vacation rental co-hosting service.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#FAF8F5] mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#FAF8F5]/50">
              <li>Listing Optimization</li>
              <li>Dynamic Pricing</li>
              <li>Guest Communication</li>
              <li>Cleaning & Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#FAF8F5] mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-[#FAF8F5]/50">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A84C]" /> Vancouver, BC
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9A84C]" /> hello@cinc-cohost.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#FAF8F5] mb-4">Ready?</h4>
            <a 
              href="mailto:hello@cinc-cohost.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#0D0D12] font-semibold rounded-full hover:bg-[#D4B85E] transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#FAF8F5]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#FAF8F5]/40 text-sm">
            © 2026 CinC CoHost Vancouver. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-[#FAF8F5]/40">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            System Operational
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN APP ============
function App() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      <Navigation />
      <Hero />
      <ValueProps />
      <Services />
      <Protocol />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
