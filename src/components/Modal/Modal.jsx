// import propTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Modal.module.css';


export class Modal extends Component {
  state = {  } 
  render() { 
    return (<div className={css.Overlay}>
  <div className={css.Modal}>
    <img src="#" alt="" />
  </div>
</div> );
  }
};
 

