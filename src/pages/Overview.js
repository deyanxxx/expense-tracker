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



const navItems = ['Overview', 'Add Transaction', 'Reports', 'Log out'];
/* 
const transaction = ['Expenses', 'Budget', 'Category'];
const reports = ['Category', 'Expenses', 'Budget']; 
*/

function Overview() {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setOpen(open);
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
              <Button key={item} sx={{ color: '#fff' }}>
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
    </div>
  )
}

export default Overview