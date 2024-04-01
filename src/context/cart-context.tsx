import React, { useState, ReactNode, useContext, createContext, useEffect, useMemo } from 'react'
import { TProduct } from '../utils/products'

type TShoppingCartContextProps = {
    children: ReactNode
}
type TShoppingCartContext = {
    increaseQuantity: any
    decreaseQuantity: any
    cartQuantity: number
    deleteFromLocalStorage: any
}

export const ShoppingCartContext = createContext({} as TShoppingCartContext)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }: TShoppingCartContextProps) => {
    const initialCartItem = localStorage.getItem('cartItem');
    const [cartItem, setCartItem] = useState(initialCartItem ? JSON.parse(initialCartItem!) : []);
    const [cartQuantity, setCartQuantity] = useState(() => {
        const parsedInitialCartItem = initialCartItem ? JSON.parse(initialCartItem) : [];
        const totalQuantity = parsedInitialCartItem.reduce((sum: any, item: { quantity: any }) => sum + item.quantity, 0);
        return totalQuantity;
    });

    useEffect(() => {
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
        const totalQuantity = cartItem.reduce((sum: any, item: { quantity: any }) => sum + item.quantity, 0);
        setCartQuantity(totalQuantity);
    }, [cartItem]);
    const increaseQuantity = (product: TProduct) => {
        const existingProduct = cartItem.find((item: { id: number; }) => item.id === product.id);
        if (existingProduct) {
            const updatedCart = cartItem.map((item: { id: number; quantity: number; }) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,

            );
            setCartItem(updatedCart);

        } else {
            setCartItem([...cartItem, { ...product, quantity: 1 }]);
        }
    };
    const decreaseQuantity = (product: TProduct) => {
        const currentProduct = cartItem.find((item: { id: number; }) => item.id === product.id);
        if (currentProduct.quantity > 1) {
            const updatedCart = cartItem.map((item: { id: number; quantity: number; }) =>
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item,
                console.log('Сработало, должно быть >1')
            );
            setCartItem(updatedCart);
        }
        else if (cartItem.find((item: { id: number }) => item.id === product.id)?.quantity === 1) {
            const updatedCartAfterDelete = cartItem.filter((item: { id: number }) => item.id !== product.id)
            setCartItem(updatedCartAfterDelete);
        }
    }

    const deleteFromLocalStorage = (product: TProduct) => {

        const cartStorageFilter = cartItem.filter((item: { id: number }) => {
            return item.id !== product.id
        })
        setCartItem(cartStorageFilter)

        localStorage.setItem("cartItem", JSON.stringify(cartStorageFilter))
        console.log(cartStorageFilter)
    }
    return (
        <ShoppingCartContext.Provider
            value={{
                // getItemQuantity,
                increaseQuantity,
                decreaseQuantity,
                // cartItems,
                cartQuantity,
                deleteFromLocalStorage,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}