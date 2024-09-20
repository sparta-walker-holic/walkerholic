const CitiyButton = ({ city, selectedCity, onClick }) => {
  return (
    <button
      className={`border border-gray-800 rounded-lg h-[30px] ${selectedCity === city ? '-bg--primary-green text-white' : 'bg-white text-black'}`}
      onClick={onClick}
    >
      {city.city}
    </button>
  );
};

export default CitiyButton;
