import React from 'react'
import { BsStarHalf, BsStarFill, BsCart } from "react-icons/bs"
import { useEffect, useState } from "react"
import { products } from "../../product.js"
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'

const Food = ({ isCartVisible, toggleCartVisibility }) => {
    const fromLocalStorage = JSON.parse(localStorage.getItem("products"))
    const [cartItems, setCartItems] = useState(fromLocalStorage)

    if (!localStorage.getItem("products")) {
        localStorage.setItem("products", JSON.stringify({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0 }))
    }

    useEffect(() => {
        localStorage.setItem("poducts", JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (id) => {
        setCartItems(cartItems => ({ ...cartItems, [id]: cartItems[id] + 1 }))
    }
    const removeFromCart = (id) => {
        setCartItems(cartItems => ({ ...cartItems, [id]: 0 }))
    }

    const getTotalAmount = () => {
        let totalAmount = 0
        for (const key in cartItems) {
            if (cartItems[key] > 0) {
                let itemInfo = products.find(product => product.id === Number(key))
                totalAmount += Math.floor(cartItems[key]) * itemInfo.price
            }
        }
        return totalAmount.toFixed(2)
    }

    return (
        <div className="my-12 max-w-[1600px] place-items-center lg:mx-auto flex flex-col gap-12 border-15" id="food">

            {isCartVisible && (
                <div className={"z-10 fixed p-4 right-0 top-[80px] bg-primary-color w-96 h-screen overflow-y-scroll rounded-lg"}>
                    <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold">Your Order: ${getTotalAmount()}</p>
                    <button onClick={toggleCartVisibility} className="color-black py-1 px-3 text-2xl font-bold border border-white rounded-lg ">
                        X
                    </button>
                    </div>
                    
                    {products.map(product => {
                        if (cartItems[product.id] !== 0) {
                            return (
                                <div key={product.id} className="relative glass my-3 grid grid-cols-5 overflow-hidden">
                                    <img className="rounded-lg w-[100px] h-[100px] object-cover col-span-2 " src={product.productImage} alt="" />
                                    <div>
                                        <p className="text-xl font-bold pl-2">{cartItems[product.id]} x</p>
                                        <p className="product-details flex items-center space-x-4 italic">{product.productName}</p>
                                        <p>${product.price}</p>
                                    </div>


                                    <div className="absolute right-0 bottom-0 gap-2 font-bold">
                                        <button onClick={() => removeFromCart(product.id)} className="text-red-600 bg-red-300 hover:bg-red-600 hover:text-red-100 p-2 rounded">Remove</button>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            )}

            <h2 className="text-3xl p-4 w-full text-start">Food 🍔🍕🍝🥗 </h2>
            <div className="grid lg:grid-cols-4 place-items-center gap-6">
                {products.map(product => (
                    <div key={product.id} className="w-[290px] p-5 bg-white rounded-lg glass transition-all duration-200 hover:scale-110">
                        <img className="rounded-lg w-[290px] h-[220px] object-cover" src={product.productImage} alt="img" />
                        <div className="flex flex-row flex-wrap justify-between items-center mt-5 gp-3">
                            <h2 className="font-semibold text-xl">{product.productName}</h2>
                            <div className="flex">
                                <BsStarFill className="text-brightcolor" />
                                <BsStarFill className="text-brightcolor" />
                                <BsStarFill className="text-brightcolor" />
                                <BsStarFill className="text-brightcolor" />
                                <BsStarFill className="text-brightcolor" />
                            </div>
                            <h3 className="font-semibold text-lg">${product.price}</h3>
                            <button onClick={() => { if ( !isCartVisible) {toggleCartVisibility()}; addToCart(product.id) }} className="p-3 text-2xl w-14 rounded-xl bg-orange-400 hover:bg-orange-800"><BsCart className="mx-auto" /></button>
                            {cartItems[product.id] > 0 && <div className="absolute flex items-center justify-center top-5 left-5 bg-green-600 font-bold rounded-lg h-12 w-12">{cartItems[product.id]}</div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food