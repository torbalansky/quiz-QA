import React, { useState, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Modal from './Modal';
import { bugReportModalDataR } from '../Data/Data';
import { useNavigate } from 'react-router-dom';
import { VscDebugAltSmall } from "react-icons/vsc";

const ItemType = {
  CARD: 'card',
};

const DraggableCard = ({ card, onDrag }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.CARD,
    item: () => {
      const dropZoneContainer = document.querySelector('.dropzone-container');
      if (dropZoneContainer) {
        dropZoneContainer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      return { id: card.id };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`
        bg-white border flex items-center gap-3 p-4 m-2 rounded-lg
        cursor-pointer shadow-md transition-all duration-300
        hover:shadow-lg hover:border-blue-400
        ${isDragging ? 'opacity-50' : 'opacity-100'}
      `}
      style={{
        width: '480px',
        minHeight: '80px',
      }}
      onDrag={onDrag}
    >
      <div className="text-2xl text-blue-600">{card.icon}</div>
      <h4 className="font-medium text-gray-700 text-sm leading-tight">{card.title}</h4>
    </div>
  );
};

const DropZone = ({ index, onDrop, currentCard, onReturn }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.CARD,
    drop: (item) => onDrop(item, index),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`
        border-2 rounded-lg p-4 m-2 transition-all duration-300
        flex items-center justify-center min-h-[80px] w-[420px]
        ${isOver 
          ? 'border-blue-400 bg-blue-50' 
          : 'border-dashed border-gray-300 bg-gray-50'}
        ${currentCard ? 'border-solid' : 'border-dashed'}
      `}
    >
      {currentCard ? (
        <div 
          onClick={() => onReturn(currentCard, index)} 
          className="flex items-center gap-3 cursor-pointer group w-full"
        >
          <div className="text-xl text-blue-600">{currentCard.icon}</div>
          <div className="flex-1">
            <h4 className="text-sm text-gray-700">{currentCard.title}</h4>
            <p className="text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
              Click to remove
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-400 text-sm">Drop card here</p>
      )}
    </div>
  );
};

