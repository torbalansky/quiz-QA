import React, { useState } from 'react';
import { BBtheory } from '../Data/Data.js';
import { FaCaretDown } from 'react-icons/fa';

const testCategories = {
  hematology: {
    title: "Complete Blood Count",
    tests: {
      hemoglobin: { value: '14', unit: 'g/dL', normalRange: '13.5-17.5', convertTo: 'g/L', factor: 10 },
      wbc: { value: '7.5', unit: '×10³/µL', normalRange: '4.5-11.0' },
      rbc: { value: '5.0', unit: '×10⁶/µL', normalRange: '4.5-5.9' },
      platelets: { value: '250', unit: '×10³/µL', normalRange: '150-450' },
      hematocrit: { value: '42', unit: '%', normalRange: '41-50' }
    }
  },
  biochemistry: {
    title: "Biochemistry Panel",
    tests: {
      glucose: { value: '100', unit: 'mg/dL', normalRange: '70-100', convertTo: 'mmol/L', factor: 0.0555 },
      cholesterol: { value: '190', unit: 'mg/dL', normalRange: '< 200', convertTo: 'mmol/L', factor: 0.0259 },
      triglycerides: { value: '150', unit: 'mg/dL', normalRange: '< 150', convertTo: 'mmol/L', factor: 0.0113 },
      creatinine: { value: '1.0', unit: 'mg/dL', normalRange: '0.7-1.3', convertTo: 'µmol/L', factor: 88.4 }
    }
  },
  liver: {
    title: "Liver Function Tests",
    tests: {
      alt: { value: '25', unit: 'U/L', normalRange: '7-56' },
      ast: { value: '24', unit: 'U/L', normalRange: '10-40' },
      alp: { value: '70', unit: 'U/L', normalRange: '44-147' },
      bilirubin: { value: '0.9', unit: 'mg/dL', normalRange: '0.3-1.2', convertTo: 'µmol/L', factor: 17.1 }
    }
  },
  electrolytes: {
    title: "Electrolytes",
    tests: {
      sodium: { value: '140', unit: 'mEq/L', normalRange: '136-145' },
      potassium: { value: '4.0', unit: 'mEq/L', normalRange: '3.5-5.1' },
      chloride: { value: '102', unit: 'mEq/L', normalRange: '98-106' },
      calcium: { value: '9.5', unit: 'mg/dL', normalRange: '8.5-10.5', convertTo: 'mmol/L', factor: 0.25 }
    }
  },
  thyroid: {
    title: "Thyroid Function",
    tests: {
      tsh: { value: '2.5', unit: 'µIU/mL', normalRange: '0.4-4.0' },
      t4: { value: '1.2', unit: 'ng/dL', normalRange: '0.8-1.8', convertTo: 'pmol/L', factor: 12.87 },
      t3: { value: '120', unit: 'ng/dL', normalRange: '80-200', convertTo: 'nmol/L', factor: 0.0154 }
    }
  },
  urinalysis: {
    title: "Urinalysis",
    tests: {
      ph: { value: '6.0', unit: '', normalRange: '4.5-8.0' },
      specific_gravity: { value: '1.020', unit: '', normalRange: '1.005-1.030' },
      protein: { value: 'Negative', unit: '', normalRange: 'Negative' },
      glucose: { value: 'Negative', unit: '', normalRange: 'Negative' }
    }
  }
};

const testHistory = [
  {
    date: '2024-03-15',
    id: 'LAB-001',
    type: 'Complete Panel',
    results: {
      glucose: { value: '95', unit: 'mg/dL' },
      cholesterol: { value: '180', unit: 'mg/dL' },
      hemoglobin: { value: '13.8', unit: 'g/dL' }
    }
  },
  {
    date: '2023-12-20',
    id: 'LAB-002',
    type: 'Basic Metabolic Panel',
    results: {
      sodium: { value: '138', unit: 'mEq/L' },
      potassium: { value: '4.2', unit: 'mEq/L' },
      creatinine: { value: '1.1', unit: 'mg/dL' }
    }
  },
  {
    date: '2023-09-10',
    id: 'LAB-003',
    type: 'Lipid Panel',
    results: {
      cholesterol: { value: '190', unit: 'mg/dL' },
      triglycerides: { value: '160', unit: 'mg/dL' }
    }
  }
];

const BlackBoxTesting = () => {
  const [activeTab, setActiveTab] = useState('theory');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState('registration');
  const [activePanel, setActivePanel] = useState('current');
  const [selectedCategory, setSelectedCategory] = useState('hematology');
  const [testResults, setTestResults] = useState(testCategories);
  const [viewingHistory, setViewingHistory] = useState(null);

  // Form validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.password || formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setStep('results');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const convertUnit = (test, value, currentUnit) => {
    if (!test.convertTo) return value;
    return (parseFloat(value) * test.factor).toFixed(2);
  };

  const handleUnitToggle = (categoryKey, testKey) => {
    const category = testResults[categoryKey];
    const test = category.tests[testKey];
    
    if (!test.convertTo) return;

    const newUnit = test.unit === category.tests[testKey].unit ? 
      test.convertTo : category.tests[testKey].unit;
    
    const newValue = convertUnit(test, test.value, test.unit);

    setTestResults({
      ...testResults,
      [categoryKey]: {
        ...category,
        tests: {
          ...category.tests,
          [testKey]: {
            ...test,
            value: newValue,
            unit: newUnit
          }
        }
      }
    });
  };

  const ResultsPanel = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-2 mb-4 sm:mb-0">
          <button
            onClick={() => setActivePanel('current')}
            className={`px-3 py-1 rounded ${activePanel === 'current' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
          >
            Current Results
          </button>
          <button
            onClick={() => setActivePanel('history')}
            className={`px-3 py-1 rounded ${activePanel === 'history' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
          >
            History
          </button>
        </div>
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Print Results
        </button>
      </div>

      {activePanel === 'current' ? (
        <div className="space-y-6">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-64 p-2 bg-white border rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em' }}
            >
              {Object.entries(testResults).map(([category, data]) => (
                <option key={category} value={category}>
                  {data.title}
                </option>
              ))}
            </select>
          </div>

          <div className="border rounded-lg">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-xl font-semibold">{testResults[selectedCategory].title}</h3>
            </div>
            <div className="divide-y">
              {Object.entries(testResults[selectedCategory].tests).map(([key, test]) => (
                <div key={key} className="flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex-1">
                    <h4 className="font-medium">{key.toUpperCase()}</h4>
                    <p className="text-sm text-gray-600">Normal range: {test.normalRange} {test.unit}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`font-mono ${
                      test.value > test.normalRange.split('-')[1] ? 'text-red-600' :
                      test.value < test.normalRange.split('-')[0] ? 'text-red-600' :
                      'text-green-600'
                    }`}>
                      {test.value}
                    </span>
                    <button
                      onClick={() => handleUnitToggle(selectedCategory, key)}
                      className={`px-3 py-1 text-sm rounded ${
                        test.convertTo ? 'bg-gray-100 hover:bg-gray-200' : 'bg-gray-50'
                      }`}
                      disabled={!test.convertTo}
                    >
                      {test.unit}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="border rounded-lg divide-y">
          {testHistory.map((test, index) => (
            <div key={index} className="p-4">
              <div className="flex justify-between items-center hover:bg-gray-50">
                <div>
                  <h4 className="font-medium">{test.type}</h4>
                  <p className="text-sm text-gray-600">ID: {test.id}</p>
                  <p className="text-sm text-gray-600">Date: {test.date}</p>
                </div>
                <button
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                  onClick={() => setViewingHistory(viewingHistory === index ? null : index)}
                >
                  {viewingHistory === index ? 'Hide Results' : 'View Results'}
                </button>
              </div>
              {viewingHistory === index && (
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  {Object.entries(test.results).map(([key, result]) => (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium">{key.toUpperCase()}</span>
                      <span className="font-mono">{result.value} {result.unit}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 sm:space-x-4 mb-4 sm:mb-8">
          {['theory', 'practice'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setStep('registration');
                setActiveTab(tab);
              }}
              className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition-colors
                ${activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'theory' && (
          <section className="mb-12">
            <h1 className="text-3xl font-bold mb-6">{BBtheory.introduction.title}</h1>
            <div className="prose max-w-none">
              <p>{BBtheory.introduction.description}</p>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <h3 className="text-lg font-semibold mb-2">Key Points</h3>
                <ul className="list-disc pl-6">
                  {BBtheory.introduction.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {BBtheory.mainConcepts.map((concept, index) => (
                <div key={index} className="mt-6">
                  <h2 className="text-xl font-bold mb-3">{concept.title}</h2>
                  <ul className="list-disc pl-6">
                    {concept.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Advantages</h3>
                  <ul className="list-disc pl-6">
                    {BBtheory.advantages.map((advantage, index) => (
                      <li key={index}>{advantage}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                  <ul className="list-disc pl-6">
                    {BBtheory.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'practice' && (
          <section className="bg-white rounded-xl shadow-lg p-6">
            {step === 'registration' ? (
              <>
                <h2 className="text-2xl font-bold mb-6">Patient Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 p-2 border rounded-lg w-full"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 p-2 border rounded-lg w-full"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="mt-1 p-2 border rounded-lg w-full"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Register & View Results
                  </button>
                </form>
              </>
            ) : (
              <ResultsPanel />
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default BlackBoxTesting;