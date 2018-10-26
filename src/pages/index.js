import React from "react"
import styled from 'styled-components'
import Particles from 'react-particles-js'
import Typing from 'react-typing-animation'
import { FaHeart, FaAngleDoubleDown } from "react-icons/fa"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Layout from '../layout/Layout'
import Cursor from '../components/Cursor'
import Avatar from '../images/eu.jpg'

console.log(Avatar);

const mainColor = '#0be881';

const particlesObj = {
	particles: {
	    number: {
	      value: 40,
	        density: {
            enable: true,
            value_area: 800
          }
	    },
	    color: {
	        value: mainColor
	    },
	    shape: {
	        type: 'circle'
	    },
	    opacity: {
	        value: 0.4
	    },
	    size: {
	        value: 3
	    },
        line_linked: {
          enable: true,
          distance: 100,
          color: mainColor,
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
        },
	},
	retina_detect: true
}

const Hero = styled.div`
    background: #fff;
    width: 100%;
    height: calc(100vh - 130px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    img {
        width: 280px;
        height: 280px;
        border-radius: 10px;
        border: 3px solid #dcdde1;
        box-shadow: 0 2px 2px #f5f5f5;
        margin-top: 50px;
        position: relative;
        z-index: 2;
    }
    
    h1, p {
        color: #000;
        margin-top: 30px;
        position: relative;
        z-index: 2;
    }
    
    h1 {
        span {
            color: ${mainColor};
            font-size: 2rem;
        }
    }
    
    h2 {
        margin: 30px 0;
    }
    
    p {
        font-size: 1.1rem;
    }
`

const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    
    a {
        img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            margin-right: 24px;
            transition: transform 0.2s ease-out;
            
            &:hover {
                border: 3px solid ${mainColor};
                transform: scale(1.1);
                transition: transform 0.2s ease-in;
            }
        }
    }
`

const ArrowDown = styled.a`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    
    &:visited, &:active {
        color: inherit;
    }
    
    &:hover {
        color: ${mainColor}
    }
`

const Portfolio = styled.div`
    width: 100%;
    height: 250px;
    background: #f8f8f8;
    margin-top: 100px;
`

export default () => (
    <Layout>
        <Particles
            width="100%"
            height="calc(100vh - 50px)"
            className="particles"
            params={particlesObj}
            style={{
                maxWidth: '100%'
            }}
        />
        <Hero className="hero">
            <img 
                src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg" 
                alt="Avatar" />
            <h1>Olá! Meu nome é <span>Bruno Carpinelli</span></h1>
            <h2>Desenvolvedor Web / Mobile / Sistemas</h2>
            
            <Typing loop={false} speed={120} startDelay={-10}>
                <span style={{ color: mainColor }}>  
                <Typing.Speed ms={120} />
                    Apaixonado por tecnologia. <FaHeart style={{ verticalAlign: 'middle' }}/><Cursor />
                </span>
            </Typing>
            <Social>
                <a href="https://google.com" target="blank"><img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png"
                    alt="Facebook" /></a>
                <a href="https://google.com" target="blank"><img 
                    src="https://icon2.kisspng.com/20180330/biw/kisspng-social-media-iphone-organization-logo-twitter-5abe30242bc9a4.9079035915224136041794.jpg"
                    alt="Twitter" /></a>
                <a href="https://google.com" target="blank"><img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
                    alt="LinkedIn" /></a>
                <a href="https://google.com" target="blank"><img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_OsJ4ntKFKYk_oAShNzrvZXJvMKybdXTs0qyEwKEB2LyQ4eOb"
                    alt="GitHub" /></a>
            </Social>
            <AnchorLink 
                href="#portfolio"
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '10px',
                    '&:hover': {
                        color: '#000'
                    }
                }}>
                <FaAngleDoubleDown style={{ fontSize: '3rem', justifySelf: 'flex-end', position: 'relative', zIndex: '2' }}/>
            </AnchorLink>
        </Hero>
        
        <Portfolio id="portfolio">
            <h1>Portfolio</h1>
        </Portfolio>
    </Layout>
);
