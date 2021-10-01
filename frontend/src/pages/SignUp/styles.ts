import { styled } from '@mui/material/styles';

import SignUpBackground from '../../assets/signUpBackground.gif';

export const Background = styled('div')(({ theme }) => ({
  height: '100vh',
  backgroundImage: `url(${SignUpBackground})`,
  backgroundPosition: 'center',
  backgroundSize: '700px 300px',
  backgroundRepeat: 'no-repeat',
}));
