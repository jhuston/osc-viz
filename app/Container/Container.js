import React from 'react'
import styles from './style.css'
import CSSModules from 'react-css-modules';
import Hello from '../Hello/Hello'
import Grower from '../Grower/Grower'

const Container = ({props}) => {

  return (
    <div styleName="root">
      <Hello content="first content" />
      <Grower name="some name" />
    </div>
  )
};

export default CSSModules(Container, styles);
