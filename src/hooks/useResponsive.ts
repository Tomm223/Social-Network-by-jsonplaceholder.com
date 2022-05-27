
import React from "react";
import { useMediaQuery } from 'react-responsive'

export function useResponsive() {
   const maxBigMonitor = useMediaQuery({ query: '(max-width: 1920px)' })
   const maxMonitor = useMediaQuery({ query: '(max-width: 1440px)' })
   const maxLabTop = useMediaQuery({ query: '(max-width: 1024px)' })
   const maxTablet = useMediaQuery({ query: '(max-width: 768px)' })
   const maxFon = useMediaQuery({ query: '(max-width: 425px)' })
   const maxMiniFon = useMediaQuery({ query: '(max-width: 325px)' })

   return {
      maxBigMonitor,
      maxMonitor,
      maxLabTop,
      maxTablet,
      maxFon,
      maxMiniFon
   }
}