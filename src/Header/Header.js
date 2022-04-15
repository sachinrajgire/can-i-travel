import * as React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

export default function Header(props) {
    const {customClass} = props
    return (
        <div className={customClass}>
        <img src="https://i.postimg.cc/G3Y23t93/logo3-Copy.png" alt="Website Logo"/> 
        </div>
        
    )
}
// style={{color:`${colorTest}`}}

Header.defaultProps = {
    customClass: "header-class",
}

Header.propTypes={
    customClass: PropTypes.string.isRequired,
}