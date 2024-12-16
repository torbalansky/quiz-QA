import React from 'react';
import { FiCode } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { AiOutlineFileDone } from 'react-icons/ai';
import { LuFolderClosed } from 'react-icons/lu';
import { FiList } from 'react-icons/fi';
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import STLC from '../assets/img/STLC.png';
import seven from '../assets/img/sevenp.png';
import tcts from '../assets/img/tcts.png';
import bugreport from '../assets/img/bugreport.png';
import tests from '../assets/img/tests.png';

export const NavbarData = [
  {
    id: 1,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    title: "Quiz",
    link: "quiz",
  }
// {
//    id: 3,
//   title: "Contact",
//    link: "contact",
//  },
];

export const QADataSTLC = [
  { id: '1', position: { x: 0, y: 0 }, data: { icon: React.createElement(HiOutlineClipboardDocumentList), title: 'Requirements Analysis' }, type: 'custom' },
  { id: '2', position: { x: 250, y: 0 }, data: { icon: React.createElement(FiList), title: 'Test Planning' }, type: 'custom' },
  { id: '3', position: { x: 500, y: 0 }, data: { icon: React.createElement(FiCode), title: 'Test Case Design' }, type: 'custom' },
  { id: '4', position: { x: 750, y: 0 }, data: { icon: React.createElement(MdOutlinePhonelinkSetup), title: 'Environment Setup' }, type: 'custom' },
  { id: '5', position: { x: 1000, y: 0 }, data: { icon: React.createElement(AiOutlineFileDone), title: 'Test Execution' }, type: 'custom' },
  { id: '6', position: { x: 1250, y: 0 }, data: { icon: React.createElement(LuFolderClosed), title: 'Test Cycle Closure' }, type: 'custom' },
];

export const QAEdgesSTLC = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e5-6', source: '5', target: '6' },
];

export const QADataPrinciples = [
  { id: '1', title: 'Exhaustive testing is impossible', correct: true },
  { id: '2', title: 'Testing shows the presence of defects', correct: true },
  { id: '3', title: 'Defects do not cluster together', correct: false },
  { id: '4', title: 'Absence-of-errors fallacy', correct: true },
  { id: '5', title: 'Early testing saves cost and time', correct: true },
  { id: '6', title: 'Testing always ensures a bug-free product', correct: false },
  { id: '7', title: 'Testing depends on the context', correct: true },
  { id: '8', title: 'Test automation removes the need for manual testing', correct: false },
  { id: '9', title: 'Defect clustering', correct: true },
  { id: '10', title: 'Pesticide paradox', correct: true },
  { id: '11', title: 'Only experienced testers find critical bugs', correct: false },
  { id: '12', title: 'Testing replaces quality assurance', correct: false },
  { id: '13', title: 'Testing is optional for small projects', correct: false },
  { id: '14', title: 'Quality assurance depends on testing', correct: false },
  { id: '15', title: 'Herbicide paradox', correct: false },
];

export const helpModalData = {
  title: "Software Test Life Cycle",
  image: STLC,
  description:
    "STLC, or Software Test Life Cycle, outlines the stages a product undergoes during testing. Each stage is crucial for ensuring quality and reliability.",
  phases: [
    {
      title: "Requirements Analysis",
      description: "Understand and document the testing requirements.",
    },
    {
      title: "Test Planning",
      description: "Plan the test strategy, resources, and timeline.",
    },
    {
      title: "Test Case Design",
      description: "Create detailed test cases covering all scenarios.",
    },
    {
      title: "Environment Setup",
      description: "Prepare the testing environment and tools.",
    },
    {
      title: "Test Execution",
      description: "Run the tests and record results.",
    },
    {
      title: "Test Cycle Closure",
      description: "Conclude testing with reports and lessons learned.",
    },
  ],
};

export const helpModalDataP = {
  title: '7 Principles of Testing',
  image: seven,
  description:
    'The 7 Principles of Testing serve as fundamental guidelines for testers to deliver high-quality results.',
  phases: [
    { title: 'Testing shows the presence of defects', description: 'Testing helps identify bugs but does not guarantee a bug-free product.' },
    { title: 'Exhaustive testing is impossible', description: 'Focus on risk-based and priority testing.' },
    { title: 'Early testing saves cost and time', description: 'Defects found early in the development process are less expensive to fix.' },
    { title: 'Defect clustering', description: 'Most defects are often found in a few modules.' },
    { title: 'Pesticide paradox', description: 'Repeated use of the same tests loses effectiveness.' },
    { title: 'Testing depends on the context', description: 'Different applications require different testing approaches.' },
    { title: 'Absence-of-errors fallacy', description: 'Even a bug-free product can fail if it does not meet user needs or requirements.' },
  ],
};

export const bugReportModalDataR = {
  title: 'Bug Report',
  image: bugreport,  
    description:
    'A bug report provides essential details about a defect.',

  phases: [
    { 
      title: 'Bug ID', 
      description: 'Unique ID for tracking the bug.' 
    },
    { 
      title: 'Title', 
      description: 'A short summary of the issue.' 
    },
    { 
      title: 'Reporter', 
      description: 'Person who reported the bug.' 
    },
    { 
      title: 'Submit Date', 
      description: 'The date the bug was reported.' 
    },
    { 
      title: 'URL', 
      description: 'Link to the page where the bug occurred.' 
    },
    { 
      title: 'Environment', 
      description: 'System details (OS, browser, etc.).' 
    },
    { 
      title: 'Description', 
      description: 'Explanation of the bug and its impact.' 
    },
    { 
      title: 'Steps to Reproduce', 
      description: 'Instructions to recreate the bug.' 
    },
    { 
      title: 'Expected', 
      description: 'What should happen.' 
    },
    { 
      title: 'Actual', 
      description: 'What actually happened.' 
    },
    { 
      title: 'Priority', 
      description: 'How urgent it is to fix.' 
    },
    { 
      title: 'Severity', 
      description: 'How much the bug impacts the application.' 
    },
    { 
      title: 'Assigned To', 
      description: 'Who is responsible for fixing the bug.' 
    },
    { 
      title: 'Screenshots/Attachments', 
      description: 'Supporting images or files for context.' 
    },
    { 
      title: 'Additional Notes', 
      description: 'Any extra helpful information.' 
    },
  ],
};

export const helpModalDataB = {
  title: 'Test Scenarios and Test Cases',
  image: tcts,
  description: `
    Test Scenarios (TS):
    A test scenario outlines a high-level description of what needs to be tested in a software application. 
    It serves as a starting point for identifying and organizing test cases. Scenarios focus on the overall functionality and behavior of the system.

    Test Cases (TC):
    A test case is a detailed sequence of steps executed to verify that specific features or functions of a software application work as intended. 
    It provides precise instructions for performing the tests and includes inputs, actions, and expected results. 
  `,
  phases: [
    {
      title: 'TS',
      description: `
        Test scenarios are straightforward, linear statements that outline the end-to-end functionality of the software to be validated;
        They provide a high-level overview of what needs to be tested;
        Scenarios are adaptable, making them easy to modify as requirements change;
        Using scenarios streamlines the testing process, saving time and improving efficiency.
      `
    },
    {
      title: 'TC',
      description: `
        Test cases are derived from the broader context of test scenarios;
        They focus on the detailed testing of specific elements or requirements within the system;
        Each test case includes steps to follow, data to use, and the expected outcomes.
      `
    }
  ]
};
export const helpModalDataV = {
  title: 'Type of tests',
  image: tests, 
  phases: [
    {
      title: 'Unit test',
      description: 'Tests individual components in isolation to ensure they work as expected. It\'s fast, helps catch issues early, and improves code quality.'
    },
    {
      title: 'Integration',
      description: 'Tests how multiple components interact. Ensures they work together as expected and catches issues that might arise from their interaction.'
    },
    {
      title: 'System',
      description: 'Validates the entire integrated system to check if it meets the requirements and functions as expected in a real-world environment.'
    },
    {
      title: 'Acceptance',
      description: 'Verifies the software meets business requirements and is ready for deployment. Often done by stakeholders to confirm the system behaves as expected.'
    },
      ]
};

export const testCases = [
  {
    id: "TC01",
    description: "Correctly classify a 5-year-old as Kid",
    steps: "Enter age 5 and click Determine.",
    expected: "Kid",
    actual: "Kid",
    isTrue: true,
  },
  {
    id: "TC02",
    description: "Correctly classify a 15-year-old as Teenager",
    steps: "Enter age 15 and click Determine.",
    expected: "Teenager",
    actual: "Teenager",
    isTrue: true,
  },
  {
    id: "TC03",
    description: "Correctly classify a 20-year-old as Adult",
    steps: "Enter age 20 and click Determine.",
    expected: "Adult",
    actual: "Adult",
    isTrue: true,
  },
  {
    id: "TC04",
    description: "Correctly classify a 70-year-old as Elder",
    steps: "Enter age 70 and click Determine.",
    expected: "Elder",
    actual: "Elder",
    isTrue: true,
  },
  {
    id: "TC05",
    description: "Display error for negative age",
    steps: "Enter age -5 and click Determine.",
    expected: "Error message: 'Age must be a non-negative numeric value.'",
    actual: "Error message: 'Age must be a non-negative numeric value.'",
    isTrue: true,
  },
  {
    id: "TC06",
    description: "Display error for non-numeric age",
    steps: "Enter age 'abc' and click Determine.",
    expected: "Error message: 'Age must be a non-negative numeric value.'",
    actual: "Error message: 'Age must be a non-negative numeric value.'",
    isTrue: true,
  },
  {
    id: "TC07",
    description: "Display error for fractional age input",
    steps: "Enter age 19.11 and click Determine.",
    expected: "Error message: 'Age must be a non-negative integer.'",
    actual: "Error message: 'Age must be a non-negative integer.'",
    isTrue: true,
  },
  {
    id: "TC08",
    description: "Correctly classify the boundary age of 19 as Teenager",
    steps: "Enter age 19 and click Determine.",
    expected: "Teenager",
    actual: "Teenager",
    isTrue: true,
  },
  {
    id: "TC09",
    description: "Correctly classify an age of 65 as Elder (boundary condition)",
    steps: "Enter age 65 and click Determine.",
    expected: "Elder",
    actual: "Elder",
    isTrue: true,
  },  
  {
    id: "TC10",
    description: "Correctly classify an age of 13 as Kid (boundary condition)",
    steps: "Enter age 13 and click Determine.",
    expected: "Teenager",
    actual: "Teenager",
    isTrue: true,
  },
  {
    id: "TC11",
    description: "Correctly classify the minimum age 0 as Kid",
    steps: "Enter age 0 and click Determine.",
    expected: "Kid",
    actual: "Kid",
    isTrue: true,
  },
  {
    id: "TC12",
    description: "Correctly classify 120 as Elder",
    steps: "Enter age 120 and click Determine.",
    expected: "Elder",
    actual: "Elder", 
    isTrue: true,
  },
  {
    id: "TC13",
    description: "Classify 125 (out of typical range) as Elder",
    steps: "Enter age 125 and click Determine.",
    expected: "Out of typical range",
    actual: "Adult",
    isTrue: false,
  },
  {
    id: "TC14",
    description: "Correctly classify an age of 64 as Adult (boundary condition)",
    steps: "Enter age 64 and click Determine.",
    expected: "Adult",
    actual: "Adult",
    isTrue: true,  
  },
];


export const testCasesV = [
  {
    id: "TC01",
    description: "Correctly classify a 5-year-old as Kid",
    steps: "Enter age 5 and click Determine.",
    expected: "Kid",
    actual: "Kid",
    isTrue: true,
  },
  {
    id: "TC02",
    description: "Correctly classify a 15-year-old as Teenager",
    steps: "Enter age 15 and click Determine.",
    expected: "Teenager",
    actual: "Teenager",
    isTrue: true,
  },
  {
    id: "TC03",
    description: "Correctly classify a 20-year-old as Adult",
    steps: "Enter age 20 and click Determine.",
    expected: "Adult",
    actual: "Adult",
    isTrue: true,
  },
  {
    id: "TC04",
    description: "Correctly classify a 70-year-old as Elder",
    steps: "Enter age 70 and click Determine.",
    expected: "Elder",
    actual: "Elder",
    isTrue: true,
  },
  {
    id: "TC05",
    description: "Display error for negative age",
    steps: "Enter age -5 and click Determine.",
    expected: "Error message: 'Age must be a non-negative numeric value.'",
    actual: "Error message: 'Age must be a non-negative numeric value.'",
    isTrue: true,
  },
  {
    id: "TC06",
    description: "Display error for non-numeric age",
    steps: "Enter age 'abc' and click Determine.",
    expected: "Error message: 'Age must be a non-negative numeric value.'",
    actual: "Error message: 'Age must be a non-negative numeric value.'",
    isTrue: true,
  },
  {
    id: "TC07",
    description: "Display error for fractional age input",
    steps: "Enter age 19.11 and click Determine.",
    expected: "Error message: 'Age must be a non-negative integer.'",
    actual: "Error message: 'Age must be a non-negative integer.'",
    isTrue: true,
  },
  {
    id: "TC08",
    description: "Correctly classify the boundary age of 19 as Teenager",
    steps: "Enter age 19 and click Determine.",
    expected: "Teenager",
    actual: "Teenager",
    isTrue: true,
  },
  {
    id: "TC09",
    description: "Correctly classify an age of 65 as Elder (boundary condition)",
    steps: "Enter age 65 and click Determine.",
    expected: "Elder",
    actual: "Elder",
    isTrue: true,
  },  
  {
    id: "TC10",
    description: "Correctly classify an age of 13 as Kid (boundary condition)",
    steps: "Enter age 13 and click Determine.",
    expected: "Teenager",
    actual: "Teenager",
    isTrue: true,
  },
  {
    id: "TC11",
    description: "Correctly classify the minimum age 0 as Kid",
    steps: "Enter age 0 and click Determine.",
    expected: "Kid",
    actual: "Kid",
    isTrue: true,
  },
  {
    id: "TC12",
    description: "Correctly classify 120 as Elder",
    steps: "Enter age 120 and click Determine.",
    expected: "Elder",
    actual: "Elder", 
    isTrue: true,
  },
  {
    id: "TC13",
    description: "Classify 125 (out of typical range) as Elder",
    steps: "Enter age 125 and click Determine.",
    expected: "Out of typical range",
    actual: "This is out of the realistic scope.",
    isTrue: true,
  },
  {
    id: "TC14",
    description: "Correctly classify an age of 64 as Adult (boundary condition)",
    steps: "Enter age 64 and click Determine.",
    expected: "Adult",
    actual: "Adult",
    isTrue: true,  
  },
];

export const testCasesC = [
  {
    id: "TC01",
    description: "Correctly classify a child (10-year-old) with income 4000 as High Credit Risk",
    steps: "Enter age 10 and income 4000 and click Determine.",
    expected: "100%",
    actual: "100%",
    isTrue: true,
  },
  {
    id: "TC02",
    description: "Correctly classify a child (5-year-old) with income 2500 as High Credit Risk",
    steps: "Enter age 5 and income 2500 and click Determine.",
    expected: "100%",
    actual: "100%",
    isTrue: true,
  },
  {
    id: "TC03",
    description: "Correctly classify a child (12-year-old) with income 2000 as High Credit Risk",
    steps: "Enter age 12 and income 2000 and click Determine.",
    expected: "100%",
    actual: "100%",
    isTrue: true,
  },

  {
    id: "TC04",
    description: "Correctly classify a teenager (14-year-old) with income 2000 as High Credit Risk",
    steps: "Enter age 14 and income 2000 and click Determine.",
    expected: "85%",
    actual: "85%",
    isTrue: true,
  },
  {
    id: "TC05",
    description: "Correctly classify a teenager (18-year-old) with income 25000 as Medium Credit Risk",
    steps: "Enter age 18 and income 25000 and click Determine.",
    expected: "60%",
    actual: "60%",
    isTrue: true,
  },
  {
    id: "TC06",
    description: "Correctly classify a teenager (17-year-old) with income 100000 as Medium Credit Risk",
    steps: "Enter age 17 and income 100000 and click Determine.",
    expected: "55%",
    actual: "55%",
    isTrue: true,
  },

  {
    id: "TC07",
    description: "Correctly classify an adult (35-year-old) with income 2300 as Medium Credit Risk",
    steps: "Enter age 35 and income 2300 and click Determine.",
    expected: "60%",
    actual: "60%",
    isTrue: true,
  },
  {
    id: "TC08",
    description: "Correctly classify an adult (30-year-old) with income 25000 as Medium Credit Risk",
    steps: "Enter age 30 and income 25000 and click Determine.",
    expected: "40%",
    actual: "40%",
    isTrue: true,
  },
  {
    id: "TC09",
    description: "Correctly classify an adult (45-year-old) with income 80000 as Low Credit Risk",
    steps: "Enter age 45 and income 80000 and click Determine.",
    expected: "25%",
    actual: "25%",
    isTrue: true,
  },

  {
    id: "TC10",
    description: "Correctly classify an elder (70-year-old) with income 5000 as High Credit Risk",
    steps: "Enter age 70 and income 5000 and click Determine.",
    expected: "80%",
    actual: "80%",
    isTrue: true,
  },
  {
    id: "TC11",
    description: "Correctly classify an elder (75-year-old) with income 25000 as Medium Credit Risk",
    steps: "Enter age 75 and income 25000 and click Determine.",
    expected: "55%",
    actual: "55%",
    isTrue: true,
  },
  {
    id: "TC12",
    description: "Correctly classify an elder (85-year-old) with income 55000 as Medium Credit Risk",
    steps: "Enter age 85 and income 55000 and click Determine.",
    expected: "50%",
    actual: "50%",
    isTrue: true,
  },

  {
    id: "TC13",
    description: "Handle invalid negative age input (-55) and return 'Invalid Age'",
    steps: "Enter age -55 and income 2500 and click Determine.",
    expected: "Error",
    actual: "Error",
    isTrue: true,
  },
  {
    id: "TC14",
    description: "Handle invalid negative income input (-5000) for a 20-year-old",
    steps: "Enter age 20 and income -5000 and click Determine.",
    expected: "Error",
    actual: "Error",
    isTrue: true,
  },
  {
    id: "TC15",
    description: "Handle invalid income input for a 125-year-old and return 'Out of typical range'",
    steps: "Enter age 125 and income 5000 and click Determine.",
    expected: "Error: Out of typical range",
    actual: "Error: Out of typical range",
    isTrue: true,
  },
  {
    id: "TC16",
    description: "Handle invalid income input for a 120-year-old with 25000 income",
    steps: "Enter age 120 and income 25000 and click Determine.",
    expected: "55%",
    actual: "55%",
    isTrue: true,
  },

  {
    id: "TC17",
    description: "Handle both negative age and negative income input (-100, -1000) and return 'Invalid Age and Income'",
    steps: "Enter age -100 and income -1000 and click Determine.",
    expected: "Error",
    actual: "Error",
    isTrue: true,
  },
  {
    id: "TC18",
    description: "Handle both negative income and valid age (10) and return 'Invalid Income'",
    steps: "Enter age 10 and income -5000 and click Determine.",
    expected: "Error",
    actual: "Error",
    isTrue: true,
  },

  {
    id: "TC19",
    description: "Ensure Reset Button clears all input fields and results.",
    steps: "Enter age 25, income 3000, click Calculate, then click Reset.",
    expected: "Age, income, category, and creditRisk should be cleared.",
    actual: "Age: '', Income: '', Category: null, Credit Risk: null, Error: ''",
    isTrue: true,
  },

  {
    id: "TC20",
    description: "Ensure Reset Button clears the error message after invalid input.",
    steps: "Enter age 10, income -5000, click Calculate (expect error), then click Reset.",
    expected: "Error should be cleared.",
    actual: "Age: '', Income: '', Category: null, Credit Risk: null, Error: ''",
    isTrue: false,
  },
];

export const documentationAgeCategory = {
  overview: `
    The Age Category Estimator is a tool designed to classify a person into one of four categories 
    (Kid, Teenager, Adult, Elder) based on their age input. It follows strict validation rules 
    to ensure accurate data handling and provides clear feedback for invalid inputs. 
    The logic for classification is as follows:
      - Kid: Ages 0 to 12
      - Teenager: Ages 13 to 19
      - Adult: Ages 20 to 64
      - Elder: Ages 65 and above
    This documentation outlines the functional requirements, validation rules, 
    expected behavior, and test cases to help QA engineers plan and conduct effective testing.
  `,
  functionalRequirements: [
    {
      title: "Input Validation",
      details: [
        "Age must be a non-negative numeric value.",
        "Invalid inputs will trigger appropriate error messages."
      ]
    },
    {
      title: "Classification Logic",
      details: [
        "The app categorizes the user based on their age:",
        "Kid: Ages 0-12",
        "Teenager: Ages 13-19",
        "Adult: Ages 20-64",
        "Elder: Ages 65-120"
      ]
    },
    {
      title: "Error Messages",
      details: [
        "The app displays clear error messages for invalid inputs, guiding users to correct their mistakes."
      ]
    }
  ],
  userFlow: `
    1. User inputs their age in the designated field.
    2. User clicks the "Determine Category" button.
    3. If the input is valid, the age category is displayed.
       If the input is invalid, an appropriate error message is shown.
  `,
  validationRules: [
    {
      title: "Age Validation",
      details: [
        "Age must be a non-negative numeric value.",
        "Invalid inputs, such as negative numbers, non-numeric values, or blank fields, will trigger the error message: 'Age must be a non-negative numeric value.'"
      ]
    }
  ],
  expectedBehavior: [
    {
      condition: "Valid age input is provided.",
      behavior: `
        The app classifies the age correctly:
          Age: 5 → Category: Kid;
          Age: 15 → Category: Teenager;
          Age: 30 → Category: Adult;
          Age: 70 → Category: Elder;
          Age: 121 → Error (e.g. Age must be within a realistic range 0-120).
      `
    },
    {
      condition: "Invalid inputs are provided.",
      behavior: `
        Error messages are displayed to indicate the issue:
          Blank or non-numeric age: Displays "Age must be a non-negative numeric value."
          Negative age: Displays "Age must be a non-negative numeric value."
      `
    }
  ]
};

export const documentationMoodTracker = {
  overview: `
    The Mood Tracker application allows users to log, monitor, and analyze their emotional well-being over time. 
    It provides tools to identify mood patterns, view trends, and receive actionable recommendations to enhance emotional health.
    With its user-friendly interface, it enables seamless tracking through a calendar and visual insights via a trends chart.
  `,
  functionalRequirements: [
    {
      title: "Log Mood",
      details: [
        "Users can select a date on the calendar and log a mood using predefined emojis (Happy, Sad, Angry, Tired).",
        "Each mood is associated with an intensity value, stored and displayed on the calendar.",
        "Users can update or overwrite a logged mood for the same date."
      ],
    },
    {
      title: "View Mood Trends",
      details: [
        "A visual chart displays mood intensity over time, helping users identify trends and patterns.",
        "The application summarizes typical moods for each day of the week.",
        "Users can detect fluctuations in emotional states using the trends chart."
      ],
    },
    {
      title: "Get Recommendations",
      details: [
        "Based on the logged mood, tailored suggestions appear to improve or maintain well-being.",
        "Recommendations range from self-care tips to mood-enhancing activities."
      ],
    },
    {
      title: "Mood Stats",
      details: [
        "Displays a breakdown of moods logged for each day of the week, highlighting patterns in mood occurrences.",
        "Provides actionable insights for recurring moods, such as creating routines or addressing mood triggers."
      ],
    },
  ],
  userFlow: `
    1. Open the app and view the current date in the mood calendar.
    2. Select a mood from the provided emojis and optionally review recommendations.
    3. The mood is logged on the selected date and displayed on the calendar.
    4. Navigate to the Mood Trends section to analyze patterns and typical moods.
    5. View Mood Stats for an overview of mood distribution across days of the week.
    6. Add test scenarios and cases, then print the documentation and test logs.
  `,
  validationRules: [
    {
      title: "Date-Mood Association",
      details: [
        "Ensure each mood entry is linked to a valid calendar date.",
        "Prevent duplicate entries for the same date but allow overwrites.",
      ],
    },
    {
      title: "Mood Logging Accuracy",
      details: [
        "Only valid mood options (Happy, Sad, Angry, Tired) are allowed.",
        "Entries must include both mood and intensity values."
      ],
    },
    {
      title: "Recommendations",
      details: [
        "Ensure every logged mood triggers an appropriate recommendation.",
        "Recommendations must correspond to the mood logged by the user."
      ],
    },
  ],
  expectedBehavior: [
    {
      condition: "User logs a mood.",
      behavior: `
        - The mood appears on the calendar on the selected date.
        - A tailored recommendation is displayed immediately after logging the mood.
      `,
    },
    {
      condition: "User views Mood Trends.",
      behavior: `
        - The trends chart reflects all logged moods with mood intensity plotted over time.
        - The chart updates dynamically as new moods are logged.
      `,
    },
    {
      condition: "User checks Mood Stats.",
      behavior: `
        - The app provides a summary of mood patterns by day of the week.
        - Stats are updated as new moods are logged.
      `,
    },
    {
      condition: "User adds a test scenario or case.",
      behavior: `
        - New scenarios and cases are saved to the relevant lists.
        - Both lists can be printed along with documentation.
      `,
    },
  ],
};


export const documentationCreditRiskCalculator = {
  overview: `
    The Credit Risk Calculator is a tool designed to evaluate a person's credit risk based on two main inputs: age and income. 
    The app classifies the user into different age categories and calculates their credit risk percentage accordingly. 
    The logic for classification is as follows:
      - Kid: Age 0-12
      - Teenager: Age 13-19
      - Adult: Age 20-64
      - Elder: Age 65+;
    Based on these age categories and income ranges, a credit risk percentage is calculated:
      - High Credit Risk: Based on low income or certain age groups (Low income <25000).
      - Medium Credit Risk: Based on medium income or other age groups (Medium income between 25000-50000).
      - Low Credit Risk: Based on higher income or certain age ranges (High income >50000).
    The tool also validates user input, ensuring that age and income are within acceptable ranges.
  `,
  functionalRequirements: [
    {
      title: "Input Validation",
      details: [
        "Age and income must be numeric values.",
        "Age must be within a realistic range (0-120).",
        "Income must be a non-negative numeric value.",
        "Invalid inputs will trigger appropriate error messages."
      ]
    },
    {
      title: "Age Category Classification",
      details: [
        "Credit risk is determined by both age and income:",
        "- Kid: Age 0-12, Always 100% risk.",
        "- Teenager: Age 13-19, risk depends on income (85% for low income, 60% for medium income, 55% for high income).",
        "- Adult: Age 20-64, risk depends on income (60% for low income, 40% for medium income, 25% for high income).",
        "- Elder: Age 65+, risk depends on income (80% for low income, 55% for medium income, 50% for high income).",
        "- Invalid inputs for either age or income trigger an error message."
      ]
    },
    {
      title: "Error Messages",
      details: [
        "The app displays clear error messages for invalid inputs, guiding users to correct their mistakes.",
        "If age is not within the range 0-120 or income is negative, the app displays an error message."
      ]
    }
  ],
  userFlow: `
    1. User inputs their age and income in the designated fields.
    2. User clicks the "Calculate Category & Risk" button.
    3. If both inputs are valid, the credit risk percentage is displayed along with the age category.
       If any input is invalid (such as negative age or income), an appropriate error message is shown.
  `,
  validationRules: [
    {
      title: "Age Validation",
      details: [
        "Age must be a non-negative numeric value.",
        "Age must be between 0 and 120.",
        "If age is negative or greater than 120, the app displays: 'Invalid age input.'"
      ]
    },
    {
      title: "Income Validation",
      details: [
        "Income must be a non-negative numeric value.",
        "If income is negative or zero, the app displays: 'Invalid income input.'"
      ]
    }
  ],
  expectedBehavior: [
    {
      condition: "Valid inputs for both age and income are provided.",
      behavior: `
        The app calculates the credit risk as follows:
          Age: 10, Income: 4000 → Credit Risk: 100% (High);
          Age: 14, Income: 2000 → Credit Risk: 85% (High);
          Age: 35, Income: 2300 → Credit Risk: 60% (Medium);
          Age: 40, Income: 35000 → Credit Risk: 40% (Low);
          Age: 85, Income: 1600 → Credit Risk: 80% (High);
          Age: 70, Income: 50000 → Credit Risk: 55% (Medium);
          Age: 25, Income: 60000 → Credit Risk: 25% (Low);
          Age: 18, Income: 26000 → Credit Risk: 60% (Medium);
          Age: 67, Income: 60000 → Credit Risk: 50% (Medium)
      `
    },
    {
      condition: "Invalid inputs are provided.",
      behavior: `
        Error messages are displayed to indicate the issue:
          Negative or non-numeric age: Displays 'Invalid age input.';
          Negative or non-numeric income: Displays 'Invalid income input.';
          Negative or zero income: Displays 'Invalid income input.';
          Age greater than 120: Displays 'Out of typical range (0-120).'
      `
    }
  ]
};

