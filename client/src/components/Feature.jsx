

import { Link } from 'react-router-dom'
import mental from '../assets/mental.png'

const Feature = () => {

    return (
        <>

            <div className="mx-auto mt-24 mb-20 max-w-6xl text-center p-6 dark:bg-gray-900">
                <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl"> Features
                </h2>
                <div
                    className="gr mx-auto max-w-3xl items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-8 sm:text-center">
                    <Link className="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
                        to="#" target="_blank">
                        <img className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32" src={mental}  alt="mental" />
                        <div>
                            <div className="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">Chat Support</div>
                            <div className="text-sm opacity-75"> Chat Support Feature
                            </div>
                        </div>
                    </Link>
                    <Link className="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
                        to="#" target="_blank">
                        <img className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32" src ={mental}  alt="mental" />
                        <div>
                            <div className="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">Personalized Content</div>
                            <div className="text-sm opacity-75"> Get Instant Personalized Content </div>
                        </div>
                    </Link>
                    <Link className="flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg dark:text-white dark:hover:bg-white dark:hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
                        to="#" target="_blank">
                        <img className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32" src={mental} alt="mental" />
                        <div>
                            <div className="font-semibold text-black dark:text-white sm:mt-4 sm:mb-2">Monitoring</div>
                            <div className="text-sm opacity-75"> 24*7 Monitoring System </div>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}
export default Feature