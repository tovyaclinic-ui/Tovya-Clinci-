/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Stethoscope, 
  MapPin, 
  Phone, 
  Clock, 
  Mail,
  ArrowRight,
  Menu, 
  X,
  Shield,
  Search,
  CheckCircle2,
  Syringe,
  Baby,
  Heart,
  Droplet,
  Globe,
  ClipboardCheck,
  Activity,
  User,
  Brain,
  Wind,
  Apple,
  Scissors,
  FileCheck,
  Droplets,
  Eye,
  Accessibility,
  UserPlus,
  Siren
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Our Vision", href: "#vision" },
    { name: "Why Us", href: "#why-us" },
    { name: "Primary Care", href: "#primary-care" },
    { name: "Specialists", href: "#specialists" },
    { name: "Clinic Services", href: "#clinic-services" },
    { name: "Diagnostics", href: "#diagnostics" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? "bg-clinic-green/95 backdrop-blur-md py-4 border-b border-clinic-gold/10" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-8 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Logo Placeholder */}
          <div className="w-20 h-20 border border-clinic-gold/30 flex items-center justify-center group-hover:border-clinic-gold transition-all duration-700 relative overflow-hidden bg-white/5 shadow-[0_0_30px_rgba(192,160,110,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-clinic-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-clinic-gold font-serif text-5xl group-hover:scale-110 transition-transform duration-700 font-light">T</span>
            {/* User can replace the span above with an <img> tag for their logo */}
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-serif tracking-[0.2em] text-white group-hover:text-clinic-gold transition-colors duration-700 font-light flex items-center gap-4">
              TOVYA <span className="text-clinic-gold font-medium">CLINIC</span>
            </span>
            <span className="text-xs uppercase tracking-[0.6em] text-clinic-gold font-bold mt-1 ml-1 group-hover:brightness-125 transition-all">
              Excellence in Healthcare
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {links.map(link => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="luxury-border px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-clinic-gold hover:bg-clinic-gold hover:text-clinic-green transition-all duration-500 shadow-[0_10px_20px_rgba(192,160,110,0.1)] block">
            Book Now
          </a>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-clinic-gold">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-clinic-green border-b border-clinic-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {links.map(link => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg text-white/70 uppercase tracking-widest hover:text-clinic-gold transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-clinic-green">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#0B2418,transparent)] opacity-60" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 pointer-events-none" />
      
      {/* Brand Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2.5 }}
          className="text-[30vw] font-serif text-white tracking-[0.3em] uppercase whitespace-nowrap"
        >
          Tovya
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="gold-text inline-block mb-10 border-l-2 border-clinic-gold pl-6 text-xl md:text-2xl"
          >
            Healthcare, Delivered with Distinction
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-light mb-10 leading-[1.1] text-white">
            <span className="text-clinic-gold">Healthcare Tailored</span> <br />
            <span className="italic font-serif text-clinic-gold drop-shadow-[0_0_15px_rgba(192,160,110,0.3)]">Precisely To You</span>
          </h1>
          <p className="text-xl text-white/50 mb-14 max-w-lg leading-relaxed font-light">
            At Tovya Clinic, we offer an elevated standard of medical care defined by clinical excellence, discretion, and personal attention. 
          </p>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-clinic-gold text-clinic-green px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs transition-all shadow-[0_20px_50px_rgba(192,160,110,0.2)]"
            >
              Arrange Appointment
            </motion.a>
            <div onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-4 text-white/40 group cursor-pointer hover:text-clinic-gold transition-all duration-500">
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Discover Excellence</span>
              <div className="w-10 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-clinic-gold transition-all duration-500" />
            </div>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.8, ease: "easeOut" }}
           className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-clinic-gold/20 shadow-[0_0_100px_rgba(197,160,89,0.05)] rounded-[2rem]">
            <div className="absolute inset-0 bg-clinic-green/10 z-10 transition-opacity hover:opacity-0" />
            <img 
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" 
              alt="Medical Consultation with Family" 
              className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 bg-clinic-green border border-clinic-gold/30 p-10 shadow-2xl z-20 backdrop-blur-xl"
          >
            <div className="flex items-center gap-6">
              <span className="text-6xl font-serif text-clinic-gold italic">All</span>
              <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 leading-relaxed font-bold">
                Generations <br /> One <br /> Standard
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const VisionSection = () => {
  return (
    <section id="vision" className="py-32 bg-clinic-green-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_50%,rgba(192,160,110,0.05),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            whileHover={{ y: -5 }}
            className="p-8 lg:p-0 transition-transform duration-500"
          >
            <span className="text-clinic-gold uppercase tracking-[0.5em] text-sm md:text-base font-bold mb-8 inline-block border-b border-clinic-gold/30 pb-2">Welcome to Tovya Clinic</span>
            <h2 className="text-4xl md:text-6xl font-light mb-10 leading-tight text-white group">
              A Higher <span className="italic font-serif text-clinic-gold group-hover:drop-shadow-[0_0_15px_rgba(192,160,110,0.4)] transition-all">Standard</span> of Care
            </h2>
            <div className="space-y-8 text-white/60 text-lg leading-relaxed font-light">
              <p>
                At Tovya Clinic, we believe healthcare should be as reassuring as it is clinically excellent. 
                Our healthcare clinic has been carefully designed to offer patients a more elevated medical experience — one that combines professional expertise with warmth, discretion, and genuine personal care.
              </p>
              <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-clinic-gold group pt-4"
              >
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Our Philosophy</span>
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
          <div className="relative">
             <motion.div 
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 0.8 }}
               className="aspect-[4/5] luxury-border rounded-t-full p-3 overflow-hidden"
             >
               <div className="w-full h-full rounded-t-full overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" 
                   alt="Clinical Consultation with Family" 
                   className="w-full h-full object-cover transition-all duration-1000"
                   referrerPolicy="no-referrer"
                 />
               </div>
             </motion.div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-clinic-gold/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      title: "Comprehensive Health Care",
      desc: "Our clinic brings together primary and specialist services in an elegant environment designed for comfort, discretion, and convenience.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Trusted Expertise",
      desc: "Patients have access to highly skilled medical professionals who are specialists in family medicine, advanced endocrinology, obstetrics, and paediatrics.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Integrated Diagnostics",
      desc: "With computerised health checks and on-site blood tests, we provide timely assessment and a more streamlined clinical experience.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Personalised Approach",
      desc: "We believe exceptional care begins with personal individualised care. Every consultation is centred on the individual, with treatment and guidance tailored to each patient’s needs.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <section id="why-us" className="py-32 bg-clinic-green relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(192,160,110,0.03),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="gold-text mb-6 inline-block text-lg">Our Distinction</span>
            <h2 className="text-6xl md:text-8xl font-serif text-white italic">Why Patients Choose Us</h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-12">
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {highlights.map((h, i) => (
                <motion.button
                  key={h.title}
                  onClick={() => setActiveTab(i)}
                  whileHover={{ y: -5 }}
                  className={`px-8 py-6 flex items-center gap-4 transition-all duration-500 rounded-xl border ${
                    activeTab === i 
                    ? "bg-clinic-gold text-clinic-green border-clinic-gold shadow-[0_20px_40px_rgba(192,160,110,0.2)] scale-105" 
                    : "border-clinic-gold/10 text-white/50 hover:border-clinic-gold/30 hover:text-white"
                  }`}
                >
                  <div className={`${activeTab === i ? "text-clinic-green" : "text-clinic-gold"} transition-colors`}>
                    {h.icon}
                  </div>
                  <span className="text-lg font-serif italic tracking-wide">{h.title}</span>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto p-12 lg:p-20 bg-clinic-green-light border border-clinic-gold/10 rounded-3xl text-center relative group overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-clinic-gold/40 to-transparent" />
                
                <h3 className="text-4xl md:text-5xl font-serif text-clinic-gold mb-10 italic">
                  {highlights[activeTab].title}
                </h3>
                
                <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light italic">
                  "{highlights[activeTab].desc}"
                </p>

                <div className="mt-12 w-12 h-12 border-t border-l border-clinic-gold/20 absolute bottom-0 right-0 group-hover:scale-125 transition-transform" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const PrimaryCareSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Primary Care",
      icon: <Stethoscope />,
      content: "As your first point of contact, our primary care services offer thorough and consistent medical attention defined by clinical precision and genuine concern. We focus on preventive health, early diagnosis, and the careful management of acute and chronic concerns, all within a setting of professional discretion."
    },
    {
      title: "Health Assessment",
      icon: <ClipboardCheck />,
      content: "Our comprehensive health assessments are designed to provide a detailed map of your overall wellbeing. Combining meticulous clinical review with advanced diagnostics, these sessions offer the clarity and insight needed to take a proactive and informed approach to long-term health."
    }
  ];

  return (
    <section id="primary-care" className="py-32 bg-clinic-green relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="gold-text mb-6 inline-block text-lg">Refined Foundations</span>
            <h2 className="text-6xl md:text-7xl font-serif text-white italic">Primary Care</h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            {services.map((s, i) => (
              <motion.button
                key={s.title}
                onClick={() => setActiveTab(i)}
                whileHover={{ x: 10 }}
                className={`w-full text-left p-10 flex items-center gap-8 transition-all duration-500 rounded-lg border ${
                  activeTab === i 
                  ? "bg-clinic-gold text-clinic-green border-clinic-gold shadow-[0_0_30px_rgba(192,160,110,0.2)]" 
                  : "border-clinic-gold/10 hover:border-clinic-gold/40 hover:bg-white/5 text-white/70"
                }`}
              >
                <div className={`${activeTab === i ? "text-clinic-green" : "text-clinic-gold"} w-8 h-8`}>{s.icon}</div>
                <span className="text-base uppercase tracking-[0.2em] font-bold">{s.title}</span>
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-8">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -30 }}
                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                 className="bg-clinic-green-light border border-clinic-gold/10 p-16 lg:p-28 relative rounded-2xl group overflow-hidden"
               >
                 <div className="flex items-center gap-6 mb-12">
                   <div className="w-16 h-px bg-clinic-gold/40" />
                   <h3 className="text-4xl md:text-5xl font-serif text-clinic-gold italic">{services[activeTab].title}</h3>
                 </div>
                 
                 <p className="text-2xl lg:text-3xl text-white/90 leading-relaxed font-light italic">
                   "{services[activeTab].content}"
                 </p>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpecialistServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const specialties = [
    {
      title: "Family Medicine",
      icon: <User />,
      content: "Our family medicine service provides comprehensive healthcare for adults, children, and older patients alike. From preventive care and routine consultations to the management of ongoing medical concerns, we offer continuity, reassurance, and trusted support for every member of the family."
    },
    {
      title: "Advanced Endocrinology & Diabetes",
      icon: <Activity />,
      content: "We provide expert assessment and long-term management of endocrine conditions and diabetes, combining specialist knowledge with precise monitoring and tailored guidance. Our approach is designed to support better control, better outcomes, and greater confidence in daily health management."
    },
    {
      title: "Obstetrics & Gynaecology",
      icon: <Heart />,
      content: "Our women’s health services are delivered with sensitivity, discretion, and clinical expertise. From routine gynaecological care and preventive screening to pregnancy support and reproductive health consultations, we create a setting in which patients feel respected, comfortable, and exceptionally well cared for."
    },
    {
      title: "Pediatrics",
      icon: <Baby />,
      content: "Children and adolescents require care that is both clinically thorough and reassuringly gentle. Our pediatric services support healthy growth, development, and wellbeing, while giving parents the confidence that their child is receiving attentive and expert medical care."
    }
  ];

  return (
    <section id="specialists" className="py-32 bg-clinic-green-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-clinic-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="gold-text mb-6 inline-block text-lg">Specialist Excellence</span>
            <h2 className="text-6xl md:text-7xl font-serif text-white italic">Specialist Services</h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            {specialties.map((s, i) => (
              <motion.button
                key={s.title}
                onClick={() => setActiveTab(i)}
                whileHover={{ x: 10 }}
                className={`w-full text-left p-8 flex items-center gap-8 transition-all duration-500 rounded-lg border ${
                  activeTab === i 
                  ? "bg-clinic-gold text-clinic-green border-clinic-gold shadow-[0_0_30px_rgba(192,160,110,0.2)]" 
                  : "border-clinic-gold/10 hover:border-clinic-gold/40 hover:bg-white/5 text-white/70"
                }`}
              >
                <div className={`${activeTab === i ? "text-clinic-green" : "text-clinic-gold"} w-6 h-6`}>{s.icon}</div>
                <span className="text-base uppercase tracking-[0.2em] font-bold">{s.title}</span>
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-8">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -30 }}
                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                 className="bg-black/20 backdrop-blur-sm border border-clinic-gold/10 p-16 lg:p-28 relative rounded-2xl group overflow-hidden"
               >
                 <div className="flex items-center gap-6 mb-12">
                   <div className="w-16 h-px bg-clinic-gold/40" />
                   <h3 className="text-4xl md:text-5xl font-serif text-clinic-gold italic">{specialties[activeTab].title}</h3>
                 </div>
                 
                 <p className="text-2xl lg:text-3xl text-white/90 leading-relaxed font-light italic">
                   "{specialties[activeTab].content}"
                 </p>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const FamilyCareSection = () => {
  return (
    <section className="py-32 bg-clinic-green relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(192,160,110,0.05),transparent)] opacity-40" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 lg:order-1 relative"
           >
             <div className="aspect-[16/10] luxury-border overflow-hidden rounded-3xl relative group shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                <img 
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop" 
                  alt="Indian family consulting with doctor" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-green via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -top-10 -left-10 w-32 h-32 border-t border-l border-clinic-gold/20" />
             <div className="absolute -bottom-10 -right-10 w-32 h-32 border-b border-r border-clinic-gold/20" />
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 lg:order-2"
           >
             <span className="gold-text mb-6 inline-block uppercase tracking-[0.3em] font-bold text-xs">A Lifetime of Care</span>
             <h2 className="text-5xl md:text-7xl font-light mb-10 text-white leading-tight">
               Excellence for <br />
               <span className="italic font-serif text-clinic-gold drop-shadow-[0_0_10px_rgba(192,160,110,0.2)]">Every Generation</span>
             </h2>
             <p className="text-white/60 text-xl leading-relaxed font-light mb-12 max-w-xl">
               At Tovya Clinic, we don't just treat patients; we care for families. Our multigenerational approach ensures that grandfathers, mothers, and grandchildren all receive the same high level of clinical dedication and personalized attention.
             </p>
             <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-4 group cursor-default">
                   <div className="w-12 h-12 rounded-full border border-clinic-gold/30 flex items-center justify-center group-hover:bg-clinic-gold/10 transition-colors">
                      <Accessibility className="text-clinic-gold w-5 h-5" />
                   </div>
                   <span className="text-white font-serif italic text-lg transition-colors group-hover:text-clinic-gold">Elderly Care</span>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                   <div className="w-12 h-12 rounded-full border border-clinic-gold/30 flex items-center justify-center group-hover:bg-clinic-gold/10 transition-colors">
                      <Baby className="text-clinic-gold w-5 h-5" />
                   </div>
                   <span className="text-white font-serif italic text-lg transition-colors group-hover:text-clinic-gold">Pediatrics</span>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                   <div className="w-12 h-12 rounded-full border border-clinic-gold/30 flex items-center justify-center group-hover:bg-clinic-gold/10 transition-colors">
                      <UserPlus className="text-clinic-gold w-5 h-5" />
                   </div>
                   <span className="text-white font-serif italic text-lg transition-colors group-hover:text-clinic-gold">Family Support</span>
                </div>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}


const ClinicServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeService, setActiveService] = useState(0);

  const categories = [
    {
      name: "Cardiac & Respiratory",
      services: [
        { title: "ECG", desc: "Precise cardiac rhythm assessment to detect heart abnormalities and ensure cardiovascular health.", icon: <Activity className="w-6 h-6" /> },
        { title: "Arrythmia monitoring", desc: "Advanced tracking of heart rhythm patterns to identify and manage irregular activity.", icon: <Heart className="w-6 h-6" /> },
        { title: "Digital heart & lung evaluations", desc: "High-resolution digital assessments for a more detailed understanding of cardiopulmonary function.", icon: <Stethoscope className="w-6 h-6" /> },
        { title: "Spirometry & lung function tests", desc: "Comprehensive breathing analysis to assess lung capacity and respiratory efficiency.", icon: <Wind className="w-6 h-6" /> }
      ]
    },
    {
      name: "Wellness & Analytics",
      services: [
        { title: "Mental health assessments", desc: "Thoughtful clinical evaluations focusing on psychological wellbeing and emotional resilience.", icon: <Brain className="w-6 h-6" /> },
        { title: "Fatigue & Stress Assessments", desc: "Scientific review of factors contributing to exhaustion and stress levels.", icon: <Activity className="w-6 h-6" /> },
        { title: "Diet Planning", desc: "Expert nutritional guidance tailored to individual metabolic needs and lifestyle goals.", icon: <Apple className="w-6 h-6" /> },
        { title: "Bone Mass assessments", desc: "Advanced scanning to monitor bone density and assess skeletal health.", icon: <Activity className="w-6 h-6" /> },
        { title: "Body Fat & composition analysis", desc: "Detailed physiological breakdown of body mass to support health optimization.", icon: <User className="w-6 h-6" /> }
      ]
    },
    {
      name: "Screening & Senses",
      services: [
        { title: "Audiometry & Hearing tests", desc: "Precise auditory assessments to track hearing health and support acoustic clarity.", icon: <Globe className="w-6 h-6" /> },
        { title: "Vision tests", desc: "Comprehensive screening to ensure visual acuity and early detection of ocular concerns.", icon: <Eye className="w-6 h-6" /> },
        { title: "Dermoscopy & skin checks", desc: "Microscopic skin evaluation for the early detection of dermatological concerns.", icon: <Search className="w-6 h-6" /> },
        { title: "Fetal Doppler Assessments", desc: "Reassuring auditory monitoring of fetal heartbeats using advanced clinical technology.", icon: <Baby className="w-6 h-6" /> }
      ]
    },
    {
      name: "Emergency & Acute Care",
      services: [
        { title: "Trauma management", desc: "Immediate and expert assessment and care for physical injuries and acute trauma.", icon: <Siren className="w-6 h-6" /> },
        { title: "Emergency Care", desc: "On-site urgent clinical support for sudden medical concerns requiring immediate attention.", icon: <Activity className="w-6 h-6" /> },
        { title: "Acute non Hospital care", desc: "Management of acute illnesses that can be safely treated outside a hospital setting.", icon: <Stethoscope className="w-6 h-6" /> },
        { title: "Nebulisations", desc: "Respiratory therapy delivered via fine mist to provide fast-acting relief.", icon: <Wind className="w-6 h-6" /> },
        { title: "IV fluid replacement", desc: "Safe hydration support delivered intravenously under medical supervision.", icon: <Droplets className="w-6 h-6" /> },
        { title: "NIBP monitoring", desc: "Non-invasive blood pressure tracking to manage cardiovascular health.", icon: <Activity className="w-6 h-6" /> }
      ]
    },
    {
      name: "Surgical & Clinical",
      services: [
        { title: "Minor Surgical procedures", desc: "Expertly delivered minor interventions performed with precision and care.", icon: <Scissors className="w-6 h-6" /> },
        { title: "Wound dressing & Care", desc: "Professional management of injuries to ensure optimal healing and prevent infection.", icon: <CheckCircle2 className="w-6 h-6" /> },
        { title: "Suturing", desc: "Meticulous clinical closure of lacerations using advanced techniques.", icon: <Scissors className="w-6 h-6" /> },
        { title: "Geriatric care", desc: "Attentive medical management focused on the unique needs of older adults.", icon: <Accessibility className="w-6 h-6" /> }
      ]
    },
    {
      name: "Clearances & Checks",
      services: [
        { title: "Pre-employment checks", desc: "Efficient medical clearances tailored to professional requirements.", icon: <FileCheck className="w-6 h-6" /> },
        { title: "Health clearances", desc: "Detailed medical certification for travel, sports, or professional activities.", icon: <FileCheck className="w-6 h-6" /> },
        { title: "Insurance health checks", desc: "Medical reporting to support personal and professional insurance requirements.", icon: <ClipboardCheck className="w-6 h-6" /> }
      ]
    }
  ];

  const currentServices = categories[activeCategory].services;

  // Reset active service when category changes
  useEffect(() => {
    setActiveService(0);
  }, [activeCategory]);

  return (
    <section id="clinic-services" className="py-32 bg-clinic-green relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-clinic-gold/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="gold-text mb-6 inline-block text-lg">Integrated Excellence</span>
            <h2 className="text-6xl md:text-7xl font-serif text-white italic">Clinic Services</h2>
            <p className="text-white/40 mt-8 max-w-2xl mx-auto font-light text-lg tracking-wide">
              A comprehensive suite of medical services delivered with clinical precision and personal attention.
            </p>
          </motion.div>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-10 py-4 text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-500 rounded-full border ${
                activeCategory === i 
                ? "bg-clinic-gold text-clinic-green border-clinic-gold shadow-[0_15px_40px_rgba(192,160,110,0.3)]" 
                : "border-clinic-gold/20 text-white/50 hover:border-clinic-gold/50 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Service Content - Specialist Tab Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {currentServices.map((service, i) => (
                  <motion.button
                    key={service.title}
                    onClick={() => setActiveService(i)}
                    whileHover={{ x: 10 }}
                    className={`w-full text-left p-8 flex items-center gap-6 transition-all duration-500 rounded-xl border ${
                      activeService === i 
                      ? "bg-clinic-gold text-clinic-green border-clinic-gold shadow-[0_0_40px_rgba(192,160,110,0.15)]" 
                      : "border-clinic-gold/10 hover:border-clinic-gold/30 hover:bg-white/5 text-white/70"
                    }`}
                  >
                    <div className={`${activeService === i ? "text-clinic-green" : "text-clinic-gold"} transition-colors duration-500`}>
                      {service.icon}
                    </div>
                    <span className="text-base font-serif italic group-hover:text-white transition-colors">{service.title}</span>
                  </motion.button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activeService}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-clinic-green-light border border-clinic-gold/10 p-16 lg:p-24 relative rounded-3xl group overflow-hidden min-h-[400px] flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-clinic-gold/5 blur-[80px] -translate-y-24 translate-x-24" />
                
                <div className="flex items-center gap-8 mb-12">
                   <div className="w-20 h-px bg-clinic-gold/40" />
                   <h3 className="text-4xl lg:text-5xl font-serif text-clinic-gold italic leading-tight">
                     {currentServices[activeService]?.title || ""}
                   </h3>
                </div>
                
                <p className="text-2xl lg:text-3xl text-white/90 leading-relaxed font-light italic">
                  "{currentServices[activeService]?.desc || ""}"
                </p>

                <div className="mt-16 flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-clinic-gold animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-clinic-gold font-bold">Clinical Distinction</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-32 text-center border-t border-clinic-gold/10 pt-16">
            <p className="text-[11px] uppercase tracking-[0.6em] text-clinic-gold font-bold">
              Integrated Care • Clinical Precision • Personal Attention
            </p>
        </div>
      </div>
    </section>
  );
};

const Diagnostics = () => {
  return (
    <section id="diagnostics" className="py-32 bg-clinic-green relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-clinic-gold/5 to-transparent" />
       
       <div className="max-w-7xl mx-auto px-8 relative z-10">
         <div className="text-center mb-24">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <span className="gold-text mb-6 inline-block">Advanced Diagnostics</span>
             <h2 className="text-5xl font-serif text-white italic">Advanced Diagnostics, Seamlessly Integrated</h2>
           </motion.div>
         </div>

         <div className="grid md:grid-cols-2 gap-12">
           <motion.div 
             whileHover={{ y: -10, borderColor: "rgba(192, 160, 110, 0.4)" }}
             className="bg-clinic-green-light/80 backdrop-blur-xl p-16 border border-clinic-gold/10 transition-all duration-700 relative group"
           >
             <div className="absolute top-0 right-0 w-2 h-2 bg-clinic-gold/0 group-hover:bg-clinic-gold transition-all duration-700" />
             <div className="w-16 h-16 border border-clinic-gold/30 rounded-full flex items-center justify-center mb-10 group-hover:border-clinic-gold transition-colors duration-700">
               <Search className="text-clinic-gold w-6 h-6" />
             </div>
             <h3 className="text-4xl font-serif text-white mb-8 italic group-hover:text-clinic-gold transition-colors">Computerised Health Checks</h3>
             <p className="text-xl text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
               Our computerised health checks provide a modern and efficient way to assess your general health with greater accuracy and insight. 
               By supporting early detection and more informed clinical decision-making, these evaluations form an important part of a proactive 
               and preventive approach to wellbeing.
             </p>
           </motion.div>

           <motion.div 
             whileHover={{ y: -10, borderColor: "rgba(192, 160, 110, 0.4)" }}
             className="bg-clinic-green-light/80 backdrop-blur-xl p-16 border border-clinic-gold/10 transition-all duration-700 relative group"
           >
             <div className="absolute top-0 right-0 w-2 h-2 bg-clinic-gold/0 group-hover:bg-clinic-gold transition-all duration-700" />
             <div className="w-16 h-16 border border-clinic-gold/30 rounded-full flex items-center justify-center mb-10 group-hover:border-clinic-gold transition-colors duration-700">
               <Syringe className="text-clinic-gold w-6 h-6" />
             </div>
             <h3 className="text-4xl font-serif text-white mb-8 italic group-hover:text-clinic-gold transition-colors">Blood Tests On Site</h3>
             <p className="text-xl text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
               To make care more convenient and efficient and most importantly evidence based, blood tests are available on site within the clinic. 
               This integrated service allows for faster investigation, reduced delay, and a more seamless journey from consultation to diagnosis and follow-up.
             </p>
           </motion.div>
         </div>
       </div>
    </section>
  );
};

const ContactInfo = () => {
  return (
    <section id="contact" className="py-32 bg-clinic-green relative">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24">
        <div>
          <span className="gold-text mb-6 inline-block">Arrange Your Appointment</span>
          <h2 className="text-6xl md:text-8xl font-light mb-12 text-white leading-tight">Visit <br /> <span className="text-clinic-gold italic font-serif drop-shadow-[0_0_20px_rgba(192,160,110,0.3)]">Tovya Clinic</span></h2>
          
          <div className="space-y-12">
            <motion.div 
               whileHover={{ x: 10 }}
               className="flex gap-8 group cursor-default"
            >
              <div className="w-12 h-12 border border-clinic-gold/20 flex items-center justify-center shrink-0 group-hover:border-clinic-gold transition-colors duration-500">
                <Mail className="text-clinic-gold w-5 h-5" />
              </div>
              <div>
                <p className="uppercase tracking-[0.3em] text-[10px] text-white/30 mb-3 font-bold">Electronic Mail</p>
                <a href="mailto:tovyaclinic@gmail.com" className="text-xl md:text-2xl text-white group-hover:text-clinic-gold transition-colors duration-500 tracking-tight font-light">tovyaclinic@gmail.com</a>
              </div>
            </motion.div>

            <motion.div 
               whileHover={{ x: 10 }}
               className="flex gap-8 group cursor-default"
            >
              <div className="w-12 h-12 border border-clinic-gold/20 flex items-center justify-center shrink-0 group-hover:border-clinic-gold transition-colors duration-500">
                <MapPin className="text-clinic-gold w-5 h-5" />
              </div>
              <div>
                <p className="uppercase tracking-[0.3em] text-[10px] text-white/30 mb-3 font-bold">Clinic Address</p>
                <p className="text-xl md:text-2xl text-white leading-snug font-light tracking-tight">
                  Opposite Christ University Backgate No 5, <br />
                  Christ School Road, Bangalore 560029
                </p>
              </div>
            </motion.div>

            <motion.div 
               whileHover={{ x: 10 }}
               className="flex gap-8 group cursor-default"
            >
              <div className="w-12 h-12 border border-clinic-gold/20 flex items-center justify-center shrink-0 group-hover:border-clinic-gold transition-colors duration-500">
                <Globe className="text-clinic-gold w-5 h-5" />
              </div>
              <div>
                <p className="uppercase tracking-[0.3em] text-[10px] text-white/30 mb-3 font-bold">Web Address</p>
                <p className="text-xl md:text-2xl text-white font-light tracking-tight">www.tovyaclinic.com</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="bg-clinic-green-light border border-clinic-gold/10 p-12 lg:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-clinic-gold/10 -translate-y-16 translate-x-16 rotate-45 group-hover:scale-110 transition-transform duration-700" />
          
          <h3 className="text-3xl italic font-serif text-clinic-gold mb-16">Clinic Hours</h3>
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-clinic-gold/10 pb-6 group/item hover:border-clinic-gold/40 transition-colors">
              <span className="uppercase tracking-[0.2em] text-[10px] text-white/60 font-bold group-hover/item:text-white transition-colors">Monday — Friday</span>
              <span className="font-light text-white/80 group-hover/item:text-clinic-gold transition-colors">6:30 am — 11:00 pm</span>
            </div>
            <div className="flex justify-between items-center border-b border-clinic-gold/10 pb-6 group/item hover:border-clinic-gold/40 transition-colors">
              <span className="uppercase tracking-[0.2em] text-[10px] text-white/60 font-bold group-hover/item:text-white transition-colors">Saturday</span>
              <span className="font-light text-white/80 group-hover/item:text-clinic-gold transition-colors">8:30 am — 11:00 pm</span>
            </div>
            <div className="flex justify-between items-center border-b border-clinic-gold/10 pb-6 group/item hover:border-clinic-gold/40 transition-colors">
              <span className="uppercase tracking-[0.2em] text-[10px] text-white/60 font-bold group-hover/item:text-white transition-colors">Sun / Holidays</span>
              <span className="font-light text-white/80 group-hover/item:text-clinic-gold transition-colors">9:00 am — 11:00 pm</span>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-clinic-gold/5 text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/30 italic font-serif text-sm leading-relaxed"
            >
              "Personalised medicine with exceptional care, comfort, and confidence."
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 bg-[#03110b] border-t border-clinic-gold/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-clinic-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex items-center gap-8 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-16 h-16 border border-clinic-gold/20 flex items-center justify-center group-hover:border-clinic-gold transition-all duration-700 bg-white/5">
               <span className="text-clinic-gold font-serif text-4xl group-hover:scale-110 transition-transform duration-700">T</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-serif tracking-[0.25em] text-clinic-gold uppercase font-light">TOVYA <span className="font-medium text-white">CLINIC</span></span>
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-bold -mt-0.5 group-hover:text-clinic-gold transition-colors">Excellence in Healthcare</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {["Home", "Vision", "Why Us", "Primary Care", "Specialists", "Clinic Services", "Diagnostics", "Contact"].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-clinic-gold transition-colors font-bold">
                {link}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 text-center md:text-left font-bold">
            Redefining Healthcare in Bangalore.
          </p>
          <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            © {new Date().getFullYear()} Tovya Clinic. All Rights Reserved.
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 bg-clinic-gold/5 blur-[120px] rounded-full -mr-32 -mb-32" />
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-clinic-green text-white selection:bg-clinic-gold selection:text-clinic-green">
      <Navbar />
      <Hero />
      <VisionSection />
      <WhyUsSection />
      <PrimaryCareSection />
      <SpecialistServicesSection />
      <FamilyCareSection />
      <ClinicServicesSection />
      <Diagnostics />
      <ContactInfo />
      <Footer />
    </div>
  );
}