export const GeneralQ = [
{
  question: "1. Which of the following is the primary goal of testing?",
  options: [
    "A. To find as many defects as possible",
    "B. To ensure the software works as expected",
    "C. To prove that the software is defect-free",
    "D. To ensure the system's performance is optimal",
  ],
  correctAnswer: "B. To ensure the software works as expected",
},
{
  question: "2. What is the main difference between verification and validation?",
  options: [
    "A. Verification checks if the software meets the requirements; validation checks if the software meets the user needs.",
    "B. Verification is performed during the testing phase; validation occurs during the development phase.",
    "C. Verification involves dynamic testing; validation is static.",
    "D. There is no difference between verification and validation.",
  ],
  correctAnswer: "A. Verification checks if the software meets the requirements; validation checks if the software meets the user needs.",
},
{
  question: "3. Which of the following is NOT a type of non-functional testing?",
  options: [
    "A. Performance Testing",
    "B. Security Testing",
    "C. Usability Testing",
    "D. System Testing",
  ],
  correctAnswer: "D. System Testing",
},
{
  question: "4. In the context of testing, what does the term 'Test case' refer to?",
  options: [
    "A. A document that describes the steps, inputs, and expected outcomes for a test",
    "B. A report that describes a defect found during testing",
    "C. A type of testing tool used to execute automated tests",
    "D. A process of reviewing software for potential defects",
  ],
  correctAnswer: "A. A document that describes the steps, inputs, and expected outcomes for a test",
},
{
  question: "5. What is the purpose of a test plan?",
  options: [
    "A. To detail the expected defects in the software",
    "B. To describe how testing will be carried out, including the scope, resources, and schedule",
    "C. To document the tools required for automation testing",
    "D. To monitor the time spent on each test case",
  ],
  correctAnswer: "B. To describe how testing will be carried out, including the scope, resources, and schedule",
},
{
  question: "6. Which of the following is a characteristic of good test design techniques?",
  options: [
    "A. They increase the number of test cases",
    "B. They help maximize coverage and minimize redundant tests",
    "C. They require excessive knowledge of the system",
    "D. They focus on testing only the high-risk areas",
  ],
  correctAnswer: "B. They help maximize coverage and minimize redundant tests",
},
{
  question: "7. What is meant by 'Defect Clustering' in software testing?",
  options: [
    "A. The process of grouping defects based on severity",
    "B. The tendency for a small number of modules to contain most of the defects",
    "C. The prioritization of defects based on business needs",
    "D. The correlation between defects and specific testing tools used",
  ],
  correctAnswer: "B. The tendency for a small number of modules to contain most of the defects",
},
{
  question: "8. What is the primary objective of regression testing?",
  options: [
    "A. To verify that the software meets user requirements",
    "B. To confirm that new changes have not negatively affected existing functionality",
    "C. To ensure the application works across different environments",
    "D. To evaluate the system's overall performance under load",
  ],
  correctAnswer: "B. To confirm that new changes have not negatively affected existing functionality",
},
{
  question: "9. What is the main difference between alpha and beta testing?",
  options: [
    "A. Alpha testing is conducted by users, whereas beta testing is done by developers",
    "B. Alpha testing is performed internally by the development team, while beta testing is performed by external users",
    "C. Beta testing occurs before alpha testing",
    "D. Alpha testing focuses on performance; beta testing focuses on functionality",
  ],
  correctAnswer: "B. Alpha testing is performed internally by the development team, while beta testing is performed by external users",
},
{
  question: "10. Which of the following is an example of a static testing technique?",
  options: [
    "A. Boundary value analysis",
    "B. Reviewing requirements documents",
    "C. Load testing",
    "D. Exploratory testing",
  ],
  correctAnswer: "B. Reviewing requirements documents",
},
{
  question: "11. What is meant by 'Test Coverage'?",
  options: [
    "A. The process of selecting the best test cases for execution",
    "B. The percentage of the application’s source code that is executed by the tests",
    "C. The extent to which tests are repeated across different devices",
    "D. The number of defects found during testing",
  ],
  correctAnswer: "B. The percentage of the application’s source code that is executed by the tests",
},
{
  question: "12. What is 'Risk-Based Testing'?",
  options: [
    "A. Testing based on the priority of defects found in previous tests",
    "B. Testing that focuses on areas with the highest risk of failure",
    "C. A testing technique focused solely on functional requirements",
    "D. Testing that involves testing the most critical features first",
  ],
  correctAnswer: "B. Testing that focuses on areas with the highest risk of failure",
},
{
  question: "13. What does the term 'Smoke Testing' refer to?",
  options: [
    "A. A set of basic tests that are run after a new build to check if the most crucial features work",
    "B. A detailed testing process for identifying performance bottlenecks",
    "C. A type of testing that involves checking the security of the application",
    "D. A set of tests designed to find as many defects as possible",
  ],
  correctAnswer: "A. A set of basic tests that are run after a new build to check if the most crucial features work",
},
{
  question: "14. What is the main purpose of a 'Test Execution' phase?",
  options: [
    "A. To identify the most critical defects",
    "B. To design the testing strategy and approach",
    "C. To execute test cases and log the results",
    "D. To analyze the testing process and make adjustments",
  ],
  correctAnswer: "C. To execute test cases and log the results",
},
{
  question: "15. What is 'Boundary Value Analysis'?",
  options: [
    "A. A testing technique that involves testing the system’s boundaries for each input variable",
    "B. A method of testing the system’s limits for stress",
    "C. A static testing technique",
    "D. A type of non-functional testing",
  ],
  correctAnswer: "A. A testing technique that involves testing the system’s boundaries for each input variable",
},
{
  question: "16. In which stage of testing is defect prevention the focus?",
  options: [
    "A. Test Planning",
    "B. Test Execution",
    "C. Test Design",
    "D. Static Testing",
  ],
  correctAnswer: "D. Static Testing",
},
{
  question: "17. What is 'Dynamic Testing'?",
  options: [
    "A. Testing based on reviewing the documents and code without executing them",
    "B. Testing where the system is actively executed and checked for defects",
    "C. Testing focused on the security aspects of the software",
    "D. Testing performed during the development phase to ensure quality assurance",
  ],
  correctAnswer: "B. Testing where the system is actively executed and checked for defects",
},
{
  question: "18. Which type of testing is done after the software is released to the users?",
  options: [
    "A. Alpha Testing",
    "B. Beta Testing",
    "C. Post-Release Testing",
    "D. System Testing",
  ],
  correctAnswer: "C. Post-Release Testing",
},
{
  question: "19. What does 'Test Independence' mean?",
  options: [
    "A. Testers should write their own test cases",
    "B. Test execution should be conducted by a separate team from the development team",
    "C. The testing process should not be impacted by previous tests",
    "D. Test cases must be run independently of any external tools",
  ],
  correctAnswer: "B. Test execution should be conducted by a separate team from the development team",
},
{
  question: "20. What is the primary purpose of 'User Acceptance Testing (UAT)'?",
  options: [
    "A. To verify the software's compliance with legal standards",
    "B. To ensure the system works from the end user's perspective",
    "C. To confirm the system’s performance under load",
    "D. To check that the code is correctly implemented",
  ],
  correctAnswer: "B. To ensure the system works from the end user's perspective",
},
{
    question: "21. What is the purpose of using test metrics in software testing?",
    options: [
      "A. To determine how many defects are found in each phase of testing",
      "B. To evaluate the performance of the testers",
      "C. To measure the efficiency and effectiveness of the testing process",
      "D. To analyze the user feedback about the software"
    ],
    correctAnswer: "C. To measure the efficiency and effectiveness of the testing process",
  },
  {
    question: "22. What is the primary focus of 'Acceptance Testing'?",
    options: [
      "A. To validate the functionality of the software from the user's perspective",
      "B. To verify the system’s performance under load",
      "C. To ensure that security standards are met",
      "D. To confirm that all requirements have been implemented correctly"
    ],
    correctAnswer: "A. To validate the functionality of the software from the user's perspective",
  },
  {
    question: "23. Which of the following is an example of dynamic testing?",
    options: [
      "A. Code review",
      "B. Unit testing",
      "C. Walkthrough",
      "D. Static analysis"
    ],
    correctAnswer: "B. Unit testing",
  },
  {
    question: "24. What does 'Test Automation' primarily help with?",
    options: [
      "A. Reducing the number of manual test cases",
      "B. Identifying new defects in the system",
      "C. Automating the entire testing process",
      "D. Reducing the time taken for test execution in repetitive tests"
    ],
    correctAnswer: "D. Reducing the time taken for test execution in repetitive tests",
  },
  {
    question: "25. What is 'Equivalence Partitioning' in testing?",
    options: [
      "A. A technique to test the boundary values of input variables",
      "B. A testing technique where input data is divided into groups that are expected to behave similarly",
      "C. A method for prioritizing test cases based on risk analysis",
      "D. A form of testing that checks how the system responds to invalid inputs"
    ],
    correctAnswer: "B. A testing technique where input data is divided into groups that are expected to behave similarly",
  },
  {
    question: "26. What is 'Exploratory Testing'?",
    options: [
      "A. A testing technique based on predefined test cases",
      "B. Testing without scripts or documentation, focusing on learning the application",
      "C. A type of non-functional testing focused on performance",
      "D. A method that involves the review of documentation before execution"
    ],
    correctAnswer: "B. Testing without scripts or documentation, focusing on learning the application",
  },
  {
    question: "27. What is the purpose of 'Load Testing'?",
    options: [
      "A. To determine the maximum load the system can handle",
      "B. To evaluate the system’s security vulnerabilities",
      "C. To check if the system can handle the required functional test cases",
      "D. To verify that the software meets user requirements"
    ],
    correctAnswer: "A. To determine the maximum load the system can handle",
  },
  {
    question: "28. What does 'Test Stubbing' involve?",
    options: [
      "A. Running tests in parallel with code development",
      "B. Using a simplified version of a component to test other parts of the system",
      "C. Testing the system after the deployment",
      "D. Logging the results of test execution in real-time"
    ],
    correctAnswer: "B. Using a simplified version of a component to test other parts of the system",
  },
  {
    question: "29. What is the purpose of 'Usability Testing'?",
    options: [
      "A. To check how well the system handles high loads",
      "B. To ensure that the software meets performance requirements",
      "C. To evaluate the user-friendliness and ease of use of the software",
      "D. To test the security features of the system"
    ],
    correctAnswer: "C. To evaluate the user-friendliness and ease of use of the software",
  },
  {
    question: "30. What is 'Static Testing'?",
    options: [
      "A. Testing that involves running the software",
      "B. Testing that is performed without executing the program, such as code review",
      "C. A testing technique that checks performance under stress",
      "D. A method for testing system security"
    ],
    correctAnswer: "B. Testing that is performed without executing the program, such as code review",
  },
  {
    question: "31. What does the term 'Defect Density' refer to?",
    options: [
      "A. The total number of defects found in a specific phase",
      "B. The number of defects found per unit size of the software",
      "C. The severity level of defects found during testing",
      "D. The time taken to fix defects during testing"
    ],
    correctAnswer: "B. The number of defects found per unit size of the software",
  },
  {
    question: "32. What is the purpose of 'Integration Testing'?",
    options: [
      "A. To test the integration of the system with the external environment",
      "B. To ensure that different modules or components of the system work together as expected",
      "C. To test the system in a production environment",
      "D. To evaluate the system’s usability and user interface"
    ],
    correctAnswer: "B. To ensure that different modules or components of the system work together as expected",
  },
  {
    question: "33. What does 'Test Validation' ensure?",
    options: [
      "A. That the software has no defects",
      "B. That the software meets the user’s needs and requirements",
      "C. That the test cases cover all possible inputs",
      "D. That the system performs well under load"
    ],
    correctAnswer: "B. That the software meets the user’s needs and requirements",
  },
  {
    question: "34. What is the difference between 'System Testing' and 'Acceptance Testing'?",
    options: [
      "A. System testing checks individual components, while acceptance testing checks the whole system",
      "B. System testing is performed by developers, while acceptance testing is done by users",
      "C. System testing checks functionality, while acceptance testing ensures the system meets user needs",
      "D. There is no difference between system and acceptance testing"
    ],
    correctAnswer: "C. System testing checks functionality, while acceptance testing ensures the system meets user needs",
  },
  {
    question: "35. What is 'Path Testing' in software testing?",
    options: [
      "A. A type of test designed to explore the functionality of critical paths through the system",
      "B. Testing the boundaries of all inputs to the system",
      "C. A method used to check the load performance of the system",
      "D. A form of dynamic testing focusing on the system’s output"
    ],
    correctAnswer: "A. A type of test designed to explore the functionality of critical paths through the system",
  },
  {
    question: "36. What is 'Configuration Management' in software testing?",
    options: [
      "A. The process of reviewing test cases for completeness",
      "B. The process of managing changes in the software environment and ensuring traceability of testing artifacts",
      "C. Managing test scripts and their execution status",
      "D. The process of ensuring user security during testing"
    ],
    correctAnswer: "B. The process of managing changes in the software environment and ensuring traceability of testing artifacts",
  },
  {
    question: "37. What is the purpose of 'Performance Testing'?",
    options: [
      "A. To measure the system's scalability, responsiveness, and stability under load",
      "B. To check the system’s ability to handle extreme conditions and stress",
      "C. To verify that the system meets user requirements",
      "D. To ensure compliance with regulatory standards"
    ],
    correctAnswer: "A. To measure the system's scalability, responsiveness, and stability under load",
  },
  {
    question: "38. What does 'Test Closure' involve?",
    options: [
      "A. The process of stopping all test activities",
      "B. Reviewing the testing process, creating a final report, and archiving test data",
      "C. Verifying that all defects have been fixed",
      "D. Conducting the final user acceptance tests"
    ],
    correctAnswer: "B. Reviewing the testing process, creating a final report, and archiving test data",
  },
  {
    question: "39. What is the primary goal of 'Security Testing'?",
    options: [
      "A. To check if the system functions correctly under different conditions",
      "B. To identify vulnerabilities in the software and ensure that data is protected",
      "C. To verify the system meets user requirements",
      "D. To confirm the system’s performance under load"
    ],
    correctAnswer: "B. To identify vulnerabilities in the software and ensure that data is protected",
  },
  {
    question: "40. What is the main benefit of 'Test-Driven Development (TDD)'?",
    options: [
      "A. It allows for the implementation of testing only after development",
      "B. It promotes the creation of tests before the actual code is written",
      "C. It reduces the amount of test cases needed",
      "D. It focuses on usability testing"
    ],
    correctAnswer: "B. It promotes the creation of tests before the actual code is written",
  },
  {
    question: "41. What is 'Mutation Testing'?",
    options: [
      "A. Testing different versions of the same software",
      "B. A technique where code is deliberately changed to verify test effectiveness",
      "C. Testing multiple features simultaneously",
      "D. Testing software across different platforms"
    ],
    correctAnswer: "B. A technique where code is deliberately changed to verify test effectiveness",
  },
  {
    question: "42. What is 'Pair Testing'?",
    options: [
      "A. Two testers working independently on the same feature",
      "B. Testing software in pairs of test cases",
      "C. Two people working together to test software, sharing ideas and findings",
      "D. Running two different types of tests simultaneously"
    ],
    correctAnswer: "C. Two people working together to test software, sharing ideas and findings",
},
{
    question: "43. What is a 'Test Oracle'?",
    options: [
      "A. A senior tester who reviews all test cases",
      "B. A mechanism for determining whether a test has passed or failed",
      "C. A database of test results",
      "D. An automated testing tool"
    ],
    correctAnswer: "B. A mechanism for determining whether a test has passed or failed",
  },
  {
    question: "44. What is 'Fuzz Testing'?",
    options: [
      "A. Testing with unclear requirements",
      "B. Testing with random data inputs to find vulnerabilities",
      "C. Testing without proper documentation",
      "D. Testing under time pressure"
    ],
    correctAnswer: "B. Testing with random data inputs to find vulnerabilities",
  },
  {
    question: "45. What is 'Monkey Testing'?",
    options: [
      "A. Testing without any specific pattern or sequence",
      "B. Testing basic functionality only",
      "C. Testing with predefined scenarios",
      "D. Testing with automated tools only"
    ],
    correctAnswer: "A. Testing without any specific pattern or sequence",
  },
  {
    question: "46. What is a 'Test Harness'?",
    options: [
      "A. A collection of test data",
      "B. A test management tool",
      "C. A testing environment including test data, test cases, and execution tools",
      "D. A bug tracking system"
    ],
    correctAnswer: "C. A testing environment including test data, test cases, and execution tools",
  },
  {
    question: "47. What is 'Pesticide Paradox' in software testing?",
    options: [
      "A. When bugs appear after fixing other bugs",
      "B. When the same tests repeated over time become ineffective at finding new bugs",
      "C. When testing becomes too expensive",
      "D. When tests become obsolete"
    ],
    correctAnswer: "B. When the same tests repeated over time become ineffective at finding new bugs",
  },
  {
    question: "48. What is 'Error Guessing'?",
    options: [
      "A. Random testing of the application",
      "B. Testing based on test cases only",
      "C. Testing based on experience to predict where errors might occur",
      "D. Testing without proper planning"
    ],
    correctAnswer: "C. Testing based on experience to predict where errors might occur",
  },
  {
    question: "49. What is 'Session-Based Testing'?",
    options: [
      "A. Testing done in time-boxed sessions with specific objectives",
      "B. Testing during development sessions",
      "C. Testing with multiple users simultaneously",
      "D. Testing in different time zones"
    ],
    correctAnswer: "A. Testing done in time-boxed sessions with specific objectives",
  },
  {
    question: "50. What is 'Dogfooding'?",
    options: [
      "A. Testing with real user data",
      "B. When a company uses its own product internally before release",
      "C. Testing without proper tools",
      "D. Beta testing with selected users"
    ],
    correctAnswer: "B. When a company uses its own product internally before release",
  },
  {
    question: "51. What is 'Shift-Left Testing'?",
    options: [
      "A. Moving testing activities earlier in the software development lifecycle",
      "B. Testing only left-side components of the application",
      "C. A type of performance testing",
      "D. Testing after deployment"
    ],
    correctAnswer: "A. Moving testing activities earlier in the software development lifecycle",
  },
  {
    question: "52. What is 'Chaos Testing'?",
    options: [
      "A. Testing without proper documentation",
      "B. Deliberately introducing failures to test system resilience",
      "C. Random testing of features",
      "D. Testing under extreme stress conditions"
    ],
    correctAnswer: "B. Deliberately introducing failures to test system resilience",
  },
  {
    question: "53. What is 'Synthetic Monitoring'?",
    options: [
      "A. Testing with artificial users and transactions",
      "B. Monitoring system performance in production",
      "C. Testing with synthetic data",
      "D. Automated performance testing"
    ],
    correctAnswer: "A. Testing with artificial users and transactions",
  },
  {
    question: "54. What is 'Canary Testing'?",
    options: [
      "A. Testing in isolated environments",
      "B. Rolling out changes to a small subset of users before full deployment",
      "C. Testing emergency scenarios",
      "D. Testing with warning systems"
    ],
    correctAnswer: "B. Rolling out changes to a small subset of users before full deployment",
  },
  {
    question: "55. What is 'A/B Testing'?",
    options: [
      "A. Testing two different versions of code",
      "B. Comparing two different test approaches",
      "C. Testing two different versions of a feature with real users",
      "D. Testing in two different environments"
    ],
    correctAnswer: "C. Testing two different versions of a feature with real users",
  },
  {
    question: "56. What is 'Contract Testing'?",
    options: [
      "A. Testing legal documents",
      "B. Testing agreements between services or components",
      "C. Testing service level agreements",
      "D. Testing user contracts"
    ],
    correctAnswer: "B. Testing agreements between services or components",
  },
  {
    question: "57. What is 'Immersion Testing'?",
    options: [
      "A. Testing in a production-like environment",
      "B. Testing while fully engaged with the product for an extended period",
      "C. Testing underwater devices",
      "D. Testing in isolated conditions"
    ],
    correctAnswer: "B. Testing while fully engaged with the product for an extended period",
  },
  {
    question: "58. What is 'Metamorphic Testing'?",
    options: [
      "A. Testing system transformations",
      "B. Testing with changing requirements",
      "C. Verifying relationships between multiple executions of a program",
      "D. Testing system mutations"
    ],
    correctAnswer: "C. Verifying relationships between multiple executions of a program",
  },
  {
    question: "59. What is 'Soak Testing'?",
    options: [
      "A. Testing system behavior under sustained load over an extended period",
      "B. Testing system recovery from crashes",
      "C. Testing system backup procedures",
      "D. Testing system performance under peak loads"
    ],
    correctAnswer: "A. Testing system behavior under sustained load over an extended period",
  },
  {
    question: "60. What is 'Crowd Testing'?",
    options: [
      "A. Testing with a large group of users",
      "B. Testing in crowded environments",
      "C. Testing with multiple testers simultaneously",
      "D. Testing social features of an application"
    ],
    correctAnswer: "A. Testing with a large group of users",
  },
  {
    question: "61. What is the main purpose of 'Sanity Testing'?",
    options: [
      "A. To test the entire application thoroughly",
      "B. To quickly evaluate if a specific function or component is working at a basic level",
      "C. To check system security",
      "D. To verify system performance"
    ],
    correctAnswer: "B. To quickly evaluate if a specific function or component is working at a basic level",
  },
  {
    question: "62. In Security Testing, what is 'Penetration Testing'?",
    options: [
      "A. Testing system performance under heavy load",
      "B. Authorized simulated attacks to identify security vulnerabilities",
      "C. Testing system backup procedures",
      "D. Testing user authentication only"
    ],
    correctAnswer: "B. Authorized simulated attacks to identify security vulnerabilities",
  },
  {
    question: "63. What distinguishes 'Smoke Testing' from 'Sanity Testing'?",
    options: [
      "A. Smoke testing is more comprehensive and tests critical functionalities, while sanity testing focuses on specific components",
      "B. Smoke testing is performed only in production",
      "C. Sanity testing is only done by developers",
      "D. There is no difference between them"
    ],
    correctAnswer: "A. Smoke testing is more comprehensive and tests critical functionalities, while sanity testing focuses on specific components",
  },
  {
    question: "64. What is 'SQL Injection Testing'?",
    options: [
      "A. Testing database performance",
      "B. Testing database connections",
      "C. Testing for vulnerabilities in database queries that could allow unauthorized access",
      "D. Testing SQL query optimization"
    ],
    correctAnswer: "C. Testing for vulnerabilities in database queries that could allow unauthorized access",
  },
  {
    question: "65. What is 'Cross-Site Scripting (XSS) Testing'?",
    options: [
      "A. Testing across different websites",
      "B. Testing for vulnerabilities that allow injection of malicious scripts",
      "C. Testing script performance",
      "D. Testing browser compatibility"
    ],
    correctAnswer: "B. Testing for vulnerabilities that allow injection of malicious scripts",
  },
  {
    question: "66. What is 'Recovery Testing'?",
    options: [
      "A. Testing how well the system recovers from crashes, hardware failures, or other catastrophic problems",
      "B. Testing system backup procedures",
      "C. Testing data recovery only",
      "D. Testing system restore points"
    ],
    correctAnswer: "A. Testing how well the system recovers from crashes, hardware failures, or other catastrophic problems",
  },
  {
    question: "67. What is 'Authentication Testing'?",
    options: [
      "A. Testing user interface",
      "B. Verifying that only authorized users can access the system",
      "C. Testing system performance",
      "D. Testing data encryption"
    ],
    correctAnswer: "B. Verifying that only authorized users can access the system",
  },
  {
    question: "68. What is 'Vulnerability Scanning'?",
    options: [
      "A. Manual testing for security issues",
      "B. Automated testing of known security vulnerabilities",
      "C. Testing system backups",
      "D. Scanning system documentation"
    ],
    correctAnswer: "B. Automated testing of known security vulnerabilities",
  },
  {
    question: "69. What is 'Failover Testing'?",
    options: [
      "A. Testing system failure scenarios",
      "B. Testing backup systems when primary systems fail",
      "C. Testing failed test cases",
      "D. Testing system crashes"
    ],
    correctAnswer: "B. Testing backup systems when primary systems fail",
  },
  {
    question: "70. What is 'Compliance Testing'?",
    options: [
      "A. Testing if the system meets industry standards and regulations",
      "B. Testing system compatibility",
      "C. Testing user compliance",
      "D. Testing security compliance only"
    ],
    correctAnswer: "A. Testing if the system meets industry standards and regulations",
  },
  {
    question: "71. What is the primary purpose of API Testing?",
    options: [
      "A. To test the user interface",
      "B. To verify the functionality, reliability, and security of application programming interfaces",
      "C. To test database connections only",
      "D. To check system performance"
    ],
    correctAnswer: "B. To verify the functionality, reliability, and security of application programming interfaces",
  },
  {
    question: "72. Which HTTP method is typically used to retrieve data from an API?",
    options: [
      "A. POST",
      "B. PUT",
      "C. GET",
      "D. DELETE"
    ],
    correctAnswer: "C. GET",
  },
  {
    question: "73. What is API Response Code 404 typically indicating?",
    options: [
      "A. Successful request",
      "B. Server error",
      "C. Resource not found",
      "D. Unauthorized access"
    ],
    correctAnswer: "C. Resource not found",
  },
  {
    question: "74. What is 'API Documentation Testing'?",
    options: [
      "A. Testing if the API documentation is well-written",
      "B. Verifying that the API behaves as described in its documentation",
      "C. Writing API documentation",
      "D. Testing API performance"
    ],
    correctAnswer: "B. Verifying that the API behaves as described in its documentation",
  },
  {
    question: "75. What is 'API Schema Validation'?",
    options: [
      "A. Validating API security",
      "B. Checking if the API response matches the expected data structure",
      "C. Testing API performance",
      "D. Verifying API documentation"
    ],
    correctAnswer: "B. Checking if the API response matches the expected data structure",
  },
  {
    question: "76. What is the purpose of API Load Testing?",
    options: [
      "A. To verify API functionality",
      "B. To test how the API handles multiple simultaneous requests",
      "C. To check API documentation",
      "D. To validate API response formats"
    ],
    correctAnswer: "B. To test how the API handles multiple simultaneous requests",
  },
  {
    question: "77. What is 'API Mocking'?",
    options: [
      "A. Making fun of APIs",
      "B. Creating a simulated API environment for testing purposes",
      "C. Testing API security",
      "D. Writing API documentation"
    ],
    correctAnswer: "B. Creating a simulated API environment for testing purposes",
  },
  {
    question: "78. What is the purpose of API Security Testing?",
    options: [
      "A. To test API performance",
      "B. To verify API documentation",
      "C. To identify vulnerabilities and ensure proper authentication and authorization",
      "D. To check API response times"
    ],
    correctAnswer: "C. To identify vulnerabilities and ensure proper authentication and authorization",
  },
  {
    question: "79. What is 'API Integration Testing'?",
    options: [
      "A. Testing individual API endpoints",
      "B. Testing how multiple APIs work together",
      "C. Testing API documentation",
      "D. Testing API security"
    ],
    correctAnswer: "B. Testing how multiple APIs work together",
  },
  {
    question: "80. What is 'API Contract Testing'?",
    options: [
      "A. Testing API legal agreements",
      "B. Verifying that API consumers and providers adhere to agreed-upon interfaces",
      "C. Testing API performance",
      "D. Testing API documentation"
    ],
    correctAnswer: "B. Verifying that API consumers and providers adhere to agreed-upon interfaces",
  },
  {
    question: "81. What does HTTP Status Code 200 indicate in API testing?",
    options: [
      "A. Server error",
      "B. Successful request and response",
      "C. Resource not found",
      "D. Bad request"
    ],
    correctAnswer: "B. Successful request and response",
  },
  {
    question: "82. What does HTTP Status Code 201 represent?",
    options: [
      "A. Resource successfully created",
      "B. Resource updated",
      "C. Resource deleted",
      "D. Resource found"
    ],
    correctAnswer: "A. Resource successfully created",
  },
  {
    question: "83. What is indicated by HTTP Status Code 400?",
    options: [
      "A. Server error",
      "B. Successful request",
      "C. Bad request from client",
      "D. Unauthorized access"
    ],
    correctAnswer: "C. Bad request from client",
  },
  {
    question: "84. What does HTTP Status Code 500 signify?",
    options: [
      "A. Client-side error",
      "B. Internal server error",
      "C. Successful request",
      "D. Resource not found"
    ],
    correctAnswer: "B. Internal server error",
  },
  {
    question: "85. What is the meaning of HTTP Status Code 401?",
    options: [
      "A. Server is busy",
      "B. Bad request",
      "C. Unauthorized access - authentication required",
      "D. Resource not found"
    ],
    correctAnswer: "C. Unauthorized access - authentication required",
  },
  {
    question: "86. What does HTTP Status Code 403 indicate?",
    options: [
      "A. Server is down",
      "B. Forbidden - client lacks access rights",
      "C. Resource not available",
      "D. Bad request"
    ],
    correctAnswer: "B. Forbidden - client lacks access rights",
  },
  {
    question: "87. In API testing, what is the difference between Status Code 401 and 403?",
    options: [
      "A. No difference, they are the same",
      "B. 401 means authentication is needed, 403 means authenticated but not authorized",
      "C. Both indicate server errors",
      "D. Both indicate successful requests"
    ],
    correctAnswer: "B. 401 means authentication is needed, 403 means authenticated but not authorized",
  },
  {
    question: "88. What does HTTP Status Code 503 represent?",
    options: [
      "A. Service unavailable - server temporarily overloaded or down",
      "B. Bad gateway",
      "C. Client error",
      "D. Successful request"
    ],
    correctAnswer: "A. Service unavailable - server temporarily overloaded or down",
  },
  {
    question: "89. What is HTTP Status Code 204 typically used for?",
    options: [
      "A. Error in request",
      "B. Successful request but no content to return",
      "C. Server error",
      "D. Resource created"
    ],
    correctAnswer: "B. Successful request but no content to return",
  },
  {
    question: "90. What does HTTP Status Code 502 indicate?",
    options: [
      "A. Successful request",
      "B. Client error",
      "C. Bad gateway - invalid response from upstream server",
      "D. Resource not found"
    ],
    correctAnswer: "C. Bad gateway - invalid response from upstream server",
  },
  {
    question: "91. What are the seven testing principles according to ISTQB?",
    options: [
      "A. Testing shows presence of defects; Early testing; Defect clustering; Pesticide paradox; Testing is context dependent; Absence of errors fallacy; Exhaustive testing is impossible",
      "B. Testing shows absence of defects; Late testing; Error guessing; Defect prevention; Testing is independent; Error clustering; Complete testing is possible",
      "C. Testing shows bugs; Continuous testing; Error prevention; Testing is automated; Defect reporting; Manual testing is obsolete; All testing is possible",
      "D. Testing finds all bugs; Automated testing; Defect logging; Testing is expensive; Error clustering; Bug prevention; Complete testing"
    ],
    correctAnswer: "A. Testing shows presence of defects; Early testing; Defect clustering; Pesticide paradox; Testing is context dependent; Absence of errors fallacy; Exhaustive testing is impossible",
  },
  {
    question: "92. What is the difference between Error, Defect, and Failure?",
    options: [
      "A. They are all the same thing",
      "B. Error is a human mistake, Defect is a flaw in code, Failure is when the system doesn't perform required function",
      "C. Error is in code, Defect is in requirements, Failure is in design",
      "D. Error is in testing, Defect is in production, Failure is in deployment"
    ],
    correctAnswer: "B. Error is a human mistake, Defect is a flaw in code, Failure is when the system doesn't perform required function",
  },
  {
    question: "93. What are the four levels of testing according to ISTQB?",
    options: [
      "A. Unit, Integration, System, Acceptance Testing",
      "B. Component, Module, System, User Testing",
      "C. Code, Function, Integration, Production Testing",
      "D. Development, Testing, Staging, Production Testing"
    ],
    correctAnswer: "A. Unit, Integration, System, Acceptance Testing",
  },
  {
    question: "94. What is the purpose of the V-Model in software testing?",
    options: [
      "A. To show the relationship between development and testing activities",
      "B. To demonstrate how to write test cases",
      "C. To explain bug reporting procedures",
      "D. To show how to perform regression testing"
    ],
    correctAnswer: "A. To show the relationship between development and testing activities",
  },
  {
    question: "95. What is the difference between Quality Assurance (QA) and Quality Control (QC)?",
    options: [
      "A. They are the same thing",
      "B. QA is process-oriented and preventive, QC is product-oriented and detective",
      "C. QA is about testing, QC is about development",
      "D. QA is about fixing bugs, QC is about finding bugs"
    ],
    correctAnswer: "B. QA is process-oriented and preventive, QC is product-oriented and detective",
  },
  {
    question: "96. What is the purpose of Entry and Exit Criteria in testing?",
    options: [
      "A. To determine when to start and stop testing",
      "B. To decide who can enter or exit the testing team",
      "C. To manage test environment access",
      "D. To control test data creation"
    ],
    correctAnswer: "A. To determine when to start and stop testing",
  },
  {
    question: "97. What is the difference between Black Box and White Box Testing?",
    options: [
      "A. Black box is manual testing, white box is automated testing",
      "B. Black box testing is done without knowledge of internal code, white box testing requires knowledge of internal code",
      "C. Black box is functional testing, white box is only performance testing",
      "D. Black box is done by developers, white box is done by testers"
    ],
    correctAnswer: "B. Black box testing is done without knowledge of internal code, white box testing requires knowledge of internal code",
  },
  {
    question: "98. What is a Test Design Technique?",
    options: [
      "A. A way to create user interfaces",
      "B. A method used to derive and select test conditions, test cases, or test data",
      "C. A tool for automated testing",
      "D. A process for reporting bugs"
    ],
    correctAnswer: "B. A method used to derive and select test conditions, test cases, or test data",
  },
  {
    question: "99. What is Configuration Management in testing?",
    options: [
      "A. Setting up test environments",
      "B. A system of handling changes to deliverables and testing artifacts",
      "C. Managing test cases",
      "D. Configuring test tools"
    ],
    correctAnswer: "B. A system of handling changes to deliverables and testing artifacts",
  },
  {
    question: "100. What is the purpose of a Test Strategy?",
    options: [
      "A. To list all test cases",
      "B. To provide a high-level description of the test levels to be performed and the testing within those levels",
      "C. To report test results",
      "D. To track defects"
    ],
    correctAnswer: "B. To provide a high-level description of the test levels to be performed and the testing within those levels",
  }

]

