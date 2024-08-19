import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import photo from '../../babacar.jpeg';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Dashboard = () => {
    const theme = useTheme();
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);};
      //data search
      // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },]
       
    //data potager  
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'nomPotager', headerName: 'Nom Potager', width: 90 },
        { field: 'telephone', headerName: 'Télephone', width: 100 },
        {
          field: 'ville',
          headerName: 'Ville',
          type: 'string',
          with: 90,
        },
        {
          field: 'adresse',
          headerName: 'Adresse',
          description: 'Adresse du potager.',
          sortable: false,
          with: 100,
          valueGetter: (value, row) => `${row.telephone || ''} ${row.nomPotager || ''}`,
        },
          {
            field: 'nomComplet',
            headerName: 'Nom Complet',
            description: 'Nom Complet du Proprietaire.',
            sortable: false,
            with: '100%',
            valueGetter: (value, row) => `${row.prenomProprietaire || ''} ${row.nomProprietaire|| ''}`,
          }
      ];
      
      const rows = [
        { id: 1, nomPotager: 'Snow', telephone: 'Jon', ville: 35, adresse:'10eme Riaom' ,nomProprietaire:'Diop',prenomProprietaire:'Babacar'},
        { id: 2, nomPotager: 'Lannister', telephone: 'Cersei', ville: 42 ,adresse:'10eme Riaom', nomProprietaire:'Diop',prenomProprietaire:'Babacar'},
        { id: 3, nomPotager: 'Lannister', telephone: 'Jaime', ville: 45,adresse:'10eme Riaom', nomProprietaire:'Diop',prenomProprietaire:'Babacar' },
        { id: 4, nomPotager: 'Stark', telephone: 'Arya', ville: 16, adresse:'10eme Riaom',nomProprietaire:'Diop',prenomProprietaire:'Babacar' },
        { id: 5, nomPotager: 'Targaryen', telephone: 'Daenerys', ville: null,adresse:'10eme Riaom', nomProprietaire:'Diop',prenomProprietaire:'Babacar' },
        { id: 6, nomPotager: 'Melisandre', telephone: null, ville: 150,adresse:'10eme Riaom', nomProprietaire:'Diop',prenomProprietaire:'Babacar' },
        { id: 7, nomPotager: 'Clifford', telephone: 'Ferrara', ville: 44,adresse:'10eme Riaom', nomProprietaire:'Diop',prenomProprietaire:'Babacar' },
        { id: 8, nomPotager: 'Frances', telephone: 'Rossini', ville: 36,adresse:'10eme Riaom', nomProprietaire:'Diop',prenomProprietaire:'Babacar' },
        { id: 9, nomPotager: 'Roxie', telephone: 'Harvey', ville: 65,adresse:'10eme Riaom',nomProprietaire:'Diop',prenomProprietaire:'Babacar' },
      ];
     
    // Fonction de déconnexion
    const navigate = useNavigate();
    const handleLogout = () => {
        // Ici, vous effacez les informations de session, comme les tokens
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        sessionStorage.clear();
        navigate('/admin/login');
    };
          
    // Dialogues
    const [openDelete, setOpenDelete] = React.useState(false);
    const [openAdd, setOpenAdd] = React.useState(false);

    //Boite de dialog Suppression
    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };
    //Dialog add potager

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };

  return (
    <div className='dashboard'>
        <div className='menu' style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 className='logo'>Potager <br/>Connect</h2>
        <div sx={{ with: 150, maxWidth: '100%' }}>
            <MenuList>
                <MenuItem>
                    <ListItemIcon>
                        <PersonOutlineIcon sx={{color:'#fff'}} fontSize="small" />
                    </ListItemIcon>
                    <ListItemText sx={{color:'#fff'}}>Dashboard</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <PersonOutlineIcon sx={{color:'#fff'}}fontSize="small" />
                    </ListItemIcon>
                    <ListItemText sx={{color:'#fff', fontSize:'34px'}}>Potager</ListItemText>
                </MenuItem>
                
            </MenuList>
        </div>
        <Box sx={{width:'140px', borderRadius:'15px', backgroundColor:'#F1FFFB', opacity:80, marginTop:'auto', height:'150px', padding:'10px'}}>
            <Stack direction="row" spacing={2} sx={{justifyContent:'center',marginTop:'5px'}}>
                <Avatar alt="photo admin" src={photo} />
            </Stack>
            <Typography> Babacar Wade</Typography>
            <Typography sx={{fontSize:'14px'}}> Administrateur</Typography>
            <Button variant="contained"  endIcon={<LogoutIcon />} style={{
                    backgroundColor: '#00523D', 
                    color: 'white',              
                    width: '125px',   
                    marginTop:'20px'           
                }} onClick={handleLogout}>

                logout
            </Button>
        </Box>
        </div>
        
        <div className='dashboard-container'>
            <div className='head'>
                <h2>Tableau de Bord</h2>
                <Autocomplete
                    disablePortal
                    idPotager="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 250,marginLeft: 'auto', borderColor:'#00523D','& .MuiOutlinedInput-root': {
               '& fieldset': {
                 borderColor: '#00523D',
               },
               '&.Mui-focused fieldset': {
                 borderColor: '#00523D',
               },
             } }}
                    renderInput={(params) => <TextField {...params } label="Recherche" />}
                />
            </div>
            <div className='card'>
                <Card sx={{ display: 'flex', background:'#00523D', marginRight:{xs:"5px",sm:"10px", md:'70px'}, height:'150px'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width:{xs:"100%",sm:"115px", md:'350px'} }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6" color={'white'}>
                           Client
                        </Typography>
                        <Typography variant="h4" color="#fff" component="div">
                            100
                        </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{background:'#014130', color:'#fff', padding:'10px', width:{xs:"100%",sm:"60px", md:'100px'}, }}>
                        <PersonOutlineIcon  sx={{ fontSize: 70, marginTop:'20px'}}/>
                    </Box>
                </Card>

                <Card sx={{ display: 'flex', background:'#00523D',marginRight:{xs:"5px",sm:"10px", md:'70px'}}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width:{xs:"100%",sm:"115px", md:'350px'} }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6" color={'white'}>
                           Potager
                        </Typography>
                        <Typography variant="h4" color="#fff" component="div">
                            50
                        </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{background:'#014130', justifyContent:'center',alignItems:'center',color:'#fff', padding:'10px',width:{xs:"100%",sm:"60px", md:'100px'}}}>
                        <PersonOutlineIcon  sx={{ fontSize: 70, marginTop:'20px' }}/>
                    </Box>
                </Card>

                <Card sx={{ display: 'flex', background:'#00523D'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width:{xs:"100%",sm:"115px", md:'350px'} }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6" color={'white'}>
                           Admin
                        </Typography>
                        <Typography variant="h4" color="#fff" component="div">
                            3
                        </Typography>
                        </CardContent>
                    </Box>
                    <Box sx={{background:'#014130', justifyContent:'center',alignItems:'center',color:'#fff', padding:'10px',width:{xs:"100%",sm:"60px", md:'100px'}}}>
                        <PersonOutlineIcon  sx={{ fontSize: 70, marginTop:'20px' }}/>
                    </Box>
                </Card>
            </div>

            <div className='data'>
            <div style={{display:'flex',marginTop:'20px', }}>
                <Typography sx={{ fontSize:'28px', fontWeight:'500'}}>Potagers</Typography>
                
                <React.Fragment>
                    <Button variant="outlined" onClick={handleClickOpenDelete} sx={{marginLeft:'auto',borderColor:'#00523D','&:hover': {
                    backgroundColor: '#00523D',
                    borderColor: '#00432E', // Couleur de la bordure lors du survol
                    color: '#FFFFFF', // Couleur du texte lors du survol
                    }, color:'#00523D'}} startIcon={<DeleteIcon />}>
                                Supprimer
                    </Button>
                    <Dialog
                        open={openDelete}
                        onClose={handleCloseDelete}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"Suppression d'un potager"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Voulez-vous vraiment supprimer ce potager 
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleCloseDelete} sx={{marginLeft:'auto',borderColor:'#00523D','&:hover': {
                            backgroundColor: '#00523D',
                            borderColor: '#00432E', // Couleur de la bordure lors du survol
                            color: '#FFFFFF', // Couleur du texte lors du survol
                            }, color:'#00523D'}}>Annuler</Button>
                        <Button onClick={handleCloseDelete} sx={{background:'red',color:'white','&:hover':{background:'red',color:'white'}}} autoFocus>
                            Oui
                        </Button>
                        </DialogActions>
                    </Dialog>
                    </React.Fragment>
            </div>
            
            <div style={{ height:400, width:'100%', marginTop:'20px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                    }}
                    pageSizeOptions={[10, 20]}
                    checkboxSelection
                />
                </div>
                
            </div>
            
            <React.Fragment>
                <Button sx={{backgroundColor:"#00523D",marginLeft:'auto','&:hover': {
                    backgroundColor: '#00523D',
                    borderColor: '#00432E', // Couleur de la bordure lors du survol
                    color: '#FFFFFF', // Couleur du texte lors du survol
                    }, marginTop:'200px'}} variant="contained" href="#contained-buttons" startIcon={<AddIcon />} onClick={handleClickOpenAdd}>
                                Ajouter
                </Button>
                <Dialog
                    open={openAdd}
                    onClose={handleCloseAdd}
                    PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleCloseAdd();
                    },
                    }}
                >
                    <DialogTitle>Ajouter un Potager</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="nomPotager"
                            name="nomPotager"
                            label="Nom Potager"
                            type="text"
                            fullWidth
                            variant="outlined"
                            sx={{width:'450px',
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
                            autoFocus
                            required
                            margin="dense"
                            id="telephone"
                            name="telephone"
                            label="Télephone"
                            type="tel"
                            placeholder='Entrer un numero de 9 chiffres'
                            fullWidth
                            variant="outlined"
                            sx={{width:'450px',
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
                            autoFocus
                            required
                            margin="dense"
                            id="ville"
                            name="ville"
                            label="Ville"
                            type="text"
                            fullWidth
                            variant="outlined"
                            sx={{width:'450px',
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
                            autoFocus
                            required
                            margin="dense"
                            id="adresse"
                            name="adresse"
                            label="Adresse"
                            type="text"
                            fullWidth
                            variant="outlined"
                            sx={{width:'450px',
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
                            autoFocus
                            required
                            margin="dense"
                            id="identifiant"
                            name="identifiant"
                            label="Identifiant"
                            type="email"
                            placeholder='Exemple:mndiaye@connect.com'
                            fullWidth
                            variant="outlined"
                            sx={{width:'450px',
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
                            autoFocus
                            required
                            margin="dense"
                            id="motDePasse"
                            name="motDePasse"
                            label="Mot de passe"
                            type="password"
                            fullWidth
                            variant="outlined"
                            sx={{width:'450px',
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
                            autoFocus
                            required
                            margin="dense"
                            id="prenomProprietaire"
                            name="prenomProprietaire"
                            label="Prenom Proprietaire"
                            type="text"
                            fullWidth
                            variant="outlined"
                            sx={{width:'450px',
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
                            autoFocus
                            required
                            margin="dense"
                            id="nomProprietaire"
                            name="nomProprietaire"
                            label="Nom Proprietaire"
                            type="text"
                            fullWidth
                            variant="outlined"
                            sx={{width:'450px',
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
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseAdd} sx={{marginLeft:'auto',borderColor:'#00523D','&:hover': {
                            backgroundColor: '#00523D',
                            borderColor: '#00432E', 
                            color: '#FFFFFF', 
                            }, color:'#00523D'}}>Annuler</Button>
                        <Button type="submit" sx={{marginLeft:'auto',borderColor:'#00523D','&:hover': {
                            backgroundColor: '#00523D',
                            borderColor: '#00432E', 
                            color: '#FFFFFF',
                            }, color:'#00523D'}}>Ajouter</Button>
                    </DialogActions>
                    </Dialog>
                </React.Fragment>
            
        </div>
      
    </div>
    
    
    
  );
};

export default Dashboard;
