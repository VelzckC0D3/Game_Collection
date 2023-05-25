import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ categoryName, handleGoBack }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(categoryName || 'Games');
  }, [categoryName]);

  return (
    <header>
      <h1>{title}</h1>
      {categoryName && handleGoBack && (
        <button type="button" onClick={handleGoBack}>
          Go Back
        </button>
      )}
    </header>
  );
};

Header.propTypes = {
  categoryName: PropTypes.string,
  handleGoBack: PropTypes.func,
};

Header.defaultProps = {
  categoryName: '',
  handleGoBack: null,
};

export default Header;
