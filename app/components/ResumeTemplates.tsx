import React from "react";
import { ResumeData, TemplateType } from "../types";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  NewspaperIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import ResumeATS from "./ResumeTemplates/UpdatedResume";
import SydneyResumeTemplate from "./ResumeTemplates/Sydney";
import ResumeTemplateIt from "./ResumeTemplates/ItResume";
import ResumeTemplateSales from "./ResumeTemplates/SalesExecutiveTemplate";

interface Props {
  formData: ResumeData;
  template: TemplateType;
}

const AdvancedTemplate: React.FC<{ data: ResumeData }> = ({ data }) => (
  <div className="p-6 font-serif bg-gray-100">
    <header className="text-center mb-8 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-4xl font-bold text-indigo-800 mb-2">{data.name}</h1>
      <p className="text-xl text-indigo-600 mb-2">{data.title}</p>
      <div className="flex justify-center space-x-4 text-sm text-gray-600">
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>{data.location}</p>
      </div>
      {data.socialLinks && (
        <div className="mt-4 flex justify-center space-x-4">
          {Object.entries(data.socialLinks)
            .filter(([platform, url]) => url) // Filter out any empty or undefined URLs
            .map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-700 capitalize"
              >
                {platform}
              </a>
            ))}
        </div>
      )}
    </header>

    <section className="mb-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 mb-4">
        SUMMARY
      </h2>
      <p className="text-gray-700 leading-relaxed">{data.summary}</p>
    </section>

    <section className="mb-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 mb-4">
        PROFESSIONAL EXPERIENCE
      </h2>
      {data.experience.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold text-lg text-indigo-600">{exp.title}</h3>
          <p className="text-gray-600 italic mb-2">
            {exp.company} | {exp.startDate} - {exp.endDate}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 mb-4">
          EDUCATION
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg text-indigo-600">
              {edu.degree}
            </h3>
            <p className="text-gray-700">{edu.institution}</p>
            <p className="text-gray-600">{edu.graduationDate}</p>
          </div>
        ))}
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 mb-4">
          SKILLS
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>

    {data.projects && (
      <section className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 mb-4">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg text-indigo-600 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-700"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    )}

    {data.certifications && (
      <section className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 mb-4">
          CERTIFICATIONS
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {data.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>
    )}
  </div>
);

