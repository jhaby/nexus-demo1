"use client"

import { useState } from 'react'
import { shoppingCartItems } from './data'
import CheckoutPanel from './checkout/checkoutDialog'
import { useRouter } from 'next/navigation';

function calculateTotalPrice(cart) {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  }

export default function ShoppingCart() {
    const [total, setTotal] = useState(calculateTotalPrice(shoppingCartItems))
    const router = useRouter()
    return (
        <div className='bg-white w-8/12 p-8'>
            <h2 className="text-3xl font-semibold mb-5">Shopping Cart</h2>
            <ul role="list" className="divide-y divide-gray-100">
                {shoppingCartItems.map((item, index) => (
                    <li key={index} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-24 w-auto flex-none border p-2 rounded bg-gray-50" src={item.thumbnailUrl} alt="" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{item.title}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Unit price: Ugx. {item.price}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">Store: {item.orderedFrom}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">UGX {item.price * item.quantity}</p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                Qty: {item.quantity}
                            </p>
                            <button className='border py-1 px-2 mt-4 text-gray-500 hover:bg-indigo-600 hover:text-white rounded text-xs'>
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
                <li>
                    <div className='flex justify-end'>
                        <h2 className='text-xl font-semibold'>Total: UGX {total.toLocaleString()}</h2>
                    </div>
                </li>
            </ul>

            <div className='flex mt-5 justify-end w-full gap-x-4'>
                <button onClick={()=> router.push("/shop")}
                className='flex gap-x-2 bg-transparent border border-gray-400 text-gray-700 py-2 px-3 rounded '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                    </svg>

                    Back to shopping
                </button>
                <CheckoutPanel cart={total} />
            </div>
        </div>
    )
}
