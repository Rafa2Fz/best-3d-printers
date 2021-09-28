import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { CustomTextField } from './styles';

type InputFieldProps = TextFieldProps & {
  icon: React.ComponentType<SvgIconProps>;
};

const InputField: React.FC<InputFieldProps> = ({ icon: Icon, ...props }) => {
  return (
    <CustomTextField
      variant="standard"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon color="primary" fontSize="medium"></Icon>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default InputField;
