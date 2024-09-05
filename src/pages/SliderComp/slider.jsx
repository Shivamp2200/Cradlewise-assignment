
import { useState, useEffect } from 'react';

const ImageSlider = ({ images = [], onSlideChange, isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      if (onSlideChange) onSlideChange(newIndex); 
      return newIndex;
    });
  };

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); 

      return () => clearInterval(interval);
    }
  }, [images.length]);

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center py-8 md:py-20">
      <div className={`overflow-hidden rounded-xl ${isMobile ? 'w-full max-w-[300px]' : 'w-[242.31px] h-[500px]'}`}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${  
              index === currentIndex ? 'bg-black' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
