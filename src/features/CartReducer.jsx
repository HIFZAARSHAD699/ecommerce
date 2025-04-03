export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0);
  };
  
  export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price, 0);
  };
  
  const CartReducer = (state, action) => {
    switch (action.type) {
      case "add":
        // If item is already in cart, increase quantity instead of adding duplicate
        const existingProductIndex = state.findIndex((p) => p.id === action.product.id);
        if (existingProductIndex !== -1) {
          return state.map((product, index) =>
            index === existingProductIndex
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
        } else {
          return [...state, { ...action.product, quantity: 1 }];
        }
  
      case "Remove":
        return state.filter((p) => p.id !== action.id);
  
      case "Increase":
        return state.map((product) =>
          product.id === action.id ? { ...product, quantity: product.quantity + 1 } : product
        );
  
      case "Decrease":
        return state.map((product) =>
          product.id === action.id && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
  
      default:
        return state;
    }
  };
  
  export default CartReducer;
  