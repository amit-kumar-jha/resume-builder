"use client";
import { motion } from "framer-motion";
import "./templates.css"; // Import your CSS for styling
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TemplateType } from "@/app/types";

const templates = [
  { id: 1, title: "classic", description: "A simple and clean design." },
  {
    id: 2,
    title: "modern",
    description: "A modern design with bold headings.",
  },
  {
    id: 3,
    title: "minimalist",
    description: "A creative layout for artistic professions.",
  },
  {
    id: 4,
    title: "professional",
    description: "A professional template suitable for any field.",
  },
  {
    id: 5,
    title: "creative",
    description: "A minimalist approach with plenty of white space.",
  },

  {
    id: 6,
    title: "resume-ats",
    description: "A corporate template for business professionals.",
  },
  {
    id: 7,
    title: "sydney",
    description: "An academic resume layout for researchers.",
  },
  {
    id: 8,
    title: "resumeTemplateIt",
    description: "An elegant design with subtle colors.",
  },
  {
    id: 9,
    title: "resumeTemplateSales",
    description: "An infographic-style resume with visuals.",
  },
  {
    id: 10,
    title: "Portfolio",
    description: "A portfolio-style resume for creatives.",
  },
  {
    id: 11,
    title: "Student",
    description: "A student-friendly template highlighting education.",
  },
  {
    id: 12,
    title: "Freelancer",
    description: "A template tailored for freelancers.",
  },
  {
    id: 13,
    title: "Graphic Design",
    description: "A graphic design-focused layout.",
  },
  {
    id: 14,
    title: "Sales",
    description: "A sales-oriented template emphasizing achievements.",
  },
  {
    id: 15,
    title: "Healthcare",
    description: "A clean design for healthcare professionals.",
  },
  {
    id: 16,
    title: "Marketing",
    description: "A marketing resume with key metrics.",
  },
  {
    id: 17,
    title: "Engineering",
    description: "An engineering template showcasing technical skills.",
  },
  {
    id: 18,
    title: "Administrative",
    description: "A template for administrative roles.",
  },
  {
    id: 19,
    title: "Consultant",
    description: "A template for consultants highlighting experience.",
  },
  {
    id: 20,
    title: "Teacher",
    description: "A teaching-focused resume layout.",
  },
];

const Templates = () => {
  const router = useRouter();

  // Handle template selection
  const handleTemplateSelect = (templateTitle: string) => {
    router.push(`/templates/${encodeURIComponent(templateTitle)}`); // Use template title in URL
  };

  return (
    <div className="templates-container">
      <h1 className="templates-title">Resume Templates</h1>
      <div className="templates-grid">
        {templates.map((template, index) => (
          <motion.div
            key={index}
            className="template-card"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
          >
            <h2>{template.title}</h2>
            <p>{template.description}</p>
            <button
              className="view-button"
              onClick={() => handleTemplateSelect(template.title)} // Pass title in handle function
            >
              View Template
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Templates;

// "use client";
// import { motion } from "framer-motion";
// import "./templates.css"; // Import your CSS for styling
// import { useRouter } from "next/navigation";
// import AdvancedTemplate from "@/app/components/ResumeTemplates/Classic";

// // Define different components for each template
// const ClassicComponent = () => (
//   <div className="template-content">Classic Template Component</div>
// );
// const ModernComponent = () => (
//   <div className="template-content">Modern Template Component</div>
// );
// const MinimalistComponent = () => (
//   <div className="template-content">Minimalist Template Component</div>
// );

// // Add more components as needed for each template

// const templates = [
//   { id: 1, title: "classic" },
//   { id: 2, title: "modern" },
//   { id: 3, title: "minimalist" },
//   { id: 4, title: "classic" },
//   { id: 5, title: "modern" },
//   { id: 6, title: "minimalist" },
//   { id: 7, title: "classic" },
//   { id: 8, title: "modern" },
//   { id: 9, title: "minimalist" },
//   { id: 10, title: "classic" },
//   { id: 11, title: "modern" },
//   { id: 12, title: "minimalist" },
//   { id: 13, title: "classic" },
//   { id: 14, title: "modern" },
//   { id: 15, title: "minimalist" },
//   { id: 1, title: "classic" },
//   { id: 2, title: "modern" },
//   { id: 3, title: "minimalist" },
//   { id: 1, title: "classic" },
//   { id: 2, title: "modern" },
//   { id: 3, title: "minimalist" },
//   // Add more templates
// ];

// const Templates = () => {
//   const router = useRouter();

//   // Handle template selection
//   const handleTemplateSelect = (templateTitle: string) => {
//     router.push(`/templates/${encodeURIComponent(templateTitle)}`); // Use template title in URL
//   };

//   // Function to render the correct component based on the template
//   const renderTemplateComponent = (templateTitle: string) => {
//     switch (templateTitle) {
//       case "classic":
//         return <AdvancedTemplate />;
//       case "modern":
//         return <ModernComponent />;
//       case "minimalist":
//         return <MinimalistComponent />;
//       // Add more cases for additional components
//       default:
//         return <div>Unknown Template</div>;
//     }
//   };

//   return (
//     <div className="templates-container">
//       <h1 className="templates-title">Resume Templates</h1>
//       <div className="templates-grid">
//         {templates.map((template, index) => (
//           <motion.div
//             key={index}
//             className="template-card group"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
//           >
//             <h2>{template.title}</h2>
//             {/* Render the correct component based on the template */}
//             {renderTemplateComponent(template.title)}
//             <button
//               className="view-button opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               onClick={() => handleTemplateSelect(template.title)}
//             >
//               View Template
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Templates;
