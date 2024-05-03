import { Stack, Box } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import GetStarted from './GetStarted'


const Homepage = () => {
  return (
  <Box>
  <Stack direction="row" spacing={0} justifyContent="center">
    <Logo/>
    <GetStarted/>
  </Stack>
  </Box>  
  )
}

export default Homepage