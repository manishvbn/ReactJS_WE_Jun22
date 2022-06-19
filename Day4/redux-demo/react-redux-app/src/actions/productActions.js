import * as actionTypes from './actionTypes';

import productAPIClient from '../services/product-api-client';
import history from '../utilities/history';

function loadProductsRequested(msg) {
    return {
        type: actionTypes.LOAD_PRODUCTS_REQUESTED,
        payload: { message: msg, flag: false }
    };
}

function loadProductsSuccess(products, msg) {
    return {
        type: actionTypes.LOAD_PRODUCTS_SUCCESS,
        payload: { data: products, message: msg, flag: true }
    };
}

function loadProductsFailed(msg) {
    return {
        type: actionTypes.LOAD_PRODUCTS_FAILED,
        payload: { message: msg, flag: true }
    };
}

export function loadProducts() {
    return function (dispatch) {
        dispatch(loadProductsRequested("Products Request Started..."));

        productAPIClient.getAllProducts().then(products => {
            setTimeout(() => {
                dispatch(loadProductsSuccess(products, "Products Request Completed..."));
            }, 5000);
        }).catch(eMsg => {
            dispatch(loadProductsFailed(eMsg));
        });
    }
}

// // ----------------------------------------------------------- INSERT With Callback
// function insertProductsSuccess(product, msg) {
//     return {
//         type: actionTypes.INSERT_PRODUCT_SUCCESS,
//         payload: { data: product, message: msg, flag: true }
//     };
// }

// export function insertProduct(product, onSuccess) {
//     return function (dispatch) {
//         // TO DO - Insert Requested

//         productAPIClient.insertProduct(product).then(insertedProduct => {
//             dispatch(insertProductsSuccess(insertedProduct, "Product Inserted Successfully..."));
//             onSuccess();
//         }).catch(eMsg => {
//             console.error(eMsg);
//             // TO DO - Insert Failed
//         });
//     }
// }

// // ----------------------------------------------------------- UPDATE With Callback
// function updateProductsSuccess(product, msg) {
//     return {
//         type: actionTypes.UPDATE_PRODUCT_SUCCESS,
//         payload: { data: product, message: msg, flag: true }
//     };
// }

// export function updateProduct(product, onSuccess) {
//     return function (dispatch) {
//         // TO DO - Update Requested

//         productAPIClient.updateProduct(product).then(updatedProduct => {
//             dispatch(updateProductsSuccess(updatedProduct, "Product Updated Successfully..."));
//             onSuccess();
//         }).catch(eMsg => {
//             console.error(eMsg);
//             // TO DO - Update Failed
//         });
//     }
// }

// ----------------------------------------------------------- INSERT With History
function insertProductsSuccess(product, msg) {
    return {
        type: actionTypes.INSERT_PRODUCT_SUCCESS,
        payload: { data: product, message: msg, flag: true }
    };
}

export function insertProduct(product) {
    return function (dispatch) {
        // TO DO - Insert Requested

        productAPIClient.insertProduct(product).then(insertedProduct => {
            dispatch(insertProductsSuccess(insertedProduct, "Product Inserted Successfully..."));
            history.push('/products');
        }).catch(eMsg => {
            console.error(eMsg);
            // TO DO - Insert Failed
        });
    }
}

// ----------------------------------------------------------- UPDATE With History
function updateProductsSuccess(product, msg) {
    return {
        type: actionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: { data: product, message: msg, flag: true }
    };
}

export function updateProduct(product) {
    return function (dispatch) {
        // TO DO - Update Requested

        productAPIClient.updateProduct(product).then(updatedProduct => {
            dispatch(updateProductsSuccess(updatedProduct, "Product Updated Successfully..."));
            history.push('/products');
        }).catch(eMsg => {
            console.error(eMsg);
            // TO DO - Update Failed
        });
    }
}

// ----------------------------------------------------------- DELETE

function deleteProductsSuccess(product, msg) {
    return {
        type: actionTypes.DELETE_PRODUCT_SUCCESS,
        payload: { data: product, message: msg, flag: true }
    };
}

export function deleteProduct(product) {
    return function (dispatch) {
        // TO DO - Delete Requested

        productAPIClient.deleteProduct(product).then(_ => {
            dispatch(deleteProductsSuccess(product, "Product Deleted Successfully..."));
        }).catch(eMsg => {
            console.error(eMsg);
            // TO DO - Delete Failed
        });
    }
}
