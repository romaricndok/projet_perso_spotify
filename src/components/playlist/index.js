import React from 'react'
import styled from 'styled-components'

const Playlist = ({ label, image }) => {
  return (
    <Wrapper>
      <Image src={image} alt='Focus'></Image>
      <WrapperText>
        <Text>{label}</Text>
      </WrapperText>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  display: flex;
  position: relative;
`
const WrapperText = styled.div`
  width: 300px;
  height: 300px;
  background-color: #0000005f;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  &:hover {
    opacity: 1;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
`

const Text = styled.text`
  color: white;
  font-size: 24px;
  position: bottom;
`

const Image = styled.img`
  width: 300px;
  height: 300px;
`

export default Playlist
