import { Box, Typography } from '@mui/material'
import React from 'react'

const Logo = () => {
  return (
    <Box 
    flex={3}
    bgcolor="skyblue" 
    >
        <Box
          display="flex"
          flexDirection="column"
        //   justifyContent="center" 
          alignItems="center"
          marginTop="180px"
        >
        <Typography variant="h1" color="initial" fontSize="10rem" position='relative' style={{ marginBottom: '20px', }}>Logo</Typography>
        <Typography variant="h4" color="initial">THE <br /> NEW <br /> TODAY</Typography>
            
        </Box>
    </Box>
  )
}

export default Logo