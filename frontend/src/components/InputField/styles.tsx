import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export const CustomTextField = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    '& .Mui-error': {
      '& svg': {
        color: theme.palette.error.main,
      },
    },
  })
);

// export const CustomTextField = styled((props: TextFieldProps) => (
//   <TextField variant="filled" {...props} />
// ))<TextFieldProps>(({ theme }) => ({
//   '& .MuiTextField-root': {
//     '& .Mui-error': {
//       '& svg': {
//         color: theme.palette.error.main,
//       },
//     },
//   },
// }));
