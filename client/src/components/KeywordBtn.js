import React, { useState, useEffect } from 'react'

export default function KeywordBtn({ button, addClicked, clickedArr }) {
  const [clicked, setClicked] = useState(false);
  const { word } = button;

  const handleClick = () => {
    if (clickedArr.length < 3 || clickedArr.includes(button.id)) {
      addClicked(button.id, !clicked)
      setClicked(!clicked)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={clicked ? 'buttons clicked' : 'buttons'}
    >
      {word}
    </button>
  )
}