const BugReport = () => {
  const [draggableCards, setDraggableCards] = useState([
    { id: 'title', title: 'Title: Classify 125 (out of typical range) as Elder', icon: <VscDebugAltSmall /> },
    { id: 'screenshots', title: 'Screenshots/Attachments:', icon: <VscDebugAltSmall /> },
    { id: 'priority', title: 'Priority: High', icon: <VscDebugAltSmall /> },
    { id: 'bugID', title: 'Bug ID: AE-001', icon: <VscDebugAltSmall /> },
    { id: 'severity', title: 'Severity: Moderate', icon: <VscDebugAltSmall /> },
    { id: 'reporter', title: 'Reporter: QA Engineer', icon: <VscDebugAltSmall /> },
    { id: 'date', title: 'Submit date: 01.01.2025', icon: <VscDebugAltSmall /> },
    { id: 'Notes', title: 'Additional Notes: notes', icon: <VscDebugAltSmall /> },
    { id: 'url', title: 'https//www.ageestimator.com', icon: <VscDebugAltSmall /> },
    { id: 'assigned', title: 'Assigned to: Dev team', icon: <VscDebugAltSmall /> },
    { id: 'description', title: 'Description: According to the documentation, the estimator is expected to classify values greater than 120 as "out of typical range". However, the estimator returns "Elder" for values above 120', icon: <VscDebugAltSmall /> },
    { id: 'steps', title: 'Steps to Reproduce: 1. Open the app at url: 2, Enter age 125 and 3. click Determine', icon: <VscDebugAltSmall /> },
    { id: 'expected', title: 'Expected: Out of typical range', icon: <VscDebugAltSmall /> },
    { id: 'environment', title: 'Environment: Windows 11, Chrome 130', icon: <VscDebugAltSmall /> },
    { id: 'actual', title: 'Actual: Elder', icon: <VscDebugAltSmall /> },
  ]);

  const [dropZones, setDropZones] = useState(Array(15).fill(null));
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dropZoneContainerRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDrop = (item, zoneIndex) => {
    if (dropZones[zoneIndex]) return;

    const card = draggableCards.find((card) => card.id === item.id);

    setDropZones((zones) => {
      const newZones = [...zones];
      newZones[zoneIndex] = card;
      return newZones;
    });
    setDraggableCards((cards) => cards.filter((card) => card.id !== item.id));
  };

  const handleReturn = (card, zoneIndex) => {
    setDraggableCards((cards) => [...cards, card]);
    setDropZones((zones) => {
      const newZones = [...zones];
      newZones[zoneIndex] = null;
      return newZones;
    });
  };

  const handleDrag = (e) => {
    const container = dropZoneContainerRef.current;
    if (container) {
      const threshold = 200;
      const scrollHeight = container.scrollHeight;
      const scrollTop = container.scrollTop;
      const clientHeight = container.clientHeight;
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

      if (distanceFromBottom < threshold) {
        container.scrollBy(0, 50);
      }
    }
  };

  const validateOrder = () => {
    const currentOrder = dropZones.map((zone) => (zone ? zone.id : null)).join(',');
    const correctOrder = [
        'bugID',
        'title',
        'reporter',
        'date',
        'url',
        'environment',
        'description',
        'steps',
        'expected',
        'actual',
        'priority',
        'severity',
        'assigned',
        'screenshots',
        'Notes'
    ].join(',');

    if (currentOrder === correctOrder) {
      setIsTaskCompleted(true);
    } else {
      alert('Incorrect Order. Please Try Again.');
    }
  };

  const resetGame = () => {
    setDraggableCards([
      { id: 'bugID', title: 'Bug ID: AE-001', icon: <VscDebugAltSmall /> },
      { id: 'title', title: 'Title: Classify 125 (out of typical range) as Elder', icon: <VscDebugAltSmall /> },
      { id: 'reporter', title: 'Reporter: QA Engineer', icon: <VscDebugAltSmall /> },
      { id: 'date', title: 'Submit date: 01.01.2025', icon: <VscDebugAltSmall /> },
      { id: 'url', title: 'https//www.ageestimator.com', icon: <VscDebugAltSmall /> },
      { id: 'environment', title: 'Environment: Windows 11, Chrome 130', icon: <VscDebugAltSmall /> },
      { id: 'description', title: 'Description: According to the documentation, the estimator is expected to classify values greater than 120 as "out of typical range". However, the estimator returns "Elder" for values above 120', icon: <VscDebugAltSmall /> },
      { id: 'steps', title: 'Steps to Reproduce: 1. Open the app at url: 2, Enter age 125 and 3. click Determine', icon: <VscDebugAltSmall /> },
      { id: 'expected', title: 'Expected: Out of typical range', icon: <VscDebugAltSmall /> },
      { id: 'actual', title: 'Actual: Elder', icon: <VscDebugAltSmall /> },
      { id: 'priority', title: 'Priority: High', icon: <VscDebugAltSmall /> },
      { id: 'severity', title: 'Severity: Moderate', icon: <VscDebugAltSmall /> },
      { id: 'assigned', title: 'Assigned to: Dev team', icon: <VscDebugAltSmall /> },
      { id: 'screenshots', title: 'Screenshots/Attachments:', icon: <VscDebugAltSmall /> },
      { id: 'Notes', title: 'Additional Notes: notes', icon: <VscDebugAltSmall /> },
    ]);
    setDropZones(Array(15).fill(null));
    setIsTaskCompleted(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Modal isOpen={isModalOpen} onClose={closeModal} modalData={bugReportModalDataR} />
      {!isTaskCompleted ? (
        <div className="p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Bug Report Exercise</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4">
                Arrange the bug report sections in the correct order by dragging and dropping them.
              </p>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg
                          hover:bg-blue-600 transition-colors"
              >
                <span>Need Help?</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex-1 bg-gray-50 p-4 rounded-xl">
              <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">Available Sections</h2>
              <div className="flex flex-wrap justify-center">
                {draggableCards.map((card) => (
                  <DraggableCard key={card.id} card={card} onDrag={handleDrag} />
                ))}
              </div>
            </div>

            <div className="w-[460px] bg-white p-4 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">Arrange Here</h2>
              <div 
                ref={dropZoneContainerRef} 
                className="dropzone-container overflow-y-auto max-h-[600px] pr-2 space-y-2"
              >
                {dropZones.map((zone, index) => (
                  <DropZone
                    key={index}
                    index={index}
                    onDrop={handleDrop}
                    currentCard={zone}
                    onReturn={handleReturn}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={validateOrder}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium
                        hover:bg-green-600 transition-colors"
            >
              Submit Order
            </button>
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg font-medium
                        hover:bg-gray-600 transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Great Job!</h2>
          <p className="text-md text-left p-10 mt-1 w-full font-poppins mb-1">
                You've successfully arranged the bug report! 📝
                <br /><br />
                <strong>Quick recap of the Bug Report essentials</strong>: A bug report is a formal document detailing a defect in the software. It provides developers and testers with the necessary information to identify, replicate, and fix the issue. Bug reports are crucial for maintaining software quality.
                <br /><br />
                <strong>Key Bug Report Attributes:</strong>
                <ul className="list-disc ml-6">
                    <li><strong>Bug ID:</strong> A unique identifier for tracking the bug.</li>
                    <li><strong>Title:</strong> A concise summary of the issue.</li>
                    <li><strong>Reporter:</strong> The individual who discovered or reported the bug.</li>
                    <li><strong>Submit Date:</strong> The date when the bug was reported.</li>
                    <li><strong>URL:</strong> A link to the page or section where the bug occurred, particularly useful for web-based applications.</li>
                    <li><strong>Environment:</strong> Information about the operating system, browser, or device where the bug was encountered.</li>
                    <li><strong>Description:</strong> A detailed explanation of the bug, including its symptoms and impact.</li>
                    <li><strong>Steps to Reproduce:</strong> Clear instructions to replicate the issue. This helps the development team observe and diagnose the problem.</li>
                    <li><strong>Expected:</strong> The correct behavior or outcome that should occur.</li>
                    <li><strong>Actual:</strong> The observed behavior or result, highlighting the issue.</li>
                    <li><strong>Priority:</strong> How urgently the bug needs to be fixed.</li>
                    <li><strong>Severity:</strong> The extent of the bug's impact on the application.</li>
                    <li><strong>Assigned To:</strong> The developer or team responsible for resolving the bug.</li>
                    <li><strong>Screenshots/Attachments:</strong> Images, videos, or other files to provide additional context and make the issue easier to understand.</li>
                    <li><strong>Additional Notes:</strong> Extra information that may assist in understanding or resolving the issue.</li>
                </ul>
                <br />
                <strong>Priority Levels:</strong>
                Priority refers to how urgently a bug needs to be fixed. Here are the common modes:
                <ul className="list-disc ml-6">
                    <li><strong>High Priority:</strong> The bug needs immediate attention because it affects critical functionality or a large number of users. Example: A login page is inaccessible.</li>
                    <li><strong>Medium Priority:</strong> The bug should be fixed soon but does not block core functionality. Example: A feature-specific bug that affects only certain user actions.</li>
                    <li><strong>Low Priority:</strong> The bug can be resolved later as it has minimal impact. Example: Minor typos or cosmetic issues.</li>
                </ul>
                <br />
                <strong>Severity Levels:</strong>
                Severity refers to the impact of the bug on the system. Here are the common modes:
                <ul className="list-disc ml-6">
                    <li><strong>Critical Severity:</strong> The bug causes a complete failure of the system or application. Example: A crash that prevents the application from working entirely.</li>
                    <li><strong>Major Severity:</strong> The bug significantly affects the functionality but does not crash the system. Example: A feature is broken, but the system is still usable.</li>
                    <li><strong>Moderate Severity:</strong> The bug affects functionality in a less critical way. Example: A specific action does not work, but there is an alternative workaround.</li>
                    <li><strong>Minor Severity:</strong> The bug causes small issues, such as layout glitches or low-impact errors. Example: Misaligned text or images.</li>
                    <li><strong>Trivial Severity:</strong> The bug has no significant impact and is mostly cosmetic. Example: An incorrect icon or a spelling error.</li>
                </ul>
                <br />
                <strong>Tools for Tracking Bugs:</strong> Bug tracking tools streamline the reporting and management of defects. Popular tools include <strong>Jira</strong>, <strong>Bugzilla</strong>, <strong>Trello</strong>, and <strong>Asana</strong>. These platforms allow teams to organize and prioritize bugs efficiently, ensuring timely fixes and communication among team members.
                <br /><br />
                Great work! Now you can proceed to write bug reports effectively, classify their priority and severity, and utilize bug tracking tools to collaborate with your team.
                </p>

          <div className="mt-6 flex justify-center gap-4">
            <button onClick={resetGame} className="bg-violet-400 text-lime-200 p-2 rounded w-40">
              Go Back
            </button>
            <button onClick={() => navigate('/ageestimatorv')} className="bg-slate-600 text-lime-200 p-2 rounded w-40">
              Next Task
            </button>
          </div>
        </div>
      )}
    </DndProvider>
  );
};

export default BugReport;
