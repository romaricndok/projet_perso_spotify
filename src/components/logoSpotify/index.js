import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const Logo = () => {
  return <LogoComponent src={logo}></LogoComponent>
}

const LogoComponent = styled.img`
  width: 9em;
  height: 3em;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 25px;
  margin-top: 25px;
  cursor: pointer;
`

export default Logo
