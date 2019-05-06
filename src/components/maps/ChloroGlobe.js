import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import { scaleLinear } from "d3-scale"
import geographyFile from '../../static/world-110m.json'
import geoFile from '../../static/world-50m-with-population.json'
import cities from '../../static/world-most-populous-cities.json'

// import cities from "../../../world-most-populous-cities.json"
// import geographyFile from '../../../world-110m.json'

const populationScale = scaleLinear()
  .domain([10750000,37843000])
  .range([5,22])
const populationScaleTwo = scaleLinear()
  .domain([10750000, 20000000, 37843000])
  .range(["#0D8050","#106BA3","#C23030"])

const popScale = scaleLinear()
  .domain([0,100000000,1400000000])
  .range(["#0D8050","#106BA3","#C23030"])
//   .range(["#CFD8DC","#607D8B","#37474F"])

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

class ChloroGlobe extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projection="orthographic"
          projectionConfig={{
            scale: 300,
          }}
          width={800}
          height={800}
          style={{
            width: "80%",
            verticalAlign: 'center',
            height: "auto",
          }}
          >
          <ZoomableGlobe center={[0,20]}>
            <Geographies geography={ geoFile } disableOptimization>
              {(geographies, projection) =>
                geographies.map((geography, i) => {
                  return (
                    <Geography
                      key={i}
                      round
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: popScale(geography.properties.pop_est),
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#263238",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#263238",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        }
                      }}
                    />
                  )
                }
              )}
            </Geographies>
            <Markers>
              {
                cities.map(city => {
                  const radius = populationScale(city.population)
                  return (
                    <Marker
                      key={city.name}
                      marker={city}
                      style={{
                        default: { opacity: 0.8 },
                        hidden: { display: "none" },
                      }}>
                      <circle
                        cx={0}
                        cy={0}
                        r={radius}
                        fill="#FF5722"
                        stroke="#FFF"
                      />
                      <circle
                        cx={0}
                        cy={0}
                        r={radius + 2}
                        fill="transparent"
                        stroke="#FF5722"
                      />
                    </Marker>
                  )
                })
              }
            </Markers>
          </ZoomableGlobe>
        </ComposableMap>
      </div>
    )
  }
}

export default ChloroGlobe
