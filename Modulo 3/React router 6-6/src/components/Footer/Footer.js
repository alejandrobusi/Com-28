import React from 'react'

function Footer() {
  return (
    <div className='bg-dark container-fluid text-light'>
      <div className='row' style={{height: '100px', marginTop: "2rem"}}>
        <div className='col-xs-12 col-lg-6 d-flex justify-content-center align-items-center'><h1>RollingCode</h1></div>
        <div className='col-xs-12 col-lg-6 d-flex justify-content-center align-items-center'><h1>SoftwareStore</h1></div>
      </div>
    </div>
  )
}

export default Footer