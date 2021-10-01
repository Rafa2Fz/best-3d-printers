import { styled, alpha } from '@mui/material/styles';

export const NavBar = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  padding: '0px',
  width: '100%',
  justifyContent: 'center',
}));

export const NavItem = styled('li')(({ theme }) => ({
  width: '200px',
  margin: '10px',
}));
