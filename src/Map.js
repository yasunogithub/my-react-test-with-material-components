import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"

const bnCoord = {
  lat: 44.597923,
  lng: 0.873799,
}

const Map = () => (
    <ReactGoogleMapLoader
        params={{
          key: "AIzaSyAaJm_z78vkzlQ0rT86mdTmQHHQ8x8EqbI",
        }}
        style={{height: "222px"}}
        render={googleMaps => {
          return (
              googleMaps && (
                  <ReactGoogleMap
                      googleMaps={googleMaps}
                      coordinates={[
                        {
                          title: "Bosc Nègre",
                          position: bnCoord,
                        },
                      ]}
                      center={bnCoord}
                      zoom={8}
                  />
              )
          )
        }}
    />
)

export default Map