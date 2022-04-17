 import {createGlobalStyle} from 'styled-components'


 export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white:#fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontBig: 2.5rem;
        --fontMed: 1.5rem;
        --fontSmall: 1.2rem;
        --fontSlim: 1rem; 
    }
    *{
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }
 
    body{
        margin: 0;
        padding: 0;
        h1{
            font-size: 2rem;
            font-weight: 600;
            color:var(--white);
        }
        h3{
            font-size: var(--fontSmall);
            color:var(--white);
        }
        p{
            font-size: var(--fontSlim);
            color:var(--white);
        }
        li{
            list-style-type: none;
        }
    }
 `