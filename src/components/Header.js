import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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

const linkStyles = {
    color: 'inherit',
    textDecoration: 'none'
}

export default (props) => (
    <HeaderStyle>
        <MenuItem actived><Link to={'/'} style={linkStyles}>HOME</Link></MenuItem>
        <MenuItem>PORTFOLIO</MenuItem>
        <MenuItem>SOBRE</MenuItem>
        <MenuItem>SERVIÇOS</MenuItem>
        <MenuItem>CONTATO</MenuItem>
        <MenuItem><Link to={'/blog'} style={linkStyles}>BLOG</Link></MenuItem>
    </HeaderStyle>
)