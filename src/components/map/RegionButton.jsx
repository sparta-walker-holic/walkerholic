const RegionButton = ({ children, onClick }) => {
  return (
    <button
      className='shadow shadow-gray-400/50 font-bold rounded-xl h-[40px] hover:bg-gray-50'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RegionButton;
