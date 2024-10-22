import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_category = createAsyncThunk(
    'product/get_category',
    async(_,{rejectWithValue, fulfillWithValue}) => {
        try {
            const {data} = await api.get('/home/get-categories')
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
//End Method

export const get_products = createAsyncThunk(
    'product/get_products',
    async(_,{rejectWithValue, fulfillWithValue}) => {
        try {
            const {data} = await api.get('/home/get-products')
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
//End Method

export const price_range_products = createAsyncThunk(
    'product/price_range_products',
    async(_,{rejectWithValue, fulfillWithValue}) => {
        try {
            const {data} = await api.get('/home/price-range-latest-products')
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
//End Method

export const query_products = createAsyncThunk(
    'product/query_products',
    async(query ,{rejectWithValue, fulfillWithValue}) => {
        try {
            const {data} = await api.get(`/home/query-products?category=${query.category}&&rating=${query.rating}
            &&lowPrice=${query.low}&&highPrice=${query.high}&&sortPrice=${query.sortPrice}&&pageNumber=${query.pageNumber}&&searchValue=${query.searchValue ? query.searchValue : ''}`)
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
//End Method

export const product_details = createAsyncThunk(
    'product/product_details',
    async(slug,{rejectWithValue, fulfillWithValue}) => {
        try {
            const {data} = await api.get(`/home/product-details/${slug}`)
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
//End Method

export const customer_review = createAsyncThunk(
    'review/customer_review',
    async(info,{fulfillWithValue}) => {
        try {
            const {data} = await api.post('/home/customer/submit-review', info)
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.response)
        }
    }
)
//End Method

export const homeReducer = createSlice({
    name: "home",
    initialState: {
        categories : [],
        products : [],
        totalProduct : 0,
        parPage: 3,
        latest_product: [],
        topRated_product: [],
        discount_product: [],
        priceRange : {
            low: 0,
            high: 100
        },
        product: {},
        relatedProducts: [],
        moreProducts: [],
        errorMessage: '',
        successMessage: '',
        totalReview: 0,
        rating_review: [],
        reviews: []
    },
    reducers: {
        messageClear : (state,_) => {
            state.errorMessage = ''
            state.successMessage = ''   
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(get_category.fulfilled, (state, {payload}) => {
            state.categories = payload.categories
        })
        .addCase(get_products.fulfilled, (state, {payload}) => {
            state.products = payload.products
            state.latest_product = payload.latest_product
            state.topRated_product = payload.topRated_product
            state.discount_product = payload.discount_product
        })
        .addCase(price_range_products.fulfilled, (state, {payload}) => {
            state.latest_product = payload.latest_product
            state.priceRange = payload.priceRange
        })
        .addCase(query_products.fulfilled, (state, {payload}) => {
            state.products = payload.products
            state.totalProduct = payload.totalProduct
            state.parPage = payload.parPage
        })
        .addCase(product_details.fulfilled, (state, {payload}) => {
            state.product = payload.product
            state.moreProducts = payload.moreProducts
            state.relatedProducts = payload.relatedProducts
        })
        .addCase(customer_review.fulfilled, (state, {payload}) => {
            state.successMessage = payload.message
        })
    }

})

export const {messageClear} = homeReducer.actions
export default homeReducer.reducer