import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Item {
  id: number,
  quantity: number,
  title: string,
  price: number,
  image: string
}

interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: []
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action: PayloadAction<Item>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity += newItem.quantity;
      }
    },
    deleteItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)

    },
    removeFromCart: (state) => {
      state.items = [];
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

export const { addToCart, removeFromCart, deleteItemFromCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;
