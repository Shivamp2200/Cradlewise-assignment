import React, { useEffect, useState } from 'react';
import ImageSlider from '../SliderComp/slider'; 

const MobileLanding = () => {
  const images = ['/PHONE.png', '/PHONE-2.png', '/PHONE-3.png', '/PHONE-4.png'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fadeIn');

  const content = [
    {
      title: "Stay connected",
      text: "Check in on your baby anywhere, any time from the livestream monitor and other stress-free features in our app."
    },
    {
      title: "Sleep insights",
      text: "Track, analyze, and understand your baby’s sleep patterns so that you can all rest better — and smarter."
    },
    {
      title: "Smart soothing",
      text: "The Smart soothing feature calms your baby before they even start crying."
    },
    {
      title: "Sounds for better sleep",
      text: "There are three types of noise and a range of nature sounds available to choose from."
    },
  ];

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setFadeClass('fadeIn');
    }, 2000);

    return () => {
      clearTimeout(fadeOutTimeout);
    };
  }, [currentIndex]);

  const handleSlideChange = (newIndex) => {
    setFadeClass('fadeOut');
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeClass('fadeIn');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#F6F4EE] flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[1030px] mx-auto">
        <div className="block md:hidden text-center mb-6">
          <div className="w-full max-w-[385px] mb-2 mx-auto">
            <p className="text-[#444540] text-[24px] font-medium leading-[28px]">
              Smart crib, Smarter app
            </p>
          </div>
          <div className="w-full max-w-[362px] mx-auto">
            <p className="text-[#929292] text-[16px] leading-[22px]">
              From night vision to sleep insights, <br /> the Cradlewise app is a game-changer.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-[1030px] mx-auto">
          <ImageSlider images={images} onSlideChange={handleSlideChange} />
        </div>

        <div className={`block md:hidden mt-4 stay-connected ${fadeClass} transition-opacity duration-500 ease-in-out text-center`}>
          <div className="w-full max-w-[320px] mx-auto">
            <p className="text-[#444540] text-[18px] font-semibold leading-[22px]">
              {content[currentIndex]?.title || "Loading..."}
            </p>
            <p className="font-light mt-2 text-sm text-[#929292] leading-[20px]">
              {content[currentIndex]?.text || "Loading..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLanding;
