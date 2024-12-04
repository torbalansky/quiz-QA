import React from 'react';
import { moodTrackerTestPlan } from '../Data/Data';

const MoodTrackerTestPlan = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg font-poppins">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">
        Mood Tracker Test Plan
      </h1>

      <section className="mb-8 bg-purple-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Introduction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-purple-600">Purpose</h3>
            <p className="text-gray-700">{moodTrackerTestPlan.introduction.purpose}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-purple-600">Scope</h3>
            <p className="text-gray-700">{moodTrackerTestPlan.introduction.scope}</p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Test Items</h2>
        <ul className="list-disc ml-6 space-y-2">
          {moodTrackerTestPlan.testItems.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8 bg-indigo-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Testing Approach</h2>
        <h3 className="font-semibold mb-2 text-indigo-600">Strategy</h3>
        <p className="text-gray-700">{moodTrackerTestPlan.approach.strategy}</p>
        <h3 className="font-semibold mb-2 text-indigo-600">Types</h3>
        <ul className="list-disc ml-6 space-y-2">
          {moodTrackerTestPlan.approach.types.map((type, index) => (
            <li key={index} className="text-gray-700">{type}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8 bg-teal-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Environment Setup</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-teal-600">Hardware Requirements</h3>
            <p className="text-gray-700">{moodTrackerTestPlan.environment.hardware}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-teal-600">Software Requirements</h3>
            <p className="text-gray-700">{moodTrackerTestPlan.environment.software}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-teal-600">Other</h3>
            <p className="text-gray-700">{moodTrackerTestPlan.environment.other}</p>
          </div>
        </div>
      </section>

      <section className="mb-8 bg-yellow-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2 text-yellow-600">Start Date</h3>
            <p className="text-gray-700">{moodTrackerTestPlan.schedule.startDate}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-yellow-600">End Date</h3>
            <p className="text-gray-700">{moodTrackerTestPlan.schedule.endDate}</p>
          </div>
        </div>
        <h3 className="font-semibold mb-2 text-yellow-600 mt-4">Milestones</h3>
        <ul className="list-disc ml-6 space-y-2">
          {moodTrackerTestPlan.schedule.milestones.map((milestone, index) => (
            <li key={index} className="text-gray-700">{milestone}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8 bg-orange-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-orange-700">Risks and Mitigation</h2>
        <ul className="list-disc ml-6 space-y-2">
          {moodTrackerTestPlan.risks.map((risk, index) => (
            <li key={index} className="text-gray-700">{risk}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8 bg-pink-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-pink-700">Defect Management</h2>
        <h3 className="font-semibold mb-2 text-pink-600">Process</h3>
        <p className="text-gray-700">{moodTrackerTestPlan.defectManagement.process}</p>
        <h3 className="font-semibold mb-2 text-pink-600">Severity Levels</h3>
        <ul className="list-disc ml-6 space-y-2">
          {moodTrackerTestPlan.defectManagement.severity.map((level, index) => (
            <li key={index} className="text-gray-700">{level}</li>
          ))}
        </ul>
        <h3 className="font-semibold mb-2 text-pink-600">Priority Levels</h3>
        <ul className="list-disc ml-6 space-y-2">
          {moodTrackerTestPlan.defectManagement.priority.map((level, index) => (
            <li key={index} className="text-gray-700">{level}</li>
          ))}
        </ul>
      </section>

      
      <section className="mb-8 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Test Scenarios</h2>
        <div className="grid grid-cols-1 gap-4">
          {moodTrackerTestPlan.sampleTestScenarios.map((scenario, index) => (
            <div key={index} className="border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-800">{scenario.title}</h3>
              <p className="text-gray-700 mt-2">{scenario.description}</p>
              <div className="mt-2">
                <p className="font-semibold text-green-600">Preconditions:</p>
                <p className="text-gray-700">{scenario.preconditions}</p>
              </div>
              <div className="mt-2">
                <p className="font-semibold text-green-600">Steps:</p>
                <p className="text-gray-700 whitespace-pre-line">{scenario.steps}</p>
              </div>
              <div className="mt-2">
                <p className="font-semibold text-green-600">Expected Result:</p>
                <p className="text-gray-700">{scenario.expectedResult}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-yellow-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-700">Test Cases</h2>
        <div className="grid grid-cols-1 gap-4">
          {moodTrackerTestPlan.sampleTestCases.map((testCase, index) => (
            <div key={index} className="border border-yellow-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-yellow-800">{testCase.id}: {testCase.title}</h3>
                <span className={`px-2 py-1 rounded text-sm ${
                  testCase.passFail.includes('Failed') ? 'bg-red-200 text-red-800' :
                  testCase.passFail === 'Passed' ? 'bg-green-200 text-green-800' :
                  'bg-gray-200 text-gray-800'
                }`}>
                  {testCase.passFail}
                </span>
              </div>
              <p className="text-gray-700 mt-2">{testCase.description}</p>
              <div className="mt-2">
                <p className="font-semibold text-yellow-600">Steps:</p>
                <p className="text-gray-700 whitespace-pre-line">{testCase.steps}</p>
              </div>
              <div className="mt-2">
                <p className="font-semibold text-yellow-600">Expected Outcome:</p>
                <p className="text-gray-700">{testCase.expectedOutcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-red-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-red-700">Bug Reports</h2>
        <div className="grid grid-cols-1 gap-6">
          {moodTrackerTestPlan.identifiedBugs?.map((bug, index) => (
            <div key={index} className="border border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-red-800 text-md">{bug.id}: {bug.title}</h3>
                  <div className="text-sm text-gray-600 mt-1">
                    <p>Product: {bug.product} v{bug.version}</p>
                    <p>Component: {bug.component}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className={`px-2 py-4 rounded text-xs ${
                    bug.status === 'Open' ? 'bg-slate-200 text-red-600' :
                    bug.status === 'In Progress' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-green-200 text-green-800'
                  }`}>
                    {bug.status}
                  </span>
                  <span className={`px-2 py-4 rounded text-xs ${
                    bug.severity === 'High' ? 'bg-slate-300 text-red-700' :
                    bug.severity === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-blue-200 text-blue-800'
                  }`}>
                    Severity: {bug.severity}
                  </span>
                  <span className={`px-4 py-4 rounded text-xs ${
                    bug.priority === 'Immediate' ? 'bg-slate-300 text-red-900' :
                    bug.priority === 'High' ? 'bg-orange-200 text-orange-800' :
                    'bg-blue-200 text-blue-800'
                  }`}>
                    Priority: {bug.priority}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 bg-white p-3 rounded">
                <div>
                  <p className="font-semibold text-red-600">Reporter</p>
                  <p className="text-gray-700">{bug.reporter}</p>
                </div>
                <div>
                  <p className="font-semibold text-red-600">Assignee</p>
                  <p className="text-gray-700">{bug.assignee}</p>
                </div>
                <div>
                  <p className="font-semibold text-red-600">Date Reported</p>
                  <p className="text-gray-700">{bug.dateReported}</p>
                </div>
                <div>
                  <p className="font-semibold text-red-600">Last Updated</p>
                  <p className="text-gray-700">{bug.dateUpdated}</p>
                </div>
              </div>

              <div className="mb-4 bg-white p-3 rounded">
                <h4 className="font-semibold text-red-600 mb-2">Description</h4>
                <p className="text-gray-700">{bug.description}</p>
              </div>

              <div className="mb-4 bg-white p-3 rounded">
                <h4 className="font-semibold text-red-600 mb-2">Steps to Reproduce</h4>
                <ol className="list-decimal ml-4">
                  {bug.stepsToReproduce.map((step, idx) => (
                    <li key={idx} className="text-gray-700 mb-1">{step}</li>
                  ))}
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded">
                  <h4 className="font-semibold text-red-600 mb-2">Expected Result</h4>
                  <p className="text-gray-700">{bug.expectedResult}</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <h4 className="font-semibold text-red-600 mb-2">Actual Result</h4>
                  <p className="text-gray-700">{bug.actualResult}</p>
                </div>
              </div>

              <div className="mb-4 bg-white p-3 rounded">
                <h4 className="font-semibold text-red-600 mb-2">Environment</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <p className="text-gray-700">Browser: {bug.environment.browser}</p>
                  <p className="text-gray-700">OS: {bug.environment.os}</p>
                  <p className="text-gray-700">Device: {bug.environment.deviceType}</p>
                  <p className="text-gray-700">Resolution: {bug.environment.resolution}</p>
                  <p className="text-gray-700">Viewport: {bug.environment.viewport}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded">
                  <h4 className="font-semibold text-red-600 mb-2">Screenshots</h4>
                  {bug.screenshots.map((screenshot, idx) => (
                    <div key={idx} className="flex items-center mb-2  text-xs">
                      <svg className="w-14 h-14 mr-2 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-blue-600 hover:underline cursor-pointer">{screenshot.name}</span>
                      <span className="ml-4 text-xs text-gray-500">- {screenshot.description}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white p-3 rounded">
                  <h4 className="font-semibold text-red-600 mb-2">Attachments</h4>
                  {bug.attachments.map((attachment, idx) => (
                    <div key={idx} className="flex items-center mb-2  text-xs">
                      <svg className="w-12 h-12 mr-2 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                      </svg>
                      <span className="text-blue-600 hover:underline cursor-pointer">{attachment.name}</span>
                      <span className="ml-4 text-xs text-gray-500">- {attachment.description}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded">
                  <h4 className="font-semibold text-red-600 mb-2">Impact</h4>
                  <p className="text-gray-700">{bug.impact}</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <h4 className="font-semibold text-red-600 mb-2">Workaround</h4>
                  <p className="text-gray-700">{bug.workaround}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-3 rounded">
                  <h4 className="font-semibold text-red-600 mb-2">Affected Users</h4>
                  <p className="text-gray-700">{bug.affectedUsers}</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <h4 className="font-semibold text-red-600 mb-2">Related Issues</h4>
                  <div className="flex gap-2">
                    {bug.relatedIssues.map((issue, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-gray-700">{issue}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 rounded">
                <h4 className="font-semibold text-red-600 mb-2">Comments</h4>
                <div className="space-y-2">
                  {bug.comments.map((comment, idx) => (
                    <div key={idx} className="border-l-4 border-red-200 pl-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-semibold text-gray-700">{comment.author}</span>
                        <span className="text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default MoodTrackerTestPlan; 