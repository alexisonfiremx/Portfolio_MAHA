import React, {useState} from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Whereabouts.scss';
import Map, {Marker, Popup} from 'react-map-gl';

// added the following 6 lines.
import mapboxgl from 'mapbox-gl';

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const Whereabouts = () => {

  const MAPBOX_TOKEN = "pk.eyJ1IjoiYWxleGlzb25maXJlbXgiLCJhIjoiY2wyd284N3J0MGhtNjNjcWN2c254ZjRwayJ9.N4p8Z92vDh8L4U0MGlLiQg"
  const [selected, setSelected] = useState(false)
  // const [showPopup, setShowPopup] = React.useState(true);
  

  return (
    <>
      <div className='app__whereabouts'>
        <h2 className="head-text">
          <strong className='stroke glitch' data-glitch="Where">Where</strong>
          <span className='glow'>abouts</span>
        </h2>

        <div className='app__whereabouts-map'>
          <Map
          initialViewState={{
            longitude: -116.625,
            latitude: 32.570,
            zoom: 12
          }}
          mapStyle="mapbox://styles/alexisonfiremx/cl2wrbpo5001a14ph7fqkc7h3"
          mapboxAccessToken={MAPBOX_TOKEN}
          >
            <Marker longitude={-116.625} latitude={32.570}   >
            <button
              className="marker-btn"
              onMouseEnter={() => setSelected(true)}
              >
                <img src='/marker-m6.svg' alt='m-marker' />
              </button>
            </Marker>

            {selected && (
                <div className='mapboxgl-popup-tip mapboxgl-popup-anchor-bottom'>
                <Popup
                  latitude={32.57}
                  longitude={-116.625}
                  style={{width: "160px", height: "45px"}}
                  onClose={() => {
                    setSelected(false);
                  }}
                  >
                  <div >
                    <h2>Congratulations!</h2>
                    <p>You found me 😊</p>
                  </div>
                </Popup>
                </div>
            )}

          </Map>

{/* <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken={MAPBOX_TOKEN}
  >
    {showPopup && (
      <Popup longitude={-100} latitude={40}
        anchor="bottom"
        onClose={() => setShowPopup(false)}>
        You are here
      </Popup>)}
  </Map>; */}



        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Whereabouts, 'app__'),
  'whereabouts',
  'app__primarybg',
);