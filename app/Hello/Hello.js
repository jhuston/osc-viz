import React from 'react'
import styles from './style.css'
import CSSModules from 'react-css-modules';

const Hello = ({content}) => {
  const sayHi = (event) => {
    console.log("hello");
  };

  return (
    <div styleName='root'>
      <span onClick={sayHi}>{content}</span>
    </div>
  )
};

export default CSSModules(Hello, styles);
