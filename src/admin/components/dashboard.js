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
import { useEffect,useState } from 'react';
import axios from 'axios';

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
       
    //Backend avec Spring boot Affichage des donnee
      const [rows, setRows] = useState([]);
    
      useEffect(() => {
        // Récupérer les données depuis l'API
        axios.get('http://localhost:8080/api/potagers/all')
          .then(response => {// Transformez les données pour ajouter un identifiant unique
             const rowsWithId = response.data.map((item) => ({
              id: item.id_potager,  // Assurez-vous que `id_potager` est unique
              ...item
            }));
            console.log("Données récupérées :", rowsWithId); // Vérifiez la structure ici
            setRows(rowsWithId);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
          });
      }, []);
    
      const columns = [
        { field: 'id_potager', headerName: 'ID', width: 100 },
        { field: 'nom_potager', headerName: 'Nom Potager', width: 200 },
        { field: 'telephone', headerName: 'Téléphone', width: 200 },
        { field: 'ville', headerName: 'Ville', width: 200 },
        { field: 'adresse', headerName: 'Adresse', width: 200 },
        {
          field: 'prenom_proprietaire',
          headerName: 'Prenom Proprietaire',
          description: 'Prenom Proprietaire',
          sortable: false,
          width: 200
      
        },{
          field: 'nom_proprietaire',
          headerName: 'Nom Proprietaire',
          description: 'Nom du Propriétaire',
          sortable: false,
          width: 200
      
        }
      ];

    //Ajouyter les donnee dans la bd
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const formJson = Object.fromEntries(formData.entries());
  
      try {
          // Envoyer les données au serveur
          await axios.post('http://localhost:8080/api/potagers', formJson);
          // Fermer la boîte de dialogue après l'ajout
          handleCloseAdd();
      } catch (error) {
          console.error('Erreur lors de l\'ajout du potager:', error);
      }
  };

  //Suppression des donnee de la base de donnee
  const [selectedRowId, setSelectedRowId] = useState(null);
  const handleDelete = async () => {
    console.log("ID sélectionné pour suppression :", selectedRowId);
    try {
      await axios.delete(`http://localhost:8080/api/potagers/${selectedRowId}`);
      setRows(rows.filter(row => row.id !== selectedRowId));
      setOpenDelete(false);
    } catch (error) {
      console.error('Erreur lors de la suppression du potager :', error);
    }
  };
  

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
                    <Button variant="outlined" onClick={() => setOpenDelete(true)}  sx={{marginLeft:'auto',borderColor:'#00523D','&:hover': {
                    backgroundColor: '#00523D',
                    borderColor: '#00432E', // Couleur de la bordure lors du survol
                    color: '#FFFFFF', // Couleur du texte lors du survol
                    }, color:'#00523D'}} startIcon={<DeleteIcon />}>
                                Supprimer
                    </Button>
                    <Dialog
                        open={openDelete}
                        onClose={() => setOpenDelete(false)}
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
                        <Button onClick={() => setOpenDelete(false)} sx={{marginLeft:'auto',borderColor:'#00523D','&:hover': {
                            backgroundColor: '#00523D',
                            borderColor: '#00432E', // Couleur de la bordure lors du survol
                            color: '#FFFFFF', // Couleur du texte lors du survol
                            }, color:'#00523D'}}>Annuler</Button>
                        <Button onClick={handleDelete} sx={{background:'red',color:'white','&:hover':{background:'red',color:'white'}}} autoFocus>
                            Oui
                        </Button>
                        </DialogActions>
                    </Dialog>
                    </React.Fragment>
            </div>
            
            <div style={{ height:'60vh', width:'100%', marginTop:'20px' , background:'white'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    onRowClick={(params) => setSelectedRowId(params.id_potager)}
                    getRowId={(row) => row.id_potager} // Utilisez `id_potager` comme identifiant
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                    }}
                    pageSizeOptions={[10, 20]}
                    checkboxSelection
                    onSelectionModelChange={(newSelection) => {
                      setSelectedRowId(newSelection[0]);
                    }}
                />
                </div>
                
            </div>
            
            <React.Fragment>
                <Button sx={{backgroundColor:"#00523D",marginLeft:'auto','&:hover': {
                    backgroundColor: '#00523D',
                    borderColor: '#00432E', // Couleur de la bordure lors du survol
                    color: '#FFFFFF', // Couleur du texte lors du survol
                    }, marginTop:2}} variant="contained" href="#contained-buttons" startIcon={<AddIcon />} onClick={handleClickOpenAdd}>
                                Ajouter
                </Button>
                <Dialog
                    open={openAdd}
                    onClose={handleCloseAdd}
                    PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmit,
                    }}
                >
                    <DialogTitle>Ajouter un Potager</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="nom_potager"
                            name="nom_potager"
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
                            id="mot_de_passe"
                            name="mot_de_passe"
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
                            id="prenom_proprietaire"
                            name="prenom_proprietaire"
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
                            id="nom_proprietaire"
                            name="nom_proprietaire"
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
