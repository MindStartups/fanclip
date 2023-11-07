import './input.style.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export async function Input() {
  return (
    <Box component="form" noValidate autoComplete="off" className="inputBox">
      <TextField
        id="outlined-basic"
        label="Correo electronico:"
        variant="outlined"
        className="inputTextField"
      />
      <button className="inputButton">Editar correo electrónico</button>
    </Box>
  );
}