export const moodTrackerTestPlan = {
  introduction: {
    purpose: "To verify the functionality and reliability of the Mood Tracker application's core features",
    scope: "Testing covers mood logging, trend analysis, recommendations, and statistical features"
  },
  testItems: [
    "Mood logging functionality with emoji selection",
    "Calendar integration and date selection",
    "Trend analysis chart visualization",
    "Mood statistics calculation and display",
    "Recommendation system based on mood patterns",
    "Test scenario management",
    "Test case tracking system"
  ],

  approach: {
    strategy: "Implement a combination of manual and automated testing focusing on user scenarios and edge cases. Include regression testing for each new feature.",
    types: [
      "Unit Testing",
      "Integration Testing",
      "User Interface Testing",
      "Regression Testing"
    ]
  },
  environment: {
    hardware: "Desktop/laptop with minimum 8GB RAM, 1920x1080 display resolution",
    software: "Latest Chrome/Firefox browsers, Node.js v16+, React v18+",
    other: "Stable internet connection for chart updates"
  },
  schedule: {
    startDate: "2025-03-15",
    endDate: "2025-04-15",
    milestones: [
      "Initial Testing: March 15-20",
      "Bug Fixes: March 21-30",
      "Regression Testing: April 1-10",
      "Final Report: April 15"
    ]
  },
  risks: [
    "Data loss during mood logging",
    "Performance issues with large datasets",
    "Browser compatibility issues",
    "Incorrect statistical calculations"
  ],
  defectManagement: {
    process: "Bugs are logged with severity and priority. High-severity issues block testing progress until resolved. Daily bug triage meetings to assess impact.",
    severity: ["Critical", "High", "Medium", "Low"],
    priority: ["High", "Medium", "Low"]
  },

  identifiedBugs: [
    {
      id: "BUG-001",
      title: "Future Date Mood Entry Not Prevented",
      status: "Open",
      severity: "High",
      priority: "High",
      reporter: "Pepa Smith",
      assignee: "Laila Developer",
      dateReported: "2025-03-16",
      dateUpdated: "2025-03-17",
      product: "Mood Tracker",
      version: "1.2.3",
      component: "Calendar Validation",
      description: "System allows users to log moods for future dates, which should not be possible as it violates business logic",
      stepsToReproduce: [
        "Navigate to Mood Tracker main page",
        "Click on a future date in the calendar",
        "Select any mood emoji",
        "Observe that the mood is logged successfully"
      ],
      expectedResult: "System should display an error message and prevent mood logging for any future date",
      actualResult: "System accepts the mood entry and displays it on the future date without any validation",
      environment: {
        browser: "Chrome 122.0.6261.112",
        os: "Windows 11 Pro",
        resolution: "1920x1080",
        viewport: "1280x720",
        deviceType: "Desktop"
      },
      screenshots: [
        {
          name: "future_date_selection.png",
          description: "Calendar showing future date selected"
        },
        {
          name: "mood_logged_future.png",
          description: "Mood successfully logged on future date"
        }
      ],
      attachments: [
        {
          name: "console_log.txt",
          description: "Browser console log during reproduction"
        }
      ],
      workaround: "Currently no workaround available - users must manually avoid selecting future dates",
      impact: "High - Affects data integrity and reporting accuracy",
      affectedUsers: "All users with calendar access",
      relatedIssues: ["TC-002", "REQ-015"],
      comments: [
        {
          author: "Kikimora Developer",
          date: "2025-03-17",
          text: "Initial investigation shows missing date validation in calendar component"
        }
      ]
    },
    {
      id: "BUG-002",
      title: "Mood Statistics Calculation Incorrect",
      status: "In Progress",
      severity: "High",
      priority: "High",
      reporter: "Pirin Tester",
      assignee: "Rila Developer",
      dateReported: "2025-03-18",
      dateUpdated: "2025-03-19",
      product: "Mood Tracker",
      version: "1.2.3",
      component: "Statistics Engine",
      description: "Average mood calculations show incorrect values when there are days with no mood entries",
      stepsToReproduce: [
        " Clear all mood entries",
        " Log moods for Monday (Happy) and Wednesday (Sad)",
        " Leave Tuesday without any entry",
        " Navigate to statistics panel",
        " Check average mood calculation"
      ],
      expectedResult: "Average mood should only consider days with entries (Monday and Wednesday)",
      actualResult: "System includes empty Tuesday in calculation, resulting in incorrect average",
      environment: {
        browser: "Firefox 123.0",
        os: "macOS Sonoma 14.3.1",
        resolution: "2560x1600",
        viewport: "1440x900",
        deviceType: "Desktop"
      },
      screenshots: [
        {
          name: "incorrect_stats.png",
          description: "Statistics panel showing wrong calculations"
        },
        {
          name: "mood_entries.png",
          description: "Calendar view showing entered moods"
        }
      ],
      attachments: [
        {
          name: "calculation_data.json",
          description: "Raw data showing calculation issue"
        }
      ],
      workaround: "Manually calculate averages excluding empty days",
      impact: "High - Affects reporting accuracy and mood trend analysis",
      affectedUsers: "All users viewing statistics",
      relatedIssues: ["TC-003", "REQ-023"],
      comments: [
        {
          author: "Torbalan Developer",
          date: "2025-03-19",
          text: "Found logic error in average calculation function"
        }
      ]
    },
    {
      id: "BUG-003",
      title: "Recommendations Not Persisting After Refresh",
      status: "Open",
      severity: "Medium",
      priority: "Medium",
      reporter: "Gloria QA",
      assignee: "Lepa Brena Developer",
      dateReported: "2025-03-20",
      dateUpdated: "2025-03-20",
      product: "Mood Tracker",
      version: "1.2.3",
      component: "Recommendation System",
      description: "Mood recommendations disappear when the page is refreshed, requiring users to re-log their mood to see recommendations",
      stepsToReproduce: [
        "Navigate to Mood Tracker",
        "Log any mood",
        "Observe recommendation appears",
        "Refresh the page",
        "Observe recommendation disappears"
      ],
      expectedResult: "Recommendations should persist across page refreshes",
      actualResult: "Recommendations are lost upon page refresh",
      environment: {
        browser: "Safari 17.3.1",
        os: "iOS 17.3.1",
        resolution: "1170x2532",
        viewport: "390x844",
        deviceType: "Mobile"
      },
      screenshots: [
        {
          name: "before_refresh.png",
          description: "Recommendation shown before refresh"
        },
        {
          name: "after_refresh.png",
          description: "Missing recommendation after refresh"
        }
      ],
      attachments: [
        {
          name: "localStorage_data.txt",
          description: "Local storage state before and after refresh"
        }
      ],
      workaround: "Re-log mood to see recommendation",
      impact: "Medium - Affects user experience but doesn't prevent core functionality",
      affectedUsers: "All users receiving recommendations",
      relatedIssues: ["TC-004", "REQ-018"],
      comments: [
        {
          author: "Baba Yaga Developer",
          date: "2025-03-20",
          text: "Need to implement local storage for recommendations"
        }
      ]
    }
  ],

  sampleTestScenarios: [
    {
      title: "Basic Mood Logging Flow",
      description: "Verify complete mood logging functionality",
      preconditions: "User is on the main page",
      steps: "1. Select today's date\n2. Click any mood emoji\n3. Verify calendar update\n4. Check recommendation\n5. Verify mood trends chart update",
      expectedResult: "Mood is logged, calendar updated, recommendation shown, chart updated"
    },
    {
      title: "Mood Statistics Calculation",
      description: "Verify mood statistics calculation for different days",
      preconditions: "Multiple mood entries exist",
      steps: "1. Log moods for different days\n2. Check statistics panel\n3. Verify calculations\n4. Check day-wise breakdown",
      expectedResult: "Accurate statistics shown for each day with proper calculations"
    }
  ],

  sampleTestCases: [
    {
      id: "TC-001",
      title: "Happy Mood Logging",
      description: "Verify Happy mood emoji logging",
      steps: "1. Select today\n2. Click Happy emoji\n3. Check calendar\n4. Verify recommendation\n5. Check trends",
      expectedOutcome: "Happy emoji appears on calendar with appropriate recommendation",
      passFail: "Not tested"
    },
    {
      id: "TC-002",
      title: "Future Date Validation",
      description: "Verify future date restriction",
      steps: "1. Select future date\n2. Attempt mood logging",
      expectedOutcome: "Error message shown preventing future date entry",
      passFail: "Failed - Bug reported"
    },
    {
      id: "TC-003",
      title: "Statistics Calculation",
      description: "Verify mood statistics",
      steps: "1. Log moods for each day\n2. Check statistics panel\n3. Verify calculations",
      expectedOutcome: "Accurate statistics displayed for each day",
      passFail: "Failed - Bug reported"
    }
  ]
};

