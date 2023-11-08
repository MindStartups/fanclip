import React, { useState } from 'react';

interface StarRatingProps {
  totalStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (star: number) => {
    setRating(star);
  };

  const renderStars = () => {
    return Array.from({ length: totalStars }, (_, i) => {
      const starValue = i + 1;
      return (
        <span
          key={starValue}
          className={starValue <= rating ? 'star active' : 'star'}
          onClick={() => handleStarClick(starValue)}
        >
          &#9733; {/* Unicode character for a star */}
        </span>
      );
    });
  }

  return (
    <div>
      {renderStars()}
      <p>Calificación: {rating} de {totalStars}</p>
    </div>
  );
};

export default StarRating;
