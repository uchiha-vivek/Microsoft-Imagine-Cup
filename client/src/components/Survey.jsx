

import React from 'react'

const Survey = () => {
  return (
     <>
     
     <div className="w-full max-w-2xl my-4 mx-auto p-2">

    <div className="border border-indigo-500 p-4 md:p-6 rounded-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">We need your help!</h2>

        <p className="text-lg mb-4 text-gray-700">
            We're developing a website for <strong>study materials for students</strong>.
            <br/>
            We would love to hear your answers to some of the questions.
        </p>

        <a href="#"
            className="font-bold inline-block bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300 ease-in-out">
            Take Survey
        </a>

        <p className="text-sm py-2 text-gray-500">
            You will be rewarded for completing survey
        </p>
    </div>

</div>
     
     </>
  )
}

export default Survey