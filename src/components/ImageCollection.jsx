import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { useFetchImage } from '../context/fetchAllPics';
import { useTheme } from '../context/themeContext';
import ImageProfile from './ImageProfile';
import InfiniteScroll from 'react-infinite-scroll-component';


// it will contain the image fetch from the unsplash API
export default function ImageCollection() {

    // fetch the values from the theme context
    const { colorPalletes, theme } = useTheme();
    const [modeColor, setModeColor] = useState(colorPalletes.light);

    // fetch all photos to display here
    const { allImages } = useFetchImage();

    // display jsx content from here
    return (
        <>
            {/* implementing pagenation */}
            <InfiniteScroll
                dataLength={allImages.length}
                next={fetchMoreImages}
                hasMore={allImages?.length < 50}  // there are alot of articles present, restricting after displaying some articles out of those
            >

                <div style={{ margin: '40px 50px', backgroundColor: theme === "dark" ? colorPalletes.dark.background : colorPalletes.light.background }}>
                    <Grid container spacing={4} justify="center" alignItems="center">

                        {allImages?.map((gallery, index) => {
                            return <Grid item lg={4} xs={12} sm={6} md={6} key={gallery.urls.raw} >
                                <ImageProfile sourceImage={gallery.urls.small} actualImage={gallery.urls.raw} likeCounts={gallery.likes} username={gallery.user.username} actualName={gallery.user.name} profileImage={gallery?.user?.profile_image?.small} />
                            </Grid>
                        })}
                    </Grid>
                </div>
            </InfiniteScroll>
        </>
    )
}
