"use client";
import React, { useRef, useState } from "react";
import toPdf from "react-to-pdf";
// import { useRouter } from "next/navigation";
import "../templates.css";
import ResumeForm from "@/app/components/ResumeForm";
import { ResumeData } from "@/app/types";
import ResumeTemplates from "@/app/components/ResumeTemplates";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

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

const ResumePage: React.FC<{ params: { templateId: string } }> = ({
  params,
}) => {
  const { templateId } = params;

  const handleDownload = () => {
    if (resumeRef.current) {
      toPdf(resumeRef, {
        filename: `${formData.name.replace(" ", "_")}_resume.pdf`,
      });
    }
  };
  const [formData, setFormData] = useState<ResumeData>(initialFormData);
  const resumeRef = useRef<HTMLDivElement>(null);
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between text-center">
        <div>
          <Link href="/templates" className="link text-3xl font-bold mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>{" "}
          <h1 className="text-3xl font-bold mb-6 "></h1>
        </div>
        <div>
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center justify-center w-full"
          >
            <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
            Download Resume
          </button>
        </div>
      </div>

      <div className="gap-8">
        {/* lg:w-1/2 */}
        <div className="w-full">
          <ResumeForm formData={formData} setFormData={setFormData} />
        </div>
        <div className="w-full">
          <div ref={resumeRef}>
            <ResumeTemplates formData={formData} template={templateId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
