import { ResumeData } from "@/app/types";

const AdvancedTemplate: React.FC<{ data?: ResumeData }> = ({ data }) => (
  <div className="p-6 font-serif bg-gray-100">
    <header className="text-center mb-8 bg-white shadow-md rounded-lg p-6">
      <h1 className="text-4xl font-bold text-indigo-800 mb-2">
        {data?.name || "Your Name"}
      </h1>
      <p className="text-xl text-indigo-600 mb-2">
        {data?.title || "Your Title"}
      </p>
      <div className="flex justify-center space-x-4 text-sm text-gray-600">
        <p>{data?.email || "Email"}</p>
        <p>{data?.phone || "Phone"}</p>
        <p>{data?.location || "Location"}</p>
      </div>
      {data?.socialLinks && (
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
      <p className="text-gray-700 leading-relaxed">
        {data?.summary || "Your summary goes here."}
      </p>
    </section>

    <section className="mb-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 mb-4">
        PROFESSIONAL EXPERIENCE
      </h2>
      {data?.experience?.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold text-lg text-indigo-600">
            {exp.title || "Job Title"}
          </h3>
          <p className="text-gray-600 italic mb-2">
            {exp.company || "Company"} | {exp.startDate || "Start"} -{" "}
            {exp.endDate || "End"}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {exp.description?.map((desc, i) => (
              <li key={i}>{desc || "Description goes here."}</li>
            ))}
          </ul>
        </div>
      )) || <p>No experience data available.</p>}
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 mb-4">
          EDUCATION
        </h2>
        {data?.education?.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg text-indigo-600">
              {edu.degree || "Degree"}
            </h3>
            <p className="text-gray-700">{edu.institution || "Institution"}</p>
            <p className="text-gray-600">
              {edu.graduationDate || "Graduation Date"}
            </p>
          </div>
        )) || <p>No education data available.</p>}
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 mb-4">
          SKILLS
        </h2>
        <div className="flex flex-wrap gap-2">
          {data?.skills?.map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
            >
              {skill || "Skill"}
            </span>
          )) || <p>No skills data available.</p>}
        </div>
      </section>
    </div>

    {data?.projects && (
      <section className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 mb-4">
          PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg text-indigo-600 mb-2">
                {project.name || "Project Name"}
              </h3>
              <p className="text-gray-700 mb-2">
                {project.description || "Project description goes here."}
              </p>
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

    {data?.certifications && (
      <section className="mt-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-700 border-b-2 border-indigo-200 mb-4">
          CERTIFICATIONS
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {data.certifications.map((cert, index) => (
            <li key={index}>{cert || "Certification name"}</li>
          ))}
        </ul>
      </section>
    )}
  </div>
);

export default AdvancedTemplate;
