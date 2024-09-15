import { useEffect, useRef, useState } from 'react';
import regions from '../data/regions.js';
import cities from '../data/cities.js';
import mockData from '../data/mockData.js';

const { kakao } = window;
const KOREA_LATLNG_CENTER = { lat: 36.2683, lng: 127.6358 };
const INITIAL_MAP_OPTIONS = {
  center: new kakao.maps.LatLng(KOREA_LATLNG_CENTER.lat, KOREA_LATLNG_CENTER.lng),
  level: 13,
};

const Map = () => {
  const mapRef = useRef(null);

  const [mode, setMode] = useState('regions');
  const [selectedRegion, setSelectedRegion] = useState(null);

  useEffect(() => {
    const container = document.getElementById('map');
    mapRef.current = new kakao.maps.Map(container, INITIAL_MAP_OPTIONS);

    const markers = mockData.posts.map((post, index) => {
      const { id, title, position } = post;
      const marker = new kakao.maps.Marker({
        title: title,
        position: new kakao.maps.LatLng(position.lat, position.lng),
      });

      marker.postId = id;
      marker.index = index;

      kakao.maps.event.addListener(marker, 'click', () => {
        console.log(post.title + ': ' + post.description);
      });
      return marker;
    });

    const clusterer = new kakao.maps.MarkerClusterer({
      map: mapRef.current,
      averageCenter: true,
      minLevel: 3,
      markers: markers,
      disableClickZoom: true,
    });

    kakao.maps.event.addListener(clusterer, 'clusterclick', (cluster) => {
      cluster.getMarkers().forEach((marker) => {
        const postIndex = marker.index;
        const { title, description } = mockData.posts[postIndex];
        console.log(title + ': ' + description);
      });
    });
  }, []);

  const handleSelectRegion = (region) => {
    const { lat, lng } = region;
    const moveLatLng = new kakao.maps.LatLng(lat, lng);
    mapRef.current.setCenter(moveLatLng);
    mapRef.current.setLevel(10);

    setMode('cities');
    setSelectedRegion(region.region);
  };

  const handleBackToRegionSelection = () => {
    setMode('regions');
    setSelectedRegion(null);
    mapRef.current.setCenter(INITIAL_MAP_OPTIONS.center);
    mapRef.current.setLevel(INITIAL_MAP_OPTIONS.level, { animate: true });
  };

  const handleSelectCity = (city) => {
    const { lat, lng } = city;
    const moveLatLng = new kakao.maps.LatLng(lat, lng);
    mapRef.current.setCenter(moveLatLng);
    mapRef.current.setLevel(5, { animate: true });
  };

  return (
    <div className='flex flex-col h-full'>
      {mode === 'regions' ? (
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
      ) : null}
      {mode === 'cities' ? (
        <div className='flex flex-col px-5 my-5 gap-2'>
          <h3
            className='font-bold hover:cursor-pointer'
            onClick={handleBackToRegionSelection}
          >
            {'< ' + selectedRegion}
          </h3>
          <div
            className='grid gap-x-3 gap-y-1'
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}
          >
            {cities[selectedRegion].map((city, index) => {
              return (
                <button
                  key={index}
                  className='rounded-xl border border-gray-800'
                  onClick={() => {
                    handleSelectCity(city);
                  }}
                >
                  {city.city}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className='flex-grow h-full w-full flex justify-center items-center'>
        <div
          id='map'
          className='w-11/12 h-full'
        ></div>
      </div>
    </div>
  );
};

export default Map;
