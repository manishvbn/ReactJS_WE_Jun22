import React, { Component } from 'react';
import { Link, Outlet, Route, useParams } from 'react-router-dom';

import './ProductsComponent.css';

class ProductsComponent extends Component {
    render() {
        return (
            <div>
                <h1 className="text-primary text-center">Products Component</h1>
                <div className="row mt-5">
                    <div className="col">
                        <div className="graybox">
                            <ul className="list-group">
                                {
                                    this.props.productsData.map(product => (
                                        <li key={product.id} className="list-group-item">
                                            <Link to={`${product.id}`}>{product.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <Outlet />
                    </div>
                </div>
            </div>
        );
    }
}

export const ProductNotSelectedComponent = () => {
    return (
        <h2 className="text-warning">Please select a product</h2>
    );
}

export const ProductDetailsComponent = ({ data }) => {
    let { productId } = useParams();

    let product = data.find(p => p.id === parseInt((productId)));

    let productView;

    if (product) {
        productView = (
            <>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4 className={product.status === 'Available' ? 'text-success' : 'text-danger'}>{product.status}</h4>
            </>
        );
    } else {
        productView = (<h3 className="text-danger">Product not found.</h3>);
    }

    return (
        <>
            <h2 className="text-warning">Product Details</h2>
            {productView}
        </>
    );
}

export default ProductsComponent;