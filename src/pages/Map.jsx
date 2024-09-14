import { useEffect, useRef } from 'react';
import regions from '../data/regions.js';

const { kakao } = window;
const KOREA_LATLNG_CENTER = { lat: 36.2683, lng: 127.6358 };

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(KOREA_LATLNG_CENTER.lat, KOREA_LATLNG_CENTER.lng),
      level: 13,
    };

    mapRef.current = new kakao.maps.Map(container, options);
  }, []);

  const handleSelectRegion = (region) => {
    const { lat, lng } = region;
    const moveLatLng = new kakao.maps.LatLng(lat, lng);
    mapRef.current.setCenter(moveLatLng);
    mapRef.current.setLevel(10);
  };

  return (
    <div className='grid grid-rows-[100px_auto]'>
      <div
        className='grid px-5 gap-x-3 py-3 gap-y-1'
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}
      >
        {regions.map((region, index) => {
          return (
            <button
              key={index}
              className='rounded-xl border border-gray-800'
              onClick={() => {
                handleSelectRegion(region);
              }}
            >
              {region.region}
            </button>
          );
        })}
      </div>
      <div className='min-h-[calc(100vh-100px)] flex justify-center items-center'>
        <div
          id='map'
          className='w-11/12 h-full'
        ></div>
      </div>
    </div>
  );
};

export default Map;
