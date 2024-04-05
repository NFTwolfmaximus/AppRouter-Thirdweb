'use client';

import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const ThirdProvider = ({children} : any) =>{
    return(
        <ThirdwebProvider clientId ={'58ab40a857e09d196d2a59cf9614524c'}>
            {children}
        </ThirdwebProvider>
    )
}

export default ThirdProvider
