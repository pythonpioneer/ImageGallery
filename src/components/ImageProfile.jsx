import React, { useState } from 'react'
import { useTheme } from '../context/themeContext';

/**
 * it will contain the image and the information about the image
 * @param {String} actualImage
 * @param {String} sourceImage
 * @param {String} profileImage
 * @param {String} actualName
 * @param {String} username
 * @param {String} likeCounts
 * @returns 
 */
export default function ImageProfile({ actualImage, sourceImage, profileImage, actualName, username, likeCounts }) {

  // fetch the values from the theme context
  const { colorPalletes, theme } = useTheme();
  const profileBackgroundColor = "#141414";

  // jsx contents
  return (
    <>
      <div className="card" style={{ maxWidth: "100%", backgroundColor: theme === "dark" ? profileBackgroundColor : "#FFFFFF", color: theme === "dark" ? colorPalletes.dark.text : colorPalletes.light.text }}>
        <img className="card-img-bottom mb-1" src={sourceImage} alt="Card image cap" />
        <div className="card-body d-flex align-items-center" style={{ padding: '10px' }}>
          <div>
            <img src={profileImage} alt="profile picture" style={{ width: "39px", height: "39px", borderRadius: "50%", marginTop: "-10px" }}></img>
          </div>
          <div style={{ marginLeft: '15px', marginBottom: "-15px", marginTop: "-10px" }}>
            <p style={{ marginBottom: "-5px", marginTop: "3px", fontSize: '18px', fontWeight: 'bold' }}>{actualName}</p>
            <p className='text-muted' style={{ fontSize: '14px' }}>{username}</p>
          </div>
          <div style={{marginLeft: "auto", marginRight: "5px"}}>👍 {likeCounts}</div>
        </div>
      </div>
    </>
  )
}
