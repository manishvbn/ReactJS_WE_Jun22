import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as productActions from '../../actions/productActions';
import LoaderAnimation from '../../components/common/LoaderAnimation';
import AddProductButton from '../../components/products/AddProductButton';
import ProductListComponent from '../../components/products/ProductListComponent';

class ProductsContainer extends Component {
    render() {
        return (
            <>
                {
                    this.props.flag ?
                        <>
                            <div className='mt-3 mb-3'>
                                <AddProductButton />
                            </div>
                            <ProductListComponent products={this.props.products} />
                        </>
                        : <LoaderAnimation />
                }
            </>
        );
    }

    componentDidMount() {
        this.props.loadProducts();
    }
}

function mapStateToProps(state) {
    return {
        products: state.productReducer.products,
        status: state.productReducer.status,
        flag: state.productReducer.flag
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: () => { dispatch(productActions.loadProducts()); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);