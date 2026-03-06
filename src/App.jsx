import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, Check, MapPin, Phone, Mail, Calendar, Home, TrendingUp, Users, Shield, Clock, Heart, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ============ COMPONENT: NAVIGATION ============
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'top-4' : 'top-6'}`}>
      <div className={`flex items-center gap-8 px-8 py-4 rounded-full transition-all duration-500 ${
        scrolled ? 'bg-[#0D0D12]/90 backdrop-blur-xl border border-[#C9A84C]/20' : 'bg-transparent'
      }`}>
        <a href="#" className="text-xl font-bold tracking-tight text-[#FAF8F5]">
          CINC<span className="text-[#C9A84C]">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-[#FAF8F5]/70 hover:text-[#C9A84C] transition-colors link-hover">Services</a>
          <a href="#about" className="text-sm text-[#FAF8F5]/70 hover:text-[#C9A84C] transition-colors link-hover">About</a>
          <a href="#testimonials" className="text-sm text-[#FAF8F5]/70 hover:text-[#C9A84C] transition-colors link-hover">Testimonials</a>
          <a href="#faq" className="text-sm text-[#FAF8F5]/70 hover:text-[#C9A84C] transition-colors link-hover">FAQ</a>
          <a href="#contact" className="px-6 py-2.5 bg-[#C9A84C] text-[#0D0D12] text-sm font-semibold rounded-full hover:bg-[#D4B85E] transition-colors magnetic-btn btn-slide">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============ COMPONENT: HERO ============
function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.from('.hero-word', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
      .from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-btn', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-end pb-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Luxury Vancouver vacation rental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/70 to-[#0D0D12]/40" />
      </div>

      {/* Abstract accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C9A84C]/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-[#FAF8F5] mb-8 max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
            <span className="hero-word">Your</span>{' '}
            <span className="hero-word">Vancouver</span>{' '}
            <span className="hero-word">Property.</span><br />
            <span className="hero-word font-serif italic text-[#C9A84C]">VIP Treatment.</span>
          </h1>
        </div>

        <p className="hero-sub text-xl md:text-2xl text-[#FAF8F5]/60 max-w-xl mb-12">
          Personalized co-hosting that maximizes your rental income while we handle everything. 
          Experience the Butler difference.
        </p>

        <div className="hero-btn flex flex-wrap gap-4">
          <a href="#contact" className="px-8 py-4 bg-[#C9A84C] text-[#0D0D12] font-semibold rounded-full hover:bg-[#D4B85E] transition-colors magnetic-btn btn-slide flex items-center gap-2">
            <span>Book Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#services" className="px-8 py-4 border border-[#C9A84C]/30 text-[#FAF8F5] font-semibold rounded-full hover:bg-[#C9A84C]/10 transition-colors magnetic-btn">
            Our Services
          </a>
        </div>

        {/* Trust badges */}
        <div className="hero-sub flex flex-wrap gap-6 mt-16">
          <div className="flex items-center gap-2 text-[#FAF8F5]/60">
            <Star className="w-5 h-5 text-[#C9A84C]" fill="#C9A84C" />
            <span className="text-sm">5.0 Rating</span>
          </div>
          <div className="flex items-center gap-2 text-[#FAF8F5]/60">
            <Clock className="w-5 h-5 text-[#C9A84C]" />
            <span className="text-sm">24/7 Guest Support</span>
          </div>
          <div className="flex items-center gap-2 text-[#FAF8F5]/60">
            <MapPin className="w-5 h-5 text-[#C9A84C]" />
            <span className="text-sm">Vancouver Based</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#FAF8F5]/30">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ============ COMPONENT: VALUE PROPS ============
function ValueProps() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const values = [
    { icon: Heart, title: "Personalized Co-Hosting", desc: "Every property is unique. We tailor our approach to maximize your specific goals." },
    { icon: TrendingUp, title: "Maximized Income", desc: "Dynamic pricing strategies that optimize your revenue across all booking platforms." },
    { icon: Shield, title: "Hassle-Free Hosting", desc: "We handle everything from guest communication to cleaning. You just collect the income." },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-[#0D0D12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#C9A84C] text-sm font-mono tracking-widest uppercase">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAF8F5] mt-4">
            The Butler <span className="font-serif italic">Difference</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <div key={i} className="value-card bg-[#FAF8F5] rounded-[2rem] p-8 shadow-2xl">
              <item.icon className="w-12 h-12 text-[#C9A84C] mb-6" />
              <h3 className="text-xl font-bold text-[#0D0D12] mb-4">{item.title}</h3>
              <p className="text-[#2A2A35]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ COMPONENT: SERVICES ============
function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const services = [
    { title: "Listing Optimization", desc: "Professional photos, compelling descriptions, and optimized listings across all platforms." },
    { title: "Dynamic Pricing", desc: "AI-powered pricing that adjusts in real-time to maximize your revenue." },
    { title: "Guest Communication", desc: "24/7 responsive communication in multiple languages. We handle every inquiry." },
    { title: "Cleaning & Maintenance", desc: "Professional turnovers ensuring 5-star cleanliness every time." },
    { title: "Review Management", desc: "We actively manage reviews to build your property's reputation." },
    { title: "Multi-Platform Management", desc: "Airbnb, Vrbo, Booking.com - we manage it all from one dashboard." },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-mono tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D12] mt-4">Full-Service <span className="text-[#C9A84C]">Management</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="service-card bg-white rounded-2xl p-8 border border-zinc-100 hover:border-[#C9A84C]/30 hover:shadow-xl transition-all">
              <Check className="w-8 h-8 text-[#C9A84C] mb-4" />
              <h3 className="text-lg font-bold text-[#0D0D12] mb-2">{service.title}</h3>
              <p className="text-[#2A2A35]/60 text-sm">{service.desc}</p>
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
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
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
    { name: "Tereina, Malaysia", text: "Dog-friendly, friendly hosts", rating: 5 },
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-32 bg-[#0D0D12]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-mono tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAF8F5] mt-4">What Guests <span className="font-serif italic">Say</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card bg-[#FAF8F5] rounded-2xl p-8">
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
  const [open, setOpen] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const faqs = [
    { q: "What does an Airbnb co-hosting company do?", a: "We handle all aspects of your vacation rental - from creating listings and optimizing pricing to guest communication and cleaning coordination. You own the property; we handle the day-to-day operations." },
    { q: "How do you maximize rental income?", a: "We use dynamic pricing algorithms, professional listing optimization, and strategic timing to maximize your revenue across all booking platforms. Our local market expertise ensures competitive yet profitable pricing." },
    { q: "What's included in full-service management?", a: "Everything! Listing creation, professional photography, pricing strategy, guest screening, 24/7 communication, check-in/check-out, cleaning coordination, maintenance, and review management." },
    { q: "Do you manage cleaning and maintenance?", a: "Yes! We coordinate professional cleaning between guests and handle maintenance issues quickly. We have a network of trusted service providers in Vancouver." },
  ];

  return (
    <section ref={sectionRef} id="faq" className="py-32 bg-[#FAF8F5]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-sm font-mono tracking-widest uppercase">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D0D12] mt-4">Questions <span className="text-[#C9A84C]">Answered</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item bg-white rounded-2xl overflow-hidden border border-zinc-100">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <span className="font-semibold text-[#0D0D12]">{faq.q}</span>
                <span className={`text-[#C9A84C] text-2xl transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
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

// ============ COMPONENT: CTA ============
function CTA() {
  return (
    <section className="py-32 bg-[#0D0D12] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80" className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute inset-0 bg-[#0D0D12]/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-[#FAF8F5] mb-6">
          Ready to <span className="text-[#C9A84C] font-serif italic">Transform</span> Your Rental?
        </h2>
        <p className="text-xl text-[#FAF8F5]/60 mb-12">
          Book your free consultation today. Let's discuss how we can maximize your Vancouver property's potential.
        </p>
        <a 
          href="#contact"
          className="inline-flex items-center gap-2 px-10 py-5 bg-[#C9A84C] text-[#0D0D12] font-semibold rounded-full hover:bg-[#D4B85E] transition-all hover:scale-105 text-lg"
        >
          <Calendar className="w-5 h-5" />
          Schedule Free Consultation
        </a>
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
              VIP treatment for your property.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#FAF8F5] mb-4">Services</h4>
            <ul className="space-y-2 text-[#FAF8F5]/50">
              <li><a href="#services" className="hover:text-[#C9A84C]">Listing Optimization</a></li>
              <li><a href="#services" className="hover:text-[#C9A84C]">Dynamic Pricing</a></li>
              <li><a href="#services" className="hover:text-[#C9A84C]">Guest Communication</a></li>
              <li><a href="#services" className="hover:text-[#C9A84C]">Cleaning & Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#FAF8F5] mb-4">Contact</h4>
            <ul className="space-y-2 text-[#FAF8F5]/50">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9A84C]" />
                Vancouver, BC
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9A84C]" />
                Get in touch
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9A84C]" />
                hello@cinc-cohost.com
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
      <div className="noise-overlay" />
      <Navigation />
      <Hero />
      <ValueProps />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
