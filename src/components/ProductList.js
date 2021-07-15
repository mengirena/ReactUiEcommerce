import React, { Component } from 'react';
import Product from './Product'

class ProductList extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h3>Hello from ProductList</h3>
                <Product />
            </div>
         );
    }
}
 
export default ProductList;