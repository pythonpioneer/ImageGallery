import React from 'react';

// it contain header image and the content on the image
export default function Header() {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <img src="/header.png" alt="header-image" style={{ width: "100%", height: "330px" }} />
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <p className="large-text">Download High Quality Images by creators</p>
          <p className="small-text">Over 2.4 million+ stock Images by our talented community</p>
          <input className="form-control mr-sm-2 mt-4" type="search" placeholder="🔍  Search high resolution Images, categories, wallpapers" aria-label="Search" style={{ borderRadius: "10px" }} />
        </div>
      </div>
    </>
  )
}
