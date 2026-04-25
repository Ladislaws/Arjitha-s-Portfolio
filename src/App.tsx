/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MessageCircle,
  ArrowUpRight, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles,
  Palette,
  Layout,
  Video,
  PenTool,
  Award
} from 'lucide-react';

// --- Types ---
type Category = 'All' | 'Branding' | 'Logos' | 'Prints' | 'Motion';

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  video?: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  // --- Branding ---
  {
    id: 1,
    title: "NoLimit Brand Identity",
    category: "Branding",
    image: "/projects/nolimit_one.jpg",
    description: "Modern lifestyle branding with a bold, minimalist approach."
  },
  {
    id: 2,
    title: "Anu Collective",
    category: "Branding",
    image: "/projects/Anu.jpeg",
    description: "Soft, organic branding for a boutique lifestyle collective."
  },
  {
    id: 3,
    title: "Zoro Style Guide",
    category: "Branding",
    image: "/projects/zoro_zip.jpeg",
    description: "Comprehensive style guide and visual language for Zoro."
  },
  // --- Logos ---
  {
    id: 4,
    title: "Titan Gym",
    category: "Logos",
    image: "/projects/logo_3_gym.jpg",
    description: "Powerful and energetic logo design for high-performance fitness."
  },
  {
    id: 5,
    title: "Lotus Essence",
    category: "Logos",
    image: "/projects/logo_2_lotus.jpg",
    description: "Graceful and balanced monogram for a luxury spa brand."
  },
  {
    id: 6,
    title: "Coffee Corner",
    category: "Logos",
    image: "/projects/logo_4_coffee.jpg",
    description: "Warm and inviting identity for a specialty coffee house."
  },
  // --- Prints ---
  {
    id: 7,
    title: "Corporate Brochure Set",
    category: "Prints",
    image: "/projects/brochure_01.jpg",
    description: "Elegant multi-page brochure design with premium layouts."
  },
  {
    id: 8,
    title: "Luxury Event Invitation",
    category: "Prints",
    image: "/projects/Invitation_02.jpg",
    description: "Sophisticated print invitation for high-end corporate events."
  },
  {
    id: 9,
    title: "Modern Leaflet Design",
    category: "Prints",
    image: "/projects/leaflets_01.jpg",
    description: "Clean, informative leaflets for product marketing."
  },
  {
    id: 10,
    title: "Movie Poster Series",
    category: "Prints",
    image: "/projects/movie_poster.jpg",
    description: "Cinematic poster design with strong focal points and typography."
  },
  {
    id: 11,
    title: "Social Media Campaigns",
    category: "Prints",
    image: "/projects/FB_Post_0001.jpg",
    description: "Engaging social media post designs for digital branding."
  },
  {
    id: 12,
    title: "Floral Stationery",
    category: "Prints",
    image: "/projects/blooms.jpeg",
    description: "Delicate and artistic stationery set for a wedding brand."
  },
  {
    id: 14,
    title: "Brand Stationery",
    category: "Prints",
    image: "/projects/svs.jpg",
    description: "Cohesive brand stationery and presentation material."
  },
  {
    id: 15,
    title: "Premium Business Cards",
    category: "Prints",
    image: "/projects/business_card_01.jpg",
    description: "Minimalist business cards with high-end typography."
  },
  {
    id: 16,
    title: "Event Collateral",
    category: "Prints",
    image: "/projects/invitation_01.jpg",
    description: "Custom collateral for exclusive boutique events."
  },
  // --- Motion ---
  {
    id: 13,
    title: "Dynamic Reel",
    category: "Motion",
    image: "/projects/movie_poster.jpg", // Fallback thumbnail
    video: "/projects/video.mp4",
    description: "Commercial motion graphics and high-impact video editing."
  },
];

const SERVICES = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Crafting unique visual stories through colors, typography, and strategy."
  },
  {
    icon: Layout,
    title: "Print & Editorial",
    description: "Premium brochure, magazine, and flyer designs that speak quality."
  },
  {
    icon: Video,
    title: "Motion Graphics",
    description: "Dynamic video work and animations that bring your brand to life."
  },
  {
    icon: Award,
    title: "Logo Design",
    description: "Memorable and timeless logos that become the face of your business."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif font-bold tracking-tighter text-cream"
          >
            ARJITHA<span className="text-gold italic"> RK</span>
          </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-widest font-medium text-cream/60">
          {['Home', 'About', 'Work', 'Services', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="luxury-underline py-1 hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-cream" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-xl font-serif text-cream">
              {['Home', 'About', 'Work', 'Services', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'All' 
      ? PROJECTS 
      : PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-navy selection:bg-gold selection:text-navy scroll-smooth overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center px-6 overflow-hidden">
        {/* Minimal Geometric Background Pattern - Interactive "Canvas" */}
        <div className="absolute right-0 top-0 w-full lg:w-2/3 h-full pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              repeatType: "mirror", 
              ease: "linear" 
            }}
            className="absolute inset-0 opacity-[0.08]"
            style={{ 
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px' 
            }}
          />
          
          <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Design Grid System - Centered more for "Fuller" look */}
            <g opacity="0.3">
              <path d="M 200 0 V 800 M 300 0 V 800 M 400 0 V 800 M 500 0 V 800 M 600 0 V 800 M 700 0 V 800 M 800 0 V 800 M 900 0 V 800" stroke="white" strokeWidth="0.8" />
              <path d="M 200 100 H 1000 M 200 200 H 1000 M 200 300 H 1000 M 200 400 H 1000 M 200 500 H 1000 M 200 600 H 1000 M 200 700 H 1000" stroke="white" strokeWidth="0.8" />
            </g>

            {/* Floating Design Primitives - Concentrated on Right-Center */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {/* Refined Geometric Elements */}
              <motion.circle 
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                cx="600" cy="400" r="320" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className="text-gold/40" 
              />

              {/* Angle Brackets / Framing */}
              <g className="text-gold/60">
                <path d="M 900 100 L 850 100 M 900 100 L 900 150" stroke="currentColor" strokeWidth="2.5" />
                <path d="M 300 700 L 350 700 M 300 700 L 300 650" stroke="currentColor" strokeWidth="2.5" />
              </g>

              {/* Data/Spec Accents */}
              <text x="610" y="380" className="fill-white/30 font-mono text-[10px] uppercase tracking-[0.3em]">35.42° REF_AXIS</text>
              <line x1="600" y1="400" x2="850" y2="400" stroke="white" strokeWidth="1" strokeDasharray="8 8" opacity="0.4" />

              {/* Large Abstract Shapes */}
              <motion.path
                animate={{ 
                  rotate: [0, 3, 0],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 18, repeat: Infinity }}
                d="M 450 150 L 850 150 L 850 650 L 450 650 Z"
                stroke="white"
                strokeWidth="1"
                fill="white"
                fillOpacity="0.03"
              />
              
              {/* Rotating Compass Element */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: '600px 400px' }}
              >
                <circle cx="600" cy="400" r="220" stroke="white" strokeWidth="0.5" strokeDasharray="15 30" opacity="0.2" />
                <rect x="598" y="170" width="4" height="30" fill="currentColor" className="text-gold/60" />
              </motion.g>
            </motion.g>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/30 to-transparent" />
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-muted blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-medium tracking-[0.4em] uppercase text-xs block">
                Arjitha RadhaKrishnan
              </span>
              <h1 className="text-7xl md:text-9xl lg:text-[10rem] text-cream leading-[0.9] font-serif">
                Creative <br /> 
                <span className="italic text-gold">Designer</span>
              </h1>
            </div>
            <p className="max-w-xl text-cream/50 text-sm md:text-base uppercase tracking-widest font-light leading-relaxed">
              Based in Sri Lanka / Crafting premium visual identities / Specializing in luxury branding and minimal aesthetics.
            </p>
            <div className="flex gap-6 pt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#work"
                className="bg-gold text-navy px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 group"
              >
                Selected Work <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-cream/40 px-6">
                SCROLL TO EXPLORE
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-navy-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-square overflow-hidden border border-white/5 p-4 bg-navy">
                <img 
                  src="/profile.jpg" 
                  alt="Arjitha RadhaKrishnan" 
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-gold/30 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-gold/30 pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-bold">About Arjitha RadhaKrishnan</h2>
                <h3 className="text-5xl md:text-7xl text-cream leading-tight">
                  A legacy of <br /><span className="italic font-light">visual excellence</span>
                </h3>
              </div>
              
              <p className="text-cream/60 text-lg leading-relaxed font-light">
                I translate complex brand visions into timeless visual narratives. With a focus on editorial precision and artistic clarity, I help brands achieve a premium standing in an ever-evolving market. My work is a testament to the power of deliberate design—where every curve, color, and concept is engineered for lasting impact.
              </p>
              
              <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-12">
                <div className="stat-box">
                  <h3 className="text-4xl font-serif text-gold">05+</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cream/40 mt-2">Years Experience</p>
                </div>
                <div className="stat-box">
                  <h3 className="text-4xl font-serif text-gold">50+</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cream/40 mt-2">Projects Delivered</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="space-y-6">
              <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Portfolio</h2>
              <h3 className="text-5xl md:text-7xl text-cream">Selected <span className="italic text-gold font-light">Works</span></h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['All', 'Branding', 'Logos', 'Prints', 'Motion'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as Category)}
                  className={`pill ${activeCategory === cat ? 'pill-active' : 'text-cream/40 hover:text-gold hover:border-gold'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="project-card group"
                >
                  <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                    {project.video ? (
                      <video 
                        src={project.video}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold">
                          {project.category}
                        </span>
                        <h3 className="text-cream text-2xl font-serif">
                          {project.title}
                        </h3>
                      </div>
                      <button 
                        onClick={() => setSelectedImage(project.image)}
                        className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full group-hover:bg-gold group-hover:text-navy transition-all cursor-pointer"
                        title="View Full Image"
                      >
                        <ArrowUpRight size={18} />
                      </button>
                    </div>
                    <p className="text-cream/40 text-sm font-light border-t border-white/5 pt-4">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lead Gen Section */}
      <section className="py-24 px-6 bg-navy relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12 border border-white/5 p-12 bg-navy-light/30 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full" />
            <div className="space-y-4 relative z-10">
              <h3 className="text-3xl md:text-5xl font-serif text-cream">Let’s discuss your next project</h3>
              <p className="text-cream/60 max-w-md font-light text-sm uppercase tracking-widest">
                Enquire about bespoke packages and transparent pricing tailored to your vision.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rjithakrishnan07@gmail.com&su=Project%20Inquiry%20-%20Packages%20&%20Pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-navy px-10 py-6 text-[10px] uppercase tracking-[0.3em] font-bold shadow-xl shadow-gold/10 flex items-center justify-center gap-3"
              >
                <Mail size={14} /> Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/94769307896"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-cream border border-white/10 px-10 py-6 text-[10px] uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-3 transition-colors"
              >
                <MessageCircle size={14} className="text-gold" /> WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/arjitha-radhakkrishnan-4019572b4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-[#0077b5] border border-[#0077b5]/20 px-10 py-6 text-[10px] uppercase tracking-[0.3em] font-bold flex items-center justify-center gap-3 transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-navy-light text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Services</h2>
                <h3 className="text-5xl md:text-7xl font-serif tracking-tight">Bespoke Design <br /><span className="italic font-light">Excellence</span></h3>
              </div>
              <p className="text-cream/60 text-lg font-light leading-relaxed max-w-xl">
                I cultivate deep visual intelligence for brands that demand distinction. My approach integrates strategic brand architecture with an refined aesthetic sensibility, delivering outcomes that transcend trends and define industry standards.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-navy border border-white/5 hover:border-gold/30 transition-all flex flex-col justify-between aspect-square"
                >
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center rounded-lg">
                    <service.icon size={20} className="text-gold" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-serif">{service.title}</h3>
                    <p className="text-cream/40 text-[10px] uppercase tracking-widest leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-navy pt-32 pb-16 px-6 border-t border-white/5">
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-xl p-6 md:p-12"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full h-full flex items-center justify-center shadow-2xl shadow-black/50"
              >
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                  className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                  title="Close"
                >
                  <X size={24} />
                </button>
                <img 
                  src={selectedImage} 
                  alt="Selected project" 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-24 mb-24">
            <div className="space-y-12 lg:max-w-2xl">
              <h2 className="text-5xl md:text-8xl text-cream font-serif leading-none italic">
                Let's <span className="text-gold not-italic">Collaborate</span>
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-cream/40">Email</p>
                  <a href="mailto:rjithakrishnan07@gmail.com" className="text-2xl md:text-3xl text-gold hover:text-cream transition-colors font-serif">
                    rjithakrishnan07@gmail.com
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-cream/40">Phone</p>
                  <a href="tel:+94769307896" className="text-xl text-cream/60 hover:text-gold transition-colors font-light tracking-widest">
                    +94 769 307 896
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="space-y-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Social Connection</p>
                <div className="flex gap-8">
                  <a href="https://www.instagram.com/arji.krishnan?igsh=NXo0N2hzYzdrcHl1" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold transition-all text-[10px] uppercase tracking-widest flex items-center gap-2">
                    <Instagram size={14} /> Instagram
                  </a>
                  <a href="https://wa.me/94769307896" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold transition-all text-[10px] uppercase tracking-widest flex items-center gap-2">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                  <a href="https://www.linkedin.com/in/arjitha-radhakkrishnan-4019572b4?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold transition-all text-[10px] uppercase tracking-widest flex items-center gap-2">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="pt-24 lg:pt-0">
                <div className="text-cream/20 text-[10px] uppercase tracking-[0.4em] font-bold">
                  BASED IN SRI LANKA / OPEN FOR GLOBAL COMMISSIONS
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-[10px] text-gold font-bold">
                AR
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/40">
                © {new Date().getFullYear()} ARJITHA RADHAKRISHNAN.
              </p>
            </div>
            <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-cream/40">
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-gold transition-colors group flex items-center gap-2"
              >
                BACK TO TOP <ChevronRight size={14} className="-rotate-90 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

