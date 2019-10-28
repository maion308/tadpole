import React, { useState } from 'react'
import TopTemplates from './TopTemplates'

export default function NameForm({ handleInput }) {
  const [name, setName] = useState('')

  const handleNameInput = (e) => {
    let formName = e.target.value
    setName(formName)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInput(name)
  }

  return (
    <>
    <form>
      <input onChange={handleNameInput} value={name} type='text' className="name" placeholder="Eg Sally" />
      <button type='submit' onClick={handleSubmit} className="submit">Set Name
    </button>
    </form>
    </>
  )
}
