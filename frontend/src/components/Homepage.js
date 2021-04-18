import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, Switch, Route, Link, useHistory,
} from 'react-router-dom'

import ReactFullpage from '@fullpage/react-fullpage'

import s from 'styled-components'

const HomeStripe= s.div`
  display: flex; 
  width: 1000px;
  height: 100%;
  background-color: salmon;
  padding: 0px;
  z-index: -5;
  justify-content: flex-start;
`
const FinalStripe= s.div`
  display: flex; 
  top: 750px;
  width: 100%;
  height: 50%;
  background-color: salmon;
  padding: 0px;
  z-index: -5;
`

const HomeAlign= s.div`
  display: flex; 
  width: 250px;
  height: 100%;
  padding: 0px;
  z-index: -3;
  justify-content: flex-start;
`

const Button = s.button`
  position: absolute;
  width: 300px; 
  height: 75px; 
  z-index: 1;
  font-size: 20px;
  font-family: Avenir;
  border-radius: 3px; 
  right: 65px;
  align-self:center;
`

const Title = s.h1`
  color: white;
  z-index: 1;
  font-size: 125px;
  font-family: Avenir;
  align-self: center;
`

const RegularTitle = s.h3`
  color: white;
  z-index: 1;
  font-size: 50px;
  font-family: Avenir;
`

const Othertext = s.h5`
  color: salmon;
  z-index: 1;
  font-size: 30px;
  font-family: Avenir;
`

const Sectiontwo= s.div`
  display: flex; 
  width: 750px;
  height: 750px;
  background-color: salmon;
  padding: 0px;
  z-index: -5;
  justify-content: center;
`
const Arrow =s.div`
  position: absolute;
  right: 210px; 
  top: 775px;
  border: solid salmon;
  border-width: 0 7px 7px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  z-index: 3;
`

const Box = s.div`
  position: absolute; 
  width: 500px;
  height: 500px;
  top: 150px;
  right: 85px;
  border: solid salmon;
  padding: 0px;
  z-index: -5;
  border-width: 5px;
  justify-content: center;

`

const Box2 = s.div`
  display:flex; 
  width: 650px;
  height: 650px;
  margin-left: 400px;
  border: solid salmon;
  padding: 0px;
  z-index: -5;
  border-width: 5px;
  justify-content:flex-start
`

const Bullet = s.li`
  color: #B8B8B8;
  font-family: Avenir;
  font-size: 32px;
  font-color: #808080;
  width: 600px;
`

const Homepage = () => {

  const [state, setState] = useState('/')
  
  const history = useHistory()
  useEffect (async() => {
    if (state == 'signup') {
      history.push('/signup')
    } if (state == 'login') {
      history.push('/login')
    }
  }, [state])
  return(
    <>
    <ReactFullpage
    //fullpage options
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <HomeStripe >
              <Title>Welcome</Title>
            </HomeStripe>
            <Button style={{top:'300px'}}onClick={() => setState('login')}>
                Login
            </Button>

            <Button style={{top:'425px'}}onClick={() => setState('signup')}>
                Create an account
            </Button>
            <Othertext style={{position:'absolute', right:'40px', top:'675px'}} >Scroll down to learn more</Othertext>
            <Arrow />
          </div>
          <div className="section">
            <Sectiontwo>
              <RegularTitle style={{marginLeft: '10px'}}>Can't figure out where and what to eat? </RegularTitle>
              <RegularTitle style={{marginTop: '400px', marginRight:'0px'}}>Trying to find something open for those late night munchies?</RegularTitle>
            </Sectiontwo>
            <Box >
              <Othertext style={{position:'absolute', left: '60px', top: '275px', fontSize:'36px'}}>A personal food guide</Othertext>
              <Othertext style={{position:'absolute', left: '30px', top: '325px', fontSize:'36px'}}> that is curated just for you</Othertext>
            </Box>
          </div>
          <div className='section'>
            <Box2>
              <Othertext style={{fontSize:'46px', marginLeft: '225px', marginBottom: '10px'}}>Features:
              </Othertext>
              <Bullet style={{position: 'absolute', marginLeft: '25px', top: '250px'}}>Recommendations based on your favorite foods, preferences, and mood </Bullet>
              <Bullet style={{position: 'absolute', marginLeft: '25px', top: '350px'}}>Search for local hot restaurants based on your location </Bullet>
              <Bullet style={{position: 'absolute', marginLeft: '25px', top: '450px'}}>Get suggested restaurants based on other users like you </Bullet>            
              <Othertext style={{fontSize:'46px', marginTop: '500px', marginLeft:'-300px'}}>and so much more! 
              </Othertext>
            </Box2>
          </div>
          <div className='section'>
            <FinalStripe>
              <RegularTitle style={{marginLeft: '25px', marginBottom:'10px'}}> CIS 550 Final Project (Spring 2021)</RegularTitle>
              <RegularTitle style={{marginLeft: '25px'}}> By: Jasmine Cao, Paul Lin, Leah Voytovich, Amy Yeung</RegularTitle>
              </FinalStripe>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
    </>
  )
}


export default Homepage