import React from "react"
import styled from 'styled-components'
import Particles from 'react-particles-js'
import Img from 'gatsby-image'
import Typist from 'react-typist'
import { graphql } from 'gatsby'
import { FaAngleDoubleDown } from "react-icons/fa"

import Layout from '../layout/Layout'
import Avatar from '../images/avatar.jpg'

console.log(Avatar);

const mainColor = '#0be881';

const particlesObj = {
	particles: {
	    number: {
	      value: 60,
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
    width: 99%;
    height: calc(100vh - 130px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    img {
        width: 280px;
        height: 280px;
        border-radius: 50%;
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
            opacity: 1;
            transition: opacity 0.4s ease 0s;
        }
    }
    
    h2 {
        margin: 5px 0 0 0;
        
        span {
            color: #535c68;
        }
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    margin-bottom: 10px;
    text-decoration: none;
    font-weight: bold;
    
    &:visited, &:active {
        color: inherit;
    }
    
    &:hover {
        color: ${mainColor}
    }
    
    p {
        margin-bottom: 10px;
        
        &:hover {
            color: ${mainColor}
        }
    }
`

const About = styled.div`
    width: 100%;
    height: 100%;
    background: #181818;
    padding: 80px;
    color: #fff;
    
    h2 {
        border-bottom: 2px solid #fff;
    }
`

export const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 280, height: 280, quality: 100) {
          width
          height
          src
          srcSet
          srcWebp
          srcSetWebp
          originalName
        }
      }
    }
  }
`

export default ({ data }) => (
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
        <Hero className="hero fade-in">
            <Img 
                fixed={data.file.childImageSharp.fixed}
                alt="Avatar" />
            <h1>Olá! Meu nome é <span>Bruno Carpinelli</span></h1>
            <h2>Desenvolvedor <span>Web / Mobile / Sistemas</span></h2>
            <h2>Designer e criador de <span>Mídias sociais</span></h2>
            
            <Typist className="typist" cursor={{hideWhenDone: true}}> 
                <span>Apaixonado por tecnologia</span>
            </Typist>
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
            <ArrowDown href="#about">
                <p>Sobre</p>
                <FaAngleDoubleDown style={{ fontSize: '2rem' }}/>
            </ArrowDown>
        </Hero>
        
        <About id="about">
            <h2>SOBRE MIM</h2>  
        </About>
    </Layout>
);
