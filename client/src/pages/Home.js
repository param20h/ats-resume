import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFileAlt, FaRobot, FaArrowRight } from 'react-icons/fa';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 0;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #4a6cf7, #9747ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  max-width: 700px;
  margin-bottom: 2.5rem;
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f5f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #4a6cf7;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.8rem 1.8rem;
  background-color: #4a6cf7;
  color: #fff;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a50c5;
    color: #fff;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>AI-Powered Resume Builder</Title>
        <Subtitle>
          Create ATS-optimized resumes with our AI technology. Get real-time feedback and improve your chances of landing your dream job.
        </Subtitle>
        <Button to="/resume-builder">
          Get Started <FaArrowRight />
        </Button>
      </HeroSection>

      <FeaturesSection>
        <FeatureCard>
          <FeatureIcon>
            <FaFileAlt size={28} />
          </FeatureIcon>
          <FeatureTitle>AI Resume Generator</FeatureTitle>
          <FeatureDescription>
            Our AI assistant helps you create professional, tailored resumes instantly.
          </FeatureDescription>
          <Button to="/resume-builder">
            Build Resume <FaArrowRight size={14} />
          </Button>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FaRobot size={28} />
          </FeatureIcon>
          <FeatureTitle>ATS Score Analysis</FeatureTitle>
          <FeatureDescription>
            Check how well your resume will perform with Applicant Tracking Systems.
          </FeatureDescription>
          <Button to="/ats-scorer">
            Check ATS Score <FaArrowRight size={14} />
          </Button>
        </FeatureCard>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default Home;