export const tddExercises = [
  {
    id: 1,
    title: "String Calculator Kata",
    description: "Create a calculator that handles string inputs. This exercise uses Jest testing syntax - Jest is a popular JavaScript testing framework that provides a simple, expressive API for writing tests. Notice how we use 'describe', 'test', and 'expect' functions, which are core Jest features.",
    codeNote: "The test code follows Jest conventions. To make it more Jest-like:\n- Use 'describe' blocks to group related tests\n- Use 'beforeEach' for test setup\n- Use 'expect()' with Jest matchers like .toBe(), .toEqual()\n- Consider adding test lifecycle hooks",
    requirements: [
      "Method should return 0 for empty string",
      "Method should return number for single number string",
      "Method should return sum for two comma-separated numbers"
    ],
    testCases: [
      { input: '""', expected: 0, description: "Empty string example" },
      { input: '"1"', expected: 1, description: "Single number example" },
      { input: '"1,2"', expected: 3, description: "Multiple numbers example" }
    ],
    steps: [
      {
        type: "test",
        template: `
describe('StringCalculator', () => {
  test('empty string returns zero', () => {
    [SELECT1]([SELECT2]("")).[SELECT3](0);
  });
});`,
        blanks: [
          {
            id: "SELECT1",
            options: ["expect", "test", "describe", "toBe"],
            correct: "expect"
          },
          {
            id: "SELECT2",
            options: ["add", "sum", "calculate", "compute"],
            correct: "add"
          },
          {
            id: "SELECT3",
            options: ["toBe", "toEqual", "toMatch", "toHave"],
            correct: "toBe"
          }
        ]
      },
      {
        type: "implementation",
        template: `
function add(numbers) {
  [SELECT1] (numbers === "") [SELECT2] 0;
  const nums = numbers.[SELECT3](",").[SELECT4](Number);
  return nums.[SELECT5]((a, b) => a + b, 0);
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["if", "while", "for", "switch"],
            correct: "if"
          },
          {
            id: "SELECT2",
            options: ["return", "break", "continue", "yield"],
            correct: "return"
          },
          {
            id: "SELECT3",
            options: ["split", "slice", "substring", "concat"],
            correct: "split"
          },
          {
            id: "SELECT4",
            options: ["map", "forEach", "filter", "find"],
            correct: "map"
          },
          {
            id: "SELECT5",
            options: ["reduce", "map", "filter", "some"],
            correct: "reduce"
          }
        ]
      },
      {
        type: "refactor",
        template: `
// Optional: Improve the code while keeping tests green
function add(numbers) {
  [SELECT1] (numbers === "") [SELECT2] 0;
  return numbers.[SELECT3](",")
    .[SELECT4](Number)
    .[SELECT5]((a, b) => a + b, 0);
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["if", "while", "for", "switch"],
            correct: "if"
          },
          {
            id: "SELECT2",
            options: ["return", "break", "continue", "yield"],
            correct: "return"
          },
          {
            id: "SELECT3",
            options: ["split", "slice", "substring", "concat"],
            correct: "split"
          },
          {
            id: "SELECT4",
            options: ["map", "forEach", "filter", "find"],
            correct: "map"
          },
          {
            id: "SELECT5",
            options: ["reduce", "map", "filter", "some"],
            correct: "reduce"
          }
        ]
      }
    ],
    hints: [
      "Think about what should happen with an empty string first",
      "Consider how to split the string into numbers",
      "Remember to handle the sum of multiple numbers"
    ]
  },
  {
    id: 2,
    title: "FizzBuzz Kata",
    description: "Write a program that prints numbers with special rules. This kata uses Jest's testing patterns to validate the implementation. Jest provides built-in matchers and assertion functions that make test writing intuitive and readable.",
    codeNote: "The test syntax mirrors Jest's API. To write more authentic Jest tests:\n- Group related tests in 'describe' blocks\n- Use specific matchers like .toBe() for exact equality\n- Consider adding error cases with .toThrow()",
    requirements: [
      "Numbers divisible by 3 return 'Fizz'",
      "Numbers divisible by 5 return 'Buzz'",
      "Numbers divisible by both 3 and 5 return 'FizzBuzz'",
      "Other numbers return the number itself as a string"
    ],
    testCases: [
      { input: "1", expected: "1", description: "Regular number returns string" },
      { input: "3", expected: "Fizz", description: "Multiple of 3 returns Fizz" },
      { input: "5", expected: "Buzz", description: "Multiple of 5 returns Buzz" },
      { input: "15", expected: "FizzBuzz", description: "Multiple of both returns FizzBuzz" }
    ],
    steps: [
      {
        type: "test",
        template: `
describe('FizzBuzz', () => {
  test('regular number returns string number', () => {
    [SELECT1]([SELECT2](1)).[SELECT3]("1");
  });
});`,
        blanks: [
          {
            id: "SELECT1",
            options: ["expect", "test", "describe", "toBe"],
            correct: "expect"
          },
          {
            id: "SELECT2",
            options: ["fizzBuzz", "fizz", "buzz", "convert"],
            correct: "fizzBuzz"
          },
          {
            id: "SELECT3",
            options: ["toBe", "toEqual", "toMatch", "toHave"],
            correct: "toBe"
          }
        ]
      },
      {
        type: "implementation",
        template: `
function fizzBuzz(num) {
  [SELECT1] (num % 3 === 0 && num % 5 === 0) [SELECT2] "FizzBuzz";
  [SELECT1] (num % 3 === 0) [SELECT2] "Fizz";
  [SELECT1] (num % 5 === 0) [SELECT2] "Buzz";
  return [SELECT3](num);
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["if", "while", "for", "switch"],
            correct: "if"
          },
          {
            id: "SELECT2",
            options: ["return", "break", "continue", "yield"],
            correct: "return"
          },
          {
            id: "SELECT3",
            options: ["String", "Number", "Boolean", "Array"],
            correct: "String"
          }
        ]
      },
      {
        type: "refactor",
        template: `
function fizzBuzz(num) {
  const divisibleBy = (n, divisor) => n % divisor === 0;
  const is3 = [SELECT1](num, 3);
  const is5 = [SELECT1](num, 5);
  
  [SELECT2] (is3 && is5) [SELECT3] "FizzBuzz";
  [SELECT2] (is3) [SELECT3] "Fizz";
  [SELECT2] (is5) [SELECT3] "Buzz";
  return String(num);
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["divisibleBy", "isDivisible", "divide", "mod"],
            correct: "divisibleBy"
          },
          {
            id: "SELECT2",
            options: ["if", "while", "for", "switch"],
            correct: "if"
          },
          {
            id: "SELECT3",
            options: ["return", "break", "continue", "yield"],
            correct: "return"
          }
        ]
      }
    ],
    hints: [
      "Start with the simplest case - returning a number as a string",
      "Check divisibility by both 3 and 5 first",
      "Consider extracting the divisibility check into a helper function"
    ]
  },
  {
    id: 3,
    title: "Password Validator Kata",
    description: "Create a password validation function using Test-Driven Development with Jest-style testing. Jest is the most popular testing framework in the React ecosystem, known for its snapshot testing and extensive matcher API.",
    codeNote: "The test structure follows Jest patterns. For more Jest-like tests:\n- Use .toMatch() for regex patterns\n- Add .not modifiers for negative cases\n- Consider using test.each() for multiple test cases",
    requirements: [
      "Password must be at least 8 characters long",
      "Password must contain at least one uppercase letter",
      "Password must contain at least one number",
      "Password must contain at least one special character (!@#$%^&*)"
    ],
    testCases: [
      { 
        input: '"password"', 
        expected: false, 
        description: "Missing uppercase, number, and special character" 
      },
      { 
        input: '"Password1!"', 
        expected: true, 
        description: "Valid password with all requirements met" 
      },
      { 
        input: '"Pass1"', 
        expected: false, 
        description: "Too short and missing special character" 
      }
    ],
    steps: [
      {
        type: "test",
        template: `
describe('PasswordValidator', () => {
  test('rejects too short password', () => {
    [SELECT1]([SELECT2]("short")).[SELECT3](false);
  });
});`,
        blanks: [
          {
            id: "SELECT1",
            options: ["expect", "test", "describe", "toBe"],
            correct: "expect"
          },
          {
            id: "SELECT2",
            options: ["validatePassword", "checkPassword", "isValidPassword", "validate"],
            correct: "validatePassword"
          },
          {
            id: "SELECT3",
            options: ["toBe", "toEqual", "toMatch", "toHave"],
            correct: "toBe"
          }
        ]
      },
      {
        type: "implementation",
        template: `
function validatePassword(password) {
  const hasLength = password.[SELECT1] >= 8;
  const hasUpper = [SELECT2].[SELECT3](password);
  const hasNumber = [SELECT4].[SELECT3](password);
  const hasSpecial = [SELECT5].[SELECT3](password);
  return hasLength && hasUpper && hasNumber && hasSpecial;
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["length", "size", "count", "chars"],
            correct: "length"
          },
          {
            id: "SELECT2",
            options: ["/[A-Z]/", "/[a-z]/", "/[0-9]/", "/[!@#$%^&*]/"],
            correct: "/[A-Z]/"
          },
          {
            id: "SELECT3",
            options: ["test", "match", "exec", "search"],
            correct: "test"
          },
          {
            id: "SELECT4",
            options: ["/[0-9]/", "/[A-Z]/", "/[a-z]/", "/[!@#$%^&*]/"],
            correct: "/[0-9]/"
          },
          {
            id: "SELECT5",
            options: ["/[!@#$%^&*]/", "/[0-9]/", "/[A-Z]/", "/[a-z]/"],
            correct: "/[!@#$%^&*]/"
          }
        ]
      },
      {
        type: "refactor",
        template: `
function validatePassword(password) {
  const patterns = {
    upper: [SELECT1],
    number: [SELECT2],
    special: [SELECT3]
  };
  
  return password.[SELECT4] >= 8 &&
    Object.[SELECT5](patterns).every(pattern => pattern.test(password));
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["/[A-Z]/", "/[a-z]/", "/[0-9]/", "/[!@#$%^&*]/"],
            correct: "/[A-Z]/"
          },
          {
            id: "SELECT2",
            options: ["/[0-9]/", "/[A-Z]/", "/[a-z]/", "/[!@#$%^&*]/"],
            correct: "/[0-9]/"
          },
          {
            id: "SELECT3",
            options: ["/[!@#$%^&*]/", "/[0-9]/", "/[A-Z]/", "/[a-z]/"],
            correct: "/[!@#$%^&*]/"
          },
          {
            id: "SELECT4",
            options: ["length", "size", "count", "chars"],
            correct: "length"
          },
          {
            id: "SELECT5",
            options: ["values", "keys", "entries", "properties"],
            correct: "values"
          }
        ]
      }
    ],
    hints: [
      "Start with checking the password length",
      "Use regular expressions for pattern matching",
      "Consider using Object.values for cleaner code"
    ]
  },
  {
    id: 4,
    title: "Roman Numeral Converter",
    description: "Convert numbers to Roman numerals using Jest's testing framework. Jest's powerful assertion library helps verify complex string transformations and edge cases, making it ideal for testing conversion logic.",
    codeNote: "To write more idiomatic Jest tests:\n- Use .toBe() for simple value comparisons\n- Consider test.each() for multiple conversion cases\n- Group related conversions in describe blocks",
    requirements: [
      "Convert numbers 1-10 to Roman numerals",
      "Handle subtractive notation (IV for 4, IX for 9)",
      "Support numbers up to 100"
    ],
    testCases: [
      { 
        input: "1", 
        expected: "I", 
        description: "Basic single numeral conversion" 
      },
      { 
        input: "4", 
        expected: "IV", 
        description: "Subtractive notation for 4" 
      },
      { 
        input: "9", 
        expected: "IX", 
        description: "Subtractive notation for 9" 
      },
      { 
        input: "50", 
        expected: "L", 
        description: "Large single numeral conversion" 
      }
    ],
    steps: [
      {
        type: "test",
        template: `
describe('RomanNumerals', () => {
  test('converts 1 to I', () => {
    [SELECT1]([SELECT2](1)).[SELECT3]("I");
  });
});`,
        blanks: [
          {
            id: "SELECT1",
            options: ["expect", "test", "describe", "toBe"],
            correct: "expect"
          },
          {
            id: "SELECT2",
            options: ["toRoman", "convertToRoman", "romanize", "toRomanNumeral"],
            correct: "toRoman"
          },
          {
            id: "SELECT3",
            options: ["toBe", "toEqual", "toMatch", "toHave"],
            correct: "toBe"
          }
        ]
      },
      {
        type: "implementation",
        template: `
function toRoman(num) {
  const romanNums = {
    [SELECT1]: "C", [SELECT2]: "XC", 50: "L", 40: "XL",
    10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I"
  };
  let result = "";
  for (let value of Object.[SELECT3](romanNums).[SELECT4]((a,b) => b-a)) {
    [SELECT5] (num >= value) {
      result += romanNums[value];
      num -= value;
    }
  }
  return result;
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["100", "90", "50", "40"],
            correct: "100"
          },
          {
            id: "SELECT2",
            options: ["90", "100", "50", "40"],
            correct: "90"
          },
          {
            id: "SELECT3",
            options: ["keys", "values", "entries", "properties"],
            correct: "keys"
          },
          {
            id: "SELECT4",
            options: ["sort", "map", "filter", "reduce"],
            correct: "sort"
          },
          {
            id: "SELECT5",
            options: ["while", "if", "for", "do"],
            correct: "while"
          }
        ]
      },
      {
        type: "refactor",
        template: `
function toRoman(num) {
  const romanNums = new Map([
    [[SELECT1], "C"], [90, "XC"], [50, "L"],
    [40, "XL"], [10, "X"], [9, "IX"],
    [5, "V"], [4, "IV"], [1, "I"]
  ]);
  let result = "";
  for (const [value, numeral] of [SELECT2](romanNums)) {
    [SELECT3] (num >= value) {
      result += numeral;
      num [SELECT4]= value;
    }
  }
  return result;
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["100", "90", "50", "40"],
            correct: "100"
          },
          {
            id: "SELECT2",
            options: ["Array.from", "Object.entries", "Object.keys", "Object.values"],
            correct: "Array.from"
          },
          {
            id: "SELECT3",
            options: ["while", "if", "for", "do"],
            correct: "while"
          },
          {
            id: "SELECT4",
            options: ["-", "+", "*", "/"],
            correct: "-"
          }
        ]
      }
    ],
    hints: [
      "Start with the largest Roman numeral values",
      "Remember to handle subtractive notation (IV, IX, etc.)",
      "Consider using Map for cleaner key-value handling"
    ]
  },
  {
    id: 5,
    title: "Palindrome Checker",
    description: "Create a function that checks if a string is a palindrome. This kata demonstrates Jest's string manipulation testing capabilities and its clean syntax for boolean assertions.",
    codeNote: "For more Jest-like testing:\n- Use .toBeTruthy() and .toBeFalsy() for boolean checks\n- Consider .toMatch() for regex pattern matching\n- Use beforeEach() to reset test state",
      requirements: [
      "Function should return true for palindromes",
      "Function should ignore case sensitivity",
      "Function should ignore spaces and punctuation",
      "Empty string should return true"
    ],
    testCases: [
      { 
        input: '"A man a plan a canal Panama"', 
        expected: true, 
        description: "Complex palindrome with spaces and mixed case" 
      },
      { 
        input: '"race a car"', 
        expected: false, 
        description: "Non-palindrome example" 
      },
      { 
        input: '""', 
        expected: true, 
        description: "Empty string is considered palindrome" 
      }
    ],
    steps: [
      {
        type: "test",
        template: `
describe('PalindromeChecker', () => {
  test('empty string returns true', () => {
    [SELECT1]([SELECT2]("")).[SELECT3](true);
  });
});`,
        blanks: [
          {
            id: "SELECT1",
            options: ["expect", "test", "describe", "toBe"],
            correct: "expect"
          },
          {
            id: "SELECT2",
            options: ["isPalindrome", "checkPalindrome", "validatePalindrome", "testPalindrome"],
            correct: "isPalindrome"
          },
          {
            id: "SELECT3",
            options: ["toBe", "toEqual", "toMatch", "toHave"],
            correct: "toBe"
          }
        ]
      },
      {
        type: "implementation",
        template: `
function isPalindrome(str) {
  const cleaned = str.[SELECT1]().[SELECT2](/[^a-z0-9]/g, '');
  return cleaned [SELECT3] cleaned.[SELECT4]('').[SELECT5]().join('');
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["toLowerCase", "toUpperCase", "trim", "normalize"],
            correct: "toLowerCase"
          },
          {
            id: "SELECT2",
            options: ["replace", "replaceAll", "match", "search"],
            correct: "replace"
          },
          {
            id: "SELECT3",
            options: ["===", "!==", ">=", "<="],
            correct: "==="
          },
          {
            id: "SELECT4",
            options: ["split", "slice", "substring", "substr"],
            correct: "split"
          },
          {
            id: "SELECT5",
            options: ["reverse", "sort", "filter", "map"],
            correct: "reverse"
          }
        ]
      },
      {
        type: "refactor",
        template: `
function isPalindrome(str) {
  const cleanString = str => str.[SELECT1]().[SELECT2](/[^a-z0-9]/g, '');
  const reverseString = str => str.[SELECT3]('').[SELECT4]().join('');
  
  const cleaned = [SELECT5](str);
  return cleaned === reverseString(cleaned);
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["toLowerCase", "toUpperCase", "trim", "normalize"],
            correct: "toLowerCase"
          },
          {
            id: "SELECT2",
            options: ["replace", "replaceAll", "match", "search"],
            correct: "replace"
          },
          {
            id: "SELECT3",
            options: ["split", "slice", "substring", "substr"],
            correct: "split"
          },
          {
            id: "SELECT4",
            options: ["reverse", "sort", "filter", "map"],
            correct: "reverse"
          },
          {
            id: "SELECT5",
            options: ["cleanString", "reverseString", "toString", "valueOf"],
            correct: "cleanString"
          }
        ]
      }
    ],
    hints: [
      "Start by handling the empty string case",
      "Remember to clean the input by removing non-alphanumeric characters",
      "Consider extracting string manipulation into helper functions"
    ]
  },
  {
    id: 6,
    title: "Stack Implementation",
    description: "Implement a stack data structure with basic operations. Jest's testing framework excels at testing data structures through its rich set of matchers and error assertions.",
    codeNote: "To enhance Jest testing:\n- Use .toThrow() for error cases\n- Test edge cases with .toBeUndefined()\n- Group lifecycle methods with describe blocks",
    requirements: [
      "push() adds element to top of stack",
      "pop() removes and returns top element",
      "peek() returns top element without removing it",
      "isEmpty() returns true if stack is empty"
    ],
    testCases: [
      { 
        input: "push(5), peek()", 
        expected: 5, 
        description: "peek() shows last element without removing it" 
      },
      { 
        input: "push(5), pop()", 
        expected: 5, 
        description: "pop() removes and returns last element" 
      },
      { 
        input: "isEmpty()", 
        expected: true, 
        description: "New stack starts empty" 
      }
    ],
    steps: [
      {
        type: "test",
        template: `
describe('Stack', () => {
  test('new stack is empty', () => {
    const stack = new [SELECT1]();
    [SELECT2](stack.[SELECT3]()).[SELECT4](true);
  });
});`,
        blanks: [
          {
            id: "SELECT1",
            options: ["Stack", "Queue", "List", "Array"],
            correct: "Stack"
          },
          {
            id: "SELECT2",
            options: ["expect", "test", "describe", "toBe"],
            correct: "expect"
          },
          {
            id: "SELECT3",
            options: ["isEmpty", "empty", "hasItems", "size"],
            correct: "isEmpty"
          },
          {
            id: "SELECT4",
            options: ["toBe", "toEqual", "toMatch", "toHave"],
            correct: "toBe"
          }
        ]
      },
      {
        type: "implementation",
        template: `
class Stack {
  [SELECT1]() {
    this.[SELECT2] = [];
  }
  
  push(element) {
    this.items.[SELECT3](element);
  }
  
  pop() {
    return this.items.[SELECT4]();
  }
  
  peek() {
    return this.items[this.items.[SELECT5] - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["constructor", "init", "initialize", "create"],
            correct: "constructor"
          },
          {
            id: "SELECT2",
            options: ["items", "elements", "data", "array"],
            correct: "items"
          },
          {
            id: "SELECT3",
            options: ["push", "add", "append", "insert"],
            correct: "push"
          },
          {
            id: "SELECT4",
            options: ["pop", "remove", "delete", "shift"],
            correct: "pop"
          },
          {
            id: "SELECT5",
            options: ["length", "size", "count", "capacity"],
            correct: "length"
          }
        ]
      },
      {
        type: "refactor",
        template: `
class Stack {
  #[SELECT1] = [];
  
  push(element) {
    this.#items.[SELECT2](element);
  }
  
  pop() {
    if (this.[SELECT3]()) throw new Error('Stack is empty');
    return this.#items.[SELECT4]();
  }
  
  peek() {
    if (this.[SELECT3]()) throw new Error('Stack is empty');
    return this.#items.at([SELECT5]);
  }
  
  isEmpty() {
    return this.#items.length === 0;
  }
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["items", "elements", "data", "array"],
            correct: "items"
          },
          {
            id: "SELECT2",
            options: ["push", "add", "append", "insert"],
            correct: "push"
          },
          {
            id: "SELECT3",
            options: ["isEmpty", "empty", "hasItems", "size"],
            correct: "isEmpty"
          },
          {
            id: "SELECT4",
            options: ["pop", "remove", "delete", "shift"],
            correct: "pop"
          },
          {
            id: "SELECT5",
            options: ["-1", "0", "1", "length"],
            correct: "-1"
          }
        ]
      }
    ],
    hints: [
      "Start with the isEmpty method as it's used by other methods",
      "Remember to handle edge cases like empty stack",
      "Consider using private fields (#) for better encapsulation"
    ]
  },
  {
    id: 7,
    title: "Email Validator",
    description: "Create an email validation function using Jest's testing patterns. Jest provides excellent support for testing regular expressions and string validation through its matcher API.",
    codeNote: "For better Jest tests:\n- Use .toMatch() for regex validation\n- Consider test.each() for multiple email formats\n- Use expect().not for negative test cases",
    requirements: [
      "Must contain a single @ symbol",
      "Must have valid characters before @",
      "Must have valid domain after @",
      "Must have valid top-level domain"
    ],
    testCases: [
      { 
        input: '"test@example.com"', 
        expected: true, 
        description: "Valid email with all required parts" 
      },
      { 
        input: '"invalid.email@"', 
        expected: false, 
        description: "Invalid: missing domain part after @" 
      },
      { 
        input: '"@nodomain.com"', 
        expected: false, 
        description: "Invalid: missing local part before @" 
      }
    ],
    steps: [
      {
        type: "test",
        template: `
describe('EmailValidator', () => {
  test('valid email returns true', () => {
    [SELECT1]([SELECT2]("test@example.com")).[SELECT3](true);
  });
});`,
        blanks: [
          {
            id: "SELECT1",
            options: ["expect", "test", "describe", "toBe"],
            correct: "expect"
          },
          {
            id: "SELECT2",
            options: ["isValidEmail", "validateEmail", "checkEmail", "testEmail"],
            correct: "isValidEmail"
          },
          {
            id: "SELECT3",
            options: ["toBe", "toEqual", "toMatch", "toHave"],
            correct: "toBe"
          }
        ]
      },
      {
        type: "implementation",
        template: `
function isValidEmail(email) {
  const pattern = [SELECT1][SELECT2][SELECT3][SELECT4][SELECT5];
  return pattern.test(email);
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["/^", "/$", "/", "|"],
            correct: "/^"
          },
          {
            id: "SELECT2",
            options: ["[a-zA-Z0-9._%+-]+", "[\\w]+", "[a-z]+", "[0-9]+"],
            correct: "[a-zA-Z0-9._%+-]+"
          },
          {
            id: "SELECT3",
            options: ["@", "\\@", "#", "\\#"],
            correct: "@"
          },
          {
            id: "SELECT4",
            options: ["[a-zA-Z0-9.-]+\\.", "[\\w]+\\.", "[a-z]+\\.", "[0-9]+\\."],
            correct: "[a-zA-Z0-9.-]+\\."
          },
          {
            id: "SELECT5",
            options: ["[a-zA-Z]{2,}$/", "[\\w]{2,}$/", "[a-z]+$/", "[0-9]+$/"],
            correct: "[a-zA-Z]{2,}$/"
          }
        ]
      },
      {
        type: "refactor",
        template: `
function isValidEmail(email) {
  const patterns = {
    local: [SELECT1],
    domain: [SELECT2],
    tld: [SELECT3]
  };
  
  const parts = email.[SELECT4]('@');
  if (parts.length !== 2) return false;
  
  const [local, domain] = parts;
  return patterns.local.[SELECT5](local) && 
         patterns.domain.test(domain);
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["/^[a-zA-Z0-9._%+-]+$/", "/^\\w+$/", "/^[a-z]+$/", "/^[0-9]+$/"],
            correct: "/^[a-zA-Z0-9._%+-]+$/"
          },
          {
            id: "SELECT2",
            options: ["/^[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/", "/^\\w+$/", "/^[a-z]+$/", "/^[0-9]+$/"],
            correct: "/^[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/"
          },
          {
            id: "SELECT3",
            options: ["/\\.[a-zA-Z]{2,}$/", "/\\w+$/", "/[a-z]+$/", "/[0-9]+$/"],
            correct: "/\\.[a-zA-Z]{2,}$/"
          },
          {
            id: "SELECT4",
            options: ["split", "slice", "substring", "substr"],
            correct: "split"
          },
          {
            id: "SELECT5",
            options: ["test", "match", "exec", "search"],
            correct: "test"
          }
        ]
      }
    ],
    hints: [
      "Start with basic email pattern validation",
      "Break down the pattern into smaller parts",
      "Consider using multiple regex patterns for better readability"
    ]
  },
  {
    id: 8,
    title: "Temperature Converter",
    description: "Create functions to convert between Celsius and Fahrenheit. Jest's precise numeric comparison features make it perfect for testing mathematical conversions and floating-point calculations.",
    codeNote: "To write better Jest tests:\n- Use .toBeCloseTo() for floating point comparisons\n- Group related temperature tests in describe blocks\n- Consider test.each() for conversion tables",
    requirements: [
      "Convert Celsius to Fahrenheit",
      "Convert Fahrenheit to Celsius",
      "Round results to 2 decimal places",
      "Handle negative temperatures"
    ],
    testCases: [
      { 
        input: "toFahrenheit(0)", 
        expected: 32, 
        description: "Water freezing point: 0°C = 32°F" 
      },
      { 
        input: "toCelsius(32)", 
        expected: 0, 
        description: "Reverse conversion: 32°F = 0°C" 
      },
      { 
        input: "toFahrenheit(-40)", 
        expected: -40, 
        description: "Point where scales meet: -40°C = -40°F" 
      }
    ],
    steps: [
      {
        type: "test",
        template: `
describe('TemperatureConverter', () => {
  test('0°C equals 32°F', () => {
    [SELECT1]([SELECT2](0)).[SELECT3](32);
  });
});`,
        blanks: [
          {
            id: "SELECT1",
            options: ["expect", "test", "describe", "toBe"],
            correct: "expect"
          },
          {
            id: "SELECT2",
            options: ["toFahrenheit", "convertToF", "celsiusToF", "getFahrenheit"],
            correct: "toFahrenheit"
          },
          {
            id: "SELECT3",
            options: ["toBe", "toEqual", "toMatch", "toHave"],
            correct: "toBe"
          }
        ]
      },
      {
        type: "implementation",
        template: `
function toFahrenheit(celsius) {
  return [SELECT1](((celsius * [SELECT2]) + [SELECT3]).[SELECT4]([SELECT5]));
}

function toCelsius(fahrenheit) {
  return Number(((fahrenheit - 32) * 5/9).toFixed(2));
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["Number", "parseInt", "parseFloat", "String"],
            correct: "Number"
          },
          {
            id: "SELECT2",
            options: ["9/5", "5/9", "1.8", "32"],
            correct: "9/5"
          },
          {
            id: "SELECT3",
            options: ["32", "0", "273", "100"],
            correct: "32"
          },
          {
            id: "SELECT4",
            options: ["toFixed", "toPrecision", "toString", "valueOf"],
            correct: "toFixed"
          },
          {
            id: "SELECT5",
            options: ["2", "1", "0", "3"],
            correct: "2"
          }
        ]
      },
      {
        type: "refactor",
        template: `
const round = num => [SELECT1](num.[SELECT2](2));

function toFahrenheit(celsius) {
  return round(celsius * [SELECT3] + 32);
}

function toCelsius(fahrenheit) {
  return [SELECT4]((fahrenheit - [SELECT5]) * 5/9);
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["Number", "parseInt", "parseFloat", "String"],
            correct: "Number"
          },
          {
            id: "SELECT2",
            options: ["toFixed", "toPrecision", "toString", "valueOf"],
            correct: "toFixed"
          },
          {
            id: "SELECT3",
            options: ["9/5", "5/9", "1.8", "32"],
            correct: "9/5"
          },
          {
            id: "SELECT4",
            options: ["round", "Number", "parseInt", "parseFloat"],
            correct: "round"
          },
          {
            id: "SELECT5",
            options: ["32", "0", "273", "100"],
            correct: "32"
          }
        ]
      }
    ],
    hints: [
      "Remember the formula: °F = °C × 9/5 + 32",
      "Use toFixed(2) for rounding to 2 decimal places",
      "Consider extracting the rounding logic into a helper function"
    ]
  },
  {
    id: 9,
    title: "Array Deduplicator",
    description: "Create a function that removes duplicates from an array. Jest's array comparison capabilities and deep equality checks make it ideal for testing array transformations.",
    codeNote: "For Jest-style array testing:\n- Use .toEqual() for array comparisons\n- Consider .toHaveLength() for array size checks\n- Use expect().toContain() for element presence",
    requirements: [
      "Remove duplicate elements from array",
      "Preserve original order of elements",
      "Handle arrays of different types",
      "Return new array without modifying original"
    ],
    testCases: [
      { 
        input: "[1, 2, 2, 3, 3, 4]", 
        expected: "[1, 2, 3, 4]", 
        description: "Removes duplicate numbers while preserving order" 
      },
      { 
        input: '["a", "b", "a", "c"]', 
        expected: '["a", "b", "c"]', 
        description: "Works with strings and maintains original order" 
      },
      { 
        input: "[]", 
        expected: "[]", 
        description: "Handles empty array edge case" 
      }
    ],
    steps: [
      {
        type: "test",
        template: `
describe('ArrayDeduplicator', () => {
  test('empty array returns empty array', () => {
    [SELECT1]([SELECT2]([])).[SELECT3]([]);
  });
});`,
        blanks: [
          {
            id: "SELECT1",
            options: ["expect", "test", "describe", "toBe"],
            correct: "expect"
          },
          {
            id: "SELECT2",
            options: ["deduplicate", "removeDuplicates", "unique", "distinct"],
            correct: "deduplicate"
          },
          {
            id: "SELECT3",
            options: ["toEqual", "toBe", "toMatch", "toHave"],
            correct: "toEqual"
          }
        ]
      },
      {
        type: "implementation",
        template: `
function deduplicate(arr) {
  return [SELECT1]new [SELECT2]([SELECT3]);
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["[...", "Array.from(", "Array(", "Object("],
            correct: "[..."
          },
          {
            id: "SELECT2",
            options: ["Set", "Array", "Map", "Object"],
            correct: "Set"
          },
          {
            id: "SELECT3",
            options: ["arr", "arguments", "this", "[]"],
            correct: "arr"
          }
        ]
      },
      {
        type: "refactor",
        template: `
function deduplicate(arr) {
  return Array.[SELECT1]([SELECT2](arr), 
    item => [SELECT3].[SELECT4](item) === [SELECT5]);
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["from", "of", "prototype", "create"],
            correct: "from"
          },
          {
            id: "SELECT2",
            options: ["new Set", "Array.from", "Object.keys", "Object.values"],
            correct: "new Set"
          },
          {
            id: "SELECT3",
            options: ["arr", "Array", "Set", "Object"],
            correct: "arr"
          },
          {
            id: "SELECT4",
            options: ["indexOf", "includes", "find", "findIndex"],
            correct: "indexOf"
          },
          {
            id: "SELECT5",
            options: ["arr.lastIndexOf(item)", "0", "1", "-1"],
            correct: "arr.lastIndexOf(item)"
          }
        ]
      }
    ],
    hints: [
      "Consider using Set for automatic deduplication",
      "Remember to preserve the original array order",
      "Think about how to convert Set back to Array"
    ]
  },
  {
    id: 10,
    title: "URL Parser",
    description: "Create a function that parses URL components using Jest's testing framework. Jest's object comparison features are perfect for testing complex URL parsing and query parameter extraction.",
    codeNote: "To write idiomatic Jest tests:\n- Use .toMatchObject() for partial object matching\n- Consider .toHaveProperty() for nested checks\n- Group URL component tests logically",
    requirements: [
      "Extract protocol (http, https)",
      "Extract domain name",
      "Extract path",
      "Extract query parameters"
    ],
    testCases: [
      { 
        input: '"https://example.com/path?name=test"', 
        expected: '{ protocol: "https", domain: "example.com", path: "/path", query: { name: "test" } }',
        description: "Complex URL with all components" 
      },
      { 
        input: '"http://test.com"', 
        expected: '{ protocol: "http", domain: "test.com", path: "", query: {} }',
        description: "Simple URL with minimal components" 
      }
    ],
    steps: [
      {
        type: "test",
        template: `
describe('URLParser', () => {
  test('parses simple URL correctly', () => {
    [SELECT1]([SELECT2]("http://example.com")).[SELECT3]({
      protocol: "http",
      domain: "example.com",
      path: "",
      query: {}
    });
  });
});`,
        blanks: [
          {
            id: "SELECT1",
            options: ["expect", "test", "describe", "toBe"],
            correct: "expect"
          },
          {
            id: "SELECT2",
            options: ["parseURL", "parseUri", "urlParser", "getUrlParts"],
            correct: "parseURL"
          },
          {
            id: "SELECT3",
            options: ["toEqual", "toBe", "toMatch", "toHave"],
            correct: "toEqual"
          }
        ]
      },
      {
        type: "implementation",
        template: `
function parseURL(url) {
  const urlObj = new [SELECT1](url);
  const query = Object.[SELECT2](urlObj.[SELECT3]);
  return {
    protocol: urlObj.protocol.[SELECT4](':', ''),
    domain: urlObj.[SELECT5],
    path: urlObj.pathname,
    query
  };
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["URL", "URLSearchParams", "RegExp", "String"],
            correct: "URL"
          },
          {
            id: "SELECT2",
            options: ["fromEntries", "entries", "keys", "values"],
            correct: "fromEntries"
          },
          {
            id: "SELECT3",
            options: ["searchParams", "search", "query", "params"],
            correct: "searchParams"
          },
          {
            id: "SELECT4",
            options: ["replace", "replaceAll", "slice", "substring"],
            correct: "replace"
          },
          {
            id: "SELECT5",
            options: ["hostname", "host", "domain", "origin"],
            correct: "hostname"
          }
        ]
      },
      {
        type: "refactor",
        template: `
function parseURL(url) {
  const [SELECT1] = {
    getProtocol: url => url.protocol.replace(':', ''),
    getDomain: url => url.[SELECT2],
    getPath: url => url.[SELECT3],
    getQuery: url => Object.[SELECT4](url.[SELECT5])
  };

  const urlObj = new URL(url);
  return {
    protocol: methods.getProtocol(urlObj),
    domain: methods.getDomain(urlObj),
    path: methods.getPath(urlObj),
    query: methods.getQuery(urlObj)
  };
}`,
        blanks: [
          {
            id: "SELECT1",
            options: ["methods", "helpers", "utils", "parsers"],
            correct: "methods"
          },
          {
            id: "SELECT2",
            options: ["hostname", "host", "domain", "origin"],
            correct: "hostname"
          },
          {
            id: "SELECT3",
            options: ["pathname", "path", "href", "search"],
            correct: "pathname"
          },
          {
            id: "SELECT4",
            options: ["fromEntries", "entries", "keys", "values"],
            correct: "fromEntries"
          },
          {
            id: "SELECT5",
            options: ["searchParams", "search", "query", "params"],
            correct: "searchParams"
          }
        ]
      }
    ],
    hints: [
      "Use the URL API instead of manual parsing",
      "Remember to handle query parameters with URLSearchParams",
      "Consider extracting parsing logic into separate methods"
    ]
  }
];

export const WBtheory = {
  introduction: {
    title: "White Box Testing",
    description: `White box testing, also known as clear box testing, glass box testing, or structural testing, 
    is a methodology where the internal logic of the software system is tested. Unlike black box testing, 
    testers have complete access to the source code and internal structure of the application.`,
    keyPoints: [
      "Internal logic examination",
      "Code structure analysis",
      "Path coverage verification",
      "Branch and condition testing",
      "Statement coverage assessment"
    ]
  },

  mainConcepts: [
    {
      title: "Core Components",
      points: [
        "Internal security vulnerabilities",
        "Code structure and organization",
        "Data flow analysis",
        "Control flow examination",
        "Input-output pathways",
        "Loop handling mechanisms"
      ]
    },
    {
      title: "Testing Techniques",
      points: [
        "Statement Coverage - executing each line of code at least once",
        "Decision Coverage - testing each decision branch",
        "Condition Coverage - evaluating each boolean condition",
        "Path Coverage - testing all possible paths through the code",
        "Loop Coverage - testing loop boundaries and iterations",
        "Function Coverage - ensuring each function is called"
      ]
    }
  ],

  advantages: [
    "Early detection of code issues",
    "Optimization of code efficiency",
    "Thorough testing of critical paths",
    "Identification of hidden errors",
    "Better code understanding for testers",
    "Improved test coverage metrics"
  ],

  challenges: [
    "Requires programming knowledge",
    "Time-consuming process",
    "Complex for large systems",
    "Needs access to source code",
    "Requires detailed documentation"
  ],

  bestPractices: [
    {
      title: "Code Review Integration",
      description: "Combine white box testing with regular code reviews for better coverage"
    },
    {
      title: "Test Case Design",
      description: "Create test cases based on code structure and logic flows"
    },
    {
      title: "Coverage Analysis",
      description: "Use tools to measure and improve test coverage"
    },
    {
      title: "Documentation",
      description: "Maintain detailed documentation of test cases and coverage"
    }
  ],

  coverageMetrics: [
    {
      name: "Statement Coverage",
      description: "Percentage of code statements executed during testing",
      formula: "Executed Statements / Total Statements × 100"
    },
    {
      name: "Branch Coverage",
      description: "Percentage of decision branches executed",
      formula: "Executed Branches / Total Branches × 100"
    },
    {
      name: "Path Coverage",
      description: "Percentage of possible paths executed",
      formula: "Executed Paths / Total Possible Paths × 100"
    }
  ],

  tools: [
    {
      name: "JaCoCo",
      description: "Java Code Coverage Library"
    },
    {
      name: "Istanbul",
      description: "JavaScript Code Coverage Tool"
    },
    {
      name: "Coverage.py",
      description: "Python Code Coverage Tool"
    },
    {
      name: "gcov",
      description: "GNU Code Coverage Tool"
    }
  ],

  realWorldApplications: [
    {
      scenario: "Unit Testing",
      description: "Testing individual components and functions"
    },
    {
      scenario: "Integration Testing",
      description: "Testing component interactions and data flow"
    },
    {
      scenario: "Security Testing",
      description: "Identifying security vulnerabilities in code"
    },
    {
      scenario: "Performance Optimization",
      description: "Identifying and improving performance bottlenecks"
    }
  ],

  commonErrors: [
    {
      type: "Logic Errors",
      description: "Incorrect implementation of business logic"
    },
    {
      type: "Loop Errors",
      description: "Infinite loops or incorrect iteration"
    },
    {
      type: "Memory Leaks",
      description: "Improper memory management"
    },
    {
      type: "Exception Handling",
      description: "Missing or improper error handling"
    }
  ]
};

export const chatbotRules = [
  {
    trigger: 'hello',
    response: 'Hi! How can I help you today?'
  },
  {
    trigger: 'test',
    response: 'I can help you understand testing concepts. What would you like to know?'
  },
  {
    trigger: 'white box',
    response: 'White box testing involves examining the internal logic of the software system.'
  },
  // Add more rules
];

export const WBtestCases = [
  {
    name: "Basic Greeting Flow",
    description: "Test the basic greeting functionality",
    testInputs: [
      { input: "hi", expectedOutput: "Hi! How can I help you today?" },
      { input: "hello", expectedOutput: "Hi! How can I help you today?" },
      { input: "hey", expectedOutput: "Hi! How can I help you today?" }
    ]
  },
  {
    name: "White Box Concepts",
    description: "Test understanding of core white box testing concepts",
    testInputs: [
      { input: "what is white box testing", expectedOutput: "White box testing, also known as clear box testing..." },
      { input: "explain statement coverage", expectedOutput: "Statement coverage measures..." },
      { input: "branch coverage", expectedOutput: "Branch coverage ensures all decision points..." }
    ]
  },
  {
    name: "Code Coverage Queries",
    description: "Test responses about different types of coverage",
    testInputs: [
      { input: "what is path coverage", expectedOutput: "Path coverage tests all possible paths..." },
      { input: "explain condition coverage", expectedOutput: "Condition coverage focuses on..." },
      { input: "loop coverage", expectedOutput: "Loop coverage ensures testing of..." }
    ]
  },
  {
    name: "Testing Tools",
    description: "Test knowledge about testing tools and frameworks",
    testInputs: [
      { input: "what tools can I use", expectedOutput: "Popular white box testing tools include..." },
      { input: "coverage tools", expectedOutput: "For measuring code coverage, you can use..." },
      { input: "testing frameworks", expectedOutput: "Common testing frameworks include..." }
    ]
  },
  {
    name: "Best Practices",
    description: "Test recommendations for white box testing",
    testInputs: [
      { input: "best practices", expectedOutput: "Here are key best practices..." },
      { input: "testing tips", expectedOutput: "When performing white box testing..." },
      { input: "common mistakes", expectedOutput: "Common mistakes to avoid include..." }
    ]
  },
  {
    name: "Example Requests",
    description: "Test provision of examples and scenarios",
    testInputs: [
      { input: "give me an example", expectedOutput: "Here's a simple example..." },
      { input: "show test cases", expectedOutput: "Here are some test cases..." },
      { input: "code example", expectedOutput: "Here's a code example..." }
    ]
  },
  {
    name: "Unknown Input Handling",
    description: "Test how the chatbot handles unknown inputs",
    testInputs: [
      { input: "xyz", expectedOutput: "I'm not sure about that specific query..." },
      { input: "random text", expectedOutput: "I'm not sure about that specific query..." },
      { input: "123", expectedOutput: "I'm not sure about that specific query..." }
    ]
  },
  {
    name: "Complex Queries",
    description: "Test handling of multi-part questions",
    testInputs: [
      { input: "how do I test loops and conditions", expectedOutput: "For testing loops and conditions..." },
      { input: "explain path and branch coverage", expectedOutput: "Let me explain both concepts..." },
      { input: "tools for coverage testing", expectedOutput: "For coverage testing, you can use..." }
    ]
  },
  {
    name: "Follow-up Questions",
    description: "Test contextual responses to follow-up questions",
    testInputs: [
      { input: "can you explain more", expectedOutput: "What specific aspect would you like..." },
      { input: "show me how", expectedOutput: "I can show you examples of..." },
      { input: "why is this important", expectedOutput: "This is important because..." }
    ]
  },
  {
    name: "Error Conditions",
    description: "Test handling of edge cases and errors",
    testInputs: [
      { input: "", expectedOutput: "Please ask a question..." },
      { input: "   ", expectedOutput: "Please ask a question..." },
      { input: "?", expectedOutput: "I'm not sure about that specific query..." }
    ]
  }
];

export const WBcodeExamples = [
  {
    title: "Testing Chatbot Input Processing",
    code: `// Test cases for processUserInput function
test('Empty input handling', () => {
  expect(processUserInput('')).toBe('Please ask a question...');
  expect(processUserInput('   ')).toBe('Please ask a question...');
});

test('Greeting patterns', () => {
  expect(processUserInput('hi')).toBe('Hi! How can I help you today?');
  expect(processUserInput('hello')).toBe('Hi! How can I help you today?');
  expect(processUserInput('hey')).toBe('Hi! How can I help you today?');
});

test('White box testing queries', () => {
  expect(processUserInput('what is white box')).toContain('White box testing');
  expect(processUserInput('explain white box')).toContain('White box testing');
});`,
    explanation: "These test cases verify the chatbot's input processing and pattern matching functionality."
  },
  {
    title: "Testing Response Generation",
    code: `// Test different paths through the response logic
test('Rule matching paths', () => {
  // Test exact greeting match
  const greetingInput = 'hi';
  expect(processUserInput(greetingInput)).toBe('Hi! How can I help you today?');

  // Test partial match for topics
  const topicInput = 'statement coverage';
  expect(processUserInput(topicInput)).toContain('Statement Coverage');

  // Test unknown input handling
  const unknownInput = 'xyz123';
  expect(processUserInput(unknownInput)).toContain('I\'m not sure about');
});`,
    explanation: "These tests ensure different execution paths through the chatbot's response logic are working correctly."
  },
  {
    title: "Coverage Testing the Chatbot",
    code: `// Statement coverage for chatbot rules
test('Coverage of all response types', () => {
  // Test function-based response
  expect(processUserInput('')).toBe('Please ask a question...');
  
  // Test string-based response
  expect(processUserInput('white box')).toContain('White box testing');
  
  // Test regex pattern matching
  expect(processUserInput('HELLO')).toBe('Hi! How can I help you today?');
  expect(processUserInput('hello there')).not.toBe('Hi! How can I help you today?');
});`,
    explanation: "This demonstrates how to achieve good code coverage when testing the chatbot's functionality."
  }
];

export const WBchatbotDoc = {
  title: "White Box Testing Chatbot",
  description: "An interactive chatbot designed to help users understand white box testing concepts through pattern-based responses.",
  
  capabilities: [
    {
      title: "Basic White Box Testing Concepts",
      description: "Explains fundamental white box testing concepts and methodologies",
      examples: [
        { 
          input: "what is white box", 
          output: "White box testing, also known as clear box testing, examines the internal logic of software systems..." 
        },
        { 
          input: "code coverage", 
          output: "Here are the main code coverage techniques:\n1. Statement Coverage\n2. Branch Coverage\n3. Path Coverage\n4. Condition Coverage" 
        }
      ]
    },
    {
      title: "Coverage Types Explanation",
      description: "Detailed explanations of different coverage types with examples",
      examples: [
        { 
          input: "statement coverage", 
          output: "Statement Coverage ensures each line of code is executed at least once..." 
        },
        { 
          input: "branch coverage", 
          output: "Branch Coverage tests all possible decision outcomes..." 
        },
        { 
          input: "path coverage", 
          output: "Path Coverage tests all possible execution paths through the code..." 
        }
      ]
    },
    {
      title: "Testing Tools Information",
      description: "Information about popular white box testing tools",
      examples: [
        { 
          input: "testing tools", 
          output: "Popular white box testing tools include:\n1. JaCoCo (Java)\n2. Istanbul (JavaScript)\n3. Coverage.py (Python)" 
        }
      ]
    }
  ],

  usage: {
    basicCommands: [
      {
        command: "hi/hello/hey",
        description: "Start a conversation with the chatbot",
        example: "hi"
      },
      {
        command: "white box",
        description: "Get basic information about white box testing",
        example: "what is white box"
      },
      {
        command: "coverage",
        description: "Learn about code coverage techniques",
        example: "code coverage"
      },
      {
        command: "[coverage type]",
        description: "Get specific information about a coverage type",
        example: "statement coverage"
      }
    ],
    bestPractices: [
      "Use simple, clear keywords from the available patterns",
      "Ask about specific coverage types directly",
      "Use 'example' to see practical implementations",
      "Start with basic concepts before advanced topics"
    ]
  },

  features: [
    {
      name: "Concept Explanations",
      description: "Basic white box testing concept explanations",
      trigger: "white box",
      example: "what is white box"
    },
    {
      name: "Coverage Types",
      description: "Detailed coverage type explanations",
      trigger: "statement/branch/path coverage",
      example: "statement coverage"
    },
    {
      name: "Testing Tools",
      description: "Information about testing tools",
      trigger: "testing tools",
      example: "testing tools"
    },
    {
      name: "Best Practices",
      description: "White box testing best practices",
      trigger: "best practices",
      example: "best practices"
    }
  ],

  limitations: [
    "Responds only to predefined patterns",
    "Cannot engage in free-form conversation",
    "Limited to specific white box testing topics",
    "Cannot provide project-specific advice",
    "No dynamic code analysis capabilities"
  ],

  examples: [
    {
      scenario: "Learning About White Box Testing",
      conversation: [
        { role: "user", content: "hi" },
        { role: "assistant", content: "Hi! How can I help you today?" },
        { role: "user", content: "what is white box" },
        { role: "assistant", content: "White box testing, also known as clear box testing, examines the internal logic of software systems..." }
      ]
    },
    {
      scenario: "Understanding Coverage Types",
      conversation: [
        { role: "user", content: "code coverage" },
        { role: "assistant", content: "Here are the main code coverage techniques:\n1. Statement Coverage\n2. Branch Coverage..." },
        { role: "user", content: "statement coverage" },
        { role: "assistant", content: "Statement Coverage ensures each line of code is executed at least once..." }
      ]
    }
  ],

  tips: [
    {
      title: "Getting Started",
      points: [
        "Begin with 'hi' to start the conversation",
        "Use exact keywords for better responses",
        "Ask about specific coverage types directly",
        "Request examples using the 'example' keyword"
      ]
    },
    {
      title: "Available Topics",
      points: [
        "White box testing basics",
        "Code coverage techniques",
        "Statement, branch, and path coverage",
        "Testing tools and best practices"
      ]
    }
  ]
};

export const WBchatbotRules = [
  {
    trigger: 'hi|hello|hey|^$|^\\s+$',
    response: (input) => {
      if (!input || input.trim() === '') {
        return 'Please ask a question...';
      }
      return 'Hi! How can I help you today?';
    }
  },
  {
    trigger: 'white box|whitebox|what is white box|what\'s white box|explain white box|white box testing',
    response: `White box testing, also known as clear box testing, examines the internal logic of software systems. Key concepts include:
• Statement Coverage
• Branch Coverage
• Path Coverage
• Control Flow Testing
• Data Flow Testing

Which concept would you like to learn more about?`
  },
  {
    trigger: '^code coverage$|^Code Coverage$|coverage techniques|code coverage techniques|^coverage$',
    response: `Here are the main code coverage techniques:

1. Statement Coverage
   - Measures which lines of code are executed
   - Basic level of coverage testing

2. Branch Coverage
   - Tests all decision outcomes
   - More thorough than statement coverage

3. Path Coverage
   - Tests all possible execution paths
   - Most comprehensive coverage

4. Condition Coverage
   - Tests boolean expressions
   - Focuses on complex conditions

Would you like to learn more about any specific type?`
  },
  {
    trigger: 'statement|statement coverage|explain statement|what is statement coverage',
    response: `Statement Coverage ensures each line of code is executed at least once.

Example:
function gradeScore(score) {
  let grade;                  // Statement 1
  if (score >= 90) {         // Statement 2
    grade = 'A';             // Statement 3
  } else {
    grade = 'B';             // Statement 4
  }
  return grade;              // Statement 5
}

Would you like to:
1. See test cases for this example
2. Learn about measuring statement coverage
3. See more examples`
  },
  {
    trigger: 'branch|branch coverage|explain branch|what is branch coverage',
    response: `Branch Coverage tests all possible decision outcomes.

Example:
function validateInput(value) {
  if (value < 0) {           // Branch 1: true/false
    return 'Invalid';
  } else if (value > 100) {  // Branch 2: true/false
    return 'Too high';
  }
  return 'Valid';
}

Would you like to:
1. See test cases for branches
2. Learn about decision points
3. See more examples`
  },
  {
    trigger: 'path|path coverage|test path|paths|what is path|explain path',
    response: `Path Coverage tests all possible execution paths through the code.

Example:
function processOrder(isVIP, hasDiscount) {
  // Possible paths:
  // 1. VIP + Discount
  // 2. VIP + No Discount
  // 3. Not VIP + Discount
  // 4. Not VIP + No Discount

  let price = 100;
  if (isVIP) price *= 0.9;
  if (hasDiscount) price *= 0.95;
  return price;
}

Would you like to:
1. See test cases for each path
2. Learn about path identification
3. See more examples`
  },
  {
    trigger: '^testing tools$|^Testing Tools$|^tools$|^tool$|coverage tools?|testing frameworks?',
    response: `Popular white box testing tools include:

1. JaCoCo (Java)
   - Statement and branch coverage
   - Integration with Maven/Gradle
   - HTML reports generation

2. Istanbul (JavaScript)
   - Line and function coverage
   - Integration with Jest/Mocha
   - Coverage reporting

3. Coverage.py (Python)
   - Line and branch coverage
   - HTML/XML reports
   - Integration with pytest

Would you like to:
1. Learn how to use a specific tool
2. See example reports
3. Understand tool configuration`
  },
  {
    trigger: '^test case creation$|^Test Case Creation$|create test cases?|test cases?',
    response: `For creating effective test cases, follow these steps:

1. Analyze the Code Structure
   - Identify all statements
   - Map decision points
   - List possible paths

2. Design Test Cases
   - Cover all statements
   - Test all branches
   - Include boundary conditions

3. Example Structure:
   test('description', () => {
     // Arrange
     const input = value;
     // Act
     const result = functionUnderTest(input);
     // Assert
     expect(result).toBe(expectedOutput);
   });

Would you like to:
1. See more examples
2. Learn about test case design patterns
3. Practice creating test cases`
  },
  {
    trigger: '^best practices$|^Best Practices$|^practices$|testing tips|common mistakes',
    response: `Here are key best practices for white box testing:

1. Test Coverage
   - Start with statement coverage
   - Progress to branch coverage
   - Aim for path coverage where critical

2. Test Design
   - Write tests before fixing bugs
   - Include boundary conditions
   - Test negative scenarios

3. Documentation
   - Document test cases clearly
   - Maintain test coverage reports
   - Track uncovered code

Would you like to:
1. See examples of each practice
2. Learn implementation details
3. Understand common pitfalls`
  },
  {
    trigger: 'example|show me|can you show|give me an example|show test cases|code example',
    response: `Here's a simple example of white box testing:

1. Statement Coverage Example:
function calculateTotal(price) {
    let total = price;        // Statement 1
    if (price > 100) {       // Statement 2
        total *= 0.9;        // Statement 3
    }
    return total;            // Statement 4
}

Test Cases:
1. price = 50  (covers statements 1, 2, 4)
2. price = 150 (covers statements 1, 2, 3, 4)

Would you like to:
1. See more examples
2. Try different test cases
3. See examples for other coverage types`
  },
  {
    trigger: 'test loops and conditions|path and branch|coverage testing|explain both|multiple|combined',
    response: `Let me explain both concepts:

1. Loop Testing:
   - Test 0 iterations
   - Test 1 iteration
   - Test multiple iterations
   - Test maximum iterations

2. Branch Coverage:
   - Test all decision points
   - Cover true/false conditions
   - Test boundary values

Would you like to:
1. See examples of either concept
2. Learn about testing strategies
3. See combined examples`
  },
  {
    trigger: 'explain more|tell me more|show how|why|what about|how do I|can you explain',
    response: `What specific aspect would you like to learn more about?

1. Code examples
2. Test cases
3. Best practices
4. Common pitfalls
5. Implementation details

Please specify your area of interest.`
  },
  {
    trigger: 'control flow|control testing|flow testing',
    response: `Control Flow Testing examines the sequence of operations in your code.

Key aspects include:
1. Sequential flow
2. Conditional branches
3. Loops and iterations
4. Function calls

Would you like to:
1. See control flow examples
2. Learn about flow graphs
3. Understand testing strategies`
  },
  {
    trigger: 'data flow|data testing|flow analysis',
    response: `Data Flow Testing focuses on tracking variables and their values.

Key concepts:
1. Variable definitions
2. Variable usage
3. Definition-use pairs
4. Data dependencies

Would you like to:
1. See data flow examples
2. Learn about analysis techniques
3. Understand testing patterns`
  },
  {
    trigger: '.*',
    response: `I'm not sure about that specific query. Here are some topics I can help with:
• White box testing concepts
• Code coverage techniques
• Test case creation
• Testing tools
• Best practices

What would you like to learn about?`
  }
];

export const BBtheory = {
  introduction: {
    title: "Black Box Testing",
    description: "Black Box Testing is a method of software testing that examines the functionality of an application without peering into its internal structures or workings.",
    keyPoints: [
      "Focuses on input and output of software systems.",
      "Testers are unaware of the internal code structure.",
      "Tests are based on requirements and functionality."
    ]
  },
  mainConcepts: [
    {
      title: "Key Concepts",
      points: [
        "Equivalence Partitioning: Divides input data into valid and invalid partitions.",
        "Boundary Value Analysis: Tests the boundaries between partitions.",
        "Decision Table Testing: Uses tables to represent combinations of inputs.",
        "State Transition Testing: Tests state changes in the application.",
        "Use Case Testing: Validates user scenarios and interactions."
      ]
    },
    {
      title: "Test Plan Design",
      points: [
        "Identify the scope and objectives of testing.",
        "Define the testing strategy and approach.",
        "Determine the resources and timeline required.",
        "Outline the deliverables and reporting structure."
      ]
    },
    {
      title: "Test Scenarios",
      points: [
        "Identify high-level scenarios that cover major functionalities.",
        "Ensure scenarios are aligned with business requirements.",
        "Prioritize scenarios based on risk and impact.",
        "Use scenarios to guide detailed test case creation."
      ]
    },
    {
      title: "Test Environment",
      points: [
        "Set up a test environment that mimics production.",
        "Ensure all necessary hardware and software are available.",
        "Configure data and user accounts for testing.",
        "Document the environment setup for reproducibility."
      ]
    },
    {
      title: "Test Cases",
      points: [
        "Derive test cases from test scenarios.",
        "Ensure test cases are clear, concise, and comprehensive.",
        "Include both positive and negative test cases.",
        "Review and update test cases regularly."
      ]
    },
    {
      title: "Estimation",
      points: [
        "Estimate effort based on complexity and scope.",
        "Use historical data and expert judgment for estimation.",
        "Consider factors like resource availability and skill level.",
        "Regularly review and adjust estimates as needed."
      ]
    }
  ],
  advantages: [
    "Unbiased testing as the tester is independent of the development team.",
    "Helps identify discrepancies between the specification and the actual system.",
    "Effective for large code segments."
  ],
  challenges: [
    "Limited coverage as it does not test the internal paths.",
    "Test cases can be difficult to design without clear specifications.",
    "May miss logical errors in the code."
  ]
};

export const apiQuestions = [
  {
    id: 1,
    question: "Which HTTP method should be used to retrieve data from an API?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "GET",
    explanation: "GET is used to request data from a specified resource without modifying it."
  },
  {
    id: 2,
    question: "What does a 404 status code indicate?",
    options: [
      "Server error",
      "Resource not found",
      "Unauthorized access",
      "Success"
    ],
    correctAnswer: "Resource not found",
    explanation: "404 is returned when the requested resource cannot be found on the server."
  },
  {
    id: 3,
    question: "Which header is commonly used for JWT authentication?",
    options: ["Basic", "Bearer", "OAuth", "API-Key"],
    correctAnswer: "Bearer",
    explanation: "Bearer tokens are typically used in JWT authentication, included in the Authorization header."
  },
  {
    id: 4,
    question: "What's the primary purpose of API testing?",
    options: [
      "To test the user interface",
      "To verify the functionality, reliability, and security of APIs",
      "To design the database schema",
      "To write documentation"
    ],
    correctAnswer: "To verify the functionality, reliability, and security of APIs",
    explanation: "API testing ensures that APIs work as expected in terms of functionality, reliability, performance, and security."
  },
  {
    id: 5,
    question: "Which HTTP method is used for a partial update of a resource?",
    options: ["GET", "POST", "PUT", "PATCH"],
    correctAnswer: "PATCH",
    explanation: "PATCH is used for partial updates to a resource."
  },
  {
    id: 6,
    question: "What does a 201 status code signify?",
    options: [
      "Request successful",
      "Resource created",
      "No content",
      "Bad request"
    ],
    correctAnswer: "Resource created",
    explanation: "201 Created indicates that a request has been fulfilled and resulted in a new resource being created."
  },
  {
    id: 7,
    question: "Which authentication method uses a simple token included in the request header?",
    options: ["API Keys", "Basic Auth", "Bearer Tokens", "OAuth"],
    correctAnswer: "API Keys",
    explanation: "API Keys are simple tokens included in the request header or query string for authentication."
  },
  {
    id: 8,
    question: "Which HTTP status code indicates 'Too Many Requests'?",
    options: ["400", "401", "429", "500"],
    correctAnswer: "429",
    explanation: "429 Too Many Requests indicates that the user has sent too many requests in a given amount of time."
  },
  {
    id: 9,
    question: "What is a common use case for OAuth 2.0?",
    options: [
      "Simple token-based authentication",
      "Complex applications with different permission levels",
      "Stateless authentication",
      "Basic username and password authentication"
    ],
    correctAnswer: "Complex applications with different permission levels",
    explanation: "OAuth 2.0 is used for complex applications that require different permission levels and secure access."
  },
  {
    id: 10,
    question: "Which practice is essential for API security testing?",
    options: [
      "Testing with different input combinations",
      "Validating response structure",
      "Checking for common vulnerabilities",
      "Verifying API performance under load"
    ],
    correctAnswer: "Checking for common vulnerabilities",
    explanation: "Checking for common vulnerabilities is crucial in API security testing to ensure the API is secure against attacks."
  },
    {
      id: 11,
      question: "Which HTTP method is idempotent and used to update a resource?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: "PUT",
      explanation: "PUT is idempotent and used to update a resource completely."
    },
    {
      id: 12,
      question: "What does a 500 status code indicate?",
      options: [
        "Client error",
        "Server error",
        "Resource not found",
        "Unauthorized access"
      ],
      correctAnswer: "Server error",
      explanation: "500 Internal Server Error indicates a problem on the server side."
    },
    {
      id: 13,
      question: "Which HTTP method should be used to delete a resource?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: "DELETE",
      explanation: "DELETE is used to remove a specified resource."
    },
    {
      id: 14,
      question: "What is the main advantage of using JWT for authentication?",
      options: [
        "Simplicity",
        "Statelessness",
        "Complexity",
        "Requires server storage"
      ],
      correctAnswer: "Statelessness",
      explanation: "JWTs are stateless, meaning they do not require server storage."
    },
    {
      id: 15,
      question: "Which status code indicates a successful request with no content to return?",
      options: ["200", "201", "204", "404"],
      correctAnswer: "204",
      explanation: "204 No Content indicates a successful request with no content to return."
    },
    {
      id: 16,
      question: "What is the purpose of the OPTIONS HTTP method?",
      options: [
        "Retrieve data",
        "Update data",
        "Describe communication options",
        "Delete data"
      ],
      correctAnswer: "Describe communication options",
      explanation: "OPTIONS is used to describe the communication options for the target resource."
    },
    {
      id: 17,
      question: "Which HTTP method is typically used for submitting form data?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: "POST",
      explanation: "POST is used to submit data to be processed to a specified resource."
    },
    {
      id: 18,
      question: "What does a 401 status code indicate?",
      options: [
        "Unauthorized access",
        "Resource not found",
        "Server error",
        "Request successful"
      ],
      correctAnswer: "Unauthorized access",
      explanation: "401 Unauthorized indicates that authentication is required and has failed or has not yet been provided."
    },
    {
      id: 19,
      question: "Which HTTP method is used to retrieve only the headers of a resource?",
      options: ["GET", "HEAD", "POST", "OPTIONS"],
      correctAnswer: "HEAD",
      explanation: "HEAD is used to retrieve the headers of a resource, similar to GET but without the response body."
    },
    {
      id: 20,
      question: "What is a common use case for the PATCH HTTP method?",
      options: [
        "Retrieve data",
        "Create a new resource",
        "Partial update of a resource",
        "Delete a resource"
      ],
      correctAnswer: "Partial update of a resource",
      explanation: "PATCH is used for making partial updates to a resource."
    },
    {
      id: 21,
    question: "Which of these is NOT a common API testing type?",
      options: [
      "Performance testing",
      "Security testing",
      "UI testing",
      "Integration testing"
        ],
        correctAnswer: "UI testing",
        explanation: "UI testing is not a type of API testing. API testing focuses on the business logic layer without involving the UI."
    },
    {
      id: 22,
      question: "What is the purpose of API rate limiting?",
      options: [
        "To increase API speed",
        "To prevent abuse and ensure fair usage",
        "To reduce server costs",
        "To improve data accuracy"
        ],
        correctAnswer: "To prevent abuse and ensure fair usage",
        explanation: "Rate limiting prevents API abuse by limiting the number of requests a client can make within a specific time period."
      },
      {
        id: 23,
        question: "In REST API testing, what does HATEOAS stand for?",
        options: [
          "High Availability Testing Environment Over Application Server",
          "Hypertext As The Engine Of Application State",
          "Handling Automated Testing Environment Of API Services",
          "High Availability Testing Of API Systems"
        ],
        correctAnswer: "Hypertext As The Engine Of Application State",
        explanation: "HATEOAS is a constraint of REST application architecture that keeps the RESTful style architecture unique from other network application architectures."
      },
      {
        id: 24,
        question: "Which header is used to specify the format of the request body?",
        options: [
          "Accept",
          "Content-Type",
          "Authorization",
          "Cache-Control"
        ],
        correctAnswer: "Content-Type",
        explanation: "Content-Type header specifies the media type of the request body being sent to the server."
      },
      {
        id: 25,
        question: "What is the main difference between PUT and PATCH methods?",
        options: [
          "PUT is faster than PATCH",
          "PATCH is more secure than PUT",
          "PUT updates the entire resource while PATCH updates partially",
          "There is no difference"
        ],
        correctAnswer: "PUT updates the entire resource while PATCH updates partially",
        explanation: "PUT is used for complete resource updates, while PATCH is used for partial modifications to a resource."
      },
      {
        id: 26,
        question: "Which tool is commonly used for API documentation?",
        options: [
          "Jenkins",
          "Swagger/OpenAPI",
          "JMeter",
          "Maven"
        ],
        correctAnswer: "Swagger/OpenAPI",
        explanation: "Swagger/OpenAPI is widely used for API documentation as it provides a standardized way to describe RESTful APIs."
      },
      {
        id: 27,
        question: "What is the purpose of the Accept header in an API request?",
        options: [
          "To specify the authentication method",
          "To indicate the expected response format",
          "To define the request body format",
          "To set the request timeout"
        ],
        correctAnswer: "To indicate the expected response format",
        explanation: "The Accept header tells the server what type of media type(s) the client can process in the response."
      },
      {
        id: 28,
        question: "Which status code range indicates a redirect?",
        options: [
          "200-299",
          "300-399",
          "400-499",
          "500-599"
        ],
        correctAnswer: "300-399",
        explanation: "3xx status codes indicate that further action needs to be taken by the client to complete the request."
      },
      {
        id: 29,
        question: "What is the purpose of API versioning?",
        options: [
          "To make APIs faster",
          "To reduce server load",
          "To maintain backward compatibility",
          "To improve security"
        ],
        correctAnswer: "To maintain backward compatibility",
        explanation: "API versioning allows changes to be made to APIs without breaking existing client integrations."
      },
      {
        id: 30,
        question: "Which of these is a best practice for API security?",
        options: [
          "Using plain text passwords",
          "Implementing rate limiting",
          "Storing sensitive data in URLs",
          "Disabling HTTPS"
        ],
        correctAnswer: "Implementing rate limiting",
        explanation: "Rate limiting is a security best practice that helps prevent DoS attacks and API abuse."
      }
];

export const crossBrowserTheory = {
  basics: {
    title: "Fundamentals of Cross Browser Testing",
    definition: {
      mainConcept: "Cross-browser testing is the practice of ensuring web applications work consistently across different browsers, versions, and platforms.",
      detailedExplanation: `
        Cross-browser testing is more than just checking if a website loads in different browsers. 
        It involves verifying that all functionalities, layouts, and user interactions work as intended 
        across different browser environments. This includes testing on different:
        - Browser types (Chrome, Firefox, Safari, Edge)
        - Browser versions (latest and legacy versions)
        - Operating systems (Windows, macOS, Linux, mobile OS)
        - Device types (desktop, tablet, mobile)
        - Screen sizes and resolutions
      `
    },
    importance: {
      businessImpact: [
        {
          aspect: "Ensures consistent user experience",
          explanation: "Users expect your website to work flawlessly regardless of their chosen browser. Inconsistencies can lead to frustrated users and lost business opportunities."
        },
        {
          aspect: "Maintains brand reputation",
          explanation: "A website that works perfectly across all platforms reflects professionalism and attention to detail, enhancing brand credibility."
        },
        {
          aspect: "Reduces customer support issues",
          explanation: "Proactive cross-browser testing can identify and fix browser-specific issues before they affect users, reducing support tickets and customer complaints."
        },
        {
          aspect: "Increases market reach",
          explanation: "Different demographics prefer different browsers. Ensuring compatibility across browsers helps reach a wider audience and increases market penetration."
        },
        {
          aspect: "Improves accessibility compliance",
          explanation: "Cross-browser testing often reveals accessibility issues that might be browser-specific, helping ensure compliance with accessibility standards."
        }
      ]
    },
    browserDifferences: {
      engineTypes: {
        explanation: "Browser engines are the core software components that render web content. Different engines can interpret and display the same code differently.",
        types: [
          {
            name: "Chromium (Chrome, Edge, Opera)",
            details: "The most widely used engine, known for fast JavaScript execution and modern feature support. Powers multiple browsers, leading to some standardization."
          },
          {
            name: "Gecko (Firefox)",
            details: "Mozilla's engine focuses on standards compliance and privacy features. Often implements new web standards ahead of other browsers."
          },
          {
            name: "WebKit (Safari)",
            details: "Apple's engine, optimized for macOS and iOS. Known for smooth animations and mobile optimization but sometimes lags in adopting new features."
          },
          {
            name: "Quantum (Firefox's improved engine)",
            details: "Mozilla's next-generation engine, focusing on parallelization and GPU optimization for better performance."
          }
        ],
        commonIssues: [
          "Different JavaScript execution speeds",
          "Varying support for new CSS features",
          "Inconsistent HTML5 API implementations",
          "Different security policies and restrictions"
        ]
      },
      renderingVariations: {
        explanation: "Even with the same code, browsers can produce different visual results due to their unique rendering approaches.",
        details: [
          {
            aspect: "Box model interpretation",
            explanation: "Browsers might calculate widths, heights, margins, and paddings differently, especially with complex layouts."
          },
          {
            aspect: "Font rendering",
            explanation: "Different anti-aliasing algorithms and font-weight interpretations can make text appear differently across browsers."
          },
          {
            aspect: "Color processing",
            explanation: "Color spaces and gradient rendering can vary, leading to subtle differences in appearance."
          },
          {
            aspect: "JavaScript engine performance",
            explanation: "Different JavaScript engines handle code execution differently, affecting animation smoothness and interactive features."
          }
        ]
      }
    },
    responsiveDesign: {
      explanation: "Responsive design ensures websites adapt seamlessly to different screen sizes and devices, a crucial aspect of cross-browser testing.",
      principles: {
        detailedConcepts: [
          {
            name: "Fluid grids",
            explanation: "Using relative units (%, vw, vh) instead of fixed pixels to create layouts that adapt to screen size. This ensures content flows naturally across different viewport sizes.",
            implementation: "Example: Using CSS Grid with fr units or Flexbox with percentage widths."
          },
          {
            name: "Flexible images",
            explanation: "Images that scale within their containing elements without breaking layouts or becoming pixelated.",
            bestPractices: [
              "Use max-width: 100%",
              "Implement picture element for art direction",
              "Utilize srcset for responsive images",
              "Consider lazy loading for performance"
            ]
          },
          {
            name: "Media queries",
            explanation: "CSS rules that apply different styles based on device characteristics like screen width, height, or orientation.",
            examples: [
              "@media (max-width: 768px) { /* Mobile styles */ }",
              "@media (min-width: 769px) and (max-width: 1024px) { /* Tablet styles */ }",
              "@media (min-width: 1025px) { /* Desktop styles */ }"
            ]
          },
          {
            name: "Mobile-first approach",
            explanation: "Designing for mobile devices first and progressively enhancing for larger screens.",
            advantages: [
              "Forces focus on core content and functionality",
              "Improves performance on mobile devices",
              "Easier to maintain and scale",
              "Better user experience on all devices"
            ]
          },
          {
            name: "Progressive enhancement",
            explanation: "Building a base experience that works everywhere, then adding advanced features for browsers that support them.",
            strategy: [
              "Start with semantic HTML",
              "Add basic CSS for layout",
              "Enhance with modern CSS features",
              "Add JavaScript functionality last"
            ]
          }
        ],
        breakpoints: {
          explanation: "Strategic points where content layout changes to accommodate different screen sizes.",
          commonSizes: [
            {
              range: "Mobile (<768px)",
              considerations: [
                "Single column layouts",
                "Larger touch targets",
                "Simplified navigation",
                "Optimized images"
              ]
            },
            {
              range: "Tablet (768px-1024px)",
              considerations: [
                "Two-column layouts",
                "Adaptive navigation",
                "Touch and mouse input",
                "Balanced content density"
              ]
            },
            {
              range: "Desktop (>1024px)",
              considerations: [
                "Multi-column layouts",
                "Extended navigation options",
                "Hover states",
                "Rich interactions"
              ]
            },
            {
              range: "Large screens (>1440px)",
              considerations: [
                "Maximum content width",
                "Optimized whitespace",
                "High-resolution images",
                "Enhanced features"
              ]
            }
          ],
          bestPractices: [
            "Test at standard breakpoints",
            "Check transition points between breakpoints",
            "Verify content readability",
            "Ensure interactive elements remain usable"
          ]
        }
      }
    }
  },

  keyAreas: {
    javascriptCompatibility: {
      explanation: "JavaScript compatibility issues are among the most critical aspects of cross-browser testing due to varying implementation of features and APIs.",
      aspects: {
        detailedFeatures: [
          {
            feature: "ES6+ feature support",
            explanation: "Modern JavaScript features may not work in older browsers or have different implementations.",
            solutions: [
              "Use Babel for transpilation",
              "Implement polyfills for missing features",
              "Feature detection with modernizr",
              "Graceful degradation strategies"
            ]
          },
          {
            feature: "Event handling differences",
            explanation: "Browsers may handle events differently, especially for touch and pointer events.",
            commonIssues: [
              "Event bubbling variations",
              "Touch event support",
              "Keyboard event handling",
              "Custom event implementation"
            ]
          },
          {
            feature: "AJAX implementation variations",
            explanation: "Different browsers handle asynchronous requests and responses differently.",
            considerations: [
              "XMLHttpRequest vs Fetch API",
              "Promise support",
              "Cross-origin requests",
              "Error handling approaches"
            ]
          }
        ]
      }
    },
    cssConsiderations: {
      explanation: "CSS compatibility is crucial for maintaining consistent styling across browsers.",
      criticalAreas: [
        {
          area: "Flexbox and Grid support",
          explanation: "Not all browsers fully support CSS Flexbox and Grid, which can lead to layout issues.",
          solutions: [
            "Use Autoprefixer to add vendor prefixes",
            "Test layouts in multiple browsers",
            "Provide fallbacks for unsupported features"
          ]
        },
        {
          area: "CSS preprocessor output",
          explanation: "Preprocessors like SASS and LESS can generate CSS that behaves differently in some browsers.",
          solutions: [
            "Compile and test CSS output in target browsers",
            "Use PostCSS for additional processing"
          ]
        },
        {
          area: "Vendor prefixes",
          explanation: "Some CSS properties require vendor-specific prefixes to work in certain browsers.",
          solutions: [
            "Use tools like Autoprefixer",
            "Manually add prefixes for critical properties"
          ]
        },
        {
          area: "Animation performance",
          explanation: "CSS animations can perform differently across browsers, affecting smoothness and timing.",
          solutions: [
            "Use hardware-accelerated properties (e.g., transform, opacity)",
            "Test animations on target devices"
          ]
        },
        {
          area: "Font rendering",
          explanation: "Fonts can appear differently due to browser-specific rendering techniques.",
          solutions: [
            "Test font appearance across browsers",
            "Use web-safe fonts or font services like Google Fonts"
          ]
        }
      ]
    },
    html5Support: {
      explanation: "HTML5 introduces new elements and APIs that may not be fully supported in all browsers.",
      features: [
        {
          feature: "Semantic elements",
          explanation: "New elements like <article>, <section>, and <nav> improve document structure but may need polyfills for older browsers."
        },
        {
          feature: "Form elements",
          explanation: "HTML5 form enhancements (e.g., date pickers, validation) may not work consistently across browsers."
        },
        {
          feature: "Media elements",
          explanation: "Audio and video elements provide native media support but require testing for codec compatibility."
        },
        {
          feature: "Canvas and WebGL",
          explanation: "These technologies enable complex graphics but may have performance and compatibility issues."
        },
        {
          feature: "Local storage and cookies",
          explanation: "HTML5 storage APIs offer client-side data storage but need fallback strategies for unsupported browsers."
        }
      ],
      fallbackStrategies: [
        "Use Modernizr for feature detection",
        "Implement polyfills for missing features",
        "Adopt graceful degradation patterns"
      ]
    }
  },

  modernTesting: {
    automationTools: {
      explanation: "Automation tools streamline cross-browser testing by simulating user interactions and verifying outcomes.",
      tools: [
        {
          name: "Selenium",
          use: "Cross-browser automation testing",
          features: ["Multiple language support", "Grid for parallel testing"]
        },
        {
          name: "Playwright",
          use: "Modern web testing framework",
          features: ["Cross-browser support", "Auto-wait capabilities"]
        },
        {
          name: "LambdaTest/BrowserStack",
          use: "Cloud-based testing platforms",
          features: ["Real device testing", "Screenshot comparison"]
        }
      ]
    },
    aiIntegration: {
      explanation: "AI technologies enhance testing by automating complex tasks and providing predictive insights.",
      currentApplications: [
        "Visual regression detection: AI identifies UI changes that could affect user experience.",
        "Test script generation: AI generates test scripts based on user interactions.",
        "Pattern recognition in bug detection: AI analyzes patterns to identify potential bugs.",
        "Self-healing test scripts: AI adjusts scripts to accommodate UI changes.",
        "Predictive analysis for test coverage: AI predicts areas needing more testing."
      ],
      futureProspects: [
        "AI-powered layout analysis: AI evaluates layout consistency across browsers.",
        "Automated cross-browser compatibility fixes: AI suggests fixes for compatibility issues.",
        "Smart test case prioritization: AI prioritizes test cases based on impact.",
        "Autonomous test maintenance: AI updates tests as code changes.",
        "Real-time bug prediction and prevention: AI predicts and prevents bugs before they occur."
      ]
    }
  },

  testingStrategy: {
    prioritization: {
      explanation: "Effective testing prioritizes critical features and target browsers to maximize coverage and efficiency.",
      browserSelection: [
        "Market share analysis: Focus on browsers with the largest user base.",
        "Target audience demographics: Consider the browsers used by your audience.",
        "Geographic considerations: Account for regional browser preferences.",
        "Device preferences: Test on devices popular with your audience."
      ],
      criticalFeatures: [
        "Core functionality: Ensure essential features work across all browsers.",
        "Payment processes: Test payment flows for security and reliability.",
        "User authentication: Verify login and authentication mechanisms.",
        "Data submission forms: Ensure forms work correctly and securely."
      ]
    },
    methodology: {
      explanation: "A structured approach to testing ensures thorough coverage and efficient execution.",
      manual: [
        "Visual inspection: Check UI consistency across browsers.",
        "Functionality verification: Test core features manually.",
        "User flow testing: Simulate user journeys to identify issues.",
        "Edge case scenarios: Test unusual or extreme cases."
      ],
      automated: [
        "Regression testing: Automate tests to catch regressions.",
        "Screenshot comparison: Use tools to compare UI screenshots.",
        "Performance metrics: Measure load times and responsiveness.",
        "Accessibility checks: Ensure compliance with accessibility standards."
      ]
    },
    bestPractices: [
      "Regular testing schedule: Test frequently to catch issues early.",
      "Version control integration: Use version control to manage test scripts.",
      "Continuous Integration/Deployment: Automate testing in CI/CD pipelines.",
      "Documentation maintenance: Keep test documentation up to date.",
      "Bug tracking and resolution: Use tools to track and resolve bugs efficiently."
    ]
  },

  futureConsiderations: {
    emergingTechnologies: {
      explanation: "Staying ahead of emerging technologies ensures your testing strategy remains relevant.",
      technologies: [
        "WebAssembly compatibility: Test for WebAssembly support in browsers.",
        "Progressive Web Apps: Ensure PWAs work across browsers.",
        "WebXR applications: Test VR/AR experiences in supported browsers.",
        "5G optimization: Optimize for faster mobile networks."
      ]
    },
    aiEvolution: {
      explanation: "AI continues to evolve, offering new opportunities for enhancing testing processes.",
      testing: [
        "Self-optimizing test suites: AI optimizes test suites for efficiency.",
        "Intelligent test generation: AI generates tests based on code changes.",
        "Automated visual testing: AI checks UI consistency across browsers.",
        "Performance prediction: AI predicts performance issues before they occur."
      ],
      maintenance: [
        "Auto-updating test scripts: AI updates scripts as code changes.",
        "Smart regression analysis: AI identifies areas prone to regressions.",
        "Automated documentation: AI generates and updates documentation.",
        "Predictive bug detection: AI predicts bugs based on code patterns."
      ]
    },
    industryTrends: [
      "Browser engine consolidation: Monitor changes in browser engine usage.",
      "Privacy feature implementation: Test privacy features across browsers.",
      "Mobile-first development: Prioritize mobile testing as usage grows.",
      "Accessibility requirements: Ensure compliance with evolving standards.",
      "Performance optimization: Continuously optimize for speed and efficiency."
    ]
  },
};

export const crossBrowserTools = {
  testingTools: {
    automationFrameworks: [
      {
        name: "Selenium",
        details: {
          description: "The most widely used browser automation framework",
          keyFeatures: [
            "WebDriver protocol support",
            "Cross-browser compatibility",
            "Multiple programming language bindings",
            "Large community and ecosystem"
          ],
          bestFor: "Large-scale enterprise testing projects",
          limitations: [
            "Setup complexity",
            "Slower execution compared to modern tools",
            "Requires additional tools for visual testing"
          ]
        }
      },
      {
        name: "Playwright",
        details: {
          description: "Modern automation framework by Microsoft",
          keyFeatures: [
            "Auto-wait capabilities",
            "Network interception",
            "Mobile emulation",
            "Parallel testing",
            "Built-in test recorder"
          ],
          bestFor: "Modern web applications and fast execution",
          limitations: [
            "Newer community",
            "Limited legacy browser support"
          ]
        }
      },
      {
        name: "Cypress",
        details: {
          description: "Modern, JavaScript-based testing framework",
          keyFeatures: [
            "Real-time reloading",
            "Time-travel debugging",
            "Automatic waiting",
            "Network traffic control"
          ],
          bestFor: "JavaScript applications and component testing",
          limitations: [
            "Limited cross-domain testing",
            "JavaScript-only",
            "Single browser per run"
          ]
        }
      },
      {
        name: "Katalon",
        details: {
          description: "All-in-one test automation platform with low-code capabilities",
          keyFeatures: [
            "Record and playback functionality",
            "Built-in object repository",
            "Cross-browser testing support",
            "API and mobile testing capabilities",
            "Integration with CI/CD tools",
            "Test analytics and reporting"
          ],
          bestFor: "Teams seeking rapid test automation with minimal coding",
          limitations: [
            "Limited customization compared to pure code solutions",
            "Proprietary platform dependency",
            "Community plugins may be limited",
            "Enterprise features require paid license"
          ]
        }
      },
      {
        name: "TestCafe",
        details: {
          description: "Modern end-to-end testing framework with no WebDriver dependency",
          keyFeatures: [
            "No browser plugins or extensions needed",
            "Automatic waiting mechanisms",
            "Concurrent test execution",
            "Built-in proxy for network mocking",
            "Cross-platform and cross-browser support"
          ],
          bestFor: "JavaScript developers needing quick setup and execution",
          limitations: [
            "JavaScript/TypeScript only",
            "Limited browser automation features",
            "Smaller community compared to Selenium",
            "Limited mobile testing capabilities"
          ]
        }
      },
      {
        name: "Robot Framework",
        details: {
          description: "Generic test automation framework for acceptance testing and RPA",
          keyFeatures: [
            "Keyword-driven testing approach",
            "Extensive test library ecosystem",
            "Support for multiple testing types",
            "Easy-to-read test syntax",
            "Detailed test reports and logs"
          ],
          bestFor: "Teams using keyword-driven testing and acceptance test-driven development",
          limitations: [
            "Steeper learning curve for non-Python users",
            "Complex setup for web testing",
            "Test maintenance can be challenging",
            "Limited modern web testing features"
          ]
        }
      }
    ],

    cloudPlatforms: [
      {
        name: "BrowserStack",
        features: [
          "Real device testing",
          "Live interactive testing",
          "Automated screenshot testing",
          "Integration with CI/CD tools",
          "Local testing capability"
        ],
        useCases: "Enterprise-level cross-browser testing"
      },
      {
        name: "LambdaTest",
        features: [
          "Real-time testing",
          "Visual regression",
          "Smart testing analytics",
          "Integration testing",
          "Responsive testing"
        ],
        useCases: "Scalable cross-browser testing solutions"
      },
      {
        name: "Sauce Labs",
        features: [
          "Real and virtual device testing",
          "CI/CD integration",
          "Enterprise security",
          "Analytics dashboard"
        ],
        useCases: "Enterprise security-focused testing"
      }
    ],

    visualTesting: [
      {
        name: "Percy",
        purpose: "Visual regression testing",
        features: [
          "Automated visual testing",
          "Cross-browser screenshots",
          "Visual change detection",
          "CI/CD integration"
        ]
      },
      {
        name: "Applitools",
        purpose: "AI-powered visual testing",
        features: [
          "Visual AI engine",
          "Layout testing",
          "Cross-device testing",
          "Automated maintenance"
        ]
      }
    ]
  },

  aiTools: {
    visualTesting: [
      {
        name: "Applitools Eyes",
        capabilities: [
          "AI-powered visual testing",
          "Automated visual validation",
          "Smart maintenance",
          "Cross-browser visual comparison"
        ],
        useCase: "Enterprise-scale visual testing automation"
      },
      {
        name: "Percy AI",
        capabilities: [
          "Visual regression detection",
          "Layout shift analysis",
          "Component-level testing",
          "Automated snapshot comparison"
        ],
        useCase: "Component-based visual testing"
      }
    ],

    testGeneration: [
      {
        name: "Testim",
        capabilities: [
          "AI-powered test creation",
          "Self-healing tests",
          "Smart element locators",
          "Test stability analysis"
        ],
        useCase: "Automated test creation and maintenance"
      },
      {
        name: "Mabl",
        capabilities: [
          "Intelligent test generation",
          "Auto-healing tests",
          "Integrated insights",
          "Native CI/CD integration"
        ],
        useCase: "End-to-end test automation"
      }
    ],

    emergingAITechnologies: {
      currentTrends: [
        {
          name: "Self-healing Test Scripts",
          description: "AI algorithms that automatically update test scripts when UI changes",
          implementation: [
            "Dynamic element location",
            "Smart wait strategies",
            "Automatic script correction"
          ]
        },
        {
          name: "Predictive Analytics",
          description: "AI-driven analysis to predict potential issues before they occur",
          applications: [
            "Test coverage optimization",
            "Risk assessment",
            "Resource allocation"
          ]
        },
        {
          name: "Autonomous Testing",
          description: "AI systems that can design and execute tests independently",
          features: [
            "Pattern recognition",
            "Automated test case generation",
            "Intelligent test prioritization"
          ]
        }
      ],
      futureApplications: [
        {
          name: "Natural Language Processing for Testing",
          potential: [
            "Test script generation from requirements",
            "Automated test documentation",
            "Voice-controlled testing"
          ]
        },
        {
          name: "Deep Learning for Visual Testing",
          potential: [
            "Context-aware visual comparison",
            "UX optimization suggestions",
            "Automated UI/UX testing"
          ]
        },
        {
          name: "Machine Learning for Test Optimization",
          potential: [
            "Smart test suite optimization",
            "Predictive test maintenance",
            "Automated bug triage"
          ]
        }
      ]
    }
  },

  developmentTools: {
    browserDevTools: [
      {
        name: "Chrome DevTools",
        keyFeatures: [
          "Element inspection",
          "Network monitoring",
          "Performance profiling",
          "Mobile device simulation"
        ]
      },
      {
        name: "Firefox Developer Tools",
        keyFeatures: [
          "CSS Grid inspector",
          "JavaScript debugger",
          "Performance tools",
          "Accessibility inspector"
        ]
      }
    ],

    preprocessors: [
      {
        name: "Babel",
        purpose: "JavaScript compatibility",
        features: [
          "ES6+ transpilation",
          "Plugin ecosystem",
          "Custom transformations"
        ]
      },
      {
        name: "PostCSS",
        purpose: "CSS processing",
        features: [
          "Vendor prefixing",
          "Future CSS features",
          "CSS optimization"
        ]
      }
    ]
  }
};

export const crossBrowserResources = {
  officialDocs: [
    {
      category: "Automation Frameworks",
      links: [
        {
          name: "Selenium Documentation",
          url: "https://www.selenium.dev/documentation/",
          description: "Official documentation for Selenium WebDriver"
        },
        {
          name: "Playwright Docs",
          url: "https://playwright.dev/docs/intro",
          description: "Getting started and API reference for Playwright"
        },
        {
          name: "Cypress Documentation",
          url: "https://docs.cypress.io/",
          description: "Complete guide to Cypress testing framework"
        }
      ]
    },
    {
      category: "Cloud Testing Platforms",
      links: [
        {
          name: "BrowserStack Documentation",
          url: "https://www.browserstack.com/docs/",
          description: "Guides for BrowserStack's testing tools"
        },
        {
          name: "LambdaTest Documentation",
          url: "https://www.lambdatest.com/support/docs/",
          description: "LambdaTest platform documentation"
        },
        {
          name: "Sauce Labs Documentation",
          url: "https://docs.saucelabs.com/",
          description: "Complete Sauce Labs testing documentation"
        }
      ]
    }
  ],

  tutorials: [
    {
      category: "Getting Started",
      links: [
        {
          name: "MDN Cross Browser Testing",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing",
          description: "Mozilla's comprehensive guide to cross-browser testing"
        },
        {
          name: "Google Web Fundamentals",
          url: "https://developers.google.com/web/fundamentals/testing",
          description: "Google's testing best practices"
        }
      ]
    },
    {
      category: "AI Testing",
      links: [
        {
          name: "Applitools Tutorial",
          url: "https://applitools.com/tutorials/",
          description: "Learn AI-powered visual testing"
        },
        {
          name: "TestIM Documentation",
          url: "https://help.testim.io/docs",
          description: "AI-based test automation guides"
        }
      ]
    }
  ],

  communityResources: [
    {
      category: "Forums & Communities",
      links: [
        {
          name: "Stack Overflow - Testing",
          url: "https://stackoverflow.com/questions/tagged/automated-testing",
          description: "Q&A for testing-related questions"
        },
        {
          name: "Reddit r/QualityAssurance",
          url: "https://www.reddit.com/r/QualityAssurance/",
          description: "Community discussions about QA and testing"
        },
        {
          name: "Ministry of Testing",
          url: "https://www.ministryoftesting.com/",
          description: "Professional testing community and resources"
        }
      ]
    }
  ],

  tools: {
    browserDevTools: [
      {
        name: "Chrome DevTools",
        url: "https://developers.google.com/web/tools/chrome-devtools",
        description: "Official Chrome DevTools documentation"
      },
      {
        name: "Firefox Developer Tools",
        url: "https://firefox-dev.tools/",
        description: "Firefox DevTools documentation"
      }
    ],
    preprocessors: [
      {
        name: "Babel Documentation",
        url: "https://babeljs.io/docs/en/",
        description: "Official Babel documentation"
      },
      {
        name: "PostCSS Documentation",
        url: "https://postcss.org/",
        description: "PostCSS documentation and plugins"
      }
    ]
  },

  learningPaths: [
    {
      level: "Beginner",
      resources: [
        {
          name: "Test Automation University",
          url: "https://testautomationu.applitools.com/",
          description: "Free courses on test automation"
        },
        {
          name: "W3C Browser Testing",
          url: "https://www.w3.org/groups/wg/browser-tools-testing/",
          description: "W3C's guide to testing tools"
        }
      ]
    },
    {
      level: "Advanced",
      resources: [
        {
          name: "Google Testing Blog",
          url: "https://testing.googleblog.com/",
          description: "Advanced testing concepts and practices"
        },
        {
          name: "BrowserStack Blog",
          url: "https://www.browserstack.com/blog/",
          description: "Latest trends in cross-browser testing"
        }
      ]
    }
  ],

  specifications: [
    {
      name: "W3C Web Platform Tests",
      url: "https://web-platform-tests.org/",
      description: "Test suites for web platform specifications"
    },
    {
      name: "Can I Use",
      url: "https://caniuse.com/",
      description: "Browser feature support tables"
    },
    {
      name: "MDN Browser Compatibility",
      url: "https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables",
      description: "Comprehensive browser compatibility information"
    }
  ],

  aiResources: [
    {
      name: "AI in Testing Blog",
      url: "https://digital.ai/catalyst-blog/ai-software-testing/",
      description: "Latest developments in AI testing"
    },
    {
      name: "Machine Learning for Testing",
      url: "https://katalon.com/resources-center/blog/ai-ml-in-software-testing",
      description: "Comprehensive guide to machine learning applications in software testing"
    },
    {
      name: "Functionize Documentation",
      url: "https://www.functionize.com/overview",
      description: "AI-powered autonomous testing platform"
    },
    {
      name: "Testim AI Documentation",
      url: "https://help.testim.io/docs/testim-overview",
      description: "AI-driven test automation platform guides"
    }
  ]
};

export const crossBrowserQuestions = [
  {
    question: "What is the primary purpose of cross-browser testing?",
    options: [
      "To ensure web applications work consistently across different browsers and platforms",
      "To make websites load faster",
      "To reduce server costs",
      "To improve SEO rankings"
    ],
    correctAnswer: "To ensure web applications work consistently across different browsers and platforms",
    explanation: "Cross-browser testing ensures that websites maintain functionality and appearance across different browsers, versions, and platforms, providing a consistent user experience regardless of how users access the site."
  },
  {
    question: "Which browser engine is used by Chrome, Edge, and Opera?",
    options: [
      "Chromium",
      "Gecko",
      "WebKit",
      "Quantum"
    ],
    correctAnswer: "Chromium",
    explanation: "Chromium is the open-source browser engine that powers Google Chrome, Microsoft Edge (since 2020), and Opera. It's known for its fast JavaScript execution and modern feature support."
  },
  {
    question: "What is a key principle of responsive design?",
    options: [
      "Using fixed pixel widths",
      "Fluid grids and flexible images",
      "Avoiding media queries",
      "Using only desktop layouts"
    ],
    correctAnswer: "Fluid grids and flexible images",
    explanation: "Fluid grids and flexible images are fundamental to responsive design as they allow content to adapt smoothly to different screen sizes and resolutions, ensuring a consistent user experience across devices."
  },
  {
    question: "Which approach is recommended for modern web development?",
    options: [
      "Desktop-first",
      "Mobile-first",
      "Tablet-first",
      "Print-first"
    ],
    correctAnswer: "Mobile-first",
    explanation: "Mobile-first development prioritizes designing for mobile devices initially, then progressively enhancing for larger screens. This approach ensures better performance on mobile devices and forces focus on core content and functionality."
  },
  {
    question: "What is progressive enhancement in web development?",
    options: [
      "Starting with complex features and removing them for older browsers",
      "Only supporting modern browsers",
      "Building a base experience that works everywhere and adding advanced features for capable browsers",
      "Focusing only on latest browser versions"
    ],
    correctAnswer: "Building a base experience that works everywhere and adding advanced features for capable browsers",
    explanation: "Progressive enhancement is a strategy that starts with a solid foundation that works for all users, then adds advanced features for browsers that support them. This ensures basic functionality for everyone while providing enhanced experiences where possible."
  },
  {
    question: "Which tool is commonly used for automated cross-browser testing?",
    options: [
      "Selenium",
      "Microsoft Word",
      "Photoshop",
      "Excel"
    ],
    correctAnswer: "Selenium",
    explanation: "Selenium is the most widely-used automation framework for cross-browser testing, offering WebDriver protocol support, multiple language bindings, and extensive browser compatibility. It's an industry standard for automated testing across different browsers."
  },
  {
    question: "What is a key benefit of AI integration in cross-browser testing?",
    options: [
      "Reduced electricity costs",
      "Improved server performance",
      "Self-healing test scripts and automated maintenance",
      "Better website design"
    ],
    correctAnswer: "Self-healing test scripts and automated maintenance",
    explanation: "AI-powered self-healing test scripts can automatically adapt to UI changes, reducing maintenance effort and test flakiness. This capability significantly reduces the time spent updating test scripts when applications change."
  },
  {
    question: "Which is NOT a common browser rendering variation?",
    options: [
      "Box model interpretation",
      "Font rendering",
      "Database queries",
      "Color processing"
    ],
    correctAnswer: "Database queries",
    explanation: "Database queries are server-side operations and not related to browser rendering. The other options (box model interpretation, font rendering, and color processing) are genuine browser-specific rendering variations that need testing."
  },
  {
    question: "What is the purpose of vendor prefixes in CSS?",
    options: [
      "To make code longer",
      "To support browser-specific features",
      "To improve SEO",
      "To reduce file size"
    ],
    correctAnswer: "To support browser-specific features",
    explanation: "Vendor prefixes (like -webkit-, -moz-, -ms-) allow browsers to implement experimental or browser-specific CSS features. They ensure compatibility across different browsers while new features are being standardized."
  },
  {
    question: "Which tool is used for feature detection in browsers?",
    options: [
      "Modernizr",
      "jQuery",
      "React",
      "Angular"
    ],
    correctAnswer: "Modernizr",
    explanation: "Modernizr is specifically designed for feature detection in browsers. It helps developers detect whether a browser supports specific HTML5, CSS3, and JavaScript features, allowing for graceful fallbacks when needed."
  },
  {
    question: "What is a key consideration when testing mobile browsers?",
    options: [
      "Desktop screen resolution",
      "Touch interactions and viewport sizes",
      "Server location",
      "Database type"
    ],
    correctAnswer: "Touch interactions and viewport sizes",
    explanation: "Mobile browsers require special attention to touch interactions and viewport sizes because they handle user input differently from desktop browsers and need to accommodate various screen sizes and orientations."
  },
  {
    question: "Which testing approach is best for checking visual consistency across browsers?",
    options: [
      "Unit testing",
      "Visual regression testing",
      "Load testing",
      "Security testing"
    ],
    correctAnswer: "Visual regression testing",
    explanation: "Visual regression testing specifically compares screenshots of web pages across different browsers to detect visual inconsistencies, making it the most effective approach for ensuring visual consistency."
  },
  {
    question: "What is the purpose of a CSS reset/normalize?",
    options: [
      "To make websites faster",
      "To ensure consistent base styles across browsers",
      "To improve SEO",
      "To reduce code size"
    ],
    correctAnswer: "To ensure consistent base styles across browsers",
    explanation: "CSS reset/normalize files eliminate browser-specific default styles, providing a consistent baseline for styling across different browsers and reducing cross-browser styling inconsistencies."
  },
  {
    question: "Which is a key benefit of cloud-based testing platforms?",
    options: [
      "Free hosting",
      "Access to multiple browser versions and devices",
      "Automatic code generation",
      "Better SEO"
    ],
    correctAnswer: "Access to multiple browser versions and devices",
    explanation: "Cloud-based testing platforms provide access to a wide range of browser versions and real devices without the need to maintain physical devices or multiple browser installations locally."
  },
  {
    question: "What is a primary focus of modern AI testing tools?",
    options: [
      "Social media integration",
      "Content creation",
      "Visual regression detection and pattern recognition",
      "Server optimization"
    ],
    correctAnswer: "Visual regression detection and pattern recognition",
    explanation: "Modern AI testing tools excel at visual regression detection and pattern recognition, using machine learning to identify visual inconsistencies and patterns in UI behavior across different browsers."
  },
  {
    question: "Which approach is recommended for handling browser compatibility issues?",
    options: [
      "Ignore older browsers",
      "Feature detection over browser detection",
      "Only support one browser",
      "Use deprecated features"
    ],
    correctAnswer: "Feature detection over browser detection",
    explanation: "Feature detection is preferred over browser detection because it directly tests for the availability of specific features rather than making assumptions based on browser type. This approach is more reliable and future-proof, as it works regardless of browser updates or new browser releases."
  },
  {
    question: "What is the purpose of cross-browser testing in CI/CD pipelines?",
    options: [
      "To slow down deployments",
      "To catch compatibility issues early in development",
      "To reduce server costs",
      "To improve database performance"
    ],
    correctAnswer: "To catch compatibility issues early in development",
    explanation: "Integrating cross-browser testing into CI/CD pipelines allows teams to identify and fix browser compatibility issues early in the development process, before they reach production. This early detection reduces the cost and effort of fixing issues and ensures consistent quality across deployments."
  },
  {
    question: "Which is a key consideration for future cross-browser testing?",
    options: [
      "Ignoring mobile devices",
      "Supporting only one browser",
      "WebAssembly compatibility and PWA testing",
      "Removing all JavaScript"
    ],
    correctAnswer: "WebAssembly compatibility and PWA testing",
    explanation: "As web technologies evolve, WebAssembly and Progressive Web Apps (PWAs) are becoming increasingly important. Testing these technologies across different browsers is crucial as they represent the future of web applications, offering near-native performance and enhanced user experiences."
  },
  {
    question: "What role does automated documentation play in modern testing?",
    options: [
      "It's unnecessary",
      "It helps maintain test coverage and updates",
      "It replaces manual testing",
      "It slows down testing"
    ],
    correctAnswer: "It helps maintain test coverage and updates",
    explanation: "Automated documentation helps teams track test coverage, maintain testing standards, and keep documentation synchronized with code changes. This ensures that testing knowledge is preserved, shared effectively, and remains up-to-date as applications evolve."
  },
  {
    question: "Which factor is most important when prioritizing browser testing?",
    options: [
      "Personal preference",
      "Target audience demographics and usage patterns",
      "Random selection",
      "Testing only the newest browsers"
    ],
    correctAnswer: "Target audience demographics and usage patterns",
    explanation: "Understanding your target audience's browser preferences and usage patterns is crucial for effective testing prioritization. This data-driven approach ensures testing efforts focus on the browsers and devices most commonly used by your actual users, maximizing the impact of testing resources."
  },
  {
    question: "What is the main advantage of using Playwright over Selenium?",
    options: [
      "Older community support",
      "Auto-wait capabilities and faster execution",
      "Better database integration",
      "More programming language options"
    ],
    correctAnswer: "Auto-wait capabilities and faster execution",
    explanation: "Playwright offers modern features like auto-wait capabilities and faster execution, making it ideal for modern web applications."
  },
  {
    question: "Which aspect of CSS requires special attention in cross-browser testing?",
    options: [
      "Database queries",
      "Server configuration",
      "Flexbox and Grid support variations",
      "Operating system settings"
    ],
    correctAnswer: "Flexbox and Grid support variations",
    explanation: "Different browsers may have varying levels of support for CSS Flexbox and Grid layouts, requiring careful testing and fallbacks."
  },
  {
    question: "What is a key feature of Percy in visual testing?",
    options: [
      "Database optimization",
      "Server monitoring",
      "Visual regression detection",
      "Network security"
    ],
    correctAnswer: "Visual regression detection",
    explanation: "Percy specializes in visual regression testing, automatically detecting visual changes across different browsers."
  },
  {
    question: "How does the WebKit engine differ from other browser engines?",
    options: [
      "It's only used for testing",
      "It's optimized for macOS and iOS",
      "It only supports JavaScript",
      "It's the oldest engine"
    ],
    correctAnswer: "It's optimized for macOS and iOS",
    explanation: "WebKit is Apple's engine, specifically optimized for macOS and iOS platforms."
  },
  {
    question: "What is a key consideration in mobile-first development?",
    options: [
      "Ignoring desktop users",
      "Using only fixed layouts",
      "Starting with core content and functionality",
      "Removing all animations"
    ],
    correctAnswer: "Starting with core content and functionality",
    explanation: "Mobile-first development focuses on essential content and functionality before adding enhancements for larger screens."
  },
  {
    question: "Which tool is best suited for AI-powered visual testing?",
    options: [
      "Selenium",
      "Applitools Eyes",
      "PostCSS",
      "Babel"
    ],
    correctAnswer: "Applitools Eyes",
    explanation: "Applitools Eyes uses AI for visual testing, offering automated visual validation and smart maintenance."
  },
  {
    question: "What is the primary purpose of self-healing test scripts?",
    options: [
      "To improve server performance",
      "To automatically update when UI changes",
      "To generate documentation",
      "To optimize databases"
    ],
    correctAnswer: "To automatically update when UI changes",
    explanation: "Self-healing test scripts use AI to automatically adapt to UI changes, reducing maintenance effort."
  },
  {
    question: "Which feature is most important for cloud-based testing platforms?",
    options: [
      "Social media integration",
      "Real device testing capability",
      "Email marketing",
      "Content management"
    ],
    correctAnswer: "Real device testing capability",
    explanation: "Real device testing is crucial for cloud platforms as it allows testing on actual devices rather than just emulators."
  },
  {
    question: "What is a key benefit of using PostCSS in cross-browser testing?",
    options: [
      "Database optimization",
      "Server-side rendering",
      "Automatic vendor prefixing",
      "Network monitoring"
    ],
    correctAnswer: "Automatic vendor prefixing",
    explanation: "PostCSS helps ensure CSS compatibility across browsers by automatically adding necessary vendor prefixes."
  },
  {
    question: "Which emerging technology requires special attention in future cross-browser testing?",
    options: [
      "Traditional databases",
      "WebAssembly compatibility",
      "Legacy email systems",
      "Basic HTML"
    ],
    correctAnswer: "WebAssembly compatibility",
    explanation: "WebAssembly is an emerging technology that requires specific testing considerations across different browsers."
  },
  {
    question: "What is a key advantage of using Cypress for component testing?",
    options: [
      "Support for multiple browsers simultaneously",
      "Real-time reloading and time-travel debugging",
      "Better database integration",
      "Broader language support"
    ],
    correctAnswer: "Real-time reloading and time-travel debugging",
    explanation: "Cypress offers real-time reloading and time-travel debugging capabilities, making it ideal for component testing."
  },
  {
    question: "How does LambdaTest differ from traditional testing platforms?",
    options: [
      "It only supports desktop testing",
      "It provides smart testing analytics and visual regression",
      "It's limited to one browser",
      "It doesn't support automation"
    ],
    correctAnswer: "It provides smart testing analytics and visual regression",
    explanation: "LambdaTest offers advanced features like smart testing analytics and visual regression testing capabilities."
  },
  {
    question: "What is a key consideration when implementing CSS Grid across browsers?",
    options: [
      "Using only pixel units",
      "Avoiding media queries",
      "Providing fallbacks for older browsers",
      "Disabling animations"
    ],
    correctAnswer: "Providing fallbacks for older browsers",
    explanation: "CSS Grid implementation requires fallback layouts for browsers that don't fully support this feature."
  },
  {
    question: "Which HTML5 feature typically requires the most cross-browser testing attention?",
    options: [
      "Basic text elements",
      "Canvas and WebGL implementations",
      "Simple links",
      "Static images"
    ],
    correctAnswer: "Canvas and WebGL implementations",
    explanation: "Canvas and WebGL features often have varying levels of support and performance across different browsers."
  },
  {
    question: "What is a primary benefit of using BrowserStack's local testing capability?",
    options: [
      "Faster internet connection",
      "Testing behind firewalls and on localhost",
      "Better graphics processing",
      "Automatic code generation"
    ],
    correctAnswer: "Testing behind firewalls and on localhost",
    explanation: "BrowserStack's local testing allows testing of applications that are behind firewalls or running on localhost."
  },
  {
    question: "Which AI feature is most beneficial for maintaining test scripts over time?",
    options: [
      "Code formatting",
      "Self-healing capabilities",
      "Password management",
      "Database optimization"
    ],
    correctAnswer: "Self-healing capabilities",
    explanation: "AI-powered self-healing capabilities automatically maintain test scripts by adapting to UI changes."
  },
  {
    question: "What is a key consideration when testing touch events across browsers?",
    options: [
      "CPU speed",
      "Memory usage",
      "Different event handling implementations",
      "Database connections"
    ],
    correctAnswer: "Different event handling implementations",
    explanation: "Different browsers handle touch events differently, requiring careful testing of touch interactions."
  },
  {
    question: "Which approach is most effective for testing responsive images across browsers?",
    options: [
      "Using only PNG format",
      "Implementing srcset and picture elements",
      "Avoiding image compression",
      "Using fixed dimensions"
    ],
    correctAnswer: "Implementing srcset and picture elements",
    explanation: "Using srcset and picture elements ensures proper responsive image handling across different browsers and devices."
  },
  {
    question: "What is the most important aspect of testing CSS animations across browsers?",
    options: [
      "File size",
      "Performance and rendering consistency",
      "Database integration",
      "Server load"
    ],
    correctAnswer: "Performance and rendering consistency",
    explanation: "CSS animations need to be tested for both performance and rendering consistency across different browsers."
  },
  {
    question: "Which feature of modern testing frameworks best supports CI/CD integration?",
    options: [
      "Visual design tools",
      "Automated parallel test execution",
      "Manual testing capabilities",
      "Social media integration"
    ],
    correctAnswer: "Automated parallel test execution",
    explanation: "Automated parallel test execution is crucial for efficient integration with CI/CD pipelines."
  }
];

export const aiTestingPlatforms = {
  tools: [
    {
      name: "Datadog",
      description: "Comprehensive AI-driven test automation platform, specifically designed for monitoring and testing web applications. It combines synthetic monitoring with intelligent automation to help developers detect and resolve performance and reliability issues early in the development cycle.",
      url: "https://www.datadoghq.com/",
      pricing: "Paid (with trial)",
      category: "Enterprise Monitoring",
      keyFeatures: [
        "Synthetic monitoring",
        "Intelligent automation",
        "Performance testing",
        "Early issue detection"
      ]
    },
    {
      name: "BlinqIO",
          description: "AI-driven test automation tool designed to emulate the functions of a human test automation engineer. It interprets test scenarios or descriptions, executes them on the target application or website, and generates automation code for integration into CI/CD systems",
          url: "https://blinq.io/",
          pricing: "Freemium",
          category: "AI Test Generation",
          keyFeatures: [
            "Test scenario interpretation",
            "Automated code generation",
            "CI/CD integration",
            "Human-like testing approach"
          ]
    },
    {
      name: "Autify NoCode",
      description: "AI-powered test automation platform designed for QA teams, offering a no-code solution for web and mobile application testing.",
      url: "https://autify.com/",
      pricing: "Paid (with free trial)",
      category: "No-Code Testing",
      keyFeatures: [
            "No-code interface",
            "Web testing",
            "Mobile testing",
            "AI-powered automation"
          ]
        },
        {
          name: "CodeceptJS with AI",
          description: "Innovative addition to the popular CodeceptJS test automation framework, introducing artificial intelligence capabilities to enhance the testing experience.",
          url: "https://codecept.io/",
          pricing: "Open-source",
          category: "Framework Extension",
          keyFeatures: [
            "AI capabilities",
            "Framework integration",
            "Open-source flexibility",
            "Enhanced testing experience"
          ]
        },
        {
          name: "QAautoMATER",
          description: "All-in-one solution for test case management, defect management, and automation testing. It eliminates the need for additional investments and is an AI-driven, user-friendly tool.",
          url: "https://www.qaautomater.com/",
          pricing: "Freemium",
          category: "Test Management",
          keyFeatures: [
            "Test case management",
            "Defect management",
            "Automation testing",
            "User-friendly interface"
          ]
        },
        {
          name: "Functionize",
          description: "All-in-one Enterprise quality platform that accelerates software innovation through the power of AI.",
          url: "https://www.functionize.com/",
          pricing: "Paid (with free trial)",
          category: "Enterprise Testing",
          keyFeatures: [
            "Enterprise quality",
            "AI acceleration",
            "Software innovation",
            "Comprehensive testing"
          ]
        },
        {
          name: "Checkie.ai",
          description: "The Fastest, Simplest, and Smartest way to add AI to your testing.",
          url: "https://www.checkie.ai/",
          pricing: "Paid (no free trial)",
          category: "AI Integration",
          keyFeatures: [
            "Fast implementation",
            "Simple integration",
            "Smart testing",
            "AI enhancement"
          ]
        },
        {
          name: "ZeroStep",
          description: "Supercharge your Playwright tests with AI. ZeroStep's ai() function unlocks the power of GPT3.5 and GPT4 to make Playwright tests simpler and more resilient to change.",
          url: "https://zerostep.com/",
          pricing: "Freemium",
          category: "Playwright Enhancement",
          keyFeatures: [
            "GPT integration",
            "Playwright enhancement",
            "Test resilience",
            "Simplified testing"
          ]
        },
        {
          name: "TestGrid",
          description: "AI-driven test automation platform, with the support of AI agent for Software Testing, CoTester™.",
          url: "https://www.testgrid.io/",
          pricing: "Freemium",
          category: "AI-Driven Testing",
          keyFeatures: [
            "AI agent support",
            "Automated testing",
            "CoTester integration",
            "Comprehensive platform"
          ]
        },
        {
          name: "mabl",
          description: "Leader in AI-powered software testing by Gartner and a 5x winner of the AI Breakthrough Award for Engineering Solutions.",
          url: "https://www.mabl.com/",
          pricing: "Paid (with free trial)",
          category: "Market Leader",
          keyFeatures: [
            "Award-winning platform",
            "Gartner recognition",
            "Engineering excellence",
            "AI-powered testing"
          ]
        },
    {
      name: "ACCELQ",
      description: "The most powerful AI-Powered Codeless Test Automation on the Cloud.",
      url: "https://www.accelq.com/",
      pricing: "Paid (with free trial)",
      category: "Codeless Testing",
      keyFeatures: [
        "Codeless automation",
        "Cloud-based testing",
        "AI-powered analysis",
        "Enterprise integration"
      ]
    },
    {
      name: "Octomind",
      description: "AI-powered test automation tool designed for end-to-end testing of web applications. It uses AI agents to automatically discover and generate Playwright test cases.",
      url: "https://octomind.dev/",
      pricing: "Freemium",
      category: "E2E Testing",
      keyFeatures: [
        "Playwright integration",
        "Automatic test discovery",
        "AI agents",
        "Test maintenance"
      ]
    },
    {
      name: "Appvance",
      description: "Supervised AI-driven exploratory script generation (autonomous testing) designs, executes, and reports on application tests.",
      url: "https://appvance.ai/",
      pricing: "Quote-Based",
      category: "Autonomous Testing",
      keyFeatures: [
        "Exploratory testing",
        "Script generation",
        "Autonomous execution",
        "Comprehensive reporting"
      ]
    },
    {
      name: "Wopee.io",
      description: "Reduce test automation complexity and keep its benefits. Woppe's Autonomous Testing Bot eliminates the need for manual test case preparation or coding.",
      url: "https://www.wopee.io/",
      pricing: "Paid (with free trial)",
      category: "Autonomous Testing",
      keyFeatures: [
        "Autonomous testing bot",
        "No manual preparation",
        "Reduced complexity",
        "Automated process"
      ]
    },
    {
      name: "Rainforest QA",
      description: "AI-powered, no-code testing platform and QA services help you ship with speed and confidence.",
      url: "https://www.rainforestqa.com/",
      pricing: "Quote-Based",
      category: "No-Code Testing",
      keyFeatures: [
        "No-code platform",
        "QA services",
        "Fast deployment",
        "AI-powered testing"
      ]
    },
    {
      name: "BotGauge",
      description: "Gen AI no-code test automation platform that pioneers autonomous test case generation and live debugging.",
      url: "https://botgauge.com/",
      pricing: "Paid (with free trial)",
      category: "No-Code Testing",
      keyFeatures: [
        "Gen AI integration",
        "Live debugging",
        "Cost reduction",
        "Plain English tests"
      ]
    },
    {
      name: "Keploy",
      description: "Open-source, end-to-end test automation platform that captures real-world traffic, generates test cases, and automates test maintenance.",
      url: "https://keploy.io/",
      pricing: "Open-source",
      category: "E2E Testing",
      keyFeatures: [
        "Traffic capture",
        "Test generation",
        "Automated maintenance",
        "Open-source flexibility"
      ]
    },
    {
      name: "testRigor",
      description: "Generative AI-based Test Automation Tool using free-flowing plain English to build test automation.",
      url: "https://testrigor.com/",
      pricing: "Freemium",
      category: "Natural Language Testing",
      keyFeatures: [
        "Plain English tests",
        "Generative AI",
        "Natural language processing",
        "Easy maintenance"
      ]
    },
    {
      name: "Reflect",
      description: "Effortlessly create, execute, and troubleshoot automated end-to-end tests using Reflect's advanced AI capabilities.",
      url: "https://reflect.run/",
      pricing: "Paid (with free trial)",
      category: "E2E Testing",
      keyFeatures: [
        "Easy test creation",
        "Advanced AI",
        "Troubleshooting",
        "End-to-end testing"
      ]
    },
    {
      name: "KushoAI",
      description: "Powerful AI-driven test automation tool designed to streamline API testing for software developers.",
      url: "https://kusho.ai/",
      pricing: "Freemium",
      category: "API Testing",
      keyFeatures: [
        "API testing",
        "Developer-focused",
        "AI automation",
        "Streamlined process"
      ]
    },
    {
      name: "Curiosity Software",
      description: "AI-powered quality and test data platform designed to streamline enterprise software delivery. The platform uses AI to enhance test case design, data generation, and defect prediction, ensuring efficiency and precision across complex architectures such as APIs, microservices, and legacy systems.",
      url: "https://curiositysoftware.ie/",
      pricing: "Quote-Based",
      category: "Enterprise Testing",
      keyFeatures: [
        "Test case design",
        "Data generation",
        "Defect prediction",
        "Complex architecture support"
      ]
    },
    {
      name: "Testim",
      description: "AI-driven web and mobile test automation for product development teams.",
      url: "https://www.testim.io/",
      pricing: "Paid (with free trial)",
      category: "Test Automation",
      keyFeatures: [
        "Web testing",
        "Mobile testing",
        "AI-driven automation",
        "Developer-friendly"
      ]
    },
    {
      name: "NIMBAL Tree",
      description: "Mobile Responsive Test Management and Execution System that gives you the ability to execute your automated and manual tests.",
      url: "https://www.nimbaltree.com/",
      pricing: "Freemium",
      category: "Test Management",
      keyFeatures: [
        "Mobile responsive",
        "Test management",
        "Test execution",
        "Manual and automated testing"
      ]
    },
    {
      name: "Copado Testing",
      description: "Cloud-based, AI-powered test automation platform designed to streamline and enhance the testing processes across various applications, with a strong emphasis on Salesforce environments.",
      url: "https://www.copado.com/platform/test-automation/",
      pricing: "Quote-Based",
      category: "Salesforce Testing",
      keyFeatures: [
        "Salesforce testing",
        "Cloud-based",
        "AI-powered automation",
        "Process streamlining"
      ]
    },
    {
      name: "TestResults.io",
      description: "AI-driven TestResults.io autonomous software test automation platform, you can automate entire user journeys and value streams from start to end",
      url: "https://testresults.io/",
      pricing: "Freemium",
      category: "Autonomous Testing",
      keyFeatures: [
        "User journey automation",
        "Value stream testing",
        "Autonomous testing",
        "End-to-end coverage"
      ]
    },
    {
      name: "QA.tech",
      description: "Your Autonomous QA Engineer. QA.tech's AI agent scans your web app, runs tests and creates bug reports developers love.",
      url: "https://qa.tech/",
      pricing: "Freemium",
      category: "Autonomous Testing",
      keyFeatures: [
        "AI agent",
        "Web app scanning",
        "Automated testing",
        "Developer-friendly reports"
      ]
    },
    {
      name: "testsigma",
      description: "10X Faster Test Automation Powered by Gen-AI",
      url: "https://testsigma.com/",
      pricing: "Paid (with free trial)",
      category: "Gen-AI Testing",
      keyFeatures: [
        "Gen-AI powered",
        "Fast automation",
        "Cross-platform testing",
        "No-code platform"
      ]
    },
    {
      name: "applitools",
      description: "The All-In-One Next Generation AI-Powered Testing Platform",
      url: "https://applitools.com/",
      pricing: "Paid (with free trial)",
      category: "Visual Testing",
      keyFeatures: [
        "Visual AI",
        "Cross-browser testing",
        "Visual regression",
        "Layout testing"
      ]
    },
    {
      name: "Virtuoso",
      description: "AI-powered, end-to-end functional testing for web applications, delivering real cost savings and an accelerated path to business success at scale.",
      url: "https://www.virtuoso.qa/",
      pricing: "Quote-Based",
      category: "Functional Testing",
      keyFeatures: [
        "Functional testing",
        "Cost optimization",
        "Scalable testing",
        "AI-powered automation"
      ]
    },
    {
      name: "Katalon",
      description: "Quickly create your tests with low-code, full-code scripting, or AI for web, mobile, desktop, and API.",
      url: "https://katalon.com/",
      pricing: "Freemium",
      category: "Multi-Platform Testing",
      keyFeatures: [
        "Low-code/full-code",
        "Multi-platform support",
        "AI integration",
        "API testing"
      ]
    },
    {
      name: "relicx",
      description: "Effortlessly create high quality end-to-end tests in minutes using AI.",
      url: "https://www.relicx.ai/",
      pricing: "Paid (with free trial)",
      category: "E2E Testing",
      keyFeatures: [
        "Quick test creation",
        "High-quality tests",
        "AI assistance",
        "End-to-end coverage"
      ]
    },
    {
      name: "Eggplant Test",
      description: "Eggplant's AI-powered automation interprets and interacts with the application like a real user without requiring access to the source code.",
      url: "https://www.keysight.com/find/eggplant",
      pricing: "Quote-Based",
      category: "User-Centric Testing",
      keyFeatures: [
        "User-like interaction",
        "No source code needed",
        "AI-powered automation",
        "Natural testing approach"
      ]
    },
    {
      name: "ContextQA",
      description: "It employs sophisticated algorithms and AI technology for self-healing, root cause analysis and visual regression testing.",
      url: "https://www.contextqa.com/",
      pricing: "Paid (with free trial)",
      category: "Self-Healing Testing",
      keyFeatures: [
        "Self-healing tests",
        "Root cause analysis",
        "Visual regression",
        "AI algorithms"
      ]
    }
  ]
};

export const CypressQ = [
  {
    question: "1. What is Cypress primarily used for?",
    options: [
      "A. Backend testing only",
      "B. End-to-end testing of web applications",
      "C. Mobile application testing",
      "D. Database testing"
    ],
    correctAnswer: "B. End-to-end testing of web applications"
  },
  {
    question: "2. Which command is used to visit a webpage in Cypress?",
    options: [
      "A. cy.goto('url')",
      "B. cy.navigate('url')",
      "C. cy.visit('url')",
      "D. cy.open('url')"
    ],
    correctAnswer: "C. cy.visit('url')"
  },
  {
    question: "3. What is the purpose of cy.get() in Cypress?",
    options: [
      "A. To get data from an API",
      "B. To select DOM elements",
      "C. To get browser cookies",
      "D. To get test configuration"
    ],
    correctAnswer: "B. To select DOM elements"
  },
  {
    question: "4. What is a key architectural advantage of Cypress compared to Selenium?",
    options: [
      "A. It runs slower but more reliably",
      "B. It runs in the same run loop as the application",
      "C. It requires WebDriver installation",
      "D. It only works with Chrome browser"
    ],
    correctAnswer: "B. It runs in the same run loop as the application"
  },
  {
    question: "5. Which folder in Cypress project structure stores test data files?",
    options: [
        "A. data/",
        "B. tests/",
        "C. fixtures/",
        "D. resources/"
      ],
    correctAnswer: "C. fixtures/"
  },
  {
    question: "6. What is the purpose of the 'beforeEach' hook in Cypress tests?",
    options: [
        "A. It runs after each test",
        "B. It runs before all tests",
        "C. It runs before each individual test",
        "D. It runs only once per test suite"
      ],
    correctAnswer: "C. It runs before each individual test"
  },
  {
    question: "7. What is the recommended way to select elements for testing in Cypress?",
    options: [
        "A. Using CSS classes",
        "B. Using IDs",
        "C. Using data-cy attributes",
        "D. Using element tags"
      ],
    correctAnswer: "C. Using data-cy attributes"
  },
  {
    question: "8. How does Cypress handle asynchronous operations?",
    options: [
        "A. Using async/await",
        "B. Using Promise.then()",
        "C. Using setTimeout",
        "D. Automatically with built-in waiting"
      ],
    correctAnswer: "D. Automatically with built-in waiting"
  },
  {
    question: "9. What is the purpose of cy.intercept() in Cypress?",
    options: [
        "A. To interrupt test execution",
        "B. To intercept and stub network requests",
        "C. To interact with iframes",
        "D. To interpret test results"
      ],
    correctAnswer: "B. To intercept and stub network requests"
  },
  {
    question: "10. How can you share custom commands across multiple tests in Cypress?",
    options: [
        "A. By copying and pasting the commands",
        "B. By defining them in commands.js file",
        "C. By using global variables",
        "D. By importing from external libraries"
      ],
    correctAnswer: "B. By defining them in commands.js file"
  },
  {
    question: "11. What is the purpose of cy.fixture() in Cypress?",
    options: [
        "A. To fix failed tests",
        "B. To load test data from fixture files",
        "C. To fix browser compatibility issues",
        "D. To configure test settings"
      ],
    correctAnswer: "B. To load test data from fixture files"
  },
  {
    question: "12. Which command is used to make assertions in Cypress?",
    options: [
        "A. cy.assert()",
        "B. cy.expect()",
        "C. cy.should()",
        "D. cy.test()"
      ],
    correctAnswer: "C. cy.should()"
  },
  {
    question: "13. What is the purpose of cypress.config.js file?",
    options: [
        "A. To store test data",
        "B. To write test cases",
        "C. To configure Cypress behavior and settings",
        "D. To define custom commands"
      ],
    correctAnswer: "C. To configure Cypress behavior and settings"
  },
  {
    question: "14. What is the purpose of cy.wait() in Cypress?",
    options: [
        "A. To pause test execution for a fixed time",
        "B. To wait for a specific network request to complete",
        "C. To wait for page load",
        "D. To wait for browser initialization"
      ],
    correctAnswer: "B. To wait for a specific network request to complete"
  },
  {
    question: "15. How can you handle environment variables in Cypress?",
    options: [
        "A. Using process.env",
        "B. Using Cypress.env()",
        "C. Using global variables",
        "D. Using system environment"
      ],
    correctAnswer: "B. Using Cypress.env()"
  },
  {
    question: "16. What is the purpose of cy.as() in Cypress?",
    options: [
        "A. To rename commands",
        "B. To create aliases for future reference",
        "C. To assert conditions",
        "D. To assign variables"
      ],
    correctAnswer: "B. To create aliases for future reference"
  },
  {
    question: "17. Where are Cypress test failure screenshots stored by default?",
    options: [
        "A. /tmp folder",
        "B. /cypress/screenshots",
        "C. /test/screenshots",
        "D. /assets/screenshots"
      ],
    correctAnswer: "B. /cypress/screenshots"
  },
  {
    question: "18. What is the difference between cy.get() and cy.find()?",
    options: [
        "A. There is no difference",
        "B. cy.get() searches from root, cy.find() searches within a previous element",
        "C. cy.get() is faster than cy.find()",
        "D. cy.find() is more reliable than cy.get()"
      ],
    correctAnswer: "B. cy.get() searches from root, cy.find() searches within a previous element"
  },
  {
    question: "19. How can you handle multiple tabs/windows in Cypress?",
    options: [
        "A. Using cy.window()",
        "B. Cypress doesn't support multiple tabs directly",
        "C. Using cy.tab()",
        "D. Using cy.switchTo()"
      ],
    correctAnswer: "B. Cypress doesn't support multiple tabs directly"
  },
  {
    question: "20. What is the purpose of cy.task() in Cypress?",
    options: [
        "A. To execute Node.js code from within Cypress tests",
        "B. To create new test tasks",
        "C. To manage test priorities",
        "D. To schedule test execution"
      ],
    correctAnswer: "A. To execute Node.js code from within Cypress tests"
  },
  {
    question: "21. How can you handle iframes in Cypress?",
    options: [
        "A. Using cy.iframe()",
        "B. Using cy.get('iframe').then($iframe => {})",
        "C. Cypress doesn't support iframes",
        "D. Using cy.switchToFrame()"
      ],
    correctAnswer: "B. Using cy.get('iframe').then($iframe => {})"
  },
  {
    question: "22. What is the purpose of cy.clock() in Cypress?",
    options: [
        "A. To measure test execution time",
        "B. To control time-dependent functions like setTimeout",
        "C. To set test timeouts",
        "D. To schedule test execution"
      ],
    correctAnswer: "B. To control time-dependent functions like setTimeout"
  },
  {
    question: "23. How can you debug Cypress tests?",
    options: [
        "A. Using console.log only",
        "B. Using cy.debug() or .debug() command",
        "C. Using browser's developer tools",
        "D. All of the above"
      ],
    correctAnswer: "D. All of the above"
  },
  {
    question: "24. What is the purpose of cy.viewport() in Cypress?",
    options: [
        "A. To take screenshots of specific viewports",
        "B. To change the size of the browser window for responsive testing",
        "C. To scroll to specific viewport areas",
        "D. To validate viewport-specific content"
      ],
    correctAnswer: "B. To change the size of the browser window for responsive testing"
  },
  {
    question: "25. How can you handle file uploads in Cypress?",
    options: [
      "A. Using cy.upload()",
      "B. Using cy.attachFile() with cypress-file-upload plugin",
      "C. File uploads are not supported in Cypress",
      "D. Using native input file handling"
      ],
    correctAnswer: "B. Using cy.attachFile() with cypress-file-upload plugin"
  },
  {
    question: "26. What is the difference between .then() and .should() in Cypress?",
    options: [
        "A. They are the same",
        "B. .then() is for custom commands, .should() is for assertions",
        "C. .then() allows direct access to the subject, .should() is for automatic retrying assertions",
        "D. .should() is deprecated, .then() is recommended"
      ],
    correctAnswer: "C. .then() allows direct access to the subject, .should() is for automatic retrying assertions"
  },
  {
    question: "27. How can you handle authentication in Cypress tests?",
    options: [
        "A. Only through UI login",
        "B. Using cy.session() for session management",
        "C. Authentication is not possible in Cypress",
        "D. Only through environment variables"
      ],
    correctAnswer: "B. Using cy.session() for session management"
  },
  {
    question: "28. What is the purpose of cy.stub() in Cypress?",
    options: [
        "A. To create test data",
        "B. To replace a function with a stub version for testing",
        "C. To stub network requests",
        "D. To create test fixtures"
      ],
    correctAnswer: "B. To replace a function with a stub version for testing"
  },
  {
    question: "29. How can you run specific test cases in Cypress?",
    options: [
        "A. Using .only() or it.only()",
        "B. By commenting out other tests",
        "C. By creating separate test files",
        "D. Using test priorities"
      ],
    correctAnswer: "A. Using .only() or it.only()"
  },
  {
    question: "30. What is the purpose of cy.within() in Cypress?",
    options: [
        "A. To test within a specific timeframe",
        "B. To scope commands to within an element",
        "C. To test within a specific browser",
        "D. To test within an iframe"
      ],
    correctAnswer: "B. To scope commands to within an element"
  }
];

export const STLCQuizData = [
  {
    question: "What is the first phase of the Software Testing Life Cycle (STLC)?",
    options: [
      "Test Execution",
      "Test Planning",
      "Requirement Analysis",
      "Test Case Development"
    ],
    correctAnswer: "Requirement Analysis"
  },
  {
    question: "Which document is typically created during the Requirement Analysis phase?",
    options: [
      "Test Cases",
      "Bug Reports",
      "Test Closure Report",
      "Requirement Traceability Matrix (RTM)"
    ],
    correctAnswer: "Requirement Traceability Matrix (RTM)"
  },
  {
    question: "What is the main purpose of the Test Planning phase?",
    options: [
      "Execute test cases",
      "Define test strategy and create test plans",
      "Develop test cases",
      "Set up test environment"
    ],
    correctAnswer: "Define test strategy and create test plans"
  },
  {
    question: "During which phase are test cases and test scripts created?",
    options: [
      "Test Planning",
      "Test Case Development",
      "Test Execution",
      "Requirement Analysis"
    ],
    correctAnswer: "Test Case Development"
  },
  {
    question: "What is typically performed during Test Environment Setup?",
    options: [
      "Writing test cases",
      "Analyzing requirements",
      "Performing smoke tests on the build",
      "Creating test closure reports"
    ],
    correctAnswer: "Performing smoke tests on the build"
  },
  {
    question: "Which activity is NOT part of the Test Execution phase?",
    options: [
      "Running test cases",
      "Creating test strategy",
      "Filing bug reports",
      "Regression testing"
    ],
    correctAnswer: "Creating test strategy"
  },
  {
    question: "What is the final phase of STLC?",
    options: [
      "Test Execution",
      "Test Environment Setup",
      "Test Cycle Closure",
      "Test Case Development"
    ],
    correctAnswer: "Test Cycle Closure"
  },
  {
    question: "Which document is produced during the Test Cycle Closure phase?",
    options: [
      "Test Plan",
      "Test Cases",
      "Test Metrics",
      "Requirement Traceability Matrix"
    ],
    correctAnswer: "Test Metrics"
  },
  {
    question: "What is a key best practice in STLC?",
    options: [
      "Skipping the planning phase to save time",
      "Maintaining traceability throughout the cycle",
      "Creating test cases without requirements",
      "Executing tests without documentation"
    ],
    correctAnswer: "Maintaining traceability throughout the cycle"
  },
  {
    question: "Which phase involves estimating the effort and cost of testing?",
    options: [
      "Requirement Analysis",
      "Test Planning",
      "Test Execution",
      "Test Cycle Closure"
    ],
    correctAnswer: "Test Planning"
  },
  {
      question: "What is the purpose of a Requirement Traceability Matrix (RTM)?",
      options: [
       "To track test execution progress",
        "To map requirements to test cases",
        "To document test results",
        "To plan test environment setup"
      ],
      correctAnswer: "To map requirements to test cases"
  },
  {
      question: "Which testing type is typically performed during Test Environment Setup?",
      options: [
        "Regression Testing",
        "Integration Testing",
        "Smoke Testing",
        "Performance Testing"
    ],
    correctAnswer: "Smoke Testing"
  },
  {
    question: "What is the primary output of the Test Case Development phase?",
    options: [
        "Test Strategy",
        "Test Data",
        "Test Cases and Scripts",
        "Test Metrics"
      ],
      correctAnswer: "Test Cases and Scripts"
  },
  {
      question: "When should test environment setup ideally begin?",
      options: [
        "After test execution",
        "During requirement analysis",
        "Parallel to test case development",
        "After test case development"
      ],
      correctAnswer: "Parallel to test case development"
  },
  {
    question: "What is the purpose of test closure activities?",
    options: [
      "To start new test cycle",
      "To evaluate test completion criteria and document learnings",
      "To fix remaining bugs",
      "To create test cases"
      ],
      correctAnswer: "To evaluate test completion criteria and document learnings"
  },
  {
      question: "Which phase involves analyzing the feasibility of automation?",
      options: [
        "Test Execution",
        "Test Planning",
        "Requirement Analysis",
        "Test Environment Setup"
      ],
      correctAnswer: "Requirement Analysis"
  },
  {
    question: "What should be done if requirements change during the STLC?",
    options: [
      "Ignore the changes and continue testing",
      "Update test cases and RTM accordingly",
      "Start the STLC from beginning",
      "Skip test planning phase"
      ],
      correctAnswer: "Update test cases and RTM accordingly"
  },
  {
      question: "Which document helps in tracking defects during test execution?",
      options: [
        "Test Strategy",
        "Defect Report/Bug Report",
        "Test Plan",
        "Requirements Document"
      ],
      correctAnswer: "Defect Report/Bug Report"
  },
  {
    question: "What is the main purpose of test metrics in STLC?",
    options: [
      "To create test cases",
      "To measure and monitor test progress and quality",
      "To setup test environment",
      "To write code"
      ],
      correctAnswer: "To measure and monitor test progress and quality"
  },
  {
      question: "Which activity marks the formal completion of the testing process?",
      options: [
        "Test execution completion",
        "Bug fixing completion",
        "Test closure report sign-off",
        "Test case creation"
      ],
      correctAnswer: "Test closure report sign-off"
  },
  {
      question: "What is the role of entry criteria in STLC?",
      options: [
        "To determine when to start coding",
        "To define conditions that must be met before testing can begin",
        "To set project deadlines",
        "To evaluate test results"
      ],
      correctAnswer: "To define conditions that must be met before testing can begin"
  },
  {
      question: "Which of the following is NOT a typical exit criteria for test closure?",
      options: [
        "All test cases executed",
        "All high priority bugs fixed",
        "Test environment setup complete",
        "Test metrics documented"
      ],
      correctAnswer: "Test environment setup complete"
  },
  {
      question: "What is the purpose of test case prioritization in STLC?",
      options: [
        "To execute all test cases faster",
        "To identify which testers to assign",
        "To ensure critical functionality is tested first",
        "To reduce the number of test cases"
      ],
      correctAnswer: "To ensure critical functionality is tested first"
  },
  {
    question: "When is regression testing typically performed in STLC?",
    options: [
      "Only at the start of testing",
      "After every bug fix",
      "Only during test planning",
      "Only during requirement analysis"
      ],
      correctAnswer: "After every bug fix"
  },
  {
      question: "What is the primary purpose of test data preparation in STLC?",
      options: [
        "To create user documentation",
        "To provide realistic data for testing scenarios",
        "To analyze requirements",
        "To write test cases"
      ],
      correctAnswer: "To provide realistic data for testing scenarios"
  },
  {
    question: "Which phase of STLC requires the most interaction with developers?",
    options: [
      "Test Planning",
      "Requirement Analysis",
      "Test Execution",
      "Test Case Development"
      ],
      correctAnswer: "Test Execution"
  },
  {
      question: "What is the purpose of test estimation in STLC?",
      options: [
        "To count the number of testers",
        "To predict project completion date and required resources",
        "To measure test coverage",
        "To evaluate test cases"
      ],
      correctAnswer: "To predict project completion date and required resources"
  },
  {
    question: "Which activity is most important during test environment setup?",
    options: [
      "Writing test cases",
      "Verifying environment matches production",
      "Creating test data",
      "Running regression tests"
      ],
      correctAnswer: "Verifying environment matches production"
  },
  {
      question: "What should be included in a test closure report?",
      options: [
        "Only failed test cases",
        "Only passed test cases",
        "Test summary, metrics, and lessons learned",
        "Future project plans"
      ],
      correctAnswer: "Test summary, metrics, and lessons learned"
  },
  {
      question: "What is the main difference between test strategy and test plan?",
      options: [
        "They are the same thing",
        "Test strategy is high-level approach, test plan is detailed implementation",
        "Test plan is created first",
        "Test strategy is only for automation"
      ],
      correctAnswer: "Test strategy is high-level approach, test plan is detailed implementation"
  }
];

export const QADataPrinciplesQuiz = [
  {
    id: 1,
    question: "Which testing principle states that testing can show the presence of defects but cannot prove their absence?",
    options: [
      "Exhaustive Testing is Impossible",
      "Testing Shows Presence of Defects",
      "Early Testing",
      "Defect Clustering"
    ],
    correctAnswer: "Testing Shows Presence of Defects"
  },
  {
    id: 2,
    question: "According to the 'Early Testing' principle, when is the most cost-effective time to find and fix defects?",
    options: [
      "During production phase",
      "During testing phase",
      "As early as possible in the software development lifecycle",
      "After user acceptance testing"
    ],
    correctAnswer: "As early as possible in the software development lifecycle"
  },
  {
    id: 3,
    question: "The Pareto principle in testing is most closely related to which testing principle?",
    options: [
      "Pesticide Paradox",
      "Defect Clustering",
      "Testing is Context Dependent",
      "Absence-of-Errors Fallacy"
    ],
    correctAnswer: "Defect Clustering"
  },
  {
    id: 4,
    question: "What happens when the same test cases are repeated over and over again according to the Pesticide Paradox?",
    options: [
      "Tests become more effective",
      "Tests stop finding new defects",
      "Software quality improves",
      "Testing costs decrease"
    ],
    correctAnswer: "Tests stop finding new defects"
  },
  {
    id: 5,
    question: "Why is exhaustive testing impossible except for trivial cases?",
    options: [
      "It's too expensive",
      "There's not enough time",
      "The number of possible input combinations is too large",
      "Developers don't allow it"
    ],
    correctAnswer: "The number of possible input combinations is too large"
  },
  {
    id: 6,
    question: "What does the 'Absence-of-Errors Fallacy' principle teach us?",
    options: [
      "All software has errors",
      "Testing can find all errors",
      "A bug-free system might still be unusable if it doesn't meet user needs",
      "Errors are impossible to find"
    ],
    correctAnswer: "A bug-free system might still be unusable if it doesn't meet user needs"
  },
  {
    id: 7,
    question: "According to the cost multiplication factor, how much more expensive is it to fix a defect in production compared to the requirements phase?",
    options: [
      "10 times more expensive",
      "15-40 times more expensive",
      "40-1000 times more expensive",
      "5 times more expensive"
    ],
    correctAnswer: "40-1000 times more expensive"
  },
  {
    id: 8,
    question: "Which principle emphasizes that testing should be adapted based on the nature of the software being tested?",
    options: [
      "Testing Shows Presence of Defects",
      "Testing is Context Dependent",
      "Early Testing",
      "Pesticide Paradox"
    ],
    correctAnswer: "Testing is Context Dependent"
  },
  {
    id: 9,
    question: "What is the recommended approach to overcome the Pesticide Paradox?",
    options: [
      "Use the same tests repeatedly",
      "Stop testing altogether",
      "Regularly review and update test cases",
      "Focus only on automation"
    ],
    correctAnswer: "Regularly review and update test cases"
  },
  {
    id: 10,
    question: "Which of the following best describes the concept of Defect Clustering?",
    options: [
      "Defects are spread evenly throughout the system",
      "A small number of modules contain most of the defects",
      "Defects only occur in new code",
      "Defects are impossible to predict"
    ],
    correctAnswer: "A small number of modules contain most of the defects"
  },
  {
    id: 11,
    question: "In the context of Early Testing, which phase has the lowest cost of defect fixing?",
    options: [
      "Testing phase",
      "Requirements phase",
      "Development phase",
      "Deployment phase"
    ],
    correctAnswer: "Requirements phase"
  },
  {
    id: 12,
    question: "Which testing principle is violated when testers assume that finding no defects means the software is perfect?",
    options: [
      "Testing Shows Presence of Defects",
      "Early Testing",
      "Defect Clustering",
      "Testing is Context Dependent"
    ],
    correctAnswer: "Testing Shows Presence of Defects"
  },
  {
    id: 13,
    question: "How does the Context-Dependent principle affect testing of a medical device versus a gaming application?",
    options: [
      "Both require the same level of testing",
      "Medical device requires more rigorous security testing",
      "Gaming application requires more testing",
      "Medical device requires more rigorous testing due to safety criticality"
    ],
    correctAnswer: "Medical device requires more rigorous testing due to safety criticality"
  },
  {
    id: 14,
    question: "What is a key indicator that the Pesticide Paradox is affecting your testing?",
    options: [
      "Finding more defects than usual",
      "Test execution taking longer",
      "No new defects being found with existing test cases",
      "Increased testing costs"
    ],
    correctAnswer: "No new defects being found with existing test cases"
  },
  {
    id: 15,
    question: "Which principle supports the practice of risk-based testing?",
    options: [
      "Testing Shows Presence of Defects",
      "Exhaustive Testing is Impossible",
      "Early Testing",
      "Pesticide Paradox"
    ],
    correctAnswer: "Exhaustive Testing is Impossible"
  },
  {
    id: 16,
    question: "According to the Defect Clustering principle, what percentage of problems are typically found in a small number of modules?",
    options: [
      "20-30%",
      "40-50%",
      "60-70%",
      "80-90%"
    ],
    correctAnswer: "80-90%"
  },
  {
    id: 17,
    question: "Which principle explains why having 100% test coverage doesn't guarantee a perfect system?",
    options: [
      "Testing Shows Presence of Defects",
      "Exhaustive Testing is Impossible",
      "Absence-of-Errors Fallacy",
      "Defect Clustering"
    ],
    correctAnswer: "Testing Shows Presence of Defects"
  },
  {
    id: 18,
    question: "What is the best practice for applying the Context-Dependent principle in testing?",
    options: [
      "Use the same testing approach for all projects",
      "Adapt testing strategy based on project characteristics",
      "Always use automated testing",
      "Focus only on functional testing"
    ],
    correctAnswer: "Adapt testing strategy based on project characteristics"
  },
  {
    id: 19,
    question: "Which testing principle supports the need for continuous test maintenance and updates?",
    options: [
      "Early Testing",
      "Defect Clustering",
      "Pesticide Paradox",
      "Testing Shows Presence of Defects"
    ],
    correctAnswer: "Pesticide Paradox"
  },
  {
    id: 20,
    question: "What is the main reason for following the Early Testing principle?",
    options: [
      "To complete testing faster",
      "To reduce the cost of fixing defects",
      "To make developers happy",
      "To use fewer resources"
    ],
    correctAnswer: "To reduce the cost of fixing defects"
  },
  {
    id: 21,
    question: "Which of the following scenarios best demonstrates the Context-Dependent principle?",
    options: [
      "Using the same test cases for all projects",
      "Testing a banking app with more security tests than a weather app",
      "Running all tests automatically",
      "Using only manual testing"
    ],
    correctAnswer: "Testing a banking app with more security tests than a weather app"
  },
  {
    id: 22,
    question: "How does the Early Testing principle relate to shift-left testing?",
    options: [
      "They are opposing concepts",
      "They are the same concept with different names",
      "Early Testing is part of shift-left testing",
      "They are unrelated testing approaches"
    ],
    correctAnswer: "They are the same concept with different names"
  },
  {
    id: 23,
    question: "What is the primary challenge that the Pesticide Paradox presents to automation testing?",
    options: [
      "Automated tests are too fast",
      "Automated tests become predictable and may miss new defects",
      "Automation is too expensive",
      "Automation requires too much maintenance"
    ],
    correctAnswer: "Automated tests become predictable and may miss new defects"
  },
  {
    id: 24,
    question: "According to the Testing Shows Presence of Defects principle, what should testers communicate to stakeholders?",
    options: [
      "Testing can prove the software is bug-free",
      "Testing reduces risks but cannot eliminate them completely",
      "All defects will be found eventually",
      "Testing is not necessary if developers are careful"
    ],
    correctAnswer: "Testing reduces risks but cannot eliminate them completely"
  },
  {
    id: 25,
    question: "How does the Defect Clustering principle help in test planning?",
    options: [
      "It suggests testing everything equally",
      "It helps identify high-risk areas that need more testing",
      "It proves testing is unnecessary",
      "It shows that all modules are equally likely to have defects"
    ],
    correctAnswer: "It helps identify high-risk areas that need more testing"
  },
  {
    id: 26,
    question: "What is the relationship between the Absence-of-Errors Fallacy and user satisfaction?",
    options: [
      "They are directly proportional",
      "They are inversely proportional",
      "There is no direct relationship; bug-free doesn't guarantee user satisfaction",
      "User satisfaction depends only on the number of bugs"
    ],
    correctAnswer: "There is no direct relationship; bug-free doesn't guarantee user satisfaction"
  },
  {
    id: 27,
    question: "Which testing principle most strongly supports the need for exploratory testing?",
    options: [
      "Early Testing",
      "Pesticide Paradox",
      "Testing Shows Presence of Defects",
      "Defect Clustering"
    ],
    correctAnswer: "Pesticide Paradox"
  },
  {
    id: 28,
    question: "How does the Context-Dependent principle affect test documentation requirements?",
    options: [
      "All projects need the same level of documentation",
      "Documentation is never needed",
      "Documentation level varies based on project context and regulations",
      "Only agile projects need documentation"
    ],
    correctAnswer: "Documentation level varies based on project context and regulations"
  },
  {
    id: 29,
    question: "What is the main implication of Exhaustive Testing being Impossible for test coverage goals?",
    options: [
      "100% coverage should always be the goal",
      "Coverage goals should be risk-based and practical",
      "Coverage doesn't matter",
      "Only unit tests need coverage goals"
    ],
    correctAnswer: "Coverage goals should be risk-based and practical"
  },
  {
    id: 30,
    question: "Which combination of testing principles is most relevant when planning regression testing?",
    options: [
      "Early Testing and Defect Clustering",
      "Pesticide Paradox and Testing Shows Presence of Defects",
      "Context Dependent and Absence-of-Errors Fallacy",
      "Exhaustive Testing and Early Testing"
    ],
    correctAnswer: "Pesticide Paradox and Testing Shows Presence of Defects"
  }
];