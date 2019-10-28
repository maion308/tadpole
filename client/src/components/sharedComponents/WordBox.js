import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import picture from '../../img/pencil.png';
import DirectArrows from './DirectArrows';
import Axios from 'axios';

export default function WordBox({ statement }) {
  const alert = useAlert();

  const [toggle, setToggle] = useState(false);
  const [keywords, setKeyWords] = useState([])
  const [text, setText] = useState(statement.statement)

  useEffect(() => {
    Axios.get(`/api/keywordsarr/${statement.id}`)
      .then(res => {
        let resData = [];
        res.data.forEach(d => {
          resData.push(d.keyword_id)
        })
        console.log(resData)
        setKeyWords(resData)
      })
  }, [])

  const handleInput = (e) => {
    let currText = e.target.value;
    setText(currText)
  }

  const handleClick = () => {
    setToggle(!toggle)
  }

  const handleSaveClick = () => {
    handleClick()

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


  if (toggle) {
    return (
      <div className="edit-box">
        <textarea className="create-template" onChange={handleInput} type="text" value={text} />
        <button className='save-edit' onClick={handleSaveClick}>save</button>
      </div>
    )
  }
  return (
    <>
      <div className="word-box">
        <p>{text}</p>
        <img onClick={() => setToggle(!toggle)} className="edit-button" src={picture}></img>
      </div>
      <DirectArrows rank={statement.rank} id={statement.id} />
    </>
  )
}
