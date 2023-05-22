import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            // jo bhi input parameter send kia h usse action.payload ke through access kar skte h
            state.push(action.payload);
        },
        remove: (state, action) => {
            // state ke andar wohi items ko retain karna jinki id input  id se diff ho
            return state.filter((item) => item.id !== action.payload);
        }
    }
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;