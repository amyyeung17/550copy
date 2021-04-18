import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router, Switch, Route, Link, useHistory,
} from 'react-router-dom'

import s from 'styled-components'


const Alignbegin = s.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100px;
  width: 100%;
`
const Alignitems = s.div`
  display: flex;
  justify-content: center; 
  flex-direction: column;
  z-index: -3;
  align-items: center;
  width: 100%; 
  height: 500px; 
`

const Loginbanner = s.div` 
  display: flex; 
  width: 100%;
  height: 100px;
  background-color: salmon;
  padding: 0px;
  z-index: -5;
  justify-content: center;
`

const Intro = s.h1`
  color: white;
  z-index: 1;
  font-size: 38px;
  font-family: Avenir;
  left: 50%
`

const Input = s.input`
  width: 500px; 
  height: 50px; 
  z-index: 1;
  font-size: 26px;
  font-family: Avenir;
  border-radius: 3px; 
`

const Loginbutton = s.button`
  width: 200px; 
  height: 50px; 
  z-index: 1;
  font-size: 20px;
  font-family: Avenir;
  border-radius: 3px; 
`

const Text = s.h3`
  position: absolute; 
  left: 475px;
  color: gray;
  font-weight: 450; 
  z-index: 1;
  font-size: 24px;
  font-family: Avenir;
  margin-bottom: -10px;
`

const Extra = s.p`
  color: gray;
  z-index: 1;
  font-size: 18px;
  font-family: Avenir;
  margin-bottom: -10px;
  z-index: 3;
`


const Account = () => {
  const [state, setState] = useState('')

  const history = useHistory()
  useEffect (async() => {
    if (state == 'back') {
      history.push('/')
    } if (state == 'login') {
      history.push('/login')
    }
  }, [state])

  return(
    <>
    <Alignbegin>
        <Loginbanner>
          <Intro> Create an account </Intro>
        </Loginbanner>
      </Alignbegin>
      <Alignitems>
        <Text style={{top: '150px'}}> Name: </Text>
        <Input style={{marginTop: '140px'}}/>
        <Text style={{top: '245px'}}> Email: </Text>
        <Input style={{marginTop: '50px'}} />
        <Text style={{top: '335px'}}> Username: </Text>
        <Input style={{marginTop: '50px'}} />
        <Text style={{top: '430px'}}> Password: </Text>
        <Input style={{marginTop: '50px'}} />
        
        <Loginbutton style={{marginTop: '35px'}}> Create an account </Loginbutton>
        <Router>
          <Extra> Have an account already? Login
            <Link to='/signup' onClick={() => setState('login')}> here! </Link>
          </Extra>
        </Router>
      </Alignitems>
      <Alignitems style={{height:'250px'}}>
        <Loginbutton style={{marginTop: '35px'}} onClick={() => setState('back')}> Back </Loginbutton>
      </Alignitems>
    </>
  )

}

export default Account