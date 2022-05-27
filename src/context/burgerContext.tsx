import { createContext, FC, useState } from "react";

interface burgerProps {
   children: React.ReactNode | React.ReactNode[]
}

export const burgerContext = createContext<any>(null)


const BurgerProvider: FC<burgerProps> = ({ children }) => {

   const [isModal, setIsModal] = useState(false)

   return (
      <burgerContext.Provider value={{ isModal, setIsModal }}>
         {children}
      </burgerContext.Provider>
   )
}

export default BurgerProvider