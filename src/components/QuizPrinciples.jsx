import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Modal from '../components/Modal';
import { QADataPrinciples, helpModalDataP } from '../Data/Data';
import { useNavigate } from 'react-router-dom';

const ItemType = {
  CARD: 'card',
};

const DraggableCard = ({ card }) => {
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
      className="bg-white border flex justify-center flex-col border-gray-300 p-2 m-1 rounded cursor-pointer shadow"
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: '200px',
        textAlign: 'center',
        fontSize: '12px',
        fontFamily: 'Poppins',
      }}
    >
      <h4 className="font-bold">{card.title}</h4>
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
      className={`border-dashed border-2 p-4 m-1 rounded h-20 flex items-center justify-center ${
        isOver ? 'bg-lime-100' : 'bg-gray-100'
      }`}
    >
      {currentCard ? (
        <div onClick={() => onReturn(currentCard, index)} className="cursor-pointer w-20 sm:w-40 flex flex-col justify-center">
          <h4 className="text-[8px] sm:text-xs font-poppins font-semibold mb-2">{currentCard.title}</h4>
          <p className="text-[8px] sm:text-xs text-purple-500">(Click to return)</p>
        </div>
      ) : (
        <p className="text-gray-400">Drop Here</p>
      )}
    </div>
  );
};

const TestingPrinciples = () => {
  const [draggableCards, setDraggableCards] = useState(QADataPrinciples);
  const [dropZones, setDropZones] = useState(Array(7).fill(null));
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const validateTask = () => {
    const selectedIds = dropZones.map((zone) => (zone ? zone.id : null));
    const correctIds = QADataPrinciples.filter((principle) => principle.correct).map((p) => p.id);

    if (JSON.stringify(selectedIds.sort()) === JSON.stringify(correctIds.sort())) {
      setIsTaskCompleted(true);
    } else {
      alert('Incorrect selection. Please try again.');
    }
  };

  const resetGame = () => {
    setDraggableCards(QADataPrinciples);
    setDropZones(Array(7).fill(null));
    setIsTaskCompleted(false);
  };

  const navigate = useNavigate();

  return (
    <DndProvider backend={HTML5Backend}>
      <Modal isOpen={isModalOpen} onClose={closeModal} modalData={helpModalDataP} />
      {!isTaskCompleted ? (
        <div className="p-6">
          <h1 className="text-center text-xl md:text-3xl font-bold mb-4 mt-2">7 Principles of Testing</h1>
          <h2 className="text-center mb-2 font-poppins">
            Drag and drop the <strong>true</strong> principles of testing into the drop zones.
            <button
              onClick={openModal}
              className="bg-blue-500 text-slate-100 py-1 px-2 m-2 rounded-md hover:bg-blue-700 transition-all duration-300"
            >
              Need Help?
            </button>
          </h2>

          <div className="flex">
            <div className="w-3/5 flex flex-wrap justify-center overflow-auto h-[60vh] p-1 border-r border-gray-300">
              {draggableCards.map((card) => (
                <DraggableCard key={card.id} card={card} />
              ))}
            </div>

            <div className="w-2/5 flex flex-wrap justify-center overflow-auto p-2 font-poppins">
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
              onClick={validateTask}
               className="bg-slate-600 text-lime-200 p-2 rounded w-40  hover:bg-lime-300 hover:text-slate-500 transition-all duration-300"
            >
              Submit
            </button>
            <button
              onClick={resetGame}
                className="bg-violet-400 text-lime-200 p-2 rounded w-40  hover:bg-pink-400 transition-all duration-300"
            >
              Start Over
            </button>
          </div>
        </div>
      ) : (
        <div className="p-2 text-center mt-4 relative flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">Great Job!</h2>
          <p className="text-md text-left p-10 mt-1 w-full font-poppins mb-1">
            You have successfully identified the 7 principles of testing! 🎉 These principles are the foundation for effective software testing and quality assurance. Here's a quick review of each one:
            <br />
            1. <strong>Testing shows the presence of defects</strong>: Testing helps identify bugs, but it cannot guarantee a bug-free product. It's important to understand that testing only finds defects—it doesn't prove the absence of them.
            <br />
            2. <strong>Exhaustive testing is impossible</strong>: It's not feasible to test every single scenario in a complex system. Instead, focus on risk-based testing and prioritize critical areas to improve efficiency and effectiveness.
            <br />
            3. <strong>Early testing saves cost and time</strong>: The earlier you find defects in the development process, the cheaper and easier they are to fix. Early testing helps save both time and money in the long run.
            <br />
            4. <strong>Defect clustering</strong>: Most defects are found in a small number of modules. By focusing on these defect-prone areas, you can increase the effectiveness of your testing.
            <br />
            5. <strong>Pesticide paradox</strong>: Running the same tests repeatedly will eventually stop finding new bugs. You need to continually update your test cases to catch new defects and ensure better coverage.
            <br />
            6. <strong>Testing depends on the context</strong>: Different applications and systems require different testing approaches. For example, a web app's testing will differ from that of a mobile app or a highly secure financial application.
            <br />
            7. <strong>Absence-of-errors fallacy</strong>: A bug-free product doesn't guarantee user satisfaction. The product must also meet user needs and business requirements—otherwise, it could still fail despite being technically bug-free.
          </p>

          <div className='flex lg:flex-row justify-center flex-col text-center gap-4 mb-2'>
          <button
              onClick={resetGame}
              className="bg-violet-400 text-lime-200 p-2 rounded w-40  hover:bg-pink-400 transition-all duration-300"
            >
              Go Back
            </button>
          <button
            onClick={() => navigate('/ageestimator')}
             className="bg-slate-600 text-lime-200 p-2 rounded w-40  hover:bg-lime-300 hover:text-slate-500 transition-all duration-300"
          >
             Next Task
          </button>
        </div>
        </div>
      )}
    </DndProvider>
  );
};

export default TestingPrinciples;
