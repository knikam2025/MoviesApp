import React from 'react';

const Header = () => {
  return (
    <div className='bg-slate-800 text-white m-0 w-full p-2'>
      <div className='flex justify-center'>
        <img src="fancode.png" alt="MoviesFix Logo" className='w-[30%] sm:w-[20%] md:w-[15%]' />
      </div>

      <div className='overflow-x-auto'>
        <ul className='flex space-x-2 p-5'>
          <li className='bg-slate-500 p-2 rounded-lg text-xs md:text-4xl hover:bg-red-500 flex-shrink-0 w-[18%]'>
            All
          </li>
          <li className='bg-slate-500 p-2 rounded-lg text-xs md:text-4xl hover:bg-red-500 flex-shrink-0 w-[18%]'>
            Action
          </li>
          <li className='bg-slate-500 p-2 rounded-lg text-xs md:text-4xl hover:bg-red-500 flex-shrink-0 w-[18%]'>
            Comedy
          </li>
          <li className='bg-slate-500 p-2 rounded-lg text-xs md:text-4xl hover:bg-red-500 flex-shrink-0 w-[18%]'>
            Horror
          </li>
          <li className='bg-slate-500 p-2 rounded-lg text-xs md:text-4xl hover:bg-red-500 flex-shrink-0 w-[18%]'>
            Drama
          </li>
          <li className='bg-slate-500 p-2 rounded-lg text-xs md:text-4xl hover:bg-red-500 flex-shrink-0 w-[18%]'>
            Sci-Fi
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
