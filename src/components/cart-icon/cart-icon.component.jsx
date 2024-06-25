import React, {useContext} from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {CartContext} from "../../context/cart.context";
import {CartIconWrapper, ItemCount} from "./cart-icon.styles";

const CartIcon = () => {
    const {setIsCartOpen} = useContext(CartContext)
    const {cartCount} = useContext(CartContext);

    return (
        <CartIconWrapper onClick={() => setIsCartOpen(prevIsCartOpen => !prevIsCartOpen)}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconWrapper>
    );
};

export default CartIcon;