import React, { useState } from 'react'
import { createContext } from 'react'
export let ContextApi=createContext()
const ContextProvider = ({children}) => {
    let[state,setState]=useState("ABC")
  return (
    <div>
        <ContextApi.Provider value={state}>{children}</ContextApi.Provider>
    </div>
  )
}

export default ContextProvider