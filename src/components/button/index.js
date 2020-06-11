import React from 'react'
import styled from 'styled-components'

const Button = () => {
  return (
    <Wrapper>
      <ButtonComponent>
        <Label>afficher sur spotify</Label>
      </ButtonComponent>
    </Wrapper>
  )
}

const ButtonComponent = styled.button`
  background-color: #2ebd59;
  height: 50px;
  width: 300px;
  font-size: 0.82em;
  font-weight: 1000;
  text-align: center;
  padding-left: 2.5em;
  padding-right: 2.5em;
  min-width: 130px;
  text-transform: uppercase;
  white-space: normal;
  will-change: transform;
  user-select: none;
  line-height: 1.3;
  border-radius: 500px;
  padding: 13px 44px;
  touch-action: manipulation;
  transition: all 0.15s ease;
  border: 0;
  display: inline-block;
  white-space: normal;
  will-change: transform;
  cursor: pointer;
  -webkit-appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
  font: 400 13.3333px Arial;
  text-rendering: auto;
  text-indent: 0px;
  text-shadow: none;
  &:hover {
    font-size: 0.9em;
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`
const Label = styled.span`
  font-family: spotify-circular, spotify-circular-cyrillic,
    spotify-circular-arabic, spotify-circular-hebrew, Helvetica Neue, Helvetica,
    Arial, Hiragino Kaku Gothic Pro, Meiryo, MS Gothic, sans-serif;
  text-transform: uppercase;
  font-size: 1.3em;
  white-space: normal;
  margin: 2px;
  padding: 0;
  color: #fff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;
`

export default Button
