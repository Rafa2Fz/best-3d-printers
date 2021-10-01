import React, { useCallback, useState, ChangeEvent, useEffect } from 'react';

import {
  PasswordField as StyledPasswordField,
  MainBar,
  SecondaryBar,
  TextBar,
} from './styles';
import zxcvbn from 'zxcvbn';

import { TextField, TextFieldProps } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';

type PasswordFieldProps = TextFieldProps & {
  confirmation?: boolean;
};
type DisplayForce = 'flex' | 'none';

const PasswordField: React.FC<PasswordFieldProps> = ({
  confirmation = false,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState('password');

  const [color, setColor] = useState('');
  const [width, setWidth] = useState('');
  const [forceText, setForceText] = useState('');
  const [displayForce, setDisplayForce] = useState<DisplayForce>('none');

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
    showPassword ? setType('password') : setType('text');
  }, [showPassword]);

  const checkStrengthPassword = () => {
    if (value) {
      setDisplayForce('flex');
    } else {
      setDisplayForce('none');
    }
    if (confirmation) {
      setDisplayForce('none');
    }

    if (typeof value === 'string') {
      const { score } = zxcvbn(value);

      switch (score) {
        case 0:
          setColor('red');
          setWidth('25%');
          setForceText('Weak');
          break;
        case 1:
          setColor('#f3ef04');
          setWidth('55%');
          setForceText('Average');
          break;
        case 2:
        case 3:
        case 4:
          setColor('#14c51d');
          setWidth('100%');
          setForceText('Strong');
          break;
      }
    }
  };

  useEffect(() => {
    checkStrengthPassword();
  }, [value]);
  return (
    <StyledPasswordField
      variant="standard"
      type={type}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockIcon color="primary" fontSize="medium" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <MainBar display={displayForce}>
              <SecondaryBar color={color} width={width} />
              <TextBar color={color}>{forceText}</TextBar>
            </MainBar>
            <IconButton onClick={handleShowPassword}>
              {showPassword ? (
                <VisibilityIcon color="primary" fontSize="medium" />
              ) : (
                <VisibilityOffIcon color="primary" fontSize="medium" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default PasswordField;
