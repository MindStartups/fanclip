import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface StarRatingProps {
  totalStars: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (event: React.SyntheticEvent, newValue: number | null) => {
    if (newValue !== null) {
      setRating(newValue);
    }
  };

  return (
    <Box>
      <Rating
        name="star-rating"
        value={rating}
        precision={1}
        onChange={handleStarClick}
      />
      <Typography>Calificación: {rating} de {totalStars}</Typography>
    </Box>
  );
};