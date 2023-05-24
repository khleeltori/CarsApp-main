import React from 'react'

function DefaultLayout(props) {
  return (
    <div >
        <div className='header ds1'>
            <div className='d-flex justify-content-between'>
                <h1>AltoriCars</h1>
                
            </div>
        </div>
            <div className='content'>
                {props.children}
            </div>
    </div>
  )
}

export default DefaultLayout