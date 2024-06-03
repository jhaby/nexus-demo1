"use client"

import { shopItems } from "./data";
import ProductDetails from "./details/details";

export default function Shop() {
    return (
        <div className="flex flex-wrap">
            <div className="bg-white rounded-md p-4 mb-4 flex justify-between w-full">
                <div className="flex gap-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-indigo-600">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                    </svg>
                    <h2 className="text-2xl font-bold text-gray-800">Shop healthcare products</h2>
                </div>
                <div class="relative flex items-center mt-2">
                    <span class="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>

                    </span>

                    <input type="search" placeholder="Find product" class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
            </div>
            <div className="w-2/12">
                <div className="w-full p-2">
                    <fieldset>
                        <legend className="text-lg font-semibold leading-6 text-gray-900">Select category</legend>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-everything"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                    Pain relief
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-email"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cold and Flu remedies
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-nothing"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                    First aid supplies
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-nothing"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                    Vitamins and supplements
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-nothing"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                    Skin care
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-nothing"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                    Antibiotics
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="push-nothing"
                                    name="push-notifications"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                                    Diabetes treatments
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className="flex w-10/12 bg-white py-8 justify-center flex-wrap gap-y-8 gap-x-8">
                {shopItems.map((item, index) => (
                    <div key={index} class="w-1/5 max-w-xs overflow-hidden bg-white hover:border rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800">
                        <img class="object-cover w-full h-40" src={item.thumbnailUrl} alt="avatar" />

                        <div class="py-2 text-center">
                            <a href="#" class="block text-gray-800 dark:text-white" tabIndex="0" role="link">{item.productName}</a>
                            <div className="flex items-center justify-center flex-wrap gap-x-3">
                                <span className="text-sm text-gray-700 italic">{item.store}</span>
                                {/* <div className="flex items-center">
                                    <span className="text-sm text-gray-700 italic">4.5</span>
                                    <svg class="w-5 h-5 text-yellow-400 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>
                                </div> */}
                            </div>

                            {/* <div class="flex w-full justify-center mt-1 items-center">
                                <svg class="w-5 h-5 text-yellow-400 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>

                                <svg class="w-5 h-5 text-yellow-400 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>

                                <svg class="w-5 h-5 text-yellow-400 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>

                                <svg class="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>

                                <svg class="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </div> */}
                            <div className="flex flex-col gap-y-2 items-center py-2 px-4">
                                <h2 className="font-bold text-lg">UGX {item.price.toLocaleString()}</h2>
                                <ProductDetails product={item} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}