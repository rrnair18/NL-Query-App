import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Navbar = () => {
  return (
    <AppBar  position='static'>
      <Toolbar sx={{ backgroundColor: "blueviolet" }}>
        <Box display="flex" justifyContent="center" width="100%">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="homepage"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            NATURAL LANGUAGE QUERY APP
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
