import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            state.items.push({ productId, quantity })
        },
        removeFromCart(state, action) {
            const productId = action.payload
            state.items = state.items.filter(item => item.id !== productId)
        }
    }
})

export const { addToCart } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;