import React, { useState } from 'react'
import Axios from 'axios';
import picture from '../../img/pencil.png'
import { useAlert } from 'react-alert';

export default function FavBoxes({ statement }) {
  const alert = useAlert();
  const [display, setDisplay] = useState(true)
  const [toggle, setToggle] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [input, setInput] = useState(statement.statement)

  const handleDelete = () => {
    Axios.delete(`/api/brandstatement/${statement.id}`)
      .then(res => {

      })
    alert.show('Deleted Statement', {
      timeout: 2000
    })
    setDisplay(false)
  }

  const handleInput = (e) => {
    let text = e.target.value;
    setInput(text)
  }
  const handleSaveClick = () => {
    setToggle(!toggle)
    Axios.put(`/api/brandstatement/${statement.id}`, {
      statement: input
    }).then(res => console.log('saved'))
    alert.show('Statement Updated', {
      timeout: 2000
    })
  }

  if (!display) {
    return <></>
  }

  if (toggle) {
    return (
      <div className="edit-box">
        <textarea className="create-template" onChange={handleInput} type="text" value={input} />
        <button className='save-edit' onClick={handleSaveClick}>save</button>
      </div>
    )
  }

  return (
    <>
      <div className="word-box">
        <p>{input}</p>
        <img onClick={() => setToggle(!toggle)} className="edit-button" src={picture}></img>
      </div>
      <button onClick={handleDelete} className="delete-button">Delete</button>
    </>
  )
}
