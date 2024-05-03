import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const GetStarted = () => {
  return (
    <Box
      height={743}
      flex={2}
      bgcolor="black"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box marginTop="-80px"  >
        <Typography variant="h2" style={{ marginLeft: '20px', }}>Welcome to</Typography>
        <Typography variant="h2" style={{ marginLeft: '20px', }}>Natural Language </Typography>
        <Typography variant="h2" style={{ marginLeft: '20px', }}>Query APP</Typography>
        <Button href='/query' variant="contained" color="primary" style={{ marginLeft: '20px', marginTop: '20px' }}>Get Started</Button>
      </Box>
    </Box>
  )
}

export default GetStarted