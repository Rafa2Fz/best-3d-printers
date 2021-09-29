import React from 'react';
import { Background } from './styles';
import Logo from '../../assets/3dlogo.png';

import { Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

import { useFormik } from 'formik';
import * as yup from 'yup';

import InputField from '../../components/InputField';
import PasswordField from '../../components/PasswordField';
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
    name: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
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
      alignItems="center"
      sx={{ backgroundColor: '#ffde59' }}
    >
      <Grid item xs={false} sm={4} md={7}>
        <Background />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm="auto"
        md="auto"
        direction="column"
        alignItems="center"
        alignContent="center"
      >
        <Hidden mdUp>
          <Grid item mt={4} mb={5}>
            <Avatar
              src={Logo}
              variant="square"
              sx={{ width: '100px', height: '100px' }}
            ></Avatar>
          </Grid>
        </Hidden>
        <Paper sx={{ height: '600px', width: '350px' }} elevation={12}>
          <Grid
            container
            direction="column"
            alignItems="center"
            alignContent="center"
          >
            <Box m={4}>
              <Typography
                fontWeight="800"
                variant="h6"
                component="h1"
                align="center"
              >
                Entre e aproveite <br />
                benefícios exclusivos!
              </Typography>
            </Box>
            <Grid item>
              <Box m={3}>
                <Box m={2}>
                  <form onSubmit={formik.handleSubmit}>
                    <InputField
                      icon={AccountCircleIcon}
                      fullWidth
                      color="primary"
                      id="name"
                      name="name"
                      label="Name"
                      placeholder="Fulano Da Silva"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                    <Box mt={2}>
                      <InputField
                        icon={EmailIcon}
                        fullWidth
                        color="primary"
                        id="email"
                        placeholder="example@example.com"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Box>
                    <Box mt={2}>
                      <PasswordField
                        fullWidth
                        color="primary"
                        placeholder="*******"
                        id="password"
                        name="password"
                        label="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                      />

                      <Box mt={2}>
                        <InputField
                          icon={LockIcon}
                          fullWidth
                          color="primary"
                          id="confirmPassword"
                          placeholder="*******"
                          name="confirmPassword"
                          label="Confirm Password"
                          type="password"
                          value={formik.values.confirmPassword}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.confirmPassword &&
                            Boolean(formik.errors.confirmPassword)
                          }
                          helperText={
                            formik.touched.confirmPassword &&
                            formik.errors.confirmPassword
                          }
                        />
                      </Box>
                      <Box m={2}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          type="submit"
                        >
                          Sing Up
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignUp;
