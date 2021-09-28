import React from 'react';
import { Background } from './styles';

import { Grid, Box } from '@mui/material';
import Paper from '@mui/material/Paper';

import EmailIcon from '@mui/icons-material/Email';
import { useFormik } from 'formik';
import * as yup from 'yup';

import InputField from '../../components/InputField';
const SignUp: React.FC = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Emais is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Grid
      container
      item
      xs={12}
      sx={{ backgroundColor: '#ffde59' }}
      alignContent="center"
      alignItems="center"
    >
      <Grid item xs={false} sm={4} md={7}>
        <Background />
      </Grid>
      <Grid container item xs="auto">
        <Paper sx={{ height: '300px', width: '400px' }} elevation={4}>
          <Box m={4}>
            <form onSubmit={formik.handleSubmit}>
              <InputField
                icon={EmailIcon}
                fullWidth
                color="primary"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </form>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignUp;
