import { Typography, Input, Button, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface FormType {
  inputEmail: string;
  inputPassword: string;
}

const initialState: FormType = {
  inputEmail: '',
  inputPassword: '',
};

const validate = (form: FormType) => {
  const errors: FormType = {
    inputEmail: '',
    inputPassword: '',
  };

  const regexEmail = /^[a-zA-Z0-9._%+-ñÑ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!form.inputEmail) {
    errors.inputEmail = 'Debe ingresar su email';
  } else if (!regexEmail.test(form.inputEmail)) {
    errors.inputEmail = 'Debe ingresar un email válido';
  }

  const regexPassword = /^(?=.*[A-ZÑÑ])(?=.*[a-zññ])(?=.*\d).{8,}$/;

  if (!form.inputPassword) {
    errors.inputPassword = 'Debe ingresar su contraseña';
  } else if (!regexPassword.test(form.inputPassword)) {
    errors.inputPassword =
      'La contraseña debe contener, por lo menos, 8 carácteres, entre ellos: una mayúscula, una minúscula y un número';
  }

  return errors;
};

export const LoginCelebrity: React.FC = () => {
  const [form, setForm] = useState<FormType>(initialState);
  const [errors, setErrors] = useState<FormType>(initialState);
  const [focus, setFocus] = useState<FormType>(initialState);
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const changeFormHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const property = e.target.name;

    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value }));
  };

  const focusHandler = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const name = e.target.name;

    setFocus({ ...focus, [name]: true });
  };

  useEffect(() => {
    setErrors(validate(form));
  }, [form]);

  return (
    <Box component="form">
      <Typography
        component="h2"
        fontSize={26}
        color="#F2F1F3"
        marginBottom="10px"
        fontWeight="500"
      >
        Iniciar Sesión
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: errors.inputEmail && focus.inputEmail ? '64px' : '16px',
          position: 'relative',
        }}
      >
        <label
          htmlFor="email-input"
          style={{ color: '#F2F1F3', fontSize: '18px', marginBottom: '4px' }}
        >
          Correo electrónico:
        </label>
        <Input
          id="email-input"
          name="inputEmail"
          type="email"
          placeholder="fanclip@example.com"
          value={form.inputEmail}
          onChange={changeFormHandler}
          onFocus={focusHandler}
          sx={{
            backgroundColor: '#201E23',
            border: '1px solid #817A8A',
            borderRadius: '10px',
            p: '10px',
            color: '#F2F1F3',
            width: '500px',
            fontSize: '18px',
          }}
          disableUnderline
        />
        {errors.inputEmail && focus.inputEmail && (
          <Typography
            sx={{
              position: 'absolute',
              color: 'red',
              top: '110%',
              width: '100%',
            }}
          >
            {errors.inputEmail}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          marginBottom:
            errors.inputPassword && focus.inputPassword ? '82px' : '16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '4px',
          }}
        >
          <label
            htmlFor="password-input"
            style={{ color: '#F2F1F3', fontSize: '18px' }}
          >
            Contraseña:
          </label>
          <Typography
            component="span"
            sx={{ color: '#BE8DFC', fontSize: '14px' }}
          >
            ¿Olvidaste tu contraseña?
          </Typography>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Input
            id="password-input"
            name="inputPassword"
            type={viewPassword ? 'text' : 'password'}
            placeholder="****************"
            value={form.inputPassword}
            onChange={changeFormHandler}
            onFocus={focusHandler}
            sx={{
              backgroundColor: '#201E23',
              border: '1px solid #817A8A',
              borderRadius: '10px',
              p: '10px',
              width: '500px',
              fontSize: '18px',
              color: '#F2F1F3',
            }}
            disableUnderline
          />
          {viewPassword ? (
            <VisibilityOff
              sx={{
                position: 'absolute',
                top: '50%',
                right: '16px',
                transform: 'translateY(-50%)',
                color: '#F2F1F3',
                cursor: 'pointer',
              }}
              onClick={() => setViewPassword(false)}
            />
          ) : (
            <Visibility
              sx={{
                position: 'absolute',
                top: '50%',
                right: '16px',
                transform: 'translateY(-50%)',
                color: '#F2F1F3',
                cursor: 'pointer',
              }}
              onClick={() => setViewPassword(true)}
            />
          )}
        </Box>
        {errors.inputPassword && focus.inputPassword && (
          <Typography
            sx={{
              position: 'absolute',
              color: 'red',
              top: '110%',
              width: '100%',
            }}
          >
            {errors.inputPassword}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            display: 'flex',
            color: '#BFBAC4',
            gap: '5px',
            alignItems: 'center',
          }}
          component="p"
        >
          Al continuar, acepta los{' '}
          <Typography
            component="span"
            sx={{ fontWeight: '600', textDecoration: 'underline' }}
          >
            Términos y Condiciones de FanClip
          </Typography>
        </Typography>
        <Typography
          sx={{
            display: 'flex',
            color: '#BFBAC4',
            gap: '5px',
            alignItems: 'center',
          }}
          component="p"
        >
          Incluidos las{' '}
          <Typography
            component="span"
            sx={{ fontWeight: '600', textDecoration: 'underline' }}
          >
            Políticas de Privacidad
          </Typography>{' '}
          y{' '}
          <Typography
            component="span"
            sx={{ fontWeight: '600', textDecoration: 'underline' }}
          >
            Políticas de Comisiones
          </Typography>
        </Typography>
      </Box>

      <Button
        sx={{
          backgroundColor: '#8036E0',
          width: '100%',
          borderRadius: 7,
          color: '#F2F1F3',
          py: '16px',
          ':hover': {
            backgroundColor: '#8036E0',
          },
          marginTop: '24px',
          ':disabled': {
            backgroundColor: 'gray',
            color: 'white',
            cursor: 'not-allowed',
          },
        }}
        disabled={errors.inputEmail || errors.inputPassword ? true : false}
      >
        Continuar
      </Button>
      <Typography
        sx={{
          display: 'flex',
          gap: '5px',
          color: '#BFBAC4',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginTop: '16px',
        }}
        component="span"
      >
        ¿No tienes una cuenta aún?{' '}
        <Typography sx={{ fontWeight: '600', textDecoration: 'underline' }}>
          Registrarse
        </Typography>
      </Typography>
    </Box>
  );
};
