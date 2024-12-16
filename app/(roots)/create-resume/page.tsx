"use client";

import { useState, useRef } from "react";
import toPdf from "react-to-pdf";
// import ResumeForm from '../components/ResumeForm';
// import ResumeTemplates from '../components/ResumeTemplates';
// import { ResumeData, TemplateType } from '../types';
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import { ResumeData, TemplateType } from "@/app/types";
import ResumeForm from "@/app/components/ResumeForm";
import ResumeTemplates from "@/app/components/ResumeTemplates";
// import { ResumeData, TemplateType } from "./types";
// import ResumeForm from "./components/ResumeForm";
// import ResumeTemplates from "./components/ResumeTemplates";

const initialFormData: ResumeData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  summary: "",
  socialLinks: {
    linkedin: "",
    github: "",
    twitter: "",
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
};

export default function Home() {
  const [formData, setFormData] = useState<ResumeData>(initialFormData);
  const [template, setTemplate] = useState<TemplateType>("professional");
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (resumeRef.current) {
      toPdf(resumeRef, {
        filename: `${formData.name.replace(" ", "_")}_resume.pdf`,
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <ResumeForm formData={formData} setFormData={setFormData} />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="my-4">
            <label htmlFor="template" className="block mb-2 font-semibold">
              Choose Template:
            </label>
            <select
              id="template"
              value={template}
              onChange={(e) => setTemplate(e.target.value as TemplateType)}
              className="w-full p-2 border rounded"
            >
              <option value="simple">Simple</option>
              <option value="modern">Modern</option>
              <option value="minimalist">Minimalist</option>
              <option value="professional">Professional</option>
              <option value="creative">Creative</option>
              <option value="technical">Technical</option>
            </select>
          </div>
          <div ref={resumeRef}>
            <ResumeTemplates formData={formData} template={template} />
          </div>
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center justify-center w-full"
          >
            <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
