import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        theme: 'Dark',
        erro: false
    },
    reducers: {
        changeName: (state, action) => {
            state.theme = action.payload
        }
    }
})
console.log(userSlice)

export default userSlice.reducer
export const { changeName } = userSlice.actions