import styled from 'styled-components';


export const ClickableCell = styled.button`
width: 60px;
height: 60px;
cursor: pointer;
border-width: 1px;
margin: 1px;
border-style: solid;
background: #CCCCCC;
border-right-color: #cacaca;
border-bottom-color: #cacaca;
border-left-color: #ececec;
border-top-color: #ececec;
color: #989898;
user-select: none;
font-size: 13px;
vertical-align: top;
transition: background-color 200ms linear,
            border-left-color 200ms linear,
            border-right-color 200ms linear,
            border-top-color 200ms linear,
            border-bottom-color 200ms linear;
outline: none;
font-weight: 600;
`
export const ClickedCell = styled.div`
width: 60px;
height: 60px;
border-width: 1px;
margin: 1px;
border-style: solid;
background: #DDDDDD;
border-right-color: #cacaca;
border-bottom-color: #cacaca;
border-left-color: #ececec;
border-top-color: #ececec;
color: #989898;
font-size: 50px;
text-align:center;
vertical-align: top;
transition: background-color 200ms linear,
            border-left-color 200ms linear,
            border-right-color 200ms linear,
            border-top-color 200ms linear,
            border-bottom-color 200ms linear;
outline: none;
font-weight: 600;
`

export const Bomb = styled.img`
width: 60px;
height: 60px;
border-width: 1px;
margin: 1px;
border-style: solid;
background: #DDDDDD;
border-right-color: #cacaca;
border-bottom-color: #cacaca;
border-left-color: #ececec;
border-top-color: #ececec;
color: #989898;
vertical-align: top;
transition: background-color 200ms linear,
            border-left-color 200ms linear,
            border-right-color 200ms linear,
            border-top-color 200ms linear,
            border-bottom-color 200ms linear;
outline: none;
`
export const BombCount = styled.img`
width: 60px;
height: 60px;
margin: -10px;
vertical-align: top;
transition: background-color 200ms linear,
            border-left-color 200ms linear,
            border-right-color 200ms linear,
            border-top-color 200ms linear,
            border-bottom-color 200ms linear;
outline: none;
`
export const Flag = styled.img`
width: 60px;
height: 60px;
border-width: 1px;
margin: 1px;
border-style: solid;
background: #DDDDDD;
border-right-color: #cacaca;
border-bottom-color: #cacaca;
border-left-color: #ececec;
border-top-color: #ececec;
color: #989898;
vertical-align: top;
transition: background-color 200ms linear,
            border-left-color 200ms linear,
            border-right-color 200ms linear,
            border-top-color 200ms linear,
            border-bottom-color 200ms linear;
outline: none;
`
