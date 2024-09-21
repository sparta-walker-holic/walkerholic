const selectedStyle = '-bg--primary-green text-white';
const notSelectedStyle = 'bg-white text-black hover:bg-gray-50';

const CityButton = ({ city, selectedCity, onClick }) => {
  return (
    <button
      className={`shadow shadow-gray-400/50 rounded-lg h-[35px] font-bold ${selectedCity === city ? selectedStyle : notSelectedStyle}`}
      onClick={onClick}
    >
      {city.city}
    </button>
  );
};

export default CityButton;
