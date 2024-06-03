import { appointments } from './data/appointmentData'

export default function DashboardPage() {
    return (
        <div>
            <ul role="list" class="divide-y divide-gray-100">
                {appointments.map((item, index) => (
                    <li class="flex justify-between gap-x-6 py-5" key={index}>
                        <div class="basis-auto grow flex min-w-0 gap-x-4">
                            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={item.img} alt="" />
                            <div class="min-w-0 flex-auto">
                                <p class="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                                <p class="text-sm leading-6 text-gray-900">Reason: {item.reason}</p>
                                <p class="mt-1 truncate text-xs leading-5 text-gray-500">{item.phone}  ({item.email})</p>

                            </div>
                        </div>
                        <div class="basis-1/4 grow-0 hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            {item.status == "Cancelled" ? (
                                <div class="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <h2 class="text-sm font-normal">Not paid</h2>
                                </div>
                            ) : (
                                <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <h2 class="text-sm font-normal">Paid</h2>
                                </div>
                            )}
                        </div>
                        <div class="basis-auto grow hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="mb-2 text-xs leading-5 text-gray-500">App. date: <time datetime="2023-01-23T13:23Z">{item.date}</time></p>
                            {item.isCompleted ? (
                                <p class="text-sm leading-6 text-gray-900">{item.status}</p>
                            ) : (
                                <div className='flex'>
                                    <button type="button" class="me-2 inline-flex items-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                        <svg class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                        </svg>
                                        Edit
                                    </button>
                                    <button
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <svg class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                                            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                                        </svg>
                                        View details
                                    </button>
                                </div>
                            )}
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
}