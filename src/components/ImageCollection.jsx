import { Grid } from '@mui/material';
import React from 'react';


// it will contain the image fetch from the unsplash API
export default function ImageCollection() {
    return (
        <div style={{ margin: '40px 20px' }}>
            <Grid container spacing={4} justify="center" alignItems="center">
                <Grid item lg={4} xs={12} sm={6} md={6} >
                    <img src='/header.png' style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item lg={4} xs={12} sm={6} md={6} >
                    <img src='/header.png' style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item lg={4} xs={12} sm={6} md={6} >
                    <img src='/header.png' style={{ maxWidth: '100%' }} />
                </Grid>
            </Grid>
        </div>
    )
}
