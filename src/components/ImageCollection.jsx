import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '../context/themeContext';
import ImageProfile from './ImageProfile';


// it will contain the image fetch from the unsplash API
export default function ImageCollection() {

    // fetch the values from the theme context
    const { colorPalletes, theme } = useTheme();
    const [modeColor, setModeColor] = useState(colorPalletes.light);

    // display jsx content from here
    return (
        <div style={{ margin: '40px 50px', backgroundColor: theme === "dark" ? colorPalletes.dark.background : colorPalletes.light.background }}>
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
