import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
} from '../actions/productActions';

const initialState = {
    item: [],
    loading: false,
    error: null,
    createLoading: false,
    updateLoading: false,
    deleteLoading: false
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                createLoading: true
            };
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                createLoading: false,
                item: [...state.item, action.payload]
            };
        case CREATE_PRODUCT_FAILURE:
            return {
                ...state,
                createLoading: false,
                error: action.payload
            };
        case UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                updateLoading: true
            };
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                updateLoading: false,
                item: state.item.map(product =>
                    product.id === action.payload.id ? action.payload : product
                )
            };
        case UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
                updateLoading: false,
                error: action.payload
            };
        case DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                deleteLoading: true
            };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                deleteLoading: false,
                item: state.item.filter(product => product._id !== action.payload)
            };
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                deleteLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}