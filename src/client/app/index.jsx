import React from 'react';
import {render} from 'react-dom';
import FilterableProductTable from './FilterableProductTable.jsx';
import PRODUCTS from './products.js';

class App extends React.Component {
  render () {
    return (
    	<div> 
    		<FilterableProductTable products={PRODUCTS} />
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));