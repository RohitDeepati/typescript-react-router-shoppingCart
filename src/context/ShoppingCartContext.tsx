import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type shoppingCartProviderProps = {
    children: ReactNode
}

type shoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: cartItem[]
}

type cartItem = {
    id: number
    quantity: number
}

export const shoppingCartContext = createContext({
} as shoppingCartContext)

export const useShoppingCart = () => {
    return useContext(shoppingCartContext)
}



export const ShoppingCartProvider = ({ children }: shoppingCartProviderProps) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<cartItem[]>("shopping-cart", [])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsCartOpen(true)
    const closeCart = () => setIsCartOpen(false)

    const getItemQuantity = (id: number) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = (id: number) => {
        setCartItems((prevItems) => {
            if (prevItems.find((item) => item.id === id) == null) {
                return [...prevItems, { id, quantity: 1 }]
            } else {
                return prevItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id: number) => {
        setCartItems((prevItems) => {
            if (prevItems.find((item) => item.id === id)?.quantity === 1) {
                return prevItems.filter((item) => item.id !== id)
            } else {
                return prevItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems((prevItems) => {
            return prevItems.filter((item) => item.id !== id)
        })
    }


    return (
        <shoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart }}>
            {children}
            <ShoppingCart isCartOpen={isCartOpen} />
        </shoppingCartContext.Provider>
    )
}