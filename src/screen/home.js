import React from 'react'
import Text from '../components/text'
import Button from '../components/button'
import Logo from '../components/logoSpotify'
import styled from 'styled-components'
import Playlist from '../components/playlist'
import { Link } from 'react-router-dom'
import peace1 from '../assets/peace1.jpg'
import amour1 from '../assets/amour1.jpg'
import amour2 from '../assets/amour2.jpg'
import focus1 from '../assets/focus1.jpg'
import focus2 from '../assets/focus2.jpg'
import deter1 from '../assets/deter1.jpg'
import deter2 from '../assets/deter2.jpg'
import peace2 from '../assets/peace2.jpg'

const Home = () => {
  return (
    <Wrapper>
      <Logo></Logo>
      <Button></Button>
      <Text></Text>
      <StylePlaylist>
        <Link to='/music'>
          <Playlist label='Peace' image={peace1}></Playlist>
        </Link>
        <Link to='/music'>
          <Playlist label='Amour' image={amour1}></Playlist>
        </Link>
        <Link to='/music'>
          <Playlist label='Amour' image={amour2}></Playlist>
        </Link>
        <Link to='/music'>
          <Playlist label='Focus' image={focus1}></Playlist>
        </Link>
        <Link to='/music'>
          <Playlist label='Focus' image={focus2}></Playlist>
        </Link>
        <Link to='/music'>
          <Playlist label='Determination' image={deter1}></Playlist>
        </Link>
        <Link to='/music'>
          <Playlist label='Determination' image={deter2}></Playlist>
        </Link>
        <Link to='/music'>
          <Playlist label='Peace' image={peace2}></Playlist>
        </Link>
      </StylePlaylist>
      <Footer>
        <Button></Button>
        <Logo></Logo>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  background: #141414;
  height: 1000px;
  width: 100%;
`
const StylePlaylist = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 50px;
  flex-wrap: wrap;
`
const Footer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`

export default Home
