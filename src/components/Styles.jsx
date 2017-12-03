import styled from 'styled-components';
import { Field } from 'redux-form';


export const Form = styled.form`
padding: 20px;
`
export const InputField = styled(Field)`
background-color: #fcf2b3;
`
export const Button = styled.button`
background-color: #A5CB63;
margin-left: 47%;
width: 53%;
margin-top: 3%;
`
export const HomeContainer = styled.div`
background-size: cover;
background-repeat: no-repeat;
position: absolute;
width: 100%;
height: 100%;
@media (max-width: 420px) {
    height: 30% }
  }
`
export const Div = styled.div`
@media (max-width: 420px) {
    width: 60%;
  }
`
export const ErrorMessage = styled.div`
  text-align: center;
  color red;
`
export const Container = styled.div`
width: 75%;
margin-top: 20px;
@media (max-width: 420px) {
    width: 100%;
  }
`
export const MainContainer = styled.div`
width: 75%;
margin-top: 20px;
width: 150%;
margin-left: 8%;
@media (max-width: 420px) {
    width: 87%;
  }
`
export const Forms = styled.div`
display: flex;
flex-direction: column;
width: 74%;
height: 76%;
margin-left: 13%;
margin-top: 5%;
`
export const Specialities = styled.div`
display: flex;
width: 50%;
flex-wrap: wrap;
`
export const Speciality = styled.span`
margin-right: : 6px;
`
export const Edit = styled.button`
width: 20%;
margin-bottom: 15px;
margin-top: 10%;
@media (max-width: 420px) {
    width: 28%;
  }
`
export const LogSign = styled.div`
margin-left: 80px;
margin-top: 24px;
display: flex;
justify-content: space-between;
width: 130px;
@media (max-width: 420px) {
  margin-left: 11px;
  margin-top: 18px }
  }
`
export const Flex = styled.div`
display: flex;
`

export const Red = styled.div`
color: red;
`
export const Quarter = styled.div`
width: 25%;
@media (max-width: 420px) {
    margin-left: 38%;
  }
`
export const SignOut = styled.button`
width: 10%;
margin-left: 77%;
margin-top: 5%;
@media (max-width: 420px) {
    width: 15%;
  }
`
export const Modal = styled.div`
display: none;
position: fixed;
z-index: 1;
padding-top: 100px; /* Location of the box */
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0,0.4);
}
`
export const ModalHead = styled.div`
background-color: #A5CB63;
height: 29%;
width: 95%;
text-align: center;
font-size: 17px;
@media (max-width: 420px) {
    height: 30%;
    font-size: 16px;
}
`
export const ModalContent = styled.div`
background-color: #E6E7E8;
margin: auto;
padding: 20px;
border: 1px solid #888;
width: 40%;
height: 44%;
@media (max-width: 420px) {
    width: 100% }
  }
`
export const Close = styled.span`
color: #aaaaaa;
float: right;
font-size: 28px;
font-weight: bold;
:hover, :focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`
export const Card = styled.div`
border: 2px solid #A5CB63;
  text-align: center;
`
