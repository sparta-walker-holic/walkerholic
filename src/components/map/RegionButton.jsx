const RegionButton = ({ children, onClick }) => {
  return (
    <button
      className='border border-gray-800 rounded-xl h-[40px]'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RegionButton;
