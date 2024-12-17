import React, {useEffect} from 'react';

const Modal = ({ isOpen, onClose, modalData }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="h-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">

        <div className="relative bg-white py-4 px-4 max-w-lg w-full rounded-lg shadow-lg z-50">
        <button
          onClick={onClose}
          className="absolute mr-4 text-red-500 text-3xl hover:text-gray-800"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-center mb-1">{modalData.title}</h2>
        <div className="flex justify-center mb-1">
        <img
          src={modalData.image}
          alt={modalData.title}
          className="w-70 h-40 rounded-lg"
        />
        </div>
        <p className="text-md">{modalData.description}</p>
        <ul className="list-disc ml-2 text-sm">
          {modalData.phases.map((phase, index) => (
            <li key={index} className="mb-1">
              <strong>{phase.title}:</strong> {phase.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
