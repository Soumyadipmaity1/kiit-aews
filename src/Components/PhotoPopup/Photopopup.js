import React, { useState } from 'react';
import ImageModal from './popupImage';
import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p3.png';

const PhotoPopUpImages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const images = [
    p1,
    p2,
    p3,
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-4xl p-10 font-bold mb-4">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((src, index) => (
          <div key={index} className="relative border-4 border-[#262626] rounded-lg bg-black cursor-pointer overflow-hidden group">
            <img
              src={src}
              alt={`Thumbnail ${index}`}
              className="w-96 h-64 bg-image rounded-lg  object-cover transform bg-black border- border-black transition-transform duration-300 group-hover:scale-105"
              onClick={() => handleImageClick(src)}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black flex items-end justify-start px-5 py-3">
              <div className="text-white font-bold text-2xl">Featured</div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ImageModal
          src={currentImage}
          alt="Enlarged Image"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PhotoPopUpImages;
