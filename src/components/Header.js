import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
//import AnchorLink from 'react-anchor-link-smooth-scroll'

const HeaderStyle = styled.header`
    background: #fff;
    height: 70px;
    color: #000;
    font-size: 0.9em;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
`

const MenuItem = styled.a`
    padding: 7px 10px 2px 10px;
    margin-right: 10px;
    border-radius: 4px;
    text-decoration: none;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    background: ${props => props.actived ? '#000' : 'none'}
    color: ${props => props.actived ? '#fff' : 'none'}
    
    &:after {
      display:block;
      content: '';
      border-bottom: 3px solid #000;
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
        <MenuItem actived>HOME</MenuItem>
        <MenuItem>PORTFOLIO</MenuItem>
        <MenuItem>SERVIÇOS</MenuItem>
        <MenuItem>CONTATO</MenuItem>
        <MenuItem>BLOG</MenuItem>
    </HeaderStyle>
)