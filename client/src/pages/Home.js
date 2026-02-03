import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFileAlt, FaRobot, FaArrowRight, FaBolt, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
  gap: 3rem;
  padding: 3rem 0 2rem;
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

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const HeroCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
  border: 1px solid rgba(148, 163, 184, 0.2);
`;

const HeroMetric = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #eef2f6;

  &:last-child {
    border-bottom: none;
  }
`;

const MetricLabel = styled.span`
  color: #64748b;
  font-weight: 500;
`;

const MetricValue = styled.span`
  font-weight: 600;
  color: #1e293b;
`;

const HighlightRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Highlight = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background-color: #eef2ff;
  color: #4338ca;
  font-weight: 500;
  font-size: 0.9rem;
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

const SecondaryButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.8rem 1.8rem;
  background-color: #ffffff;
  color: #4a6cf7;
  border-radius: 8px;
  font-weight: 500;
  border: 1px solid rgba(74, 108, 247, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #eef2ff;
    color: #3a50c5;
  }
`;

const CalloutSection = styled.section`
  margin-top: 4rem;
  background: linear-gradient(135deg, rgba(74, 108, 247, 0.12), rgba(151, 71, 255, 0.15));
  padding: 2.5rem;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  align-items: center;
`;

const CalloutText = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  p {
    color: #475569;
  }
`;

const StepsList = styled.div`
  display: grid;
  gap: 1rem;
`;

const StepItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);

  span {
    font-weight: 500;
    color: #1e293b;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroText>
          <HighlightRow>
            <Highlight><FaBolt /> AI-powered builder</Highlight>
            <Highlight><FaChartLine /> ATS score insights</Highlight>
            <Highlight><FaCheckCircle /> Ready-to-send templates</Highlight>
          </HighlightRow>
          <Title>AI-Powered Resume Builder</Title>
          <Subtitle>
            Create ATS-optimized resumes with our AI technology. Build standout content, track keyword alignment, and land more interviews faster.
          </Subtitle>
          <HighlightRow>
            <Button to="/resume-builder">
              Get Started <FaArrowRight />
            </Button>
            <SecondaryButton to="/ats-scorer">
              Analyze ATS Score <FaArrowRight />
            </SecondaryButton>
          </HighlightRow>
        </HeroText>
        <HeroCard>
          <h3>Live Resume Insights</h3>
          <p style={{ marginTop: '0.5rem', color: '#64748b' }}>
            See how your resume performs against real job descriptions.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <HeroMetric>
              <MetricLabel>Keyword Match</MetricLabel>
              <MetricValue>87%</MetricValue>
            </HeroMetric>
            <HeroMetric>
              <MetricLabel>Impact Statements</MetricLabel>
              <MetricValue>12 added</MetricValue>
            </HeroMetric>
            <HeroMetric>
              <MetricLabel>ATS Score</MetricLabel>
              <MetricValue>92/100</MetricValue>
            </HeroMetric>
          </div>
        </HeroCard>
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

      <CalloutSection>
        <CalloutText>
          <h2>Build a resume recruiters can’t ignore.</h2>
          <p>
            Our guided workflow turns your experience into achievement-focused stories and
            surfaces missing keywords before you apply.
          </p>
        </CalloutText>
        <StepsList>
          <StepItem>
            <FaCheckCircle color="#4a6cf7" />
            <span>Fill in your details and generate AI-powered summaries.</span>
          </StepItem>
          <StepItem>
            <FaCheckCircle color="#4a6cf7" />
            <span>Compare with the job description to unlock ATS insights.</span>
          </StepItem>
          <StepItem>
            <FaCheckCircle color="#4a6cf7" />
            <span>Download a polished resume ready for hiring teams.</span>
          </StepItem>
        </StepsList>
      </CalloutSection>
    </HomeContainer>
  );
};

export default Home;
