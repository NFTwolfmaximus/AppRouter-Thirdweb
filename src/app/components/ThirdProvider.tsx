'use client';

import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const ThirdProvider = ({children} : any) =>{
    return(
        <ThirdwebProvider>
            {children}
        </ThirdwebProvider>
    )
}

export default ThirdProvider