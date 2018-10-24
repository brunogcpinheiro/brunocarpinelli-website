import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
    background: #30336b;
    height: 70px;
    color: #fff;
    font-size: 0.9em;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MenuItem = styled.a`
    padding: 7px 10px 2px 10px;
    margin-right: 10px;
    border-radius: 4px;
    text-decoration: none;
    color: #fff;
    font-weight: bold; 
    background: ${props => props.actived ? '#fff' : 'none'}
    color: ${props => props.actived ? '#30336b' : 'none'}
    
    &:after {
      display:block;
      content: '';
      border-bottom: 3px solid #fff;
      height: 3px;
      transform: scaleX(0);  
      transition: transform 250ms ease-in-out;
    }
    
    &:hover:after {
        transform: scaleX(1);
    }
`

export default (props) => (
    <HeaderStyle>
        <MenuItem actived href="#home">HOME</MenuItem>
        <MenuItem href="#portfolio">PORTFOLIO</MenuItem>
        <MenuItem href="#sobre">SOBRE</MenuItem>
        <MenuItem href="#servicos">SERVIÇOS</MenuItem>
        <MenuItem href="#contato">CONTATO</MenuItem>
    </HeaderStyle>
)