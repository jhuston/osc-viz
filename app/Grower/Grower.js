import React from 'react'
import styles from './style.css'
import CSSModules from 'react-css-modules';

const Grower = ({name}) => {

  return (
    <div id="grower" styleName="root">
      {name}
    </div>
  )
};

export default CSSModules(Grower, styles);
