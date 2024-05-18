
const ImageModal = ({ src, alt, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center" onClick={onClose}>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-2 right-2 text-3xl text-white"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={src} alt={alt} className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default ImageModal;
