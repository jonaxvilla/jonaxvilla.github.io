// Placeholder images for demo purposes
import image_684f383cb1a32af335831193660950adedf4ef88 from 'https://picsum.photos/seed/stars1/600/400.jpg';
import image_24fb3b67abce387a0124d0ae76b0e9fe68cd7bb2 from 'https://picsum.photos/seed/stars2/600/400.jpg';
import image_2ed60adbcc0232bc5f8b573c2285104abe64643e from 'https://picsum.photos/seed/stars3/600/400.jpg';
import image_da82f1f904dae8dd9aad31ee10da63c29d8a5937 from 'https://picsum.photos/seed/stars4/600/400.jpg';
import React from 'react';
import { ArrowRight, Map, ShieldAlert, GraduationCap, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const hasUpdates = true; // 👈 Toggle when news are available

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1485745352553-859d7a306fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbmRlcyUyMG1vdW50YWlucyUyMHNhdGVsbGl0ZSUyMHZpZXclMjBlYXJ0aCUyMHRvbmV8ZW58MXx8fHwxNzY5NzAzNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Satellite view of Andes mountains"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 z-10 relative text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium mb-6">
              Erasmus+ Capacity Building Project
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Spatial Tools for Assessing Risk in <span className="text-teal-400">Sudden Natural Hazards</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              Empowering universities in Ecuador and Colombia with advanced geospatial technology to build resilient communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => onNavigate('project')}
                className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-teal-900/20 flex items-center justify-center gap-2"
              >
                Explore the Project <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate('partners')}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold transition-all"
              >
                Meet Our Partners
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Mission Section */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Bridging the Gap in <br/> Disaster Risk Management
              </h2>
              <div className="w-20 h-1.5 bg-teal-600 rounded-full mb-8" />
              <p className="text-slate-600 mb-6 leading-relaxed text-[18px]">
                The STARS Project is a transformative initiative designed to empower local communities and organizations to make informed decisions, minimize risks, and create safer societies—in Ecuador and Colombia—through the integration of cutting-edge geospatial technologies. Focused on tackling challenges from natural hazards such as earthquakes, floods, and landslides. 
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                The project aims to bridge gaps in knowledge and capacity among higher education institutions, stakeholders, and communities by offering accessible and innovative training opportunities. Equipping students, university staff and professionals with lasting improvements in disaster preparedness and response, ensuring a more secure future.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 rounded-lg text-teal-700">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Education</h3>
                    <p className="text-sm text-slate-600">Curriculum modernization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-700">
                    <Map size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Technology</h3>
                    <p className="text-sm text-slate-600">Geospatial tools training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                    <ShieldAlert size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Resilience</h3>
                    <p className="text-sm text-slate-600">Disaster mitigation</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-teal-100 rounded-3xl -z-10 transform translate-x-8 -translate-y-8" />
              <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-orange-100 rounded-3xl -z-10 transform -translate-x-6 translate-y-6" />
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                 <ImageWithFallback 
                    src={image_684f383cb1a32af335831193660950adedf4ef88} 
                    alt="Logo"
                    className="w-full h-full object-contain rounded-[10px]"
                 />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Updates — hidden until content exists */}
      {hasUpdates && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase">Latest News</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Project Updates</h2>
              </div>
              <button className="hidden md:flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors gap-1">
                View all news <ChevronRight size={20} />
              </button>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Workshop in Quito: Digital Mapping Basics",
                  date: "October 15, 2025",
                  category: "Workshop",
                  image: "https://images.unsplash.com/photo-1642668463269-2c10e2db6c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaWdpdGFsJTIwdG9wb2dyYXBoaWMlMjBtYXB8ZW58MXx8fHwxNzY5NzAzODA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
                  desc: "Faculty members gathered to learn the latest digital mapping techniques for curriculum integration."
                },
                {
                  title: "New Equipment Arrival at Partner Universities",
                  date: "September 2, 2025",
                  category: "Infrastructure",
                  image: "https://images.unsplash.com/photo-1575686467550-7d2a658eb1cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEcm9uZSUyMHN1cnZleWluZyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njk3MDM4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
                  desc: "High-precision drones and workstations have been delivered to our partners in Colombia."
                },
                {
                  title: "Student Exchange Program Open for Applications",
                  date: "August 20, 2025",
                  category: "Mobility",
                  image: "https://images.unsplash.com/photo-1758613171252-4a3801cffd45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaXZlcnNlJTIwc3R1ZGVudHMlMjBsb29raW5nJTIwYXQlMjBtYXAlMjBvdXRkb29yc3xlbnwxfHx8fDE3Njk3MDM4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                  desc: "Students can now apply for the upcoming semester exchange focused on risk assessment."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="group bg-white rounded-xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-700">
                      {item.category}
                    </div>
                    <ImageWithFallback 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {item.desc}
                    </p>
                    <button className="text-teal-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 md:hidden text-center">
              <button className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors gap-1">
                View all news <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to make an impact?</h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join our network of researchers, students, and institutions working towards a safer future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-teal-900/50"
            >
              Get Involved
            </button>
            <button 
              onClick={() => onNavigate('faq')}
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Read FAQ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
