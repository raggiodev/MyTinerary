import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ fn, icon }) => {
  return (
    <div className="icon" onClick={fn}>
      <img src={icon} alt="Icon" />
    </div>
  );
};

Icon.propTypes = {
  fn: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Icon;