import React from "react";
import styled from "styled-components";


export default function ButtonSignUp ({children}) {
    
    const ButtonSubmit = styled.button`
        height: 64px;
        margin: 1rem 0;
        border: none;
        background: #649cfd;;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.365);
        border-radius: 50px;
        font-size: 18px;
        transition: 0.5s;
        &:hover {
            background: #5165ad;
        }
        @media only screen and (max-width: 320px){
            width: 100%;
        }
    `
    
    return (
        <ButtonSubmit>{children}</ButtonSubmit>
    )
}

