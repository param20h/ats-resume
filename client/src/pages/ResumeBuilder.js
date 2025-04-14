import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaBriefcase, FaGraduationCap, FaLaptopCode, FaPlus, FaTrash } from 'react-icons/fa';
import Card from '../components/UI/Card';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { useResume } from '../context/ResumeContext';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #4a6cf7;
  font-weight: 600;
  font-size: 1.25rem;
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 2}, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ItemTitle = styled.h4`
  margin: 0;
  color: #333;
  font-size: 1.1rem;
`;

const ChipInput = styled.div`
  margin-top: 0.5rem;
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Chip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  background-color: #f0f4ff;
  border-radius: 4px;
  font-size: 0.875rem;

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: #ff5470;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const {
    resumeData,
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
    resetForm,
    loading
  } = useResume();

  const [skillInput, setSkillInput] = useState('');
  const [activeSection, setActiveSection] = useState('personal');

  // Handle skill input
  const handleAddSkill = (e) => {
    e.preventDefault();
    if (skillInput.trim() && !resumeData.skills.includes(skillInput.trim())) {
      updateSkills([...resumeData.skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skill) => {
    updateSkills(resumeData.skills.filter(s => s !== skill));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resume = await generateResume();
    if (resume) {
      navigate('/preview');
    }
  };

  return (
    <PageContainer>
      <PageTitle>Create Your Resume</PageTitle>

      <Card>
        <form onSubmit={handleSubmit}>
          {activeSection === 'personal' && (
            <FormSection>
              <SectionTitle>
                <FaUser /> Personal Information
              </SectionTitle>

              <FieldRow>
                <Input
                  label="Full Name"
                  id="name"
                  value={resumeData.personalInfo.name}
                  onChange={(e) => updatePersonalInfo('name', e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </FieldRow>

              <FieldRow>
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => updatePersonalInfo('email', e.target.value)}
                  placeholder="john.doe@example.com"
                  required
                />
                <Input
                  label="Phone"
                  id="phone"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                  placeholder="(123) 456-7890"
                />
              </FieldRow>

              <FieldRow>
                <Input
                  label="Location"
                  id="location"
                  value={resumeData.personalInfo.location}
                  onChange={(e) => updatePersonalInfo('location', e.target.value)}
                  placeholder="New York, NY"
                />
                <Input
                  label="LinkedIn"
                  id="linkedin"
                  value={resumeData.personalInfo.linkedin}
                  onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                  placeholder="linkedin.com/in/johndoe"
                />
              </FieldRow>

              <FieldRow columns={1}>
                <Input
                  label="Professional Summary"
                  id="summary"
                  multiline
                  rows={4}
                  value={resumeData.summary}
                  onChange={(e) => updateSummary(e.target.value)}
                  placeholder="Briefly describe your professional background and key strengths..."
                />
              </FieldRow>

              <Button
                type="button"
                onClick={() => setActiveSection('experience')}
                fullWidth
              >
                Next: Work Experience
              </Button>
            </FormSection>
          )}

          {activeSection === 'experience' && (
            <FormSection>
              <SectionTitle>
                <FaBriefcase /> Work Experience
              </SectionTitle>

              {resumeData.experience.map((exp, index) => (
                <ExperienceItem key={exp.id}>
                  <ItemHeader>
                    <ItemTitle>{exp.company || `Experience ${index + 1}`}</ItemTitle>
                    {resumeData.experience.length > 1 && (
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeExperience(exp.id)}
                      >
                        <FaTrash size={12} />
                      </Button>
                    )}
                  </ItemHeader>

                  <FieldRow>
                    <Input
                      label="Company"
                      id={`company-${exp.id}`}
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                      placeholder="Company Name"
                      required
                    />
                    <Input
                      label="Position"
                      id={`position-${exp.id}`}
                      value={exp.position}
                      onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                      placeholder="Job Title"
                      required
                    />
                  </FieldRow>

                  <FieldRow>
                    <Input
                      label="Location"
                      id={`exp-location-${exp.id}`}
                      value={exp.location}
                      onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                      placeholder="City, State"
                    />
                  </FieldRow>

                  <FieldRow>
                    <Input
                      label="Start Date"
                      id={`exp-start-${exp.id}`}
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                      placeholder="MM/YYYY"
                      required
                    />
                    <Input
                      label="End Date"
                      id={`exp-end-${exp.id}`}
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                      placeholder="MM/YYYY or Present"
                      required
                    />
                  </FieldRow>

                  <FieldRow columns={1}>
                    <Input
                      label="Description"
                      id={`exp-desc-${exp.id}`}
                      multiline
                      rows={3}
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                      placeholder="Describe your responsibilities and achievements..."
                    />
                  </FieldRow>
                </ExperienceItem>
              ))}

              <Button
                type="button"
                variant="secondary"
                onClick={addExperience}
                style={{ marginBottom: '1.5rem' }}
              >
                <FaPlus size={12} style={{ marginRight: '0.5rem' }} /> Add Another Experience
              </Button>

              <Button
                type="button"
                onClick={() => setActiveSection('education')}
                fullWidth
              >
                Next: Education
              </Button>
            </FormSection>
          )}

          {activeSection === 'education' && (
            <FormSection>
              <SectionTitle>
                <FaGraduationCap /> Education
              </SectionTitle>

              {resumeData.education.map((edu, index) => (
                <ExperienceItem key={edu.id}>
                  <ItemHeader>
                    <ItemTitle>{edu.institution || `Education ${index + 1}`}</ItemTitle>
                    {resumeData.education.length > 1 && (
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => removeEducation(edu.id)}
                      >
                        <FaTrash size={12} />
                      </Button>
                    )}
                  </ItemHeader>

                  <FieldRow>
                    <Input
                      label="Institution"
                      id={`institution-${edu.id}`}
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                      placeholder="University or School Name"
                      required
                    />
                    <Input
                      label="Location"
                      id={`edu-location-${edu.id}`}
                      value={edu.location}
                      onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                      placeholder="City, State"
                    />
                  </FieldRow>

                  <FieldRow>
                    <Input
                      label="Degree"
                      id={`degree-${edu.id}`}
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                      placeholder="Bachelor of Science"
                      required
                    />
                    <Input
                      label="Field of Study"
                      id={`field-${edu.id}`}
                      value={edu.fieldOfStudy}
                      onChange={(e) => updateEducation(edu.id, 'fieldOfStudy', e.target.value)}
                      placeholder="Computer Science"
                      required
                    />
                  </FieldRow>

                  <FieldRow>
                    <Input
                      label="Start Date"
                      id={`edu-start-${edu.id}`}
                      value={edu.startDate}
                      onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                      placeholder="MM/YYYY"
                      required
                    />
                    <Input
                      label="End Date"
                      id={`edu-end-${edu.id}`}
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                      placeholder="MM/YYYY or Expected"
                      required
                    />
                  </FieldRow>
                </ExperienceItem>
              ))}

              <Button
                type="button"
                variant="secondary"
                onClick={addEducation}
                style={{ marginBottom: '1.5rem' }}
              >
                <FaPlus size={12} style={{ marginRight: '0.5rem' }} /> Add Another Education
              </Button>

              <Button
                type="button"
                onClick={() => setActiveSection('skills')}
                fullWidth
              >
                Next: Skills
              </Button>
            </FormSection>
          )}

          {activeSection === 'skills' && (
            <FormSection>
              <SectionTitle>
                <FaLaptopCode /> Skills
              </SectionTitle>

              <ChipInput>
                <form onSubmit={handleAddSkill}>
                  <FieldRow>
                    <Input
                      label="Add Skills"
                      id="skill"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      placeholder="Enter a skill and press Enter"
                    />
                    <Button
                      type="submit"
                      onClick={handleAddSkill}
                      style={{ alignSelf: 'flex-end' }}
                    >
                      Add Skill
                    </Button>
                  </FieldRow>
                </form>

                <ChipContainer>
                  {resumeData.skills.map((skill, index) => (
                    <Chip key={index}>
                      {skill}
                      <button type="button" onClick={() => handleRemoveSkill(skill)}>
                        <FaTrash />
                      </button>
                    </Chip>
                  ))}
                </ChipContainer>
              </ChipInput>

              <ButtonsContainer>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveSection('personal')}
                >
                  Back to Beginning
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Generating...' : 'Generate Resume'}
                </Button>
              </ButtonsContainer>
            </FormSection>
          )}
        </form>
      </Card>
    </PageContainer>
  );
};

export default ResumeBuilder;
