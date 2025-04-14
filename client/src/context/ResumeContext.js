import React, { createContext, useContext, useState } from 'react';

// Initial state for resume data
const initialResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: ''
  },
  summary: '',
  experience: [
    {
      id: new Date().getTime(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }
  ],
  education: [
    {
      id: new Date().getTime(),
      institution: '',
      degree: '',
      fieldOfStudy: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    }
  ],
  skills: [],
  projects: [],
  certifications: [],
  languages: []
};

// Create the context
const ResumeContext = createContext();

// Context provider component
export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [generatedResume, setGeneratedResume] = useState('');
  const [atsScore, setAtsScore] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Update personal information
  const updatePersonalInfo = (field, value) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value
      }
    });
  };

  // Update summary
  const updateSummary = (value) => {
    setResumeData({
      ...resumeData,
      summary: value
    });
  };

  // Add work experience
  const addExperience = () => {
    const newExperience = {
      id: new Date().getTime(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };

    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, newExperience]
    });
  };

  // Update work experience
  const updateExperience = (id, field, value) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  // Remove work experience
  const removeExperience = (id) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter(exp => exp.id !== id)
    });
  };

  // Add education
  const addEducation = () => {
    const newEducation = {
      id: new Date().getTime(),
      institution: '',
      degree: '',
      fieldOfStudy: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    };

    setResumeData({
      ...resumeData,
      education: [...resumeData.education, newEducation]
    });
  };

  // Update education
  const updateEducation = (id, field, value) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  // Remove education
  const removeEducation = (id) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter(edu => edu.id !== id)
    });
  };

  // Update skills
  const updateSkills = (skills) => {
    setResumeData({
      ...resumeData,
      skills
    });
  };

  // Reset form
  const resetForm = () => {
    setResumeData(initialResumeData);
    setGeneratedResume('');
    setAtsScore(null);
  };

  // Generate resume using the API
  const generateResume = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('http://localhost:5000/api/generate-resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resumeData }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate resume');
      }

      setGeneratedResume(data.resume);
      return data.resume;
    } catch (error) {
      setError(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Calculate ATS score
  const calculateATSScore = async (resumeText, jobDesc) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('http://localhost:5000/api/calculate-ats-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resumeText: resumeText || generatedResume,
          jobDescription: jobDesc || jobDescription,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to calculate ATS score');
      }

      setAtsScore(data.atsData);
      return data.atsData;
    } catch (error) {
      setError(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        generatedResume,
        atsScore,
        jobDescription,
        loading,
        error,
        updatePersonalInfo,
        updateSummary,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        updateSkills,
        generateResume,
        calculateATSScore,
        setJobDescription,
        resetForm,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

// Custom hook to use the resume context
export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

export default ResumeContext;
