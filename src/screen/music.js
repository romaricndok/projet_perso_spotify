import React from 'react'
import styled from 'styled-components'
import Jérusalem from '../songs/Jérusalem.mp3'
import Pierre from '../songs/Pierre et Jean.mp3'
import Show from '../songs/Show Me the Way.mp3'

const Music = () => {
  return (
    <PlaylistPage>
      <MainInner>
        <PlaylistPageInfo>
          <PlaylistPageImage>
            <Image
              src='https://images.unsplash.com/photo-1488654370674-7624e5c1d225?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              alt='pic'
            />
          </PlaylistPageImage>
          <PlaylistPageContent>
            <Playlist>Playlist</Playlist>
            <Titre1>Concentration maximum</Titre1>
            <Tagline>
              Optimisez votre concentration avec cette playlist..
            </Tagline>
            <PlaylistPageDesc>
              <Spotify>Spotify</Spotify>
              <Span>699,428 likes</Span>
              <Span>4hr 35 min</Span>
            </PlaylistPageDesc>
          </PlaylistPageContent>
        </PlaylistPageInfo>
        <PlaylistPageSongs>
          <SongList>
            <List>
              <Tagline1>Jérusalem</Tagline1>
              <Songs src={Jérusalem} controls />
            </List>
            <List>
              <Tagline1>Pierre et jean</Tagline1>
              <Songs src={Pierre} controls />
            </List>
            <List>
              <Tagline1>Show me the way</Tagline1>
              <Songs src={Show} controls />
            </List>
          </SongList>
        </PlaylistPageSongs>
      </MainInner>
    </PlaylistPage>
  )
}

const PlaylistPage = styled.div`
  background-color: #2f39a8;
  background-image: linear-gradient(rgb(0, 0, 0, 0.5), rgb(71, 71, 74) 40%);
  height: calc(100vh);
  width: calc(210vh);
`

const MainInner = styled.div`
  background-image: -webkit-gradient
    (
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.5)),
      color-stop(40%, #2f39a8)
    );
`
const PlaylistPageInfo = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  display: flex;
`

const PlaylistPageImage = styled.div`
  width: 250px;
  height: 200px;
  padding-left: 20px;
  padding-top: 20px;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  -webkit-box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`

const PlaylistPageContent = styled.div`
  text-align: left;
  padding: 1.5rem;
  margin: 20px;
`

const Titre1 = styled.h1`
  font-size: 2rem;
  color: white;
  line-height: 1;
  font-family: circular-black;
  word-spacing: 0px;
  letter-spacing: -1px;
`
const Playlist = styled.h4`
  font-size: 1rem;
  color: white;
  font-family: circular-black;
`

const Tagline = styled.p`
  color: white;
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 0;
`

const Tagline1 = styled.p`
  color: white;
  font-size: 1.2rem;
  opacity: 0.7;
  margin-bottom: 5px;
`

const PlaylistPageDesc = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`

const Spotify = styled.p`
  color: white;
`

const Span = styled.span`
color: white;
   opacity: 0.7;
        position: relative;
        padding-left: 20px;
        &:before {
          content: '';
          width: 4px;
          height: 4px;
          background: white;
          overflow: hidden;
          border-radius: 50%;
          position: absolute;
          margin-left: -10px;
          top: 9px;
`

const PlaylistPageSongs = styled.div`
  height: 100%;
`
const Songs = styled.audio`
  width: 90%;
`
const SongList = styled.ul`
  padding: 0;
`
const List = styled.li`
  list-style-type: none;
  width: 100%;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-items: left;
  align-items: left;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

export default Music
