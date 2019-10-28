import React, { useState } from 'react'
import Nav from './sharedComponents/Nav';
import ButtonList from './ButtonList';

function CreateTemplate({ handleSaveClick, trackWords }) {
  const [input, setInput] = useState('')
  const [disabled, setDisabled] = useState(true);

  const handleInput = (e) => {
    let string = e.target.value;
    setInput(string)
    if (string.split('').length >= 150) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
    handleSaveClick(input)
  }

  return (
    <div>
      <>
        <Nav />
        <body className="body">
          <div className="template-body">
            <textarea onChange={handleInput} value={input} className="create-template" placeholder="Enter text here"></textarea>
            <p className='instructions'>
              Write out your written statement inside the box and select three key words associated to your statement.
              Click the save button once you're happy with your statement and word choices.
      </p>
            <ButtonList trackWords={trackWords} />
            <button disabled={disabled} onClick={handleClick} className="save-button">Save</button>
          </div>
        </body>
      </>
    </div>
  )
}

export default CreateTemplate;
