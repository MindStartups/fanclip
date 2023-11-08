import Image from 'next/image';
import { Typography, Box } from '@mui/material';

import actorsImg from '../../images/categories/image 6.svg';
import athletesImg from '../../images/categories/image 7.svg';
import comediansImg from '../../images/categories/image 8.svg';
import musiciansImg from '../../images/categories/image 9.svg';
import influencersImg from '../../images/categories/image 10.svg';

const categories = [
  { id: 1, name: 'actors', title: 'Actores', img: actorsImg },
  { id: 2, name: 'athletes', title: 'Deportistas', img: athletesImg },
  { id: 3, name: 'comedians', title: 'Comediantes', img: comediansImg },
  { id: 4, name: 'musicians', title: 'Músicos', img: musiciansImg },
  { id: 5, name: 'influencers', title: 'Influencers', img: influencersImg },
];

type ItemSlideProps = {
  variant: 'actors' | 'athletes' | 'comedians' | 'musicians' | 'influencers';
};

export const ItemSlide: React.FC<ItemSlideProps> = ({ variant }) => {
  const category = categories.find((category) => category.name === variant);

  return (
    <Box>
      {category ? (
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',

            gap: '5px',
            height: '100%',
          }}
        >
          <Image
            src={category.img}
            alt={`${category.name} image`}
            style={{ borderRadius: '100%' }}
            priority
          />
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              sx={{ color: 'white' }}
              fontSize={14}
              textAlign="center"
            >
              {category.title}
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '1px',
                backgroundColor: 'white',
                bottom: '3px',
              }}
            />
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
