import React from 'react'
import { Grid, Header, Image, Segment } from 'semantic-ui-react'

import profileImage from './../images/profileimage.jpg';
import Page from './Page';

const AppHeader = () => (
  <Header>
    <Grid centered columns={2}>
        <Segment style={{marginTop: '2%', background: '#D6E3E8B3'}} padded>
          <Grid.Row centered >
            <Grid.Column textAlign='center'>
                <h2 className='Text'>Hello, I'm Lance!</h2> 
                <Image style={{marginTop: '-1.5%'}} src={profileImage} size='small' centered circular />
                <h3 className='Text' style={{marginTop: '0%'}}>A Jr. Developer from the great state of Arizona who is looking for my first web developer job after making a career switch.</h3>
                <h4 className='Text' style={{marginTop: '-1%'}} >I enjoy sports, playing music, writing, playing games, chasing around my cats, and of course, coding! I love being laid back, <br/>but my wife says she sometimes finds me similar to 'Chip Gaines' from an HGTV show called Fixer Upper.</h4>
                
                <h4  style={{marginTop: '-1%', marginBottom: '-2%'}}>These websites are made using Reactv16, Redux, Node, Socket IO, Semantic UI, MongoDB, Mongoose, Express, and incorporate es6 & es7 syntax.</h4>
          </Grid.Column>
        </Grid.Row>
        </Segment>
        <Grid.Row centered columns={3} className='Display'>
            
            <Segment className='Display' style={{ background: '#D6E3E8B3'}} stacked>
                <Grid.Column>
                <h3>Websites:</h3>
                <Page html="https://ricayustudios.herokuapp.com/" title="Ricayu's Photo Studio" text={<div><br />"A website designed for a photographer's business"</div>}/>

                <Page html="https://lwweather.herokuapp.com" title="Changing CSS Weather App" text={
                    <div><br />A weather app that displays nice, changing backgrounds,
                    <br />and a rain animation based off of the current weather.
                    <p />This site uses apixu, if location or their servers are down,
                    <br />services may temporarily not work.</div>
                }/>

                <Page html="https://mcmtac.herokuapp.com/" title="MCMTAC" text={
                    <div><br />My first full stack app, created with React, MongoDB,
                    <br />Redux, and socket IO for chat. It is a page
                    <br />that allows my friends in others cities and I
                    <br />to play a D&D style game I created. 
                    <br />
                    <br />to login, use: name: 'gm' password: 'me123'</div>
                }/>
                </Grid.Column>
            </Segment>
        </Grid.Row>
    </Grid>
  </Header>
)

export default AppHeader;