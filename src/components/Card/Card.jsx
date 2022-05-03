import { Grid, Container, Box } from '@mui/material';
import * as React from 'react';


const Card = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div className='item'>
                            <img src="/image/main-menu/cake/raspberry-ripple-cake.webp" alt="" />
                            <p>RASPBERRY RIPPLE CAKE</p>
                            <p>from £55.00</p>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className='item'>
                            <img src="/image/main-menu/cake/raspberry-ripple-cake.webp" alt="" />
                            <p>RASPBERRY RIPPLE CAKE</p>
                            <p>from £55.00</p>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className='item'>
                            <img src="/image/main-menu/cake/raspberry-ripple-cake.webp" alt="" />
                            <p>RASPBERRY RIPPLE CAKE</p>
                            <p>from £55.00</p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    )
}

export default Card
