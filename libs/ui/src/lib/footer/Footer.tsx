
 
import { Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import {IconContainer} from './IconContainer';


export function Footer() {
  return (
    <Box
      bgcolor="black"
      color="white"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
    >
      <div>
        <Typography variant="body2">
        © {new Date().getFullYear()} fanclip
        </Typography>
      </div>
      <div>
        <Typography variant="body2" align="center" >
        Unete a nuestra lista de espera.<br></br>
        Seras el primero en conocer alas celebridades<br></br>
        y acceder con listas ofertas de lanzamiento
        </Typography>
        <br></br>
        <Typography  variant="body2"  align="right"  style={{ textDecoration: 'underline' }}>
                   Unete como creador de videos
         </Typography>
         <br></br>
         <Typography variant="body2" align="center">
                 FAQ     Terminos y Condiciones    Privacidad 
        </Typography>    
      </div>
      <div>
        <Typography variant="body2" align="right">
               <IconContainer/>
        </Typography>
      </div>
    </Box>
  );
}





