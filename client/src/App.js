import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';
import ATSScorer from './pages/ATSScorer';
import Preview from './pages/Preview';
import GlobalStyles from './styles/GlobalStyles';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/ats-scorer" element={<ATSScorer />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
