import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../style/Header.css';
import { GoGear } from 'react-icons/go';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineLeft } from 'react-icons/ai';

const Header = ({ categoryName, handleGoBack }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(categoryName || 'Game Collection');
  }, [categoryName]);

  return (
    <header id="headerCont" className="headerCont">
      <div className="headerIcons">
        <GoGear className="headerIcon" />
        <FaMicrophone className="headerIcon" />
      </div>
      <p className="headerTitle">
        {title}
      </p>
      {categoryName && handleGoBack && (
        <button className="goBack" type="button" onClick={handleGoBack}>
          <AiOutlineLeft className="goBackIcon" />
          <h2>
            Back
          </h2>
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
