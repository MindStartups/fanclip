import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

export const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Cambiar esto al número total de diapositivas

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  return (
    <div>
      <Typography variant="h3">Slide {currentSlide + 1}</Typography>

      <Button onClick={handlePrevSlide} disabled={currentSlide === 0}>
        Componente arrows izquierda
      </Button>
      <Button onClick={handleNextSlide} disabled={currentSlide === totalSlides - 1}>
      Componente arrows derecha
      </Button>
    </div>
  );
};


