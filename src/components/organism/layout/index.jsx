/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Header from '../header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='p-3'>
        {children}
      </div>
    </div>
  )
}

export default Layout
