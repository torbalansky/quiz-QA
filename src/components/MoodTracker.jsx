import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { documentationMoodTracker } from "../Data/Data";

const MoodTracker = () => {
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
  const [newScenario, setNewScenario] = useState("");
  const [editingScenarioIndex, setEditingScenarioIndex] = useState(null);
  const [editingCaseIndex, setEditingCaseIndex] = useState(null);

  const [newCase, setNewCase] = useState({
    id: "",
    testCase: "",
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
    if (newScenario.trim()) {
      setTestScenarios([...testScenarios, newScenario]);
      setNewScenario("");
    }
  };

  const handleEditScenario = (index, value) => {
    const updatedScenarios = [...testScenarios];
    updatedScenarios[index] = value;
    setTestScenarios(updatedScenarios);
  };

  const handleDeleteScenario = (index) => {
    const updatedScenarios = [...testScenarios];
    updatedScenarios.splice(index, 1);
    setTestScenarios(updatedScenarios);
  };

  const handleAddCase = () => {
    if (newCase.testCase.trim()) {
      setTestCases([...testCases, { ...newCase }]);
      setNewCase({
        id: "",
        testCase: "",
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
        <body>
          <h1>Test Scenarios</h1>
          <ul>
            ${testScenarios
              .map(
                (scenario, idx) =>
                  `<li><strong>Scenario:</strong> ${scenario}</li>`
              )
              .join("")}
          </ul>
          <h1>Test Cases</h1>
          <ul>
            ${testCases
              .map(
                (testCase, idx) =>
                  `<li>
                    <strong>ID:</strong> ${testCase.id}<br>
                    <strong>Test Case:</strong> ${testCase.testCase}<br>
                    <strong>Steps:</strong> ${testCase.steps}<br>
                    <strong>Expected Outcome:</strong> ${testCase.expectedOutcome}<br>
                    <strong>Pass/Fail:</strong> ${testCase.passFail}
                  </li>`
              )
              .join("")}
          </ul>
        </body>
      </html>
    `;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  const moodStats = getMoodStats();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Mood Tracker</h1>

      <div className="grid grid-cols-4 gap-2 mb-4">
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
          <h2 className="text-xl font-bold">Recommendation:</h2>
          <p>{recommendation}</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
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

      <div className="bg-white p-4 rounded shadow mt-4 font-poppins">
        <h2 className="text-lg font-bold mb-2">Documentation</h2>
        <p>{documentationMoodTracker.overview}</p>
        <h3 className="text-md font-bold mt-4">Functional Requirements:</h3>
        <ul className="list-disc ml-6">
          {documentationMoodTracker.functionalRequirements.map((req, idx) => (
            <li key={idx}>
              <strong>{req.title}:</strong> {req.details.join(" ")}
            </li>
          ))}
        </ul>
        <h3 className="text-md font-bold mt-4">User Flow:</h3>
        <p>{documentationMoodTracker.userFlow}</p>
        <h3 className="text-md font-bold mt-4">Validation Rules:</h3>
        <ul className="list-disc ml-6">
          {documentationMoodTracker.validationRules.map((rule, idx) => (
            <li key={idx}>
              <strong>{rule.title}:</strong> {rule.details.join(" ")}
            </li>
          ))}
        </ul>
        <h3 className="text-md font-bold mt-4">Expected Behavior:</h3>
        <ul className="list-disc ml-6">
          {documentationMoodTracker.expectedBehavior.map((behavior, idx) => (
            <li key={idx}>
              <strong>{behavior.condition}:</strong> {behavior.behavior}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded shadow mt-4 font-poppins">
        <h2 className="text-lg font-bold mb-2">Test Scenarios</h2>
        <ul className="list-disc ml-6">
                {testScenarios.map((scenario, idx) => (
          <li key={idx} className="flex items-center mb-4">
            {editingScenarioIndex === idx ? (
              <input
                type="text"
                value={scenario}
                onChange={(e) => handleEditScenario(idx, e.target.value)}
                className="border p-1 mr-2"
              />
            ) : (
              <span>{scenario}</span>
            )}
            <button onClick={() => handleDeleteScenario(idx)} className="bg-red-500 rounded-md  text-white p-1 ml-2">
              Delete
            </button>
            {editingScenarioIndex === idx ? (
              <button onClick={() => setEditingScenarioIndex(null)} className="bg-green-500 rounded-md  text-white p-1 ml-2">
                Save
              </button>
            ) : (
              <button onClick={() => setEditingScenarioIndex(idx)} className="bg-yellow-500 rounded-md text-white p-1 ml-2">
                Edit
              </button>
            )}
          </li>
        ))}
        </ul>
        <div className="mt-2">
        <textarea
          value={newScenario}
          onChange={(e) => setNewScenario(e.target.value)}
          placeholder="Write a new test scenario..."
          className="w-1/2 p-1 border rounded"
        />
        <button onClick={handleAddScenario} className="bg-blue-500 text-white p-2 ml-4 rounded">
          Add Scenario
        </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mt-4 font-poppins">
        <h2 className="text-lg font-bold mb-2">Test Cases</h2>
        <ul className="list-disc ml-6">
        {testCases.map((testCase, idx) => (
         <li key={idx} className="flex items-center mb-4">
          {Object.keys(testCase).map((key) => (
           key !== 'id' && key !== 'passFail' ? (
            <div key={key} className="mr-2">
            {editingCaseIndex === idx ? (
            <input
              type="text"
              value={testCase[key]}
              onChange={(e) => handleEditCase(idx, key, e.target.value)}
              className="border p-1 mr-2"
                      />
                    ) : (
                      <span>{testCase[key]}</span>
                    )}
                  </div>
                ) : null
              ))}
              <button onClick={() => handleDeleteCase(idx)} className="bg-red-500 text-white rounded-md p-1 ml-2">
                Delete
              </button>
              {editingCaseIndex === idx ? (
                <button onClick={() => setEditingCaseIndex(null)} className="bg-green-500 rounded-md  text-white p-1 ml-2">
                  Save
                </button>
              ) : (
                <button onClick={() => setEditingCaseIndex(idx)} className="bg-yellow-500 rounded-md  text-white p-1 ml-2">
                  Edit
                </button>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-2">

          <input
            type="text"
            value={newCase.testCase}
            onChange={(e) => setNewCase({ ...newCase, testCase: e.target.value })}
            placeholder="ID"
            className="border p-1 mr-2"
          />
          <input
            type="text"
            value={newCase.steps}
            onChange={(e) => setNewCase({ ...newCase, steps: e.target.value })}
            placeholder="Title/ Steps/ Outcomes"
            className="border p-1 mr-2"
          />
          <input
            type="text"
            value={newCase.expectedOutcome}
            onChange={(e) => setNewCase({ ...newCase, expectedOutcome: e.target.value })}
            placeholder="pass/fail"
            className="border p-1 mr-2"
          />
          <button onClick={handleAddCase} className="bg-blue-500 text-white p-2 mt-2 rounded">
            Add Test Case
          </button>
        </div>
      </div>

      <div className="text-center mt-4">
        <button onClick={handlePrint} className="bg-green-500 text-white p-2 rounded">
        Print Scenarios & Cases
        </button>
      </div>
    </div>
  );
};

export default MoodTracker;
