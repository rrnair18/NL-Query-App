import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


const Contact = () => {
    return (
        <Box
            bgcolor="darkblue"
            color="white"
            height="120px"
            display="flex"
            flexDirection="column" 
            marginTop="auto" 

        >
            <Typography variant="h3"
                style={{ marginLeft: '20px', marginTop: '10px' }}
            >
                Contact Us
            </Typography>

            <Typography variant="h6"
                style={{ marginLeft: '50px', marginTop: '0px' }}
            >
                username@domain.com
            </Typography>
        </Box>
    )
}

export default Contact