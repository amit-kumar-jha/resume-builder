import React from "react";
import {
  ResumeData,
  ExperienceItem,
  EducationItem,
  ProjectItem,
} from "../types";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

interface Props {
  formData: ResumeData;
  setFormData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const ResumeForm: React.FC<Props> = ({ formData, setFormData }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: "skills" | "certifications"
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [field]: prevData[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: keyof ExperienceItem
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      experience: prevData.experience.map((exp, i) =>
        i === index
          ? {
              ...exp,
              [field]: field === "description" ? value.split("\n") : value,
            }
          : exp
      ),
    }));
  };

  const handleEducationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof EducationItem
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      education: prevData.education.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const handleProjectChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: keyof ProjectItem
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      projects: prevData.projects.map((proj, i) =>
        i === index
          ? {
              ...proj,
              [field]:
                field === "technologies"
                  ? value.split(",").map((tech) => tech.trim())
                  : value,
            }
          : proj
      ),
    }));
  };

  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        {
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: [""],
        },
      ],
    }));
  };

  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        { degree: "", institution: "", location: "", graduationDate: "" },
      ],
    }));
  };

  const addProject = () => {
    setFormData((prevData) => ({
      ...prevData,
      projects: [
        ...prevData.projects,
        { name: "", description: "", technologies: [""] },
      ],
    }));
  };

  const handleSocialLinkChange =
    (platform: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        socialLinks: {
          ...prevData.socialLinks,
          [platform]: value,
        },
      }));
    };

  return (
    <form className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={formData.summary}
          onChange={handleChange}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          rows={3}
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Social Links</h3>
        <div>
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={formData.socialLinks.linkedin}
            onChange={handleSocialLinkChange("linkedin")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <input
            type="url"
            name="github"
            placeholder="GitHub URL"
            value={formData.socialLinks.github}
            onChange={handleSocialLinkChange("github")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <input
            type="url"
            name="twitter"
            placeholder="Twitter URL"
            value={formData.socialLinks.twitter}
            onChange={handleSocialLinkChange("twitter")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Experience</h3>
        {formData.experience.map((exp, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
            <input
              type="text"
              placeholder="Job Title"
              value={exp.title}
              onChange={(e) => handleExperienceChange(e, index, "title")}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={(e) => handleExperienceChange(e, index, "company")}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={exp.location}
              onChange={(e) => handleExperienceChange(e, index, "location")}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) => handleExperienceChange(e, index, "startDate")}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => handleExperienceChange(e, index, "endDate")}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Job Description"
              value={exp.description.join("\n")}
              onChange={(e) => handleExperienceChange(e, index, "description")}
              className="w-full p-2 border rounded"
              rows={3}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addExperience}
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
        >
          <PlusCircleIcon className="h-5 w-5 mr-2" />
          Add Experience
        </button>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleEducationChange(e, index, "degree")}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) => handleEducationChange(e, index, "institution")}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Location"
              value={edu.location}
              onChange={(e) => handleEducationChange(e, index, "location")}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Graduation Date"
              value={edu.graduationDate}
              onChange={(e) =>
                handleEducationChange(e, index, "graduationDate")
              }
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addEducation}
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
        >
          <PlusCircleIcon className="h-5 w-5 mr-2" />
          Add Education
        </button>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Skills</h3>
        {formData.skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            placeholder="Skill"
            value={skill}
            onChange={(e) => handleArrayChange(e, index, "skills")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          />
        ))}
        <button
          type="button"
          onClick={() =>
            setFormData((prevData) => ({
              ...prevData,
              skills: [...prevData.skills, ""],
            }))
          }
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
        >
          <PlusCircleIcon className="h-5 w-5 mr-2" />
          Add Skill
        </button>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Projects</h3>
        {formData.projects.map((project, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
            <input
              type="text"
              placeholder="Project Name"
              value={project.name}
              onChange={(e) => handleProjectChange(e, index, "name")}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Project Description"
              value={project.description}
              onChange={(e) => handleProjectChange(e, index, "description")}
              className="w-full p-2 border rounded"
              rows={3}
            />
            <input
              type="text"
              placeholder="Link"
              value={project.link}
              onChange={(e) => handleProjectChange(e, index, "link")}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Technologies (comma-separated)"
              value={project.technologies.join(", ")}
              onChange={(e) => handleProjectChange(e, index, "technologies")}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addProject}
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
        >
          <PlusCircleIcon className="h-5 w-5 mr-2" />
          Add Project
        </button>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Certifications</h3>
        {formData.certifications.map((cert, index) => (
          <input
            key={index}
            type="text"
            placeholder="Certification"
            value={cert}
            onChange={(e) => handleArrayChange(e, index, "certifications")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          />
        ))}
        <button
          type="button"
          onClick={() =>
            setFormData((prevData) => ({
              ...prevData,
              certifications: [...prevData.certifications, ""],
            }))
          }
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
        >
          <PlusCircleIcon className="h-5 w-5 mr-2" />
          Add Certification
        </button>
      </div>
    </form>
  );
};

export default ResumeForm;
