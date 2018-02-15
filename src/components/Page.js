import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

const Page = (props) => (
    <Segment color='orange' >
        <Button color='teal' href={props.html} target="_blank">{props.title}</Button>
        <div>{props.text}</div>
    </Segment>
)

export default Page;