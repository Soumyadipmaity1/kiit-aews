import React, { useState } from 'react';
import ImageModal from './popupImage';
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
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",

    ];
  
    return (
      <div className="App flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
        <h1 className="text-4xl p-10 font-bold mb-4">Photo Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index}`}
              className="cursor-pointer transition transform hover:scale-105"
              onClick={() => handleImageClick(src)}
            />
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