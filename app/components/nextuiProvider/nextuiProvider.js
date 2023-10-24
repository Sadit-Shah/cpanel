'use client'
import { NextUIProvider } from "@nextui-org/react";
const NextuiProvider = ({ children }) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>


    )
}

export default NextuiProvider