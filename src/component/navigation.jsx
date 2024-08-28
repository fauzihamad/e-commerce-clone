import '../assets/index.css'

import logo from '../assets/img/logo.svg';
import SearchIcon from '../assets/img/search-icon.svg';

const Navigation = () => {
  return (
    <div className="bg-red flex gap-6 mx-32 w-full items-center py-6">
      <img src={logo} alt="Logo" />
      <p> Shop </p>
      <p> On Sale </p>
      <p> New Arrival </p>
      <p> Brands </p>
      <div className='bg-[#F0F0F0] rounded-[62px] p-3 flex gap-4 flex-shrink'>
        <img src={SearchIcon} />
        <p> Search for a product ....</p>
      </div>
    </div>
  );
};


export default Navigation;