import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function CheckoutPanel({ cart }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className='flex gap-x-2 bg-indigo-600 text-white py-2 px-3 rounded '>
                Proceed to checkout
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>

            </button>
            <Transition show={open}>
                <Dialog className="relative z-10" onClose={setOpen}>
                    <TransitionChild
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <TransitionChild
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <DialogPanel className="pointer-events-auto relative w-screen max-w-md">
                                        <TransitionChild
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </TransitionChild>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <DialogTitle className="text-base font-semibold leading-6 text-gray-900">Check out</DialogTitle>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <div className='flex flex-col p-4'>
                                                    <h2 className='text-xl font-semibold'>Total : UGX {cart.toLocaleString()}</h2>
                                                    <span className='text-gray-500 mb-5 text-xs'>(VAT included)</span>
                                                    
                                                    <fieldset>
                                                        <legend className="text-sm font-semibold leading-6 text-gray-900">Select payment method</legend>
                                                        <p className="mt-1 text-sm leading-6 text-gray-600">Only those configured are available</p>
                                                        <div className="mt-6 space-y-6">
                                                            <div className="flex items-center gap-x-3">
                                                                <input
                                                                    id="push-everything"
                                                                    name="push-notifications"
                                                                    type="radio"
                                                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                                />
                                                                <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Mobile money
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
                                                                    Credit/Debit/Visa card
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
                                                                    Cash on delivery
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <button className='flex gap-x-2 bg-indigo-600 text-white py-3 px-4 w-full items-center justify-center font-semibold hover:bg-indigo-700 rounded'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                        <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                                        <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                                                        <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                                                    </svg>

                                                    Pay now
                                                </button>
                                                <div>
                                                    <p className='text-center text-xs mt-10 text-gray-500'>This platform is secured by fluterwave</p>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
