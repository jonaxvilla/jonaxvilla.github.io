import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Map, Marker, Overlay } from 'pigeon-maps';

const partners = [
  {
    region: "Europe",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    institutions: [
      {
        name: "University of Lisbon (UL)",
        location: "Lisbon, Portugal",
        role: "Project Coordinator",
        desc: "It is the largest and most prestigious university in Portugal. Heir to an academic tradition spanning over seven centuries, it provides its entire community with the best and most diverse academic programs.",
        url: "https://www.ulisboa.pt/en"
      },
      {
        name: "Lund University (LU)",
        location: "Lund, Sweden",
        role: "Partner",
        desc: "Frontrunner in how the “geographic approach” is centrally embedded in world-leading research and education across all disciplines at the university.",
        url: "https://www.lunduniversity.lu.se/home"
      },

    ]
  },
  {
    region: "Latin America",
    color: "bg-teal-50 border-teal-200 text-teal-700",
    institutions: [
      {
        name: "Escuela Superior Politécnica del Litoral (ESPOL)",
        location: "Guayaquil, Ecuador",
        role: "Partner",
        desc: "It is the largest partner in the country and regional coordinator. Founded in 1958, it is the leader public higher education university in Ecuador.",
        url: "https://www.espol.edu.ec/en"
      },
      {
        name: "Universidad Técnica del Norte (UTN)",
        location: "Imbabura, Ecuador",
        role: "Partner",
        desc: "It is a public institution dedicated to providing quality education, fostering research, and promoting sustainable development.",
        url: "https://www.utn.edu.ec/"
      },
      {
        name: "Universidad Industrial de Santander (UIS)",
        location: "Bucaramanga, Colombia",
        role: "Partner",
        desc: "It is a public university, based on a coeducational and research model. Since its foundation had developed innovative research in engineering, basic sciences, and medicine.",
        url: "https://uis.edu.co/en/"
      },
      {
        name: "Universidad Pedagógica y Tecnológica de Colombia (UPTC)",
        location: "Tunja, Colombia",
        role: "Partner",
        desc: "It is an autonomous, national, public university. It has six outreach program headquarters and 24 regional distance education centers, allowing it to operate in several departments nationwide.",
        url: "https://www.uptc.edu.co/sitio/portal/front/index.html#"
      }
    ]
  }
];

const coordinates: Record<string, [number, number]> = {
  "University of Lisbon (UL)": [38.7223, -9.1393],
  "Lund University (LU)": [55.7047, 13.1910],
  "Escuela Superior Politécnica del Litoral (ESPOL)": [-2.1444, -79.9657],
  "Universidad Técnica del Norte (UTN)": [0.3514, -78.1128],
  "Universidad Industrial de Santander (UIS)": [7.1408, -73.1207],
  "Universidad Pedagógica y Tecnológica de Colombia (UPTC)": [5.5492, -73.3562]
};

export function Partners() {
  const [hoveredPartner, setHoveredPartner] = React.useState<string | null>(null);

  return (
    <div className="w-full bg-stone-50 min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Consortium</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A strong network of European and Latin American institutions working together to share knowledge and build capacity.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        {partners.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-20 last:mb-0">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{group.region}</h2>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.institutions.map((partner, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${group.color}`}>
                      {partner.role}
                    </div>
                    {/* Placeholder Logo Circle */}
                    <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center font-bold text-slate-400 text-xl">
                      {partner.name.charAt(0)}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                    {partner.name}
                  </h3>
                  
                  <div className="flex items-center text-slate-500 text-sm mb-4">
                    <MapPin size={14} className="mr-1" />
                    {partner.location}
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    {partner.desc}
                  </p>
                  
                  <a 
                    href={partner.url} 
                    className="inline-flex items-center text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors mt-auto"
                  >
                    Visit Website <ExternalLink size={14} className="ml-1" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Map Placeholder */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
           <div className="text-center mb-8">
             <h3 className="text-2xl font-bold text-slate-900">Global Collaboration</h3>
             <p className="text-slate-600">Bridging continents for a safer future.</p>
           </div>
           <div className="bg-stone-100 rounded-xl h-[500px] w-full relative overflow-visible shadow-inner border border-stone-200">
  <Map defaultCenter={[20, -40]} defaultZoom={2.5} minZoom={2} limitBounds="edge">
    {partners.flatMap(group => group.institutions).map((partner) => {
      const coords = coordinates[partner.name];
      if (!coords) return null;

      const isHovered = hoveredPartner === partner.name;

      return (
        <Overlay key={partner.name} anchor={coords} offset={[15, 15]}>
          <div
            tabIndex={0}
            role="button"
            aria-label={`${partner.name}, ${partner.location}`}
            className="relative flex flex-col items-center cursor-pointer focus:outline-none"
            onMouseEnter={() => setHoveredPartner(partner.name)}
            onMouseLeave={() => setHoveredPartner(null)}
            onFocus={() => setHoveredPartner(partner.name)}
            onBlur={() => setHoveredPartner(null)}
          >
            {isHovered && (
              <div className="absolute bottom-full mb-2 w-48 bg-white p-3 rounded-lg shadow-xl text-xs z-50 pointer-events-none text-center">
                <div className="font-bold text-slate-900">{partner.name}</div>
                <div className="text-slate-500">{partner.location}</div>
              </div>
            )}

            <MapPin
              size={30}
              className={`drop-shadow-md transition-transform duration-200 ${
                isHovered
                  ? 'text-teal-900 fill-teal-600 scale-125'
                  : 'text-rose-900 fill-rose-600 hover:fill-rose-700'
              }`}
            />
          </div>
        </Overlay>
      );
    })}
  </Map>
</div>

        </div>
      </div>
    </div>
  );
}
