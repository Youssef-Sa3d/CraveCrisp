import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem._id || item.id === newItem.id)
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem._id,
                    name: newItem.name,
                    price: newItem.price,
                    image: newItem.image,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id)
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id != id)
            } else {
                existingItem.quantity--
            }

        },
        resetCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
})

export const cartAction = cartSlice.actions
export default cartSlice;
