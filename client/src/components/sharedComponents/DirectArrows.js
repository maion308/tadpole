import React, { useState } from 'react'
import arrowup from '../../img/up.png'
import arrowdown from '../../img/down.png'
import Axios from 'axios';

export default function DirectArrows({ id, rank }) {
  const [theRank, setTheRank] = useState(rank)
  const [disableUp, setDisableUp] = useState(false)
  const [disableDown, setDisableDown] = useState(false)

  const upvote = () => {
    let curRank = theRank + 1
    setTheRank(curRank)
    setDisableUp(!disableUp)
    Axios.put(`/api/up/${id}`).then(res => console.log(res))
  }
  const downvote = () => {
    let curRank = theRank - 1
    setTheRank(curRank)
    setDisableDown(!disableDown)
    Axios.put(`api/down/${id}`).then(res => console.log(res))
  }

  return (
    <div className='direct-arrows'>
      <p className='vote'>Votes: {theRank}</p>
      <button disabled={disableUp} onClick={upvote} className='arrow-btn'><img src={arrowup} className="arrow" /></button>
      <button disabled={disableDown} onClick={downvote} className='arrow-btn'><img src={arrowdown} className="arrow" /></button>
    </div>
  )
}
