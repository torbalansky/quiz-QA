import React from 'react';
import { FiCode } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { AiOutlineFileDone } from 'react-icons/ai';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
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
    link: "quizstlc",
  },
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
]