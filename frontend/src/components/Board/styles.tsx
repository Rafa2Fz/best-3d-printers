import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Container = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const Title = styled(Typography)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.secondary.light,
  width: '200px',
  height: '50px',
  bottom: '25px',
  fontsize: 'bold',
}));

export { Container, Title };
