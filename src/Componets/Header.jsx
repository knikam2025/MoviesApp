import React from 'react';

const Header = ({ setSelectedCategory }) => {
  const categories = ['All', 'Action', 'Comedy', 'Horror', 'Drama', 'Sci-Fi'];

  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img src="fancode.png" alt="MoviesFix Logo" className='header-logo-img' />
      </div>

      <div className='header-categories'>
        <ul className='header-category-list'>
          {categories.map((category) => (
            <li
              key={category}
              className='header-category-item'
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
