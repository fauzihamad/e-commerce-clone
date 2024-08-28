import '../assets/index.css'

export default function Headers() {
  return <div className="bg-black grid grid-cols-3 items-center py-2 w-full px-32">
     <p className='col-span-1'></p>
     <p className="text-white text-center col-span-1">Sign up and get 20% off to your first order.<span className='font-bold underline ml-2'> Sign Up Now </span></p>
     <p className='justify-self-end text-white col-span-1'>X</p>
  </div>;
}

