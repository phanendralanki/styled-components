import React from 'react'
import TextBanner from './TextBanner';
import styled from 'styled-components';
import { Button, Card, CardContent, CardTitle, Description } from './Styled.Card';


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;


const InfoBoxes = () => {
  return (
    <div>
    <TextBanner title={'What We Provide'} subtitle={'Our Services'} />
    <Container>
    <Card>
    <CardContent>
      <CardTitle>Title</CardTitle>
      <Description>This is the Description for this above service box</Description>
      <Button>Read More...</Button>
    </CardContent>
    </Card>
    <Card>
    <CardContent>
      <CardTitle>Title</CardTitle>
      <Description>This is the Description for this above service box</Description>
      <Button>Read More...</Button>
    </CardContent>
    </Card>
    <Card>
    <CardContent>
      <CardTitle>Title</CardTitle>
      <Description>This is the Description for this above service box</Description>
      <Button>Read More...</Button>
    </CardContent>
    </Card>
    <Card>
    <CardContent>
      <CardTitle>Title</CardTitle>
      <Description>This is the Description for this above service box</Description>
      <Button>Read More...</Button>
    </CardContent>
    </Card>
    <Card>
    <CardContent>
      <CardTitle>Title</CardTitle>
      <Description>This is the Description for this above service box</Description>
      <Button>Read More...</Button>
    </CardContent>
    </Card>
    <Card>
    <CardContent>
      <CardTitle>Title</CardTitle>
      <Description>This is the Description for this above service box</Description>
      <Button>Read More...</Button>
    </CardContent>
    </Card>
    </Container>
    </div>
  )
}

export default InfoBoxes;