import React from 'react';
import { Target, Globe, Cpu, Users, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Project() {
  return (
    <div className="w-full bg-stone-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Project</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Building capacity for sudden natural hazard risk assessment in Higher Education Institutions in Ecuador and Colombia.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-stone-100">
          
          {/* Main Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Overview</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The STARS Erasmus+ project addresses the critical need for advanced training in disaster risk reduction in the Andean region. Ecuador and Colombia are highly susceptible to sudden natural hazards such as earthquakes, landslides, and flash floods.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our initiative focuses on enhancing Higher Education Institution curricula by integrating state-of-the-art geospatial tools. Using GIS, BIM, and Geospatial AI, the project enables students, educators, and professionals to analyze complex datasets, model hazard scenarios, and develop strategies for resilient infrastructure and risk mitigation.
              </p>              
              <p className="text-slate-600 mb-6 leading-relaxed">
                By fostering international collaboration with European and South-American universities, the project promotes innovation, quality assurance, and long-term academic partnerships and sustainability. All courses and training materials labs will remain accessible after the project ends, ensuring lasting benefits for education, research, and disaster management in the region.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We aim to empower the next generation of professionals with the technical skills required to accurately assess risks and implement effective mitigation strategies.
              </p> 
              <div className="flex gap-4">
                <div className="bg-stone-100 p-4 rounded-lg border-l-4 border-teal-600">
                  <span className="block text-2xl font-bold text-slate-900">3</span>
                  <span className="text-sm text-slate-600">Years Duration</span>
                </div>
                <div className="bg-stone-100 p-4 rounded-lg border-l-4 border-orange-600">
                  <span className="block text-2xl font-bold text-slate-900">6</span>
                  <span className="text-sm text-slate-600">Partner Universities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1584757283806-b5c0b3dd3734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb21wdXRlciUyMHNjcmVlbiUyMGRpc3BsYXlpbmclMjBmbG9vZCUyMHJpc2slMjBtYXB8ZW58MXx8fHwxNzY5NzAzODA0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Geospatial analysis on computer screen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-stone-100 max-w-xs hidden md:block">
                <p className="text-slate-800 font-medium italic">
                  "Empowering local experts to solve local challenges using global technology."
                </p>
              </div>
            </div>
          </div>

          {/* Objectives Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Key Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Target className="text-teal-600" size={32} />,
                  title: "Curriculum Development",
                  desc: "Design and implement new courses focused on geospatial risk assessment."
                },
                {
                  icon: <Cpu className="text-orange-600" size={32} />,
                  title: "Technology Transfer",
                  desc: "Build expertise in geospatial tools and methodologies for effective natural hazard assessment and risk management."
                },
                {
                  icon: <Users className="text-blue-600" size={32} />,
                  title: "Capacity Building",
                  desc: "Train faculty and staff through workshops and European exchange programs."
                },
                {
                  icon: <Globe className="text-emerald-600" size={32} />,
                  title: "International Network",
                  desc: "Foster long-term collaboration between Latin American and European institutions."
                }
              ].map((obj, idx) => (
                <div key={idx} className="bg-stone-50 p-6 rounded-xl hover:bg-stone-100 transition-colors border border-stone-100">
                  <div className="mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                    {obj.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{obj.title}</h4>
                  <p className="text-slate-600 text-sm">{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Impact */}
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
               <div>
                 <h3 className="text-2xl font-bold mb-6">Tools We Teach</h3>
                 <ul className="space-y-4">
                   {[
                     "Geographic Information Systems (GIS)",
                     "Building Information Modeling (BIM)",
                     "Geospatial Artificial Intelligence (GeoAI)"                     
                   ].map((tool, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-300">
                       <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                       {tool}
                     </li>
                   ))}
                 </ul>
               </div>
               
               <div>
                  <h3 className="text-2xl font-bold mb-6">Expected Impact</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-teal-400 mb-1">For Students</h4>
                      <p className="text-sm text-slate-300">Students will gain skills in geospatial technologies and natural hazard risk assessment, improving their employability and preparing them for careers in disaster management, engineering, environmental sciences, and related fields.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-400 mb-1">For Institutions</h4>
                      <p className="text-sm text-slate-300">Participating universities will strengthen their academic capacity through updated curricula, trained staff, and innovative digital and hybrid teaching models, supporting long-term educational modernization and international collaboration.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-400 mb-1">For Society</h4>
                      <p className="text-sm text-slate-300">Communities and stakeholders will benefit from better-informed decision-making, improved disaster preparedness, and stronger resilience to natural hazards, contributing to safer environments and sustainable development in vulnerable regions.</p>
                    </div>
                  </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
