import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Fd1 from './fd1.png';
import Fd2 from './fd2.png';
import Fd3 from './fd3.png';
 import Fd4 from './fd4.png';
  import Fd5 from './fd5.png'; 
 import Fd6 from './fd6.png';
  import Fd7 from './fd7.png';
  import Fd8 from './fd8.png';



const Food1Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const modalImages = [
    { url: Fd1 },
    { url: Fd2 },
    { url: Fd3 },
    { url: Fd4 },
    { url: Fd5 },
    { url: Fd6 },
    { url: Fd7 },
    { url: Fd8 },


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

export default Food1Modal;
