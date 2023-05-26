import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ handleCategoryChange }) => {
  const filteredCategories = ['shooter', 'strategy', 'fighting', 'mmorpg', 'sports', 'racing'];

  return (
    <div>
      {filteredCategories.map((category) => (
        <div key={category} className="category-button">
          <button type="button" onClick={() => handleCategoryChange(category)}>{category}</button>
        </div>
      ))}
    </div>
  );
};

Categories.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
};

export default Categories;
