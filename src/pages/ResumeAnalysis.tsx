import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LearningResource {
  title: string;
  description: string;
  url: string;
}

interface ResumeAnalysis {
  strengths: string[];
  weaknesses: string[];
  suggestedSkills: string[];
  jobFitSummary: string;
  learningResources: LearningResource[];
}

const defaultAnalysis: ResumeAnalysis = {
  strengths: [],
  weaknesses: [],
  suggestedSkills: [],
  jobFitSummary: "",
  learningResources: []
};

const ResumeDetails = () => {
  const location = useLocation();
  const [analysis, setAnalysis] = useState<ResumeAnalysis>(defaultAnalysis);
  const navigate = useNavigate();

  useEffect(() => {
    const stateAnalysis = location.state?.analysis;
    const stored = localStorage.getItem("resumeAnalysis");

    if (stateAnalysis) {
      setAnalysis(stateAnalysis);
      localStorage.setItem("resumeAnalysis", JSON.stringify(stateAnalysis));
    } else if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setAnalysis(parsed);
      } catch (e) {
        console.error("Failed to parse local storage", e);
      }
    }
  }, [location.state]);

  const renderList = (title: string, items?: string[]) => (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {items && items.length > 0 ? (
        <ul className="list-disc list-inside text-gray-700">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No data available</p>
      )}
    </div>
  );

  const renderResources = () => (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Learning Resources</h3>
      {analysis.learningResources.length > 0 ? (
        <ul className="space-y-3">
          {analysis.learningResources.map((res, idx) => (
            <li key={idx} className="text-gray-700 border p-3 rounded-md">
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                {res.title}
              </a>
              <p className="text-sm text-gray-600">{res.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No learning resources available</p>
      )}
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Resume Analysis Report</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {renderList("Strengths", analysis.strengths)}
          {renderList("Weaknesses", analysis.weaknesses)}
          {renderList("Suggested Skills", analysis.suggestedSkills)}
          {renderResources()}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Job Fit Summary</h3>
        <p className="text-gray-700">
          {analysis.jobFitSummary || "No summary available."}
        </p>
      </div>
      <div className="mt-8">
        <Button 
          onClick={() => navigate('/')} 
          className="cursor-pointer"
        >
          Back To HOME
        </Button>
      </div>
    </div>
  );
};

export default ResumeDetails;