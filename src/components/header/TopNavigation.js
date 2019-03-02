import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../../scss/header.scss';


const TopNavigation = (props) => (

  <AppBar position="static">
    <Toolbar>
      <i className='material-icons'>dashboard</i>
      <NavLink className='nav-home'
        to='/' activeClassName='is-active' exact={true}>
        <Typography variant="h6" color="inherit" className='topbar-grow'>
          {props.title}
        </Typography>
      </NavLink>
    </Toolbar>
  </AppBar>

);



export default TopNavigation;
