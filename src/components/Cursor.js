import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`

const CursorSpan = styled.span`
  font-weight: 200;
  color: #0be881;
  font-size: 1.5em;
  padding-left: 2px;
  animation: ${blink} 1s step-end infinite;
`

const Cursor = ({ className }) => (
  <CursorSpan className={className}>|</CursorSpan>
)

Cursor.propTypes = { className: PropTypes.string }
Cursor.defaultProps = { className: '' }

export default Cursor