import React from 'react'
import GeolocationComponent from './components/GeolocationComponent'
import Navigation from './components/Navigation'
import Navbar from './components/Navbar'

const Gyms = () => {
  return (
    <>
    <Navbar/>
    <div style={{backgroundColor:"#333", marginTop:"80px"}}>
      <GeolocationComponent/>
      <Navigation/>
    </div>
    </>
  )
}

export default Gyms
