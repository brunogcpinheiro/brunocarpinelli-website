import React from "react"
import styled from 'styled-components'

import Layout from '../layout/Layout'

const Hero = styled.div`
    background: #30336b;
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid #fff;
        margin-top: 80px;
    }
    
    h1, p {
        color: #fff;
        margin-top: 24px;
    }
`

export default () => (
    <Layout>
        <Hero>
            <img 
                src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg" 
                alt="Avatar" />
            <h1>Bruno Carpinelli</h1>
            <p>Desenvolvedor Web/Mobile</p>
        </Hero>
    </Layout>
);
