import React from 'react';

import Button from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuItemCustom } from './styles';

interface ItemProps {
  nameButton: string;
  nameItems: string[];
}

const Item: React.FC<ItemProps> = ({ nameButton, nameItems }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick} fullWidth variant="contained">
        {nameButton}
      </Button>
      <Menu
        sx={{ marginTop: '5px' }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {nameItems.map((nameItem) => (
          <MenuItemCustom onClick={handleClose}>{nameItem}</MenuItemCustom>
        ))}
      </Menu>
    </>
  );
};

export default Item;
