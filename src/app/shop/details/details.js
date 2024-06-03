/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, Radio, RadioGroup, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails({ product }) {
    const [open, setOpen] = useState(false)
    const [qty, setQty] = useState(1)

    return (
        <>
            <button onClick={() => setOpen(true)}
                className="flex gap-x-4 w-full justify-center rounded bg-indigo-700 hover:bg-orange-400 text-white py-2 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                BUY
            </button>

            <Transition show={open}>
                <Dialog className="relative z-10" onClose={setOpen}>
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            >
                                <DialogPanel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <button
                                            type="button"
                                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                                <img src={product.thumbnailUrl} alt={product.productName} className="object-cover object-center" />
                                            </div>
                                            <div className="sm:col-span-8 lg:col-span-7">
                                                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.productName}</h2>

                                                <section aria-labelledby="information-heading" className="mt-2">
                                                    <h3 id="information-heading" className="sr-only">
                                                        Product information
                                                    </h3>
                                                    <p>{product.description}</p>
                                                    <p className='mt-3 text-gray-500'>Store: {product.store}</p>

                                                    <p className="text-2xl mt-5 text-gray-900">UGX {(product.price * qty).toLocaleString()}</p>
                                                    <div class="flex items-center w-6/12 mt-2">
                                                        <p class="py-2.5 px-3 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">QTY</p>
                                                        <input type="number" 
                                                        placeholder={qty} 
                                                        onChange={(e) => setQty(Number(e.value))}
                                                        class="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                                    </div>
                                                    {/* Reviews */}
                                                    <div className="mt-6">
                                                        <h4 className="sr-only">Reviews</h4>
                                                        <div className="flex items-center">
                                                            <div className="flex items-center">
                                                                {[0, 1, 2, 3, 4].map((rating) => (
                                                                    <StarIcon
                                                                        key={rating}
                                                                        className={classNames(
                                                                            product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                                                            'h-5 w-5 flex-shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                ))}
                                                            </div>
                                                            <p className="sr-only">{3} out of 5 stars</p>
                                                            <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                {product.reviewCount} reviews
                                                            </a>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section aria-labelledby="options-heading" className="mt-10">
                                                    <h3 id="options-heading" className="sr-only">
                                                        Product options
                                                    </h3>

                                                    <form>
                                                        {/* Colors */}
                                                        {/* <fieldset aria-label="Choose a color">
                                                            <legend className="text-sm font-medium text-gray-900">Color</legend>

                                                            <RadioGroup
                                                                value={selectedColor}
                                                                onChange={setSelectedColor}
                                                                className="mt-4 flex items-center space-x-3"
                                                            >
                                                                {product.colors.map((color) => (
                                                                    <Radio
                                                                        key={color.name}
                                                                        value={color}
                                                                        aria-label={color.name}
                                                                        className={({ focus, checked }) =>
                                                                            classNames(
                                                                                color.selectedClass,
                                                                                focus && checked ? 'ring ring-offset-1' : '',
                                                                                !focus && checked ? 'ring-2' : '',
                                                                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                                                            )
                                                                        }
                                                                    >
                                                                        <span
                                                                            aria-hidden="true"
                                                                            className={classNames(
                                                                                color.class,
                                                                                'h-8 w-8 rounded-full border border-black border-opacity-10'
                                                                            )}
                                                                        />
                                                                    </Radio>
                                                                ))}
                                                            </RadioGroup>
                                                        </fieldset> */}

                                                        {/* Sizes */}
                                                        {/* <fieldset className="mt-10" aria-label="Choose a size">
                                                            <div className="flex items-center justify-between">
                                                                <div className="text-sm font-medium text-gray-900">Size</div>
                                                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                    Size guide
                                                                </a>
                                                            </div>

                                                            <RadioGroup
                                                                value={selectedSize}
                                                                onChange={setSelectedSize}
                                                                className="mt-4 grid grid-cols-4 gap-4"
                                                            >
                                                                {product.sizes.map((size) => (
                                                                    <Radio
                                                                        key={size.name}
                                                                        value={size}
                                                                        disabled={!size.inStock}
                                                                        className={({ focus }) =>
                                                                            classNames(
                                                                                size.inStock
                                                                                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                                    : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                                                focus ? 'ring-2 ring-indigo-500' : '',
                                                                                'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                                                            )
                                                                        }
                                                                    >
                                                                        {({ checked, focus }) => (
                                                                            <>
                                                                                <span>{size.name}</span>
                                                                                {size.inStock ? (
                                                                                    <span
                                                                                        className={classNames(
                                                                                            checked ? 'border-indigo-500' : 'border-transparent',
                                                                                            focus ? 'border' : 'border-2',
                                                                                            'pointer-events-none absolute -inset-px rounded-md'
                                                                                        )}
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                ) : (
                                                                                    <span
                                                                                        aria-hidden="true"
                                                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                                    >
                                                                                        <svg
                                                                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                                            viewBox="0 0 100 100"
                                                                                            preserveAspectRatio="none"
                                                                                            stroke="currentColor"
                                                                                        >
                                                                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                                        </svg>
                                                                                    </span>
                                                                                )}
                                                                            </>
                                                                        )}
                                                                    </Radio>
                                                                ))}
                                                            </RadioGroup>
                                                        </fieldset> */}

                                                        <button
                                                            type="submit"
                                                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        >
                                                            Add to cart
                                                        </button>
                                                    </form>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
