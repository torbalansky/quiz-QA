import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JestIntro = () => {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="px-20 py-10 space-y-8">
      <div className="flex mb-6 border-b text-center flex-row justify-center">
        <button
          onClick={() => setActiveTab('theory')}
          className={`px-6 py-2 font-semibold transition-all duration-300 ${
            activeTab === 'theory'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          Theory
        </button>
        <Link
          to="/tdd"
          className="px-6 py-2 font-semibold transition-all duration-300 text-gray-500 hover:text-gray-700"
        >
          Practice Arena
        </Link>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 font-serif">What is Jest?</h2>
        <p className="text-gray-600 font-serif">
          Jest is a delightful JavaScript testing framework maintained by Facebook. It's designed to ensure correctness of any JavaScript codebase, with a focus on simplicity and support for large web applications. It works with projects using Babel, TypeScript, Node, React, Angular, Vue, and more.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Basic Test Structure</h2>
        <div className="bg-lime-50 p-4 rounded-md font-mono text-xs">
          <pre>{`describe('Calculator', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });
});`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">The TDD Cycle</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-800">1. Red</h3>
            <p className="text-sm text-red-600">Write a failing test first</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800">2. Green</h3>
            <p className="text-sm text-green-600">Write minimal code to pass</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800">3. Refactor</h3>
            <p className="text-sm text-blue-600">Improve the code while keeping tests green</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Best Practices</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-serif">
          <li>Write tests before implementation</li>
          <li>Keep tests simple and focused</li>
          <li>Use descriptive test names</li>
          <li>Follow the Arrange-Act-Assert pattern</li>
          <li>Test both success and error cases</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Test File Organization</h2>
        <div className="bg-lime-50 p-4 rounded-md font-mono text-xs">
          <pre>{`your-react-app/
├── src/
│   ├── __tests__/           # Test files directory
│   │   ├── App.test.js
│   │   └── components/
│   │       ├── Button.test.js
│   │       └── Form.test.js
│   ├── components/
│   │   ├── Button.js
│   │   └── Form.js
│   └── App.js
└── package.json`}</pre>
        </div>
        <div className="mt-4 space-y-2 text-gray-600">
          <p>Jest supports multiple test file locations:</p>
          <ul className="list-disc pl-5 space-y-1 font-serif">
            <li>Files in a <code className="bg-gray-100 px-1">__tests__</code> folder</li>
            <li>Files with <code className="bg-gray-100 px-1">.test.js</code> suffix</li>
            <li>Files with <code className="bg-gray-100 px-1">.spec.js</code> suffix</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Installation & Setup</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">1. Install Dependencies</h3>
            <div className="bg-gray-800 text-white p-4 rounded-md">
              <code>npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event</code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">2. Update package.json</h3>
            <div className="bg-white p-4 rounded-md font-mono text-xs">
              <pre>{`{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
      "@testing-library/jest-dom"
    ],
    "moduleNameMapper": {
      "\\\\.(css|less|scss)$": "identity-obj-proxy"
    }
  }
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Running Tests</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Common Commands</h3>
            <div className="bg-lime-50 p-4 rounded-md space-y-3">
              <div>
                <code className="bg-gray-800 text-white px-2 py-1 rounded">npm test</code>
                <span className="text-gray-500 ml-2">(or)</span>
                <code className="bg-gray-800 text-white px-2 py-1 rounded ml-2">npm run test</code>
                <p className="text-sm text-gray-600 mt-1">Run all tests (both commands work the same way - 'test' is a special script name in npm)</p>
              </div>
              <div>
                <code className="bg-gray-800 text-white px-2 py-1 rounded">npm run test:watch</code>
                <p className="text-sm text-gray-600 mt-1">Run tests in watch mode (rerun on file changes)</p>
              </div>
              <div>
                <code className="bg-gray-800 text-white px-2 py-1 rounded">npm run test -- path/to/test.js</code>
                <p className="text-sm text-gray-600 mt-1">Run specific test file</p>
              </div>
              <div>
                <code className="bg-gray-800 text-white px-2 py-1 rounded">npm run test -- -t "test name"</code>
                <p className="text-sm text-gray-600 mt-1">Run tests matching a specific name</p>
              </div>
              <div>
                <code className="bg-gray-800 text-white px-2 py-1 rounded">npm run test -- --coverage</code>
                <p className="text-sm text-gray-600 mt-1">Run tests with coverage report</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Test Coverage</h2>
        <div className="space-y-4 text-gray-600">
          <p>Jest can generate coverage reports to show:</p>
          <ul className="list-disc pl-5 space-y-2 font-serif">
            <li>Statement coverage: % of program statements executed</li>
            <li>Branch coverage: % of control structures (if statements, etc.) executed</li>
            <li>Function coverage: % of functions called</li>
            <li>Line coverage: % of executable lines executed</li>
          </ul>
          <div className="bg-white p-4 rounded-md font-mono text-xs mt-4">
            <pre>{`// Configure coverage in package.json
{
  "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  }
}`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Writing Tests</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-md font-mono text-xs">
            <pre>{`import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });
});`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Common Testing Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-pink-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Setup and Teardown</h3>
            <pre className="text-xs">{`beforeAll(() => {
  // Run before all tests
});

beforeEach(() => {
  // Run before each test
});

afterEach(() => {
  // Run after each test
});

afterAll(() => {
  // Run after all tests
});`}</pre>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Mocking</h3>
            <pre className="text-xs">{`// Mock function
const mockFn = jest.fn();

// Mock module
jest.mock('./api');

// Mock implementation
mockFn.mockImplementation(() => 'result');

// Mock return value
mockFn.mockReturnValue('result');`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Jest Matchers in Detail</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Equality</h3>
            <ul className="space-y-2 text-sm">
              <li><code>.toBe(value)</code> - Exact equality (===)</li>
              <li><code>.toEqual(value)</code> - Deep equality for objects</li>
              <li><code>.toStrictEqual(value)</code> - Stricter object equality</li>
              <li><code>.toBeCloseTo(number, precision)</code> - For floating point</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Truthiness</h3>
            <ul className="space-y-2 text-sm">
              <li><code>.toBeTruthy()</code> - Checks if value is truthy</li>
              <li><code>.toBeFalsy()</code> - Checks if value is falsy</li>
              <li><code>.toBeNull()</code> - Checks for null</li>
              <li><code>.toBeUndefined()</code> - Checks for undefined</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Testing Async Code</h2>
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-md font-mono text-xs">
            <pre>{`// Testing Promises
test('fetches user data', async () => {
  const data = await fetchUser(1);
  expect(data.name).toBe('John');
});

// Testing with done callback
test('loads user data', done => {
  fetchUser(1).then(data => {
    expect(data.name).toBe('John');
    done();
  });
});`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Snapshot Testing</h2>
        <p className="text-gray-600 mb-4">
          Snapshot tests help you track changes in your UI components over time.
        </p>
        <div className="bg-green-50 p-4 rounded-md font-mono text-xs">
          <pre>{`import renderer from 'react-test-renderer';

test('Button renders correctly', () => {
  const tree = renderer
    .create(<Button>Click me</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Testing React Components</h2>
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-md font-mono text-xs">
            <pre>{`import { render, screen, fireEvent } from '@testing-library/react';

test('button click handler', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  // Find element
  const button = screen.getByText('Click me');
  
  // Simulate interaction
  fireEvent.click(button);
  
  // Assert
  expect(handleClick).toHaveBeenCalledTimes(1);
});`}</pre>
          </div>
          <div className="mt-4 space-y-2 text-gray-600">
            <p>Common React Testing Library queries:</p>
            <ul className="list-disc pl-5 space-y-1 font-serif">
              <li><code className="bg-gray-100 px-1">getByText</code> - Find by text content</li>
              <li><code className="bg-gray-100 px-1">getByRole</code> - Find by ARIA role</li>
              <li><code className="bg-gray-100 px-1">getByTestId</code> - Find by data-testid</li>
              <li><code className="bg-gray-100 px-1">getByLabelText</code> - Find form elements by label</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Test Isolation</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Jest runs each test in isolation to prevent side effects between tests.
          </p>
          <div className="bg-green-50 p-4 rounded-md font-mono text-xs">
            <pre>{`describe('User API', () => {
  // Runs before each test in this describe block
  beforeEach(() => {
    // Reset database
    return resetTestDB();
  });

  // Runs after each test
  afterEach(() => {
    // Clean up
    return cleanupTestData();
  });

  test('creates user', async () => {
    // This test starts with a fresh DB
  });
});`}</pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Test Organization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Grouping Tests</h3>
            <pre className="text-xs">{`describe('User Module', () => {
  describe('validation', () => {
    test('requires email');
    test('requires password');
  });

  describe('authentication', () => {
    test('logs in user');
    test('handles errors');
  });
});`}</pre>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700 mb-2">Test Naming</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ <code>renders login form</code></li>
              <li>✓ <code>submits form with valid data</code></li>
              <li>✓ <code>displays error for invalid email</code></li>
              <li>✓ <code>handles server errors gracefully</code></li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mt-8 flex justify-center">
        <Link 
          to="/tdd"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Start TDD Practice →
        </Link>
      </div>
    </div>
  );
};

export default JestIntro;