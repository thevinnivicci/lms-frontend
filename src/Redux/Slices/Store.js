import { configureStore } from '@reduxjs/toolkit'
import authSliceReducers from './AuthSlice'

const store = configureStore({
    reducer: {
        auth: authSliceReducers
    },
    devTools: true
})

export default store