import React from 'react'
import styles from './style.css'
import CSSModules from 'react-css-modules';
import Hello from '../Hello/Hello'

const Container = ({props}) => {

  return (
    <div styleName="root">
      <Hello content="first content" />
    </div>
  )
};

export default CSSModules(Container, styles);
