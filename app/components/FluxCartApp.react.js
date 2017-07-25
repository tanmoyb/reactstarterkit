import React, { Component, PropTypes } from 'react';


import CartStore from '../Stores/CartStore';
import ProductStore from '../Stores/ProductStore';
import FluxProduct from './FluxProduct.react';

import FluxCart from './FluxCart';


// Method to retrieve state from the Stores

function getCartState() {
return {
   product: ProductStore.getProduct(),
   selectedProduct:ProductStore.getSelected(),
   cartItems:CartStore.getCartItems(),
   cartCount:CartStore.getCartCount(),
   cartTotal:CartStore.getCartTotal(),
   cartVisible: CartStore.getCartVisible()
};
}
