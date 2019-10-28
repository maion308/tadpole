import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import ButtonList from './ButtonList';
import NameForm from './NameForm';
import picture from '../img/tadpole.png'

export default function LandingPage() {
  const [userSelection, setUserSelection] = useState({
    name: '',
    keywords: [],
    ready: false,
  });

  const handleInput = (name) => {
    let input = name
    setUserSelection(prevState => ({
      ...prevState,
      name: input
    }))
  }

  /// when everything is ready to send this changes false to true
  const trackWords = (arr) => {
    let keyArr = arr;
    setUserSelection(prevState => ({
      ...prevState,
      keywords: keyArr,
    }))
  }

  // if ready ready redirect
  if (userSelection.name !== '' && userSelection.keywords.length === 3) {
    return <Redirect to={{ pathname: '/main', state: userSelection }} />
  }

  return (
    <div className="home">
      <img src={picture} className="tadpole" />
      <h1 className='title'>
        Tadpole
      </h1>

      <h5>let us help you find your personal brand</h5>
      <h4>Enter name to start and select 3 key words</h4>
      <NameForm handleInput={handleInput} />
      <div className="user-name">
        {userSelection.name}
      </div>
      <br />
      <br />
      <ButtonList trackWords={trackWords} />
    </div>
  )
}
