import { useEffect, useRef, useState } from 'react';
import regions from '../data/regions.js';
import cities from '../data/cities.js';
import PostListSideBar from '../components/map/PostListSideBar.jsx';
import { useGetPostsByLikes } from '../query/postQuery.js';
import { Navigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import RegionButton from '../components/map/RegionButton.jsx';
import CityButton from '../components/map/CityButton.jsx';

// TODO: 커스텀훅으로 분리해보기 -> 다정님 페이지랑 통합해서 쓸 수 있는지?
const { kakao } = window;
const KOREA_LATLNG_CENTER = { lat: 36.2683, lng: 127.6358 };
const INITIAL_MAP_OPTIONS = {
  center: new kakao.maps.LatLng(KOREA_LATLNG_CENTER.lat, KOREA_LATLNG_CENTER.lng),
  level: 13,
};

const Map = () => {
  const mapRef = useRef(null);
  const { data: posts, isSuccess, isError } = useGetPostsByLikes();

  const [mode, setMode] = useState('regions');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [postsOnPostBar, setPostsOnPostBar] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      const container = document.getElementById('map');
      mapRef.current = new kakao.maps.Map(container, INITIAL_MAP_OPTIONS);
      setMarkers();
    }
  }, [isSuccess]);

  if (isError) {
    if (confirm('오류가 발생했습니다. 메인으로 이동합니다.')) {
      return <Navigate to='/' />;
    }
  }

  const setMarkers = () => {
    const markers = posts.map((post) => {
      const { id, title, position } = post;
      const marker = new kakao.maps.Marker({
        title: title,
        position: new kakao.maps.LatLng(position.lat, position.lng),
      });

      marker.postId = id;

      kakao.maps.event.addListener(marker, 'click', () => {
        setPostsOnPostBar([id]);
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
      const newPostsOnPostBar = [];
      cluster.getMarkers().forEach((marker) => {
        newPostsOnPostBar.push(marker.postId);
      });

      setPostsOnPostBar(newPostsOnPostBar);
    });
  };

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
    setSelectedCity(null);
    setPostsOnPostBar([]);
    mapRef.current.setCenter(INITIAL_MAP_OPTIONS.center);
    mapRef.current.setLevel(INITIAL_MAP_OPTIONS.level, { animate: true });
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);

    const { lat, lng } = city;
    const moveLatLng = new kakao.maps.LatLng(lat, lng);
    mapRef.current.setCenter(moveLatLng);
    mapRef.current.setLevel(5, { animate: true });
  };

  return (
    <div className='flex h-full'>
      <div className='flex flex-col items-center h-full w-full'>
        {mode === 'regions' ? (
          <div
            className='grid items-center w-11/12 h-[150px] py-3 gap-x-3 gap-y-1'
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}
          >
            {regions.map((region, index) => {
              return (
                <RegionButton
                  key={index}
                  onClick={() => {
                    handleSelectRegion(region);
                  }}
                >
                  {region.region}
                </RegionButton>
              );
            })}
          </div>
        ) : null}
        {mode === 'cities' ? (
          <div className='flex flex-col w-full h-[150px] justify-center items-center gap-2'>
            <div
              className='flex items-center gap-2 w-11/12 text-xl font-bold hover:cursor-pointer'
              onClick={handleBackToRegionSelection}
            >
              <ChevronLeft />
              {selectedRegion}
            </div>
            <div
              className='grid items-center w-11/12 py-3 gap-x-3 gap-y-1'
              style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}
            >
              {cities[selectedRegion].map((city, index) => {
                return (
                  <CityButton
                    key={index}
                    city={city}
                    selectedCity={selectedCity}
                    onClick={() => {
                      handleSelectCity(city);
                    }}
                  />
                );
              })}
            </div>
          </div>
        ) : null}
        <div className='flex items-center justify-center flex-grow w-full h-full'>
          <div
            id='map' // 커스텀 훅 매개변수로 ID sjaru넘겨주고 공유하..
            className='w-11/12 h-full'
          >
            <PostListSideBar posts={postsOnPostBar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
