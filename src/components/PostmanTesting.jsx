import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const PostmanTesting = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [response, setResponse] = useState(null);
  const [activeTab, setActiveTab] = useState('params');
  const [authType, setAuthType] = useState('noauth');
  const [authToken, setAuthToken] = useState('');
  const [requestBody, setRequestBody] = useState('');
  const navigate = useNavigate();

  const tabs = [
    { name: 'Params', id: 'params' },
    { name: 'Authorization', id: 'auth' },
    { name: 'Headers', id: 'headers' },
    { name: 'Body', id: 'body' },
    { name: 'Scripts', id: 'pre-script' },
    { name: 'Tests', id: 'tests' },
    { name: 'Settings', id: 'settings' },
  ];

  const handleRequest = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };

      if (authType === 'bearer' && authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }

      const options = {
        method,
        headers,
      };

      if (['POST', 'PUT', 'PATCH'].includes(method) && requestBody) {
        options.body = requestBody;
      }

      const res = await fetch(url, options);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'auth':
        return (

          
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select
                value={authType}
                onChange={(e) => setAuthType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="noauth">No Auth</option>
                <option value="bearer">Bearer Token</option>
                <option value="basic">Basic Auth</option>
                <option value="apikey">API Key</option>
              </select>
            </div>
            {authType === 'bearer' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Token
                </label>
                <input
                  type="text"
                  value={authToken}
                  onChange={(e) => setAuthToken(e.target.value)}
                  placeholder="Enter token"
                  className="w-full p-2 border rounded"
                />
              </div>
            )}
          </div>
        );

      case 'body':
        return (
          <div className="p-4">
            <div className="mb-4">
              <div className="flex space-x-4 mb-2">
                <button className="px-3 py-1 bg-gray-200 rounded">none</button>
                <button className="px-3 py-1 bg-gray-200 rounded">form-data</button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded">raw</button>
                <button className="px-3 py-1 bg-gray-200 rounded">binary</button>
              </div>
              <div className="flex space-x-4 mb-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">JSON</button>
                <button className="px-3 py-1 bg-gray-200 rounded">Text</button>
                <button className="px-3 py-1 bg-gray-200 rounded">XML</button>
              </div>
            </div>
            <textarea
              value={requestBody}
              onChange={(e) => setRequestBody(e.target.value)}
              placeholder="Enter request body (JSON)"
              className="w-full h-64 p-2 border rounded font-mono"
            />
          </div>
        );

      default:
        return (
          <div className="p-4 text-gray-500 text-center">
            <div className="w-full bg-yellow-50 border-b border-yellow-200 p-4 mb-4">
              <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
                <svg 
                  className="w-6 h-6 text-yellow-600 animate-spin-slow" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
                  />
                </svg>
                <span className="text-yellow-800 font-semibold">
                  This Postman interface is currently under construction. Some features may be limited.
                </span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      <div className="w-1/3 bg-white p-6 rounded-lg shadow-md mr-4 overflow-y-auto max-h-screen">
      <div className="w-full bg-white border-b p-4">
       <div className="max-w-7xl mx-auto">
          <button
              onClick={() => navigate('/api-testing')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M11 17l-5-5m0 0l5-5m-5 5h12" 
                />
              </svg>
              Go Back
            </button>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">MyFlix Movie API Documentation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Overview</h3>
            <p className="text-gray-600 text-sm mb-4">
              Welcome to the MyFlix Movie API documentation. Here, you can find all the necessary information to interact with our API.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Base URL:</h3>
            <code className="bg-gray-100 p-2 rounded block">
              https://movie-api-eqfh.vercel.app
            </code>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Endpoints:</h3>
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium text-blue-600">Movies</h4>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-mono text-sm">GET /movies</p>
                  <p className="text-gray-600 text-sm mt-1">Returns a list of all movies</p>
                  <p className="text-gray-500 text-xs mt-1">Response: JSON array of movies</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-mono text-sm">GET /movies/title/:Title</p>
                  <p className="text-gray-600 text-sm mt-1">Returns data about a single movie by title</p>
                  <p className="text-gray-500 text-xs mt-1">Response: Movie details including description, genre, director</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-mono text-sm">GET /movies/genre/:genreName</p>
                  <p className="text-gray-600 text-sm mt-1">Returns data about a genre by name</p>
                  <p className="text-gray-500 text-xs mt-1">Response: Genre description</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-mono text-sm">GET /movies/directors/:directorName</p>
                  <p className="text-gray-600 text-sm mt-1">Returns data about a director by name</p>
                  <p className="text-gray-500 text-xs mt-1">Response: Director's bio</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-blue-600">Users</h4>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-mono text-sm">GET /users</p>
                  <p className="text-gray-600 text-sm mt-1">Returns a list of all users</p>
                  <p className="text-gray-500 text-xs mt-1">Requires authentication</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-mono text-sm">GET /users/:username</p>
                  <p className="text-gray-600 text-sm mt-1">Returns data about a specific user</p>
                  <p className="text-gray-500 text-xs mt-1">Requires authentication</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-mono text-sm">POST /users</p>
                  <p className="text-gray-600 text-sm mt-1">Register new user</p>
                  <p className="text-gray-500 text-xs mt-1">Required fields: Username, Password, Email</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-mono text-sm">POST /users/:Username/movies/:MovieID</p>
                  <p className="text-gray-600 text-sm mt-1">Add movie to favorites</p>
                  <p className="text-gray-500 text-xs mt-1">Requires authentication</p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-mono text-sm">PUT /users/:Username</p>
                  <p className="text-gray-600 text-sm mt-1">Update user information</p>
                  <p className="text-gray-500 text-xs mt-1">Requires authentication</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-mono text-sm">DELETE /users/:Username/movies/:MovieID</p>
                  <p className="text-gray-600 text-sm mt-1">Remove movie from favorites</p>
                  <p className="text-gray-500 text-xs mt-1">Requires authentication</p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-mono text-sm">DELETE /users/:Username</p>
                  <p className="text-gray-600 text-sm mt-1">Delete user account</p>
                  <p className="text-gray-500 text-xs mt-1">Requires authentication</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Authentication</h3>
            <p className="text-gray-600 text-sm mb-2">
              Most endpoints require authentication using JWT Bearer token.
            </p>
            <div className="bg-gray-100 p-3 rounded">
              <p className="font-mono text-sm">
                Authorization: Bearer &lt;your_token_here&gt;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/3 bg-white rounded-lg shadow-md">
        <div className="p-4 border-b">
          <div className="flex space-x-2 mb-2">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-36 p-2 border flex items-center justify-center text-center  rounded bg-gray-50"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter request URL"
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={handleRequest}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>

        <div className="border-b">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-500'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="h-64 overflow-y-auto border-b">
          {renderTabContent()}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Response</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-64 font-mono text-sm">
            {response || 'No response yet'}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PostmanTesting;