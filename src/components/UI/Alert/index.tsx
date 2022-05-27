import { FC } from "react"

interface AlertDefProps {
   error: string | null
}

export const AlertDefault: FC<AlertDefProps> = ({ error }) => {
   if (!error) {
      return <></>
   }
   return (
      <div className="Myalert">
         <div className="alert alert-danger" role="alert">
            {error}
         </div>
      </div>

   )
}