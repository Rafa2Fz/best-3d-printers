import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

type MainBarProps = {
  display: 'flex' | 'none';
};

type SecondaryBar = {
  color: string;
  width: string;
};

type TextBar = {
  color: string;
};

export const PasswordField = styled((props: TextFieldProps) => (
  <TextField variant="filled" {...props} />
))<TextFieldProps>(({ theme }) => ({
  '& .Mui-error': {
    '& svg': {
      color: theme.palette.error.main,
    },
  },
}));

export const MainBar = styled('div')<MainBarProps>(({ display, theme }) => ({
  display,
  width: '55px',
  height: '3px',
  borderRadius: '5px',
  backgroundColor: '#9f9d9d',
}));

export const SecondaryBar = styled('div')<SecondaryBar>(
  ({ color, width, theme }) => ({
    width,
    backgroundColor: color,
    height: '3px',
    borderRadius: '5px',
  })
);

export const TextBar = styled('div')<TextBar>(({ color }) => ({
  position: 'absolute',
  width: '20px',
  height: '10px',
  bottom: '29px',
  fontWeight: 'bold',
  fontSize: '12px',
  color,
}));
