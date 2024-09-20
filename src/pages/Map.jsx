import { useEffect, useRef, useState } from 'react';
import regions from '../data/regions.js';
import cities from '../data/cities.js';
import PostListSideBar from '../components/map/PostListSideBar.jsx';
import { useGetPostsByLikes } from '../query/postQuery.js';

const { kakao } = window;
const KOREA_LATLNG_CENTER = { lat: 36.2683, lng: 127.6358 };
const INITIAL_MAP_OPTIONS = {
  center: new kakao.maps.LatLng(KOREA_LATLNG_CENTER.lat, KOREA_LATLNG_CENTER.lng),
  level: 13,
};

const Map = () => {
  console.log('Map Rerendering');
  const mapRef = useRef(null);
  const { data: posts, isSuccess, isError } = useGetPostsByLikes();
  if (isError) {
    // TODO: 에러처리 추가
    // useEffect가 경우에따라 실행되지 않으니 오류가 생기는데 보통 어떻게 처리하는지?!
    // if (confirm('오류가 발생했습니다. 메인으로 이동합니다.')) {
    // return <Navigate to='/' />;
    // navigate('/');
    // }
  }

  // 헐 네 isPending으로 하면 요청 가는 중만 true인데 400번 에러가 나도 isPending이 끝남 그래서 그거보다는 isSuccess로 데이터가 다 불러와졌는지 확인하는게 좋음

  const setMarkers = () => {
    console.log('setMarkers 진입');
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

  if (isSuccess) {
    setMarkers();
  }

  const [mode, setMode] = useState('regions');
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [postsOnPostBar, setPostsOnPostBar] = useState([]);

  useEffect(() => {
    console.log('useEffect 진입');
    const container = document.getElementById('map');
    mapRef.current = new kakao.maps.Map(container, INITIAL_MAP_OPTIONS);

    if (isSuccess) {
      setMarkers();
    }
  }, []);

  // 의존성뱅열 다른 useEffect를 하나 더 해서 맵이 먼저 생성됐다는 걸 보장받은 상태를 하거나, 콜백함수를 하거나

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
    setPostsOnPostBar([]);
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
    <div className='flex h-full'>
      <div className={`flex flex-col h-full ${postsOnPostBar.length > 0 ? 'w-[calc(100vw-230px)]' : 'w-full'}`}>
        {mode === 'regions' ? (
          <div
            className='grid px-5 py-3 gap-x-3 gap-y-1'
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))' }}
          >
            {regions.map((region, index) => {
              return (
                <button
                  key={index}
                  className='border border-gray-800 rounded-xl'
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
          <div className='flex flex-col gap-2 px-5 my-5'>
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
                    className='border border-gray-800 rounded-xl'
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
        <div className='flex items-center justify-center flex-grow w-full h-full'>
          <div
            id='map'
            className='w-11/12 h-full'
          ></div>
        </div>
        {postsOnPostBar.length > 0 ? <PostListSideBar posts={postsOnPostBar} /> : null}
      </div>
    </div>
  );
};

export default Map;
