import {
  AppBar,
  Toolbar,
  Button,
  Input,
  InputAdornment,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import { Search, ArrowDropDown } from '@mui/icons-material';
import { Logo } from '@fanclip/ui';
import { useState } from 'react';

type AppbarProps = {
  variant: 'primary' | 'dense' | 'landing';
};

const categories = [
  { id: 1, name: 'Actores' },
  { id: 2, name: 'Deportistas' },
  { id: 3, name: 'Comediantes' },
  { id: 4, name: 'Músicos' },
  { id: 5, name: 'Influencers' },
];

export const Appbar: React.FC<AppbarProps> = ({ variant }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeHandler = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#8036E0' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Logo style={{ marginLeft: '5px' }} />

          {variant === 'primary' ? (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                color="inherit"
                sx={{ textTransform: 'none' }}
                id="categories-button"
                onClick={clickHandler}
                aria-controls={open ? 'categories-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                endIcon={<ArrowDropDown />}
              >
                Categorías
              </Button>
              <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{
                  'aria-labelledby': 'categories-button',
                }}
                onClose={closeHandler}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} onClick={closeHandler}>
                    {category.name}
                  </MenuItem>
                ))}
              </Menu>
              <Button color="inherit" sx={{ textTransform: 'none' }}>
                ¿Cómo Funciona?
              </Button>
            </Box>
          ) : null}
        </Box>

        {variant === 'landing' ? (
          <Box>
            <Button
              color="inherit"
              sx={{
                textTransform: 'none',
                backgroundColor: '#201E23',
                color: '#BE8DFC',
                borderRadius: 5,
                py: '2px',
                px: '16px',
                ':hover': { backgroundColor: '#201E23' },
              }}
            >
              Explorar Celebridades
            </Button>
            <Button sx={{ textTransform: 'none', color: '#BFBAC4' }}>
              Contactar con ventas
            </Button>
          </Box>
        ) : null}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mr: '5px',
            gap: 5,
          }}
        >
          {variant !== 'landing' ? (
            <Input
              placeholder="Buscar.."
              disableUnderline
              sx={{
                backgroundColor: 'white',
                borderRadius: 5,
                width: 600,
                height: 38,
                px: 2,
              }}
              endAdornment={
                <InputAdornment position="end">
                  <Search sx={{ color: 'black' }} />
                </InputAdornment>
              }
            />
          ) : null}
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <Button
              color="inherit"
              sx={{
                textTransform: 'none',
                border: '2px solid #ffffff44',
                borderRadius: 2,
                ':hover': { backgroundColor: '#8036E0' },
              }}
            >
              Registro
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: 'none',
                border: '2px solid #ffffff44',
                borderRadius: 2,
                ':hover': { backgroundColor: '#8036E0' },
              }}
            >
              Ingresar
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
