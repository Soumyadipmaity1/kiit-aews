import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Plantation1 from './plantation1.png';
import Plantation2 from './plantation2.png';
import Plantation3 from './plantation3.png';


const PlantationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const modalImages = [
    { url: Plantation1 },
    { url: Plantation2 },
    { url: Plantation3 },
 


  ];

  return (
    <div className="fixed inset-0 bg-black bg-opa flex justify-center items-center z-50">
      <div className="bg-transparent rounded-lg lg:p-5 p-2 2lg:max-w-6xl lg:max-w-5xl sm:max-w-2xl max-w-lg  w-full overflow-auto">
        <button onClick={onClose} className="absolute xl:top-14 2lg:top-16  xl:right-28 sm:right-8 sm:top-8 top-8 right-10 text-red-500 font-bold text-sm hover:text-white">
        <FontAwesomeIcon icon={faTimes} size="3x" />
        </button>
        <div className="grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4  gap-1">
          {modalImages.map((src, index) => (
            <img key={index} src={src.url} alt={`Image ${index}`} className="w-full h-auto rounded" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantationModal;
