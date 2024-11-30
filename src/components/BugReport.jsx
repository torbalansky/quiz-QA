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
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="bg-white border flex justify-center gap-0 flex-row text-center items-center border-gray-300 p-1 m-1 rounded cursor-pointer shadow"
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: '350px',
        height: '120px',
        textAlign: 'center',
        fontSize: '14px',
        fontFamily: 'Poppins',
      }}
      onDrag={onDrag}
    >
      <div className="text-xl text-purple-900 mr-1">{card.icon}</div>
      <h4 className="font-bold text-md">{card.title}</h4>
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
      className={`border-dashed border-2 p-4 m-1 rounded h-20 w-[400px] flex items-center justify-center ${isOver ? 'bg-lime-100' : 'bg-gray-100'}`}
    >
      {currentCard ? (
        <div onClick={() => onReturn(currentCard, index)} className="cursor-pointer flex flex-row justify-center text-center">
          <div className="text-md text-purple-900 mr-2">{currentCard.icon}</div>
          <h4 className="text-[10px] mb-2">{currentCard.title}</h4>
          <p className="text-xs text-purple-500 ml-2">(Click to return)</p>
        </div>
      ) : (
        <p className="text-gray-400">Drop Here</p>
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
    setDropZones(Array(10).fill(null));
    setIsTaskCompleted(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Modal isOpen={isModalOpen} onClose={closeModal} modalData={bugReportModalDataR} />
      {!isTaskCompleted ? (
        <div className="p-6">
            <h1 className="text-center text-xl md:text-3xl font-bold mb-6 mt-4">Bug Report</h1>

            <h2 className="font-poppins p-4">
            Drag and drop the sections of the bug report into the correct order below. This task requires your attention to detail, so please take your time and ensure everything is placed in the right sequence. 
            If you're unsure about the correct order, don't worry! You can always refer to the modal for assistance by clicking the 'Need Help?' button. 
            Remember, accuracy is important, so be patient with yourself as you complete the task. Once you're confident with the arrangement, click the 'Submit Order' button to proceed.
            <button
                onClick={openModal}
                className="bg-blue-500 text-slate-100 py-1 px-2 m-2 rounded-md hover:bg-blue-700 transition-all duration-300"
            >
                Need Help?
            </button>
            </h2>

          <div className="flex">
            <div className="w-3/5 flex flex-wrap justify-start p-1 h-min">
              {draggableCards.map((card) => (
                <DraggableCard key={card.id} card={card} onDrag={handleDrag} />
              ))}
            </div>

            <div ref={dropZoneContainerRef} className="w-2/5 flex flex-wrap justify-start p-2 overflow-y-auto" style={{ maxHeight: '600px' }}>
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

          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={validateOrder}
              className="bg-slate-600 text-lime-200 p-2 rounded w-40 hover:bg-lime-300 hover:text-slate-500 transition-all duration-300"
            >
              Submit Order
            </button>
            <button
              onClick={resetGame}
              className="bg-violet-400 text-lime-200 p-2 rounded w-40 hover:bg-pink-400 transition-all duration-300"
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
