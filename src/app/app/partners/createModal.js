import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { ExclamationTriangleIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function CreatePartnershipDialog() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button type="button"
                onClick={() => setOpen(true)}
                className="flex flex-nowrap w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 me-2">
                    <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                </svg>

                Create partnership
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
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex justify-center">
                        <div className="flex w-4/6 min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <DialogPanel className="w-80 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-11/12 sm:w-full">
                                    <div className="bg-white w-full px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <PlusIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Create new partnership
                                                </DialogTitle>
                                                <div className="mt-2">
                                                    <h2 className="mt-2 text-base font-semibold leading-7 text-gray-900">Partnership Profile</h2>
                                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                                        This information will determined patient referral and how payment is dived amongst partners
                                                    </p>

                                                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                        <div className="sm:col-span-4">
                                                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                                                Professional/facility link
                                                            </label>
                                                            <div className="mt-0">
                                                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">nexushealth.org/</span>
                                                                    <input
                                                                        type="text"
                                                                        name="username"
                                                                        id="username"
                                                                        autoComplete="username"
                                                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                                        placeholder="janesmith"
                                                                    />
                                                                </div>
                                                            </div>
                                                           
                                                            <div className="mt-2 sm:col-span-3">
                                                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Service
                                                                </label>
                                                                <div className="mt-2">
                                                                    <select
                                                                        id="country"
                                                                        name="country"
                                                                        autoComplete="country-name"
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                                    >
                                                                        <option>Surgery</option>
                                                                        <option>Consultation</option>
                                                                        <option>Prescriptions</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                <div className="sm:col-span-2">
                                                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                                        Commission type
                                                                    </label>
                                                                    <div className="mt-2">
                                                                        <select
                                                                            id="country"
                                                                            name="country"
                                                                            autoComplete="country-name"
                                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                                        >
                                                                            <option>Percentage</option>
                                                                            <option>Fixed value</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="sm:col-span-2">
                                                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                                        Amount
                                                                    </label>
                                                                    <div className="mt-2">
                                                                        <input
                                                                            type="number"
                                                                            name="amount"
                                                                            id="amount"
                                                                            autoComplete="amount"
                                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="sm:col-span-2">
                                                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                                        Unit
                                                                    </label>
                                                                    <div className="mt-2">
                                                                        <select
                                                                            id="country"
                                                                            name="country"
                                                                            autoComplete="country-name"
                                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                                        >
                                                                            <option>per referral</option>
                                                                            <option>per service instance</option>
                                                                            <option>Prescription fill</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 sm:ml-3 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                        >
                                            Send request
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            data-autofocus
                                        >
                                            Cancel
                                        </button>
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
