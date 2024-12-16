import { ResumeData } from "@/app/types";
import React from "react";

// interface ResumeData {
//   name: string;
//   title: string;
//   contact: {
//     address: string;
//     phone: string;
//     email: string;
//   };
//   profile: string;
//   employmentHistory: {
//     title: string;
//     company: string;
//     location: string;
//     startDate: string;
//     endDate: string;
//     responsibilities: string[];
//   }[];
//   education: {
//     degree: string;
//     institution: string;
//     location: string;
//     graduationDate: string;
//   }[];
//   skills: string[];
//   references: {
//     name: string;
//     title: string;
//     company: string;
//     contact: string;
//   }[];
// }

// interface SydneyResumeTemplateProps {
//   data: ResumeData;
// }

const SydneyResumeTemplate: React.FC<{ data?: ResumeData }> = ({ data }) => (
  <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg">
    <header className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-1">{data?.name}</h1>
      <p className="text-xl text-gray-600">{data?.title}</p>
    </header>

    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        {/* <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p>{data?.profile}</p>
        </section> */}

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Employment History</h2>
          {data?.experience.map((job, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium">{job.title}</h3>
              <p className="text-gray-600">
                {job.company}, {job.location}
              </p>
              <p className="text-sm text-gray-500">
                {job.startDate} - {job.endDate}
              </p>
              {/* <ul className="list-disc list-inside mt-2">
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
                {edu.institution}, {edu.location}
              </p>
              <p className="text-sm text-gray-500">
                Graduated: {edu.graduationDate}
              </p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">References</h2>
          {data?.references?.map((ref, index) => (
            <div key={index} className="mb-2">
              <p className="font-medium">{ref.name}</p>
              <p className="text-gray-600">
                {ref.title}, {ref.company}
              </p>
              <p className="text-sm">{ref.contact}</p>
            </div>
          ))}
        </section>
      </div>

      <div>
        {/* <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <p>{data?.contact.address}</p>
          <p>{data?.contact.phone}</p>
          <p>{data?.contact.email}</p>
        </section> */}

        <section>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            {data?.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default SydneyResumeTemplate;
