import React from 'react';
import ProductTable from './ProductTable.jsx';


class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;