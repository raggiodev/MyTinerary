import React from 'react';
// import PropTypes from 'prop-types'

const Icon = ({icon, fn}) => {
  return (
      <img className="icon" onClick={()=> fn()} src={icon}/>
  )
}

export default Icon;