import React from 'react'

const Error = ({ children }) => {
  return (
        <div>
            <p className="bg-red-600 text-bold text-center uppercase p-3 mb-3 rounded-md text-white">{children}</p>
        </div>
  )
}

export default Error