import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice(
    {
        name: 'userData',
        initialState: {
            userInfo: 'gowtham',
        },
        reducers: {
            setUserInfo: (state, action) => {
                state.userInfo = action.payload
            },
        },
    },
)

export const { setUserInfo } = userSlice.actions

export default userSlice.reducer