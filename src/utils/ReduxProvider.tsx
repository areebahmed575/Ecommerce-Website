//child components mai server components pass krskatay h
//server components mai child components nhi pass krskte h
//Here I am passing child component in server component
'use client'
import { Provider } from 'react-redux'
import React from 'react'
import { store } from '@/redux/store'



const ReduxProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store} >{children}</Provider>
  )
}

export default ReduxProvider