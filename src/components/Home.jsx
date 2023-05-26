import React from 'react';
import PropTypes from 'prop-types';
import CategoryButtons from './CategoryButtons';
import '../style/Home.css';

const Categories = ({ handleCategoryChange }) => {
  const filteredCategories = ['shooter', 'strategy', 'fighting', 'mmorpg', 'sports', 'racing', 'moba', 'mmo', 'card game'];
  const categoryNumber = filteredCategories.length;

  return (
    <div className="categoriesCont">
      <div className="heroCont">
        <div className="hero">
          <h2 className="heroTitle">Discover Endless Joy through Gaming!</h2>
          <p className="heroText">
            Embark on a journey of joy and entertainment with our diverse
            range of games. From nostalgic classics to cutting-edge experiences,
            our collection is bound to keep you smiling and engaged for hours on end.
          </p>
          <p className="heroSubtitle">
            {`(${categoryNumber})`}
            {' '}
            Categories Found
          </p>
        </div>
      </div>
      {filteredCategories.map((category) => (
        <CategoryButtons
          key={category}
          category={category}
          handleCategoryChange={handleCategoryChange}
        />
      ))}
    </div>
  );
};

Categories.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
};

export default Categories;
