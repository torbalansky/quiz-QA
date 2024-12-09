import React, { useState } from 'react';
import { WBchatbotDoc } from '../Data/Data';

const WBChatbotDocs = () => {
  const [activeSection, setActiveSection] = useState('overview');
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{WBchatbotDoc.title}</h1>
          <p className="text-xl text-gray-600">{WBchatbotDoc.description}</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {['overview', 'capabilities', 'usage', 'features', 'examples', 'tips'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors
                ${activeSection === section 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {activeSection === 'overview' && (
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600">{WBchatbotDoc.description}</p>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Limitations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {WBchatbotDoc.limitations.map((limitation, index) => (
                    <li key={index} className="text-gray-700">{limitation}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeSection === 'capabilities' && (
            <div className="space-y-6">
              {WBchatbotDoc.capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <div className="space-y-4">
                    {capability.examples.map((example, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                        <div className="font-medium text-blue-600">Input: {example.input}</div>
                        <div className="text-gray-700 mt-2">Output: {example.output}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'usage' && (
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Basic Commands</h3>
                <div className="grid gap-4">
                  {WBchatbotDoc.usage.basicCommands.map((command, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <code className="text-blue-600 font-semibold">{command.command}</code>
                      <p className="text-gray-600 mt-2">{command.description}</p>
                      <div className="text-sm text-gray-500 mt-1">Example: {command.example}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Best Practices</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {WBchatbotDoc.usage.bestPractices.map((practice, index) => (
                    <li key={index} className="text-gray-700">{practice}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeSection === 'features' && (
            <div className="grid gap-6">
              {WBchatbotDoc.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium text-blue-600">Trigger: {feature.trigger}</div>
                    <div className="text-gray-700 mt-2">Example: {feature.example}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'examples' && (
            <div className="space-y-6">
              {WBchatbotDoc.examples.map((example, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">{example.scenario}</h3>
                  <div className="space-y-4">
                    {example.conversation.map((message, idx) => (
                      <div key={idx} 
                           className={`p-4 rounded-lg ${
                             message.role === 'user' 
                               ? 'bg-blue-50 ml-auto max-w-[80%]' 
                               : 'bg-gray-50 mr-auto max-w-[80%]'
                           }`}>
                        <div className="text-sm text-gray-500 mb-1">
                          {message.role === 'user' ? 'User' : 'Assistant'}:
                        </div>
                        <div className="text-gray-700">{message.content}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'tips' && (
            <div className="space-y-6">
              {WBchatbotDoc.tips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">{tip.title}</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {tip.points.map((point, idx) => (
                      <li key={idx} className="text-gray-700">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WBChatbotDocs;