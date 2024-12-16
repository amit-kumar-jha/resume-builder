"use client";
import { useState } from "react";

const ResumeForm: React.FC = () => {
  const [resumeData, setResumeData] = useState<string>("");
  const [generatedResume, setGeneratedResume] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: resumeData }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate resume");
      }

      const data = await response.json();
      setGeneratedResume(data.text);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={resumeData}
          onChange={(e) => setResumeData(e.target.value)}
          placeholder="Enter your resume details"
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
          {loading ? "Generating..." : "Generate Resume"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div>
        <h2>Generated Resume</h2>
        <p>{generatedResume}</p>
      </div>
    </div>
  );
};

export default ResumeForm;
