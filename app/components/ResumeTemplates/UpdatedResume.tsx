import { ResumeData } from "@/app/types";
import React from "react";

const ResumeATS: React.FC<{ data?: ResumeData }> = ({ data }) => (
  <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg">
    <header className="mb-6">
      <h1 className="text-3xl font-bold">{data?.name}</h1>
      <p className="text-gray-600">
        {data?.email} | {data?.phone}
      </p>
    </header>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
      <p>{data?.summary}</p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
      {data?.experience.map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium">{job.title}</h3>
          <p className="text-gray-600">
            {job.company} | {job.startDate} - {job.endDate}
          </p>
          {/* <ul className="list-disc list-inside">
              {job.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul> */}
        </div>
      ))}
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Education</h2>
      {data?.education.map((edu, index) => (
        <div key={index} className="mb-2">
          <h3 className="text-lg font-medium">{edu.degree}</h3>
          <p className="text-gray-600">
            {edu.institution} | Graduated: {edu.graduationDate}
          </p>
        </div>
      ))}
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc list-inside">
        {data?.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  </div>
);

export default ResumeATS;
