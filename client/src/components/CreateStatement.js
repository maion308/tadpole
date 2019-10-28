import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import picture from '../img/pencil.png';
import { useAlert } from 'react-alert';

function CreateStatement({ statement, keywords }) {
  const alert = useAlert();
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState(statement.statement.join(' '))
  const [savedText, setSavedText] = useState([])
  const [count, setCount] = useState(0)
  console.log(count)

  const handleClick = () => {
    setToggle(!toggle)
  }

  const handleInput = (e) => {
    const currentInput = e.target.value
    setText(currentInput)
  }

  const handleSaveClick = () => {
    handleClick()
    formatTextFormatSubmit(text)

    Axios.post('/api/createbrandstatement', {
      statement: text,
      keywords: keywords
    })
      .then(res => {
        let myId = res.data.id;
        if (localStorage) {
          let myStatements;
          if (!localStorage['myStatements']) myStatements = [];
          else myStatements = JSON.parse(localStorage['myStatements'])
          if (!(myStatements instanceof Array)) myStatements = [];
          if (!myStatements.includes(myId)) myStatements.push(myId);

          localStorage.setItem('myStatements', JSON.stringify(myStatements))
        }
        alert.show('Created Statement', {
          timeout: 2000
        })
        /// Code above was partialy from
        /// https://stackoverflow.com/questions/48133909/array-push-is-not-working-for-local-storage
      });
  }

  const formatTextFormatSubmit = (text) => {
    let statement = text.split('. ')
    let formattedStatement = statement.map(sentence => {
      let arr = sentence.split(' ')
      arr.shift()
      return `I ${arr.join(' ')}`
    })
    setSavedText(formattedStatement)
  }

  useEffect(() => {
    if (savedText.length === 3) {
      saveStatement()
    }
  }, [savedText])

  const saveStatement = () => {
    Axios.get('/api/keywords')
      .then(res => console.log(res.data))
  }


  if (toggle) {
    return (
      <div className="edit-box">
        <textarea className="create-template" onChange={handleInput} type="text" value={text} />
        <button className='save-edit' onClick={handleSaveClick}>save</button>
      </div>

    )
  }




  return (
    <body className='ipad-body'>
      <div className="stack-statement">
        <div key={statement.id} className="word-box">
          <p className="box-text">
            {text}
          </p>
          <img onClick={handleClick} className="edit-button" value={text} src={picture}></img>
        </div>
      </div>
    </body >
  )
}


export default CreateStatement;