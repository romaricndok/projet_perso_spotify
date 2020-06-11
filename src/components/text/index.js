import React from 'react'
import styled from 'styled-components'

const Text = () => {
  return (
    <Wrapper>
      <TextSpan>De la musique pour rester concentré.</TextSpan>
    </Wrapper>
  )
}

const TextSpan = styled.span`
  unicode-bidi: -webkit-isolate;
  white-space: normal;
  margin: 0;
  padding: 0;
  color: #fff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`
export default Text
