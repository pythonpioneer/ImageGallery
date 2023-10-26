import { Grid } from '@mui/material';
import React from 'react';
import ImageProfile from './ImageProfile';


// it will contain the image fetch from the unsplash API
export default function ImageCollection() {
    return (
        <div style={{ margin: '40px 50px' }}>
            <Grid container spacing={4} justify="center" alignItems="center">
                <Grid item lg={4} xs={12} sm={6} md={6} >
                    <ImageProfile/>
                </Grid>
                <Grid item lg={4} xs={12} sm={6} md={6} >
                    <ImageProfile/>
                </Grid>
                <Grid item lg={4} xs={12} sm={6} md={6} >
                    <ImageProfile/>
                </Grid>
            </Grid>
        </div>
    )
}
