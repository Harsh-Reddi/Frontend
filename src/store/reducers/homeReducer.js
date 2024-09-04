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
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
//End Method

export const homeReducer = createSlice({
    name: "home",
    initialState: {
        categories : [],
        products : [],
        latest_product: [],
        topRated_product: [],
        discount_product: []
    },
    reducers: {

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
    }

})

export default homeReducer.reducer