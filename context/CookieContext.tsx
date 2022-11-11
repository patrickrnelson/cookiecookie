import React, { useContext, useState, createContext, Dispatch, SetStateAction, FC } from 'react'
import { Cookie } from '../interfaces'

interface ICookieContext {
  cookies: Cookie[],
  setCookies?: Dispatch<SetStateAction<Cookie[]>>,
};

const defaultCookie = {
  _id: 0,
  name: "",
  description: "",
  image: "",
  contains: {
    egg: false,
    milk: false,
    soy: false,
    wheat: false,
    peanut: false,
    treenut: false,
  },
  calories: {
    perServing: 0,
    perCookie: 0
  }
};

const defaultState = {
  cookies: defaultCookie
}

const CookieContext = createContext<ICookieContext | null>(null);

export const useCookies = () => useContext(CookieContext)

export const CookieProvider: FC = ({ children }) => {
  const [cookies, setCookies] = useState([defaultCookie])

  return (
    <CookieContext.Provider value={{ cookies, setCookies }}>
      {children}
    </CookieContext.Provider>
  )
}
