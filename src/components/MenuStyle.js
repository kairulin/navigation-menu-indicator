import styled from "styled-components"
// import {items} from './Menu'


export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 70px;
    background-color: #fff;
    position: relative;
    border-radius: 30px;
    gap: 10px;
`
export const Flexdiv = styled.div`
    display: flex;
`

export const Indicator = styled.div`
    position: absolute;
    top: -35%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${(prop) => prop.bg};
    border: 5px solid #222327;
    transform:translateX(${(prop) => prop.site});

    transition:all .3s;

    &::before{
        position: absolute;
        content: '';
        left: -15px;
        top: 35%;
        width: 10px;
        height: 10px;
        box-shadow: 5px -2px  #222327;
        border-top-right-radius: 20px;
        background: transparent;
    }
    &::after{
        position: absolute;
        content: '';
        right: -15px;
        top: 35%;
        width: 10px;
        height: 10px;
        box-shadow: -5px -2px  #222327;
        border-top-left-radius: 20px;
        background: transparent;
    }
`

export const NavigationItem = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    position: relative;
`

export const Icon = styled.span`
    z-index: 1;
    font-size: 1.5rem;
    transition: all .3s;
    cursor: pointer;

`
export const Name = styled.span`
    transition: all .3s;
`