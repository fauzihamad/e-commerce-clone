import '../assets/index.css'

import logo from '../assets/img/logo.svg';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Navigation = () => {
  return (
    <div className="bg-sky-400 flex gap-12 px-32 w-full items-center py-6 whitespace-nowrap">
      <img src={logo} alt="Logo" />
      <p> Shop </p>
      <p> On Sale </p>
      <p> New Arrival </p>
      <p> Brands </p>
      <TextField
        placeholder="Search for a product ...."
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            borderRadius: '62px', // Apply 62px border-radius to the input field
            backgroundColor: '#F0F0F0', // Apply background color
            paddingLeft: '10px',
            flexGrow:1 // Adjust padding if necessary
          },
        }}
        sx={{
          borderRadius: '62px',
          // maxWidth: '600px',
        }}
      />
      <div className='flex gap-2'>
        <AddShoppingCartIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};


export default Navigation;