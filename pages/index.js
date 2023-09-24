import React from 'react'
import ClientLayout from '../layouts/ClientLayout'
import {MapContainer,Marker,Popup, TileLayer } from 'react-leaflet'


export default function Home() {
  const position = [51.505, -0.09]

  return (
    <ClientLayout>

      <div className='container'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
      </div>
    </ClientLayout>
  )
}
