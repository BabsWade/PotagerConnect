import React, { useState } from 'react';
import './login.css';
import { TextField, Button, FormControl,IconButton,InputAdornment, Typography} from '@mui/material';
import potagerconnect from '../../potagerconnect-bg.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); //Hook pour rediriger 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'zo@connect.com' && password === '1234') {
      // Si les identifiants sont corrects, redirige vers le tableau de bord
      navigate('/admin/dashbord');
    } else {
      // Gère le cas d'une connexion échouée (afficher un message d'erreur par exemple)
      alert('Identifiant ou mot de passe incorrect');
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={potagerconnect} alt='PotagerConnect' width='200px' height='200px'/>
        <Typography variant="h3" sx={{ fontWeight: 900,marginTop:{xs:"5%",sm:"5%", md:'5%'} }}>Connexion</Typography>
        <FormControl sx={{ m: 1, width: '100%' }} onSubmit={handleSubmit}>
          <TextField
            className="text-field"
            id="email"
            placeholder="Email"
            type="email"
            value={email}
            autoComplete="current-email"
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{marginBottom:'30px',
              '& label.Mui-focused': {
               color: '#00523D',
             },
             '& .MuiOutlinedInput-root': {
               '& fieldset': {
                 borderColor: '#00523D',
               },
               '&.Mui-focused fieldset': {
                 borderColor: '#00523D',
               },
             },}}
          />
          <TextField
            className="text-field"
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{marginBottom:'50px',
              '& label.Mui-focused': {
               color: '#00523D',
             },
             '& .MuiOutlinedInput-root': {
               '& fieldset': {
                 borderColor: '#00523D',
               },
               '&.Mui-focused fieldset': {
                 borderColor: '#00523D',
               },
             },}}
             
          />
          <Button
            className="button"
            variant="contained"
            type="submit"
            sx={{background:"#00523D",border:'1px solid #00523D','&:hover' : {
              backgroundColor: '#00523D',
            },}}
            onClick={handleSubmit}
          >
            
            Se connecter
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Login;
