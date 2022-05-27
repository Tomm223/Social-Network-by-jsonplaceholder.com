import { FC } from "react"

interface LoadingDefProps {
   isLoading: boolean
}

export const LoadingDefault: FC<LoadingDefProps> = ({ isLoading }) => {
   if (!isLoading) {
      return <></>
   }
   return (
      <div className="spinner-border text-dark" role="status">
         <span className="visually-hidden">Loading...</span>
      </div>
   )
}