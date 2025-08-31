import React, { useState, useRef, useEffect } from "react";

const Gallery = () => {
  // Галерея суреттері
  const images = [
    {
      id: 1,
      src: "/image/Beke1.jpg",
      alt: "Wedding Photo 1",
    },

    {
      id: 3,
      src: "/image/Beke3.jpg",
      alt: "Wedding Photo 3",
    },
    {
      id: 4,
      src: "/image/Beke4.jpg",
      alt: "Wedding Photo 4",
    },
    {
      id: 5,
      src: "/image/Beke5.jpg",
      alt: "Wedding Photo 4",
    },
    {
      id: 6,
      src: "/image/Beke6.jpg",
      alt: "Wedding Photo 4",
    },
    {
      id: 7,
      src: "/image/Beke7.jpg",
      alt: "Wedding Photo 4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  // Автоматты слайд ауысу (5 секунд)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 300); // 300ms fade эффекті
    }, 5000); // 5 секунд

    return () => clearInterval(interval);
  }, [images.length]);

  // Touch/Mouse events for sliding
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleEnd = () => {
    if (!isDragging) return;

    const diff = startX - currentX;
    const threshold = 50; // minimum distance to trigger slide

    if (diff > threshold) {
      // Slide to next
      nextSlide();
    } else if (diff < -threshold) {
      // Slide to previous
      prevSlide();
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 150);
  };

  const currentImage = images[currentIndex];
  const translateX = isDragging ? startX - currentX : 0;

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Слайдер контейнері */}
      <div
        ref={sliderRef}
        className="relative w-full h-screen cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateX(${-translateX}px)`,
          transition: isDragging ? "none" : "transform 0.3s ease-out",
        }}
      >
        {/* Ағымдағы сурет */}
        <div className="absolute inset-0">
          <div
            className={`w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{
              backgroundImage: `url(${currentImage.src})`,
            }}
          >
            {/* Gradient overlay жеңілірек */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
          </div>
        </div>
      </div>

      {/* Навигация нүктелері */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 150);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Жылжыту нұсқаулығы */}
    </div>
  );
};

export default Gallery;
