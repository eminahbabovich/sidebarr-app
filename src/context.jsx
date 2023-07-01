import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, isModalOpen, setIsModalOpen, setIsSidebarOpen }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
