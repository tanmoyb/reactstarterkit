import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import ProductData from '../public/ProductData';
import CartAPI from 'CartAPI';
import FluxCartApp  from './components/FluxCartApp.react';


// load the Product data form the localStorage
ProductData.init();

// load the mock APi call

CartAPI.getProductData();





render(<FluxCartApp  />, document.getElementById('root'));
