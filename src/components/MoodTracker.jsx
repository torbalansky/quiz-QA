import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { documentationMoodTracker } from "../Data/Data";
import MoodTrackerTestPlan from "./MoodTrackerTestPlan";
import { useNavigate } from 'react-router-dom';

const MoodTracker = () => {
  const navigate = useNavigate();

  const mockMoods = [
    { date: new Date(2024, 10, 18), mood: "Sad", value: 2 },
    { date: new Date(2024, 10, 19), mood: "Happy", value: 4 },
    { date: new Date(2024, 10, 20), mood: "Happy", value: 4 },
    { date: new Date(2024, 10, 21), mood: "Tired", value: 3 },
    { date: new Date(2024, 10, 22), mood: "Happy", value: 4 },
    { date: new Date(2024, 10, 23), mood: "Angry", value: 1 },
    { date: new Date(2024, 10, 24), mood: "Sad", value: 2 },
  ];

  const [moods, setMoods] = useState(mockMoods);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [recommendation, setRecommendation] = useState("");
  const [testScenarios, setTestScenarios] = useState([]);
  const [testCases, setTestCases] = useState([]);
  const [newScenario, setNewScenario] = useState({
    title: "",
    description: "",
    preconditions: "",
    steps: "",
    expectedResult: "",
  });
  const [editingScenarioIndex, setEditingScenarioIndex] = useState(null);
  const [editingCaseIndex, setEditingCaseIndex] = useState(null);

  const [newCase, setNewCase] = useState({
    id: "",
    title: "",
    description: "",
    steps: "",
    expectedOutcome: "",
    passFail: "",
  });

  const moodOptions = [
    { emoji: "😃", label: "Happy", value: 4, rec: "Watch a funny video on YouTube!" },
    { emoji: "😔", label: "Sad", value: 2, rec: "Listen to calming music on Spotify." },
    { emoji: "😡", label: "Angry", value: 1, rec: "Try a quick meditation session." },
    { emoji: "😴", label: "Tired", value: 3, rec: "Take a short nap or a coffee break." },
  ];

  useEffect(() => {
    const sadnessOnMondays = moods
      .filter((entry) => new Date(entry.date).getDay() === 1 && entry.mood === "Sad")
      .length;

    if (sadnessOnMondays >= 3) {
      setRecommendation("Try setting a motivational playlist for Mondays!");
    }
  }, [moods]);

  const logMood = (mood) => {
    const existingMoodIndex = moods.findIndex((entry) => entry.date.toDateString() === selectedDate.toDateString());
    
    if (existingMoodIndex !== -1) {
      const updatedMoods = [...moods];
      updatedMoods[existingMoodIndex] = { ...updatedMoods[existingMoodIndex], mood: mood.label, value: mood.value };
      setMoods(updatedMoods);
    } else {
      const newMood = { date: selectedDate, mood: mood.label, value: mood.value };
      setMoods([...moods, newMood]);
    }
  
    setRecommendation(mood.rec);
  };
  

  const tileContent = ({ date }) => {
    const moodForDate = moods.find((entry) => entry.date.toDateString() === date.toDateString());
    return moodForDate ? <span>{moodOptions.find((m) => m.label === moodForDate.mood)?.emoji}</span> : null;
  };

  const moodData = [["Date", "Mood"]];
  moods.forEach((entry) => moodData.push([entry.date.toLocaleDateString(), entry.value]));

  const handleAddScenario = () => {
    if (newScenario.title.trim()) {
      setTestScenarios([...testScenarios, { ...newScenario }]);
      setNewScenario({
        title: "",
        description: "",
        preconditions: "",
        steps: "",
        expectedResult: "",
      });
    }
  };

  const handleEditScenario = (index, key, value) => {
    const updatedScenarios = [...testScenarios];
    updatedScenarios[index][key] = value;
    setTestScenarios(updatedScenarios);
  };

  const handleDeleteScenario = (index) => {
    const updatedScenarios = [...testScenarios];
    updatedScenarios.splice(index, 1);
    setTestScenarios(updatedScenarios);
  };

  const generateTestCaseId = () => {
    const year = new Date().getFullYear();
    const timestamp = Date.now();
    return `TC-${year}-${timestamp}`;
  };

  const handleAddCase = () => {
    if (newCase.title.trim()) {
      const newId = generateTestCaseId();
      setTestCases([...testCases, { ...newCase, id: newId }]);
      setNewCase({
        id: "",
        title: "",
        description: "",
        steps: "",
        expectedOutcome: "",
        passFail: "",
      });
    }
  };

  const handleEditCase = (index, key, value) => {
    const updatedCases = [...testCases];
    updatedCases[index][key] = value;
    setTestCases(updatedCases);
  };

  const handleDeleteCase = (index) => {
    const updatedCases = [...testCases];
    updatedCases.splice(index, 1);
    setTestCases(updatedCases);
  };

  const getMoodStats = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const moodValues = {
      "Happy": 4,
      "Sad": 2,
      "Angry": 1,
      "Tired": 3,
    };
  
    const stats = {};
  
    moods.forEach((entry) => {
      const day = days[new Date(entry.date).getDay()];
      if (!stats[day]) {
        stats[day] = [];
      }
      stats[day].push(entry.mood);
    });
  
    const averageMoods = {};
    Object.keys(stats).forEach((day) => {
      const moodsForDay = stats[day];
      const averageMoodValue = moodsForDay.reduce((total, mood) => total + moodValues[mood], 0) / moodsForDay.length;
      const averageMood = Object.keys(moodValues).reduce((prev, curr) => {
        return Math.abs(moodValues[curr] - averageMoodValue) < Math.abs(moodValues[prev] - averageMoodValue) ? curr : prev;
      });
  
      averageMoods[day] = averageMood;
    });
  
    return averageMoods;
  };
  

  const handlePrint = () => {
    const printContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1, h2 { color: #2c5282; }
            .section { margin-bottom: 30px; }
            .item { margin: 10px 0; }
            ul { margin: 10px 0; padding-left: 20px; }
          </style>
        </head>
        <body>
          <h1>Test Plan - Mood Tracker</h1>

          <div class="section">
            <h2>1. Introduction</h2>
            <div class="item"><strong>Purpose:</strong> ${testPlan.introduction.purpose}</div>
            <div class="item"><strong>Scope:</strong> ${testPlan.introduction.scope}</div>
          </div>

          <div class="section">
            <h2>2. Test Items</h2>
            <ul>
              ${testPlan.testItems.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>

          <div class="section">
            <h2>3. Testing Approach</h2>
            <div class="item"><strong>Strategy:</strong> ${testPlan.approach.strategy}</div>
          </div>

          <div class="section">
            <h2>4. Environment Setup</h2>
            <div class="item"><strong>Hardware:</strong> ${testPlan.environment.hardware}</div>
            <div class="item"><strong>Software:</strong> ${testPlan.environment.software}</div>
            <div class="item"><strong>Other:</strong> ${testPlan.environment.other}</div>
          </div>

          <div class="section">
            <h2>5. Schedule</h2>
            <div class="item"><strong>Start Date:</strong> ${testPlan.schedule.startDate}</div>
            <div class="item"><strong>End Date:</strong> ${testPlan.schedule.endDate}</div>
          </div>

          <div class="section">
            <h2>6. Risks and Mitigation</h2>
            <ul>
              ${testPlan.risks.map(risk => `<li>${risk}</li>`).join('')}
            </ul>
          </div>

          <div class="section">
            <h2>7. Defect Management</h2>
            <div class="item"><strong>Process:</strong> ${testPlan.defectManagement.process}</div>
          </div>

          <div class="section">
            <h2>8. Test Scenarios</h2>
            <ul>
              ${testScenarios.map(scenario => `
                <li>
                  <strong>Title:</strong> ${scenario.title}<br>
                  <strong>Description:</strong> ${scenario.description}<br>
                  <strong>Preconditions:</strong> ${scenario.preconditions}<br>
                  <strong>Steps:</strong> ${scenario.steps}<br>
                  <strong>Expected Result:</strong> ${scenario.expectedResult}
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="section">
            <h2>9. Test Cases</h2>
            <ul>
              ${testCases.map(testCase => `
                <li>
                  <strong>ID:</strong> ${testCase.id}<br>
                  <strong>Title:</strong> ${testCase.title}<br>
                  <strong>Description:</strong> ${testCase.description}<br>
                  <strong>Steps:</strong> ${testCase.steps}<br>
                  <strong>Expected Outcome:</strong> ${testCase.expectedOutcome}<br>
                  <strong>Pass/Fail:</strong> ${testCase.passFail}
                </li>
              `).join('')}
            </ul>
          </div>
        </body>
      </html>
    `;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  const moodStats = getMoodStats();

  const [testPlan, setTestPlan] = useState({
    introduction: {
      purpose: "",
      scope: ""
    },
    testItems: [],
    featuresToTest: [],
    featuresNotToTest: [],
    approach: {
      strategy: "",
      types: []
    },
    passCriteria: "",
    suspensionCriteria: "",
    testDeliverables: [],
    testTasks: [],
    environment: {
      hardware: "",
      software: "",
      other: ""
    },
    responsibilities: [],
    schedule: {
      startDate: "",
      endDate: "",
      milestones: []
    },
    risks: [],
    approvals: [],
    traceabilityMatrix: [],
    defectManagement: {
      process: "",
      severity: [],
      priority: []
    }
  });

  const handleResetTestPlan = () => {
    setTestPlan({
      introduction: {
        purpose: "",
        scope: ""
      },
      testItems: [],
      featuresToTest: [],
      featuresNotToTest: [],
      approach: {
        strategy: "",
        types: []
      },
      passCriteria: "",
      suspensionCriteria: "",
      testDeliverables: [],
      testTasks: [],
      environment: {
        hardware: "",
        software: "",
        other: ""
      },
      responsibilities: [],
      schedule: {
        startDate: "",
        endDate: "",
        milestones: []
      },
      risks: [],
      approvals: [],
      traceabilityMatrix: [],
      defectManagement: {
        process: "",
        severity: [],
        priority: []
      }
    });

    const inputs = document.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(input => {
      input.value = '';
    });

    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
      input.value = '';
    });

    const testItemsInput = document.querySelector('input[placeholder="Add new test item"]');
    const risksInput = document.querySelector('input[placeholder="Add new risk"]');
    if (testItemsInput) testItemsInput.value = '';
    if (risksInput) risksInput.value = '';
  };

  return (
    <div className="p-2 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">Mood Tracker</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {moodOptions.map((mood) => (
          <button
            key={mood.label}
            onClick={() => logMood(mood)}
            className="text-2xl bg-gray-100 p-4 rounded hover:bg-lime-200"
          >
            {mood.emoji}
            <p className="text-sm mt-2">{mood.label}</p>
          </button>
        ))}
      </div>

      {recommendation && (
        <div className="bg-green-100 p-4 rounded mb-4 text-center">
          <h2 className="text-lg sm:text-xl font-bold">Recommendation:</h2>
          <p>{recommendation}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Mood Calendar</h2>
          <Calendar onChange={setSelectedDate} value={selectedDate} tileContent={tileContent} />
        </div>

        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Mood Trends</h2>
          <Chart
            chartType="LineChart"
            data={moodData}
            width="100%"
            height="300px"
            options={{
              title: "Mood Trends",
              legend: { position: "none" },
              hAxis: { title: "Date" },
              vAxis: { title: "Mood Level", minValue: 0, maxValue: 5 },
            }}
          />
        </div>

        <div className="bg-pink-100 p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-2">Mood Stats</h2>
          <ul className="list-disc ml-6">
            {Object.keys(moodStats).map((day) => (
              <li key={day}>
                <strong>{day}:</strong> {moodStats[day]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mt-4">
      <p className="text-lg font-semibold text-gray-700 mb-4 text-center">Test Plan</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Purpose:</label>
            <textarea
              value={testPlan.introduction.purpose}
              onChange={(e) => setTestPlan({
                ...testPlan,
                introduction: { ...testPlan.introduction, purpose: e.target.value }
              })}
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>
          <div>
            <label className="block mb-1">Scope:</label>
            <textarea
              value={testPlan.introduction.scope}
              onChange={(e) => setTestPlan({
                ...testPlan,
                introduction: { ...testPlan.introduction, scope: e.target.value }
              })}
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Hardware Requirements:</label>
            <input
              type="text"
              value={testPlan.environment.hardware}
              onChange={(e) => setTestPlan({
                ...testPlan,
                environment: { ...testPlan.environment, hardware: e.target.value }
              })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Software Requirements:</label>
            <input
              type="text"
              value={testPlan.environment.software}
              onChange={(e) => setTestPlan({
                ...testPlan,
                environment: { ...testPlan.environment, software: e.target.value }
              })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Start Date:</label>
            <input
              type="date"
              value={testPlan.schedule.startDate}
              onChange={(e) => setTestPlan({
                ...testPlan,
                schedule: { ...testPlan.schedule, startDate: e.target.value }
              })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">End Date:</label>
            <input
              type="date"
              value={testPlan.schedule.endDate}
              onChange={(e) => setTestPlan({
                ...testPlan,
                schedule: { ...testPlan.schedule, endDate: e.target.value }
              })}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Strategy:</label>
            <textarea
              value={testPlan.approach.strategy}
              onChange={(e) => setTestPlan({
                ...testPlan,
                approach: { ...testPlan.approach, strategy: e.target.value }
              })}
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Process:</label>
            <textarea
              value={testPlan.defectManagement.process}
              onChange={(e) => setTestPlan({
                ...testPlan,
                defectManagement: { ...testPlan.defectManagement, process: e.target.value }
              })}
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>
        </div>
        <div className="mt-4">
            <button 
              onClick={handleResetTestPlan} 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Reset Test Plan
            </button>
          </div>
      </div>

      <div className="overflow-x-auto">
        <div className="bg-white p-4 rounded shadow mt-4">
          <h2 className="text-lg font-bold mb-2">Test Scenarios</h2>
          <ul className="list-disc ml-6">
            {testScenarios.map((scenario, idx) => (
              <li key={idx} className="flex flex-col mb-4">
                {Object.keys(scenario).map((key) => (
                  <div key={key} className="flex items-center mb-2">
                    <strong className="mr-2">{key}:</strong>
                    {editingScenarioIndex === idx ? (
                      <input
                        type="text"
                        value={scenario[key]}
                        onChange={(e) => handleEditScenario(idx, key, e.target.value)}
                        className="border p-1 flex-grow"
                      />
                    ) : (
                      <span>{scenario[key]}</span>
                    )}
                  </div>
                ))}
                <div className="flex">
                  <button onClick={() => handleDeleteScenario(idx)} className="bg-red-500 rounded-md text-white p-1 ml-2">
                    Delete
                  </button>
                  {editingScenarioIndex === idx ? (
                    <button onClick={() => setEditingScenarioIndex(null)} className="bg-green-500 rounded-md text-white p-1 ml-2">
                      Save
                    </button>
                  ) : (
                    <button onClick={() => setEditingScenarioIndex(idx)} className="bg-yellow-500 rounded-md text-white p-1 ml-2">
                      Edit
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col">
            <input
              type="text"
              value={newScenario.title}
              onChange={(e) => setNewScenario({ ...newScenario, title: e.target.value })}
              placeholder="Title"
              className="border p-1 w-full sm:w-auto"
            />
            <input
              type="text"
              value={newScenario.description}
              onChange={(e) => setNewScenario({ ...newScenario, description: e.target.value })}
              placeholder="Description"
              className="border p-1 w-full sm:w-auto"
            />
            <input
              type="text"
              value={newScenario.preconditions}
              onChange={(e) => setNewScenario({ ...newScenario, preconditions: e.target.value })}
              placeholder="Preconditions"
              className="border p-1 w-full sm:w-auto"
            />
            <input
              type="text"
              value={newScenario.steps}
              onChange={(e) => setNewScenario({ ...newScenario, steps: e.target.value })}
              placeholder="Steps"
              className="border p-1 w-full sm:w-auto"
            />
            <input
              type="text"
              value={newScenario.expectedResult}
              onChange={(e) => setNewScenario({ ...newScenario, expectedResult: e.target.value })}
              placeholder="Expected Result"
              className="border p-1 w-full sm:w-auto"
            />
          </div>
          <button onClick={handleAddScenario} className="bg-blue-500 text-white p-2 ml-4 rounded mt-4">
              Add Scenario
            </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="bg-white p-4 rounded shadow mt-4">
          <h2 className="text-lg font-bold mb-2">Test Cases</h2>
          <ul className="list-disc ml-6">
            {testCases.map((testCase, idx) => (
              <li key={idx} className="flex flex-col mb-4">
                {Object.keys(testCase).map((key) => (
                  <div key={key} className="flex items-center mb-2">
                    <strong className="mr-2">{key}:</strong>
                    {editingCaseIndex === idx ? (
                      <input
                        type="text"
                        value={testCase[key]}
                        onChange={(e) => handleEditCase(idx, key, e.target.value)}
                        className="border p-1 flex-grow"
                      />
                    ) : (
                      <span>{testCase[key]}</span>
                    )}
                  </div>
                ))}
                <div className="flex">
                  <button onClick={() => handleDeleteCase(idx)} className="bg-red-500 rounded-md text-white p-1 ml-2">
                    Delete
                  </button>
                  {editingCaseIndex === idx ? (
                    <button onClick={() => setEditingCaseIndex(null)} className="bg-green-500 rounded-md text-white p-1 ml-2">
                      Save
                    </button>
                  ) : (
                    <button onClick={() => setEditingCaseIndex(idx)} className="bg-yellow-500 rounded-md text-white p-1 ml-2">
                      Edit
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col">
            <input
              type="text"
              value={newCase.id}
              onChange={(e) => setNewCase({ ...newCase, id: e.target.value })}
              placeholder="ID"
              className="border p-1 mr-2"
            />
            <input
              type="text"
              value={newCase.title}
              onChange={(e) => setNewCase({ ...newCase, title: e.target.value })}
              placeholder="Title"
              className="border p-1 mr-2"
            />
            <input
              type="text"
              value={newCase.description}
              onChange={(e) => setNewCase({ ...newCase, description: e.target.value })}
              placeholder="Description"
              className="border p-1 mr-2"
            />
            <input
              type="text"
              value={newCase.steps}
              onChange={(e) => setNewCase({ ...newCase, steps: e.target.value })}
              placeholder="Steps"
              className="border p-1 mr-2"
            />
            <input
              type="text"
              value={newCase.expectedOutcome}
              onChange={(e) => setNewCase({ ...newCase, expectedOutcome: e.target.value })}
              placeholder="Expected Outcome"
              className="border p-1 mr-2"
            />
            <input
              type="text"
              value={newCase.passFail}
              onChange={(e) => setNewCase({ ...newCase, passFail: e.target.value })}
              placeholder="Pass/Fail"
              className="border p-1 mr-2"
            />
          </div>
          <button onClick={handleAddCase} className="bg-blue-500 text-white p-2 ml-4 mt-4 rounded">
            Add Test Case
          </button>
        </div>
      </div>

      <div className="text-center mt-4 flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={handlePrint} 
          className="w-full sm:w-auto bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Print Test Plan
        </button>
        <button 
          onClick={() => navigate('/testplan')} 
          className="w-full sm:w-auto bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          View Sample Test Plan
        </button>
      </div>
    </div>
  );
};

export default MoodTracker;
