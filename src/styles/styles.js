import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import bg from './images/andre-benz-cXU6tNxhub0-unsplash.jpg'

// div{
//     background: linear-gradient(
// rgba(0,0,0,0.6),
// rgba(0,0,0,0.6) ) ,
// url('background.jpg');
// }

export const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Roboto', sans-serif;
  font-size: 62.5%;  
  box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
body{
  font-size: 1.6rem;
  margin: 0;
  width: 100%;
  background-color: #151515;
}`;


export const BgImg = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center; 
height: 100vh;
background-color: #151515;
&::before {
  content: '';
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: url(${bg});
  background-size: cover;
  background-position: top center;
  opacity: 0.50;

}
`
export const AdminButton = styled.button`
width: 6rem;
  font-size: 1.6rem;
  font-weight: 300;
  color: #fff;
  background-color: #c72c41;
  cursor: pointer;
  margin: 1vw;
  height: 4rem;
  text-align:center;
  border: none;
  border-radius: 8px;
  -moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  &:hover {
    background-position: 100% 0;
  -moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  &:focus {
    outline: none;
}
background-image: linear-gradient(
      to right,
      #eb3941,
      #f15e64,
      #e14e53,
      #e2373f
    );
    box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);

  }`

