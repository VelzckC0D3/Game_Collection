import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import CategoryButtons from './CategoryButtons';
import '../style/Home.css';

const Home = ({ handleCategoryChange }) => {
  const filteredCategories = ['shooter', 'strategy', 'card', 'fighting', 'mmorpg', 'moba', 'racing', 'mmo', 'sports', 'social'];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // eslint-disable-next-line max-len
  const filteredCategoriesBySearch = filteredCategories.filter((category) => category.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="categoriesCont" data-testid="home-1">
      <div className="heroCont">
        <div className="hero">
          <h2 className="heroTitle">Discover Endless Joy through Gaming!</h2>
          <p className="heroText">
            Embark on a journey of joy and entertainment with our diverse
            range of games. From nostalgic classics to cutting-edge experiences,
            our collection is bound to keep you smiling and engaged for hours on end.
          </p>
          <div className="searchBar">
            <input
              className="searchGame"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <AiOutlineSearch className="searchIcon" />
            <p className="currentGame">
              {`(${filteredCategoriesBySearch.length})`}
              {' '}
              Categories Found
            </p>
          </div>
        </div>
      </div>
      {filteredCategoriesBySearch.map((category) => (
        <CategoryButtons
          key={category}
          category={category}
          handleCategoryChange={handleCategoryChange}
        />
      ))}
    </div>
  );
};

Home.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
};

export default Home;
