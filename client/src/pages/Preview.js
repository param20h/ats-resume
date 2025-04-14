import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaDownload, FaEdit, FaRobot } from 'react-icons/fa';
import Pdf from 'react-to-pdf';
import Card from '../components/UI/Card';
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ResumeContainer = styled.div`
  background-color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  padding: 2rem;
  margin-bottom: 2rem;
  min-height: 800px;
`;

const NoResumeMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;

  h3 {
    margin-bottom: 1.5rem;
    color: #555;
  }
`;

const Preview = () => {
  const navigate = useNavigate();
  const resumeRef = useRef();
  const { generatedResume } = useResume();

  if (!generatedResume) {
    return (
      <PageContainer>
        <PageTitle>Resume Preview</PageTitle>
        <Card>
          <NoResumeMessage>
            <h3>No resume has been generated yet!</h3>
            <Button onClick={() => navigate('/resume-builder')}>
              Create Resume
            </Button>
          </NoResumeMessage>
        </Card>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageTitle>Resume Preview</PageTitle>

      <ButtonGroup>
        <Button onClick={() => navigate('/resume-builder')}>
          <FaEdit style={{ marginRight: '8px' }} /> Edit Resume
        </Button>

        <Pdf targetRef={resumeRef} filename="resume.pdf" options={{ orientation: 'portrait' }}>
          {({ toPdf }) => (
            <Button onClick={toPdf}>
              <FaDownload style={{ marginRight: '8px' }} /> Download PDF
            </Button>
          )}
        </Pdf>

        <Button
          variant="secondary"
          onClick={() => navigate('/ats-scorer')}
        >
          <FaRobot style={{ marginRight: '8px' }} /> Check ATS Score
        </Button>
      </ButtonGroup>

      <ResumeContainer ref={resumeRef}>
        <div dangerouslySetInnerHTML={{ __html: generatedResume }} />
      </ResumeContainer>
    </PageContainer>
  );
};

export default Preview;
