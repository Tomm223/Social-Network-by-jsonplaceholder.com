


export const timeoutControll = (store) => (next) => (action) => {
   const timeout = action?.timeout

   if (!timeout) {
      return next(action)
   }
   const settimeout = setTimeout(() => {
      next(action)
   }, timeout)

   return () => {
      clearTimeout(settimeout)
   }
}


