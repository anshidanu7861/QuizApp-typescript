import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%
}

body {
    background-color: #ff9999;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    
}

`
export const Wrapper = styled.div`
 
display: flex;
flex-direction: column;
align-items: center;

> p {
    color: #fff;

}
.score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
}

h1 {
    background-image: linear-gradient(180, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    --webkit-background-clip: text;
    --webkit-text-color: transparent;
    --moz-background-clip: text;
    --moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
}

.start, .next{
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px;
    padding: 0 40Px;
}

.start{
    max-width: 200px;
}

`