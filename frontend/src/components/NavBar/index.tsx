import React from 'react';

import Logo from '../../assets/3dlogo.png';

import { Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link as RouterLink } from 'react-router-dom';

import { NavBar as Nav, NavItem } from './styles';
import Item from './Item';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <NavItem>
        <Item nameButton="Impressoras" nameItems={['AnyCube', 'Creality']} />
      </NavItem>
      <NavItem>
        <Item nameButton="Resinas" nameItems={['Teste']} />
      </NavItem>
      <NavItem>
        <Item nameButton="Peças" nameItems={['Blabla']} />
      </NavItem>
    </Nav>
  );
};

export default NavBar;
