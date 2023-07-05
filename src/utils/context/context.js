/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export const AppWrapper = ({ children }) => {
  const [isLoading, setLoading] = useState(false)

  // * REDIRECT USER TO INTENDED URL
  const [userURL, setUserURL] = useState('')

  // * OPEN / CLOSE TABULAR FILTER
  const [isOpenTabular, setOpenTabular] = useState(false)
  const [isShowFilter, setShowFilter] = useState(false)
  const [isShowExportExcel, setShowExportExcel] = useState(false)
  const [isDataFiltered, setDataFiltered] = useState(false)
  const [dataTabularHost, setDataTabularHost] = useState({})

  // * OPEN SIDEBAR
  const [isOpenSideBar, setIsOpenSideBar] = useState(true)

  return (
    <AppContext.Provider
      value={{
        isOpenSideBar,
        setIsOpenSideBar,
        isLoading,
        setLoading,
        setUserURL,
        isOpenTabular,
        setOpenTabular,
        isShowFilter,
        setShowFilter,
        isDataFiltered,
        setDataFiltered,
        dataTabularHost,
        setDataTabularHost,
        isShowExportExcel,
        setShowExportExcel
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
