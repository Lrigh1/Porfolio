import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

const Page = () => (
    <Segment color='orange' >
        <Button color='teal' href="https://mcmtac.herokuapp.com/" target="_blank">MCMTAC</Button>
        <br />My first full stack app, created with React, MongoDB,
        <br />Redux, and socket IO for chat. It is a page
        <br />that allows my friends in others cities and I
        <br />to play a D&D style game I created. 
        <br />
        <br />to login, use: name: 'gm' password: 'me123'
    </Segment>
)

export default Page;