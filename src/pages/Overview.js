import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Modal from '@mui/material/Modal';


const navItems = ['Overview', 'Add Transaction', 'Reports', 'Log out'];
/* 
const transaction = ['Expenses', 'Budget', 'Category'];
const reports = ['Category', 'Expenses', 'Budget']; 
*/

function Overview() {

  const [open, setOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };

  const handleLogout = () => {
    setLogoutModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  const handleConfirmLogout = () => {
    sessionStorage.clear(); // Clear session storage
    localStorage.clear(); // Clear local storage
    window.location.href = '/'; //return to home 
    handleCloseLogoutModal();
  };

  return (
    <div className='bg-white'>
      <AppBar 
      component="nav"
      sx={{ backgroundColor: '#273469' }}>
      <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Expense Tracker
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={item === 'Log out' ? handleLogout : null}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <List>
          {navItems.map((text) => (
            <ListItem key={text} onClick={toggleDrawer(false)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </AppBar>

      {/* LOGOUT MODAL */}

      <Modal
        open={logoutModalOpen}
        onClose={handleCloseLogoutModal}
        aria-labelledby="logout-modal-title"
        aria-describedby="logout-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {xs:'90'}, // set width for mobile
            maxWidth: 400, // Set maximum width if needed
            zIndex: 9999, // Ensure modal appears above other content
          }}
        >
          <Typography id="logout-modal-title" variant="h6" component="h2">
            Confirm Logout
          </Typography>
          <Typography id="logout-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to logout?
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button onClick={handleConfirmLogout}>Logout</Button>
            <Button onClick={handleCloseLogoutModal} sx={{ ml: 2 }}>Cancel</Button>
          </Box>
        </Box>
      </Modal>

      {/* OVERVIEW */}
      <div className='pt-40'>
      <h1 style={{ color: '#30343F' }} className='font-bold text-4xl xs:text-2xl'>Overview</h1>
      </div>
    </div>
  )
}

export default Overview