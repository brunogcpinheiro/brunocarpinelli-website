import React, { Fragment } from 'react'
import styled from 'styled-components'

import Header from '../components/Header'

import '../styles/global.css';

const Wrapper = styled.div`
     margin: 0 auto;
`;

export default ({ children }) => (
    <Fragment>
        <Header />
        <Wrapper>
            {children}
        </Wrapper>
    </Fragment>
)
