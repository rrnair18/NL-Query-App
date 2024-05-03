import { AppBar, Box, Typography, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/query"
                        style={{ flexGrow: 1 }}
                        >
                        Go Back
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                bgcolor="darkblue"
                color="white"
                height="107px"
                display="flex"
                justifyContent="flex-start" // Aligns items along the main axis (horizontally) to the start
                alignItems="flex-end" // Aligns items along the cross axis (vertically) to the end

            >
                <Typography variant="h3"
                    style={{ marginLeft: '20px', marginBottom: '10px' }}
                >
                    About Us
                </Typography>
            </Box>
        </div>
    )
}

export default Header