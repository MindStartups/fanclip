import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface ArrowButtonsProps {
 onBack: () => void; // Función que se llama cuando se hace clic en el botón de retroceso para usar en el componente padre
 onForward: () => void; // Función que se llama cuando se hace clic en el botón de avance para usar en el componente padre
}

export const ArrowButtons: React.FC<ArrowButtonsProps> = () => {
 return (
  <div style={{ display: 'flex', alignItems: 'center' }}>
   <IconButton aria-label="previous" sx={{ backgroundColor: 'black', margin: '5px' }}>
    <ArrowBackIosRoundedIcon sx={{ color: 'white' }} />
   </IconButton>
   <IconButton aria-label="next" sx={{ backgroundColor: 'black', margin: '5px' }}>
    <ArrowForwardIosRoundedIcon sx={{ color: 'white' }} />
   </IconButton>
  </div>
 );
};


