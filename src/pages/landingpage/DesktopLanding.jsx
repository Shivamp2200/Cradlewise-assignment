import React, { useEffect, useState } from 'react';
import ImageSlider from '../SliderComp/slider'; 

const DesktopLanding = () => {
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
      <div className="w-full max-w-[1030px] h-auto md:h-[703px] relative mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <div className="w-full max-w-[385px] h-[45px] mb-2 mx-auto">
            <p className="text-[#444540] font-custom text-[24px] md:text-[35px] font-medium leading-[28px] md:leading-[45px] text-center">
              Smart crib, Smarter app
            </p>
          </div>
          <div className="w-full max-w-[362px] mx-auto h-[64px]">
            <p className="text-[#929292] font text-[16px] md:text-[20px] font-light leading-[22px] md:leading-[32px] text-center">
              From night vision to sleep insights, <br /> the Cradlewise app is a game-changer.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-[1030px] h-[284px] md:h-[584px] mx-auto flex justify-center">
          <ImageSlider images={images} onSlideChange={handleSlideChange} />
        </div>

        <div
          className={`mt-4 md:absolute ${
            currentIndex <= 1
              ? 'md:top-[231px] md:left-[2px] lg:left-[-20px]'
              : 'md:bottom-[150px] md:right-[2px] lg:right-[-20px]'
          } stay-connected ${fadeClass} transition-opacity duration-500 ease-in-out text-center md:text-left`}
        >
          <div className="w-full max-w-[320px] h-auto md:h-[117px] mx-auto">
            <p className="text-[#444540] text-[18px] md:text-[20px] font font-semibold leading-[22px] md:leading-[28px]">
              {content[currentIndex]?.title || "Loading..."}
            </p>
            <p className="font font-light mt-2 text-sm md:text-[17px] text-[#929292] leading-[20px] md:leading-[28px]">
              {content[currentIndex]?.text || "Loading..."}
            </p>
          </div>

          <div className={`hidden md:block absolute ${
            currentIndex <= 1
              ? 'left-[320px] top-[50%] transform -translate-y-1/2'
              : 'right-[320px] top-[50%] transform -translate-y-1/2'
          } h-[4px] w-[120px] border-t-[3.8px] border-dashed border-[#444540]`}></div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLanding;
