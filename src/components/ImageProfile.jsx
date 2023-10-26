import React from 'react'

// it will contain the image and the information about the image
export default function ImageProfile() {
  return (
    <>
  <>
  <div className="card" style={{ maxWidth: "100%" }}>
    <img className="card-img-bottom" src="/header.png" alt="Card image cap" />
    <div className="card-body d-flex align-items-center">
      <div>
        <img src="/header.png" alt="profile picture" style={{ width: "50px", height: "50px", borderRadius: "50%" }}></img>
      </div>
      <div className="ml-3">
        <p style={{marginBottom: "-5px"}}>Full Name</p>
        <p className='text-muted'>@username</p>
      </div>
    </div>
  </div>
</>


</>

  )
}
