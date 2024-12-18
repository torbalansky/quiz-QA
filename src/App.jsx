import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Quiz from './components/QuizSTLC';
import QuizP from './components/QuizPrinciples';
import { Element } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MoodTracker from './components/MoodTracker';
import AgeCategoryEstimator from './components/AgeEstimator';
import Success from './components/success';
import BugReport from './components/BugReport';
import AgeCategoryEstimatorV from './components/AgeEstimatorFix';
import SuccessFix from './components/successfix';
import Creditrisk from './components/Creditrisk';
import SuccessCredit from './components/successcredit';
import Metrics from './components/metrics';
import GeneralQuiz from './components/GeneralQuiz';
import MoodTrackerTestPlan from './components/MoodTrackerTestPlan';
import TDDQuizGame from './components/TDDQuizGame';
import JestIntro from './components/JestIntro';
import AIinQA from './components/AIinQA';
import BoxTesting from './components/BoxTesting';
import BlackBoxTesting from './components/BlackBoxTesting';
import WhiteBoxTesting from './components/WhiteBoxTesting';
import WBChatbotDocs from './components/WBChatbotDocs';
import APITesting from './components/ApiTesting';
import PostmanTesting from './components/PostmanTesting';
import CrossBrowserTesting from './components/CrossBrowserTesting';
import CypressQuiz from './components/CypressQuiz';
import LevelsTesting from './components/LevelsTesting';

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
      once: true,
      mirror: false,
    });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Element name="home">
                <Home />
              </Element>
            </>
          }
        />
        <Route path="/quizstlc" element={<Quiz />} />
        <Route path="/quizprinciples" element={<QuizP />} />
        <Route path="/ageestimator" element={<AgeCategoryEstimator />} />
        <Route path="/mood" element={<MoodTracker />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="/successfix" element={<SuccessFix />} />
        <Route path="/successcredit" element={<SuccessCredit />} />
        <Route path="/bugreport" element={<BugReport />} />
        <Route path="/ageestimatorv" element={<AgeCategoryEstimatorV />} />
        <Route path="/creditrisk" element={<Creditrisk />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/morequiza" element={<GeneralQuiz />} />
        <Route path="/testplan" element={<MoodTrackerTestPlan />} />
        <Route path="/tdd" element={<TDDQuizGame />} />
        <Route path="/jestintro" element={<JestIntro />} />
        <Route path="/ai-qa" element={<AIinQA />} />
        <Route path="/box-testing" element={<BoxTesting />} />
        <Route path="/black-box-testing" element={<BlackBoxTesting />} />
        <Route path="/white-box-testing" element={<WhiteBoxTesting />} />
        <Route path="/wb-chatbot-docs" element={<WBChatbotDocs />} />
        <Route path="/api-testing" element={<APITesting />} />
        <Route path="/postman-testing" element={<PostmanTesting />} />
        <Route path="/crossbrowser-testing" element={<CrossBrowserTesting />} />
        <Route path="/cypress-quiz" element={<CypressQuiz />} />
        <Route path="/levels-testing" element={<LevelsTesting />} />
      </Routes>
    </Router>
  );
};

export default App;
