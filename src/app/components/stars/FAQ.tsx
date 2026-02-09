import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is the STARS project",
    answer: "STARS is an international higher education capacity-building project focused on improving how sudden natural hazards—such as earthquakes, floods, and landslides—are assessed and managed using advanced geospatial technologies, including GIS, BIM, and Geospatial Artificial Intelligence."
  },
  {
    question: "What is the main goal of STARS?",
    answer: "The project aims to strengthen knowledge and skills in advanced geospatial technologies for data-driven natural hazard management, while building capacity in Higher Education Institutions in Ecuador and Colombia through innovative training focused on cutting-edge tools for sudden hazard risk assessment."
  },
  {
    question: "Why is this project important?",
    answer: "Latin America and the Caribbean are among the most disaster-prone regions globally, with millions affected by sudden natural hazards. STARS helps address this challenge by strengthening institutional capacity, improving educational programs, and preparing professionals to better prevent, assess, and manage disaster risks using modern technologies."
  },
  {
    question: "Which natural hazards does STARS focus on?",
    answer: "The project focuses primarily on earthquakes, floods, and landslides, which are among the most impactful and recurrent natural hazards affecting equatorial regions such as Ecuador and Colombia."
  },
  {
    question: "What technologies are used in STARS?",
    answer: "STARS integrates Geographic Information Systems (GIS), Building Information Modelling (BIM), and Geospatial Artificial Intelligence (GeoAI) to support risk assessment, disaster preparedness, mitigation planning, and the development of resilient infrastructure."
  },
  {
    question: "Who can participate in the training programs?",
    answer: "The programs are primarily designed for faculty members, researchers, and graduate students at partner universities. However, specific workshops may be open to external professionals in disaster risk management agencies."
  },
  {
    question: "Which institutions are involved?",
    answer: "The consortium includes European partners: University of Lisbon (Portugal) and Lund University (Sweden); and South American partners: ESPOL and UTN (Ecuador), UIS and UPTC (Colombia)."
  },  
  {
    question: "How is the project funded?",
    answer: "STARS is funded under the Erasmus+ Capacity Building in Higher Education (CBHE) programme of the European Union."
  },  
  {
    question: "When does the project end?",
    answer: "The project is a 3-year initiative, scheduled to conclude in late 2028. Sustainability plans are in place to ensure the curriculum continues after funding ends."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-stone-50 min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full text-teal-700 mb-6">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-600 text-lg">
            Find answers to common questions about the STARS Erasmus+ project, eligibility, and outcomes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900 text-lg pr-8">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 text-teal-600 transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`}>
                  {activeIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-stone-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-slate-300 mb-6">
            We're here to help. Contact our coordination team for more specific inquiries.
          </p>
          <a 
            href="mailto:contact@stars-erasmus.eu" 
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
