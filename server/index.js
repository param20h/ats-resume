const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// API Routes
app.post('/api/generate-resume', async (req, res) => {
  try {
    const { resumeData } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Create a prompt for resume generation
    const prompt = `Generate a professional resume in HTML format based on these details:
      Name: ${resumeData.personalInfo.name}
      Email: ${resumeData.personalInfo.email}
      Phone: ${resumeData.personalInfo.phone}
      Location: ${resumeData.personalInfo.location}

      Professional Summary: ${resumeData.summary}

      Work Experience:
      ${resumeData.experience.map(exp =>
        `Company: ${exp.company}
        Position: ${exp.position}
        Duration: ${exp.startDate} - ${exp.endDate}
        Description: ${exp.description}`
      ).join('\n\n')}

      Education:
      ${resumeData.education.map(edu =>
        `Institution: ${edu.institution}
        Degree: ${edu.degree}
        Field: ${edu.fieldOfStudy}
        Duration: ${edu.startDate} - ${edu.endDate}`
      ).join('\n\n')}

      Skills:
      ${resumeData.skills.join(', ')}

      Make it professional, concise, and well-structured. Only return the HTML code without any markdown or additional text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const resumeHTML = response.text();

    res.json({ success: true, resume: resumeHTML });
  } catch (error) {
    console.error('Error generating resume:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/calculate-ats-score', async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Create a prompt for ATS scoring
    const prompt = `You are an Applicant Tracking System (ATS) algorithm. Analyze the following resume against the job description provided.

    Resume:
    ${resumeText}

    Job Description:
    ${jobDescription}

    Provide an ATS compatibility score out of 100. Also include:
    1. A brief explanation of the score
    2. Keywords found in the resume that match the job description
    3. Missing keywords that should be added
    4. Suggestions to improve the score

    Format your response as JSON with the following structure:
    {
      "score": number,
      "explanation": "string",
      "matchedKeywords": ["string"],
      "missingKeywords": ["string"],
      "suggestions": ["string"]
    }

    Only return valid JSON without any additional text or markdown.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const atsAnalysis = response.text();

    // Parse the response as JSON
    const atsData = JSON.parse(atsAnalysis);

    res.json({ success: true, atsData });
  } catch (error) {
    console.error('Error calculating ATS score:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