const ProfessionalTemplate: React.FC<{ data: ResumeData }> = ({ data }) => (
  <div className="p-6  font-serif">
    <header className="text-center mb-6">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-purple-600">{data.name}</h1>
        <p className="text-sm text-gray-600">{data.location}</p>
        {data.socialLinks && (
          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            {Object.entries(data.socialLinks)
              .filter(([platform, url]) => url) // Filter out any empty or undefined URLs
              .map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-700 capitalize"
                >
                  {platform}
                </a>
              ))}
          </div>
        )}
      </div>
    </header>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-300 mb-2">
        Professional Summary
      </h2>
      <p className="text-sm">{data.summary}</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-300 mb-2">
        Experience
      </h2>
      {data.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{exp.title}</h3>
          <p className="text-sm text-gray-600">
            {exp.company} | {exp.location}
          </p>
          <p className="text-sm text-gray-600">
            {exp.startDate} - {exp.endDate}
          </p>
          <ul className="list-disc list-inside text-sm mt-2">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-300 mb-2">
        Education
      </h2>
      {data.education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{edu.degree}</h3>
          <p className="text-sm text-gray-600">
            {edu.institution} | {edu.location}
          </p>
          <p className="text-sm text-gray-600">
            Graduated: {edu.graduationDate}
          </p>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-300 mb-2">
        Skills
      </h2>
      <ul className="list-disc list-inside text-sm">
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-300 mb-2">
        Projects
      </h2>
      {data.projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{project.name}</h3>
          <p className="text-sm">{project.description}</p>
          <p className="text-sm text-gray-600 mt-1">
            Technologies: {project.technologies.join(", ")}
          </p>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-300 mb-2">
        Certifications
      </h2>
      <ul className="list-disc list-inside text-sm">
        {data.certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  </div>
);

const CreativeTemplate: React.FC<{ data: ResumeData }> = ({ data }) => (
  <div className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 font-sans">
    <header className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-4xl font-bold text-purple-600">{data.name}</h1>
        <p className="text-sm text-gray-600">{data.location}</p>
        {data.socialLinks && (
          <div className="flex justify-center space-x-4">
            {Object.entries(data.socialLinks)
              .filter(([platform, url]) => url) // Filter out any empty or undefined URLs
              .map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-700 capitalize"
                >
                  {platform}
                </a>
              ))}
          </div>
        )}
      </div>
      <div className="text-right">
        <p className="text-sm">{data.email}</p>
        <p className="text-sm">{data.phone}</p>
      </div>
    </header>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-pink-600 mb-2">About Me</h2>
      <p className="text-sm">{data.summary}</p>
    </section>
    <div className="flex flex-wrap -mx-2">
      <div className="w-full md:w-2/3 px-2">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            Experience
          </h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-purple-600">{exp.title}</h3>
              <p className="text-sm text-gray-600">
                {exp.company} | {exp.location}
              </p>
              <p className="text-sm text-gray-600">
                {exp.startDate} - {exp.endDate}
              </p>
              <ul className="list-disc list-inside text-sm mt-2">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.projects.map((project, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold text-purple-600">
                  {project.name}
                </h3>
                <p className="text-sm mt-2">{project.description}</p>
                <div className="mt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="w-full md:w-1/3 px-2">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-semibold text-purple-600">{edu.degree}</h3>
              <p className="text-sm text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-600">{edu.graduationDate}</p>
            </div>
          ))}
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Skills</h2>
          <div className="flex flex-wrap">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-200 text-purple-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            Certifications
          </h2>
          <ul className="list-disc list-inside text-sm">
            {data.certifications.map((cert, index) => (
              <li key={index} className="text-gray-700 mb-1">
                {cert}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </div>
);

const TechnicalTemplate: React.FC<{ data: ResumeData }> = ({ data }) => (
  <div className="p-6 bg-gray-100 font-mono">
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-blue-600">{data.name}</h1>
      <p className="text-sm text-gray-600">
        {data.email} | {data.phone} | {data.location}
      </p>
    </header>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 mb-2">
        // Summary
      </h2>
      <p className="text-sm">{data.summary}</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 mb-2">
        // Skills
      </h2>
      <div className="flex flex-wrap">
        {data.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-200 text-blue-700 px-2 py-1 rounded text-sm mr-2 mb-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 mb-2">
        // Experience
      </h2>
      {data.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{exp.title}</h3>
          <p className="text-sm text-gray-600">
            {exp.company} | {exp.location}
          </p>
          <p className="text-sm text-gray-600">
            {exp.startDate} - {exp.endDate}
          </p>
          <ul className="list-disc list-inside text-sm mt-2">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 mb-2">
        // Projects
      </h2>
      {data.projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{project.name}</h3>
          <p className="text-sm">{project.description}</p>
          <div className="mt-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="inline-block bg-gray-200 rounded px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 mb-2">
        // Education
      </h2>
      {data.education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{edu.degree}</h3>
          <p className="text-sm text-gray-600">
            {edu.institution} | {edu.location}
          </p>
          <p className="text-sm text-gray-600">
            Graduated: {edu.graduationDate}
          </p>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 mb-2">
        // Certifications
      </h2>
      <ul className="list-disc list-inside text-sm">
        {data.certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  </div>
);

const MinimalistTemplate: React.FC<{ data: ResumeData }> = ({ data }) => (
  <div className="p-6 max-w-4xl mx-auto bg-white">
    <header className="mb-6 border-b pb-4">
      <h1 className="text-3xl font-light text-gray-800 mb-2">{data.name}</h1>
      <p className="text-gray-600 text-sm">
        {data.email} | {data.phone} | {data.location}
      </p>
    </header>
    <section className="mb-6">
      <p className="text-gray-700">{data.summary}</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-light text-gray-800 mb-2 uppercase tracking-wide">
        Experience
      </h2>
      {data.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">{exp.title}</h3>
          <p className="text-gray-600 text-sm">
            {exp.company} | {exp.location} | {exp.startDate} - {exp.endDate}
          </p>
          <ul className="list-disc list-inside mt-2">
            {exp.description.map((desc, i) => (
              <li key={i} className="text-gray-700 text-sm">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-light text-gray-800 mb-2 uppercase tracking-wide">
        Education
      </h2>
      {data.education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="text-lg font-medium">{edu.degree}</h3>
          <p className="text-gray-600 text-sm">
            {edu.institution} | {edu.location} | Graduated: {edu.graduationDate}
          </p>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-light text-gray-800 mb-2 uppercase tracking-wide">
        Skills
      </h2>
      <p className="text-gray-700">{data.skills.join(", ")}</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-light text-gray-800 mb-2 uppercase tracking-wide">
        Projects
      </h2>
      {data.projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">{project.name}</h3>
          <p className="text-gray-700 text-sm">{project.description}</p>
          <p className="text-gray-600 text-sm mt-1">
            Technologies: {project.technologies.join(", ")}
          </p>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-light text-gray-800 mb-2 uppercase tracking-wide">
        Certifications
      </h2>
      <ul className="list-disc list-inside">
        {data.certifications.map((cert, index) => (
          <li key={index} className="text-gray-700 text-sm">
            {cert}
          </li>
        ))}
      </ul>
    </section>
  </div>
);

const ModernTemplate: React.FC<{ data: ResumeData }> = ({ data }) => (
  <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-xl">
    <header className="text-center mb-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.name}</h1>
      <p className="text-gray-600">
        {data.email} | {data.phone} | {data.location}
      </p>
    </header>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center">
        <DocumentTextIcon className="h-6 w-6 mr-2" />
        Summary
      </h2>
      <p className="text-gray-600">{data.summary}</p>
    </section>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center">
        <BriefcaseIcon className="h-6 w-6 mr-2" />
        Experience
      </h2>
      {data.experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-gray-600">
            {exp.company} | {exp.location}
          </p>
          <p className="text-gray-600">
            {exp.startDate} - {exp.endDate}
          </p>
          <ul className="list-disc list-inside mt-2">
            {exp.description.map((desc, i) => (
              <li key={i} className="text-gray-600">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center">
        <AcademicCapIcon className="h-6 w-6 mr-2" />
        Education
      </h2>
      {data.education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-gray-600">
            {edu.institution} | {edu.location}
          </p>
          <p className="text-gray-600">Graduated: {edu.graduationDate}</p>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center">
        <SparklesIcon className="h-6 w-6 mr-2" />
        Skills
      </h2>
      <div className="flex flex-wrap">
        {data.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center">
        <CodeBracketIcon className="h-6 w-6 mr-2" />
        Projects
      </h2>
      {data.projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-gray-600">{project.description}</p>
          <div className="mt-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm mr-2 mb-2 inline-block"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2 flex items-center">
        <NewspaperIcon className="h-6 w-6 mr-2" />
        Certifications
      </h2>
      <ul className="list-disc list-inside">
        {data.certifications.map((cert, index) => (
          <li key={index} className="text-gray-600 mb-1">
            {cert}
          </li>
        ))}
      </ul>
    </section>
  </div>
);

const ResumeTemplates: React.FC<Props> = ({ formData, template }) => {
  switch (template) {
    case "classic":
      return <AdvancedTemplate data={formData} />;
    case "modern":
      return <ModernTemplate data={formData} />;
    case "minimalist":
      return <MinimalistTemplate data={formData} />;
    case "professional":
      return <ProfessionalTemplate data={formData} />;
    case "creative":
      return <CreativeTemplate data={formData} />;
    case "technical":
      return <TechnicalTemplate data={formData} />;
    case "resume-ats":
      return <ResumeATS data={formData} />;
    case "sydney":
      return <SydneyResumeTemplate data={formData} />;
    case "resumeTemplateSales":
      return <ResumeTemplateSales />;
    case "resumeTemplateIt":
      return <ResumeTemplateIt />;

    default:
      return null;
  }
};

export default ResumeTemplates;
