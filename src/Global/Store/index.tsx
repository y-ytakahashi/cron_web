import React, { useState , createContext} from 'react'

// context に object を定義
export const GlobalContext = createContext({})

export const GlobalProvider:React.FunctionComponent = ({ children }) => {
  const [ someStatem, setSomeState] = useState(null)
  return (
    <GlobalContext.Provider value={{someStatem, setSomeState}}>
      {children}
    </GlobalContext.Provider>
  )
}

