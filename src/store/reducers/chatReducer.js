import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import api from "../../api/api"

export const add_friend = createAsyncThunk(
    'chat/add_friend',
    async(info ,{rejectWithValue, fulfillWithValue}) => {
        try {
            const {data} = await api.post('/chat/customer/add-customer-friend', info)
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
//End Method

export const send_message = createAsyncThunk(
    'chat/send_message',
    async(info ,{rejectWithValue, fulfillWithValue}) => {
        try {
            const {data} = await api.post('/chat/customer/send-message-seller', info)
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
//End Method


export const chatReducer = createSlice({
    name: "chat",
    initialState: {
        my_friends: [],
        fd_messages: [],
        currentFd: '',
        errorMessage: '',
        successMessage: '',
    },
    reducers: {
        messageClear : (state,_) => {
            state.errorMessage = ''
            state.successMessage = ''   
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(add_friend.fulfilled, (state,{payload}) => {
            state.my_friends = payload.MyFriends
            state.currentFd = payload.currentFd
            state.fd_messages = payload.messages
        })
        .addCase(send_message.fulfilled, (state,{payload}) => {
            let tempFriends = state.my_friends
            let index = tempFriends.findIndex(f => f.fdId === payload.message.recieverId)
            while(index > 0) {
                let temp = tempFriends[index]
                tempFriends[index] = tempFriends[index - 1]
                tempFriends[index -1 ] = temp
                index--
            }
            state.my_friends = tempFriends
            state.fd_messages = [...state.fd_messages, payload.message]
            state.successMessage = 'Message Sent Successfully'
        })
    }

})

export const {messageClear} = chatReducer.actions
export default chatReducer.reducer