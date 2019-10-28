import React, { useState, useEffect } from 'react'
import Nav from './sharedComponents/Nav';
import CreateStatement from './CreateStatement'
import Axios from 'axios';

export default function MainPage({ location }) {
  console.log(location)
  const { state } = location;

  const toPass = state.keywords

  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get(`api/allsentenceswithkeyword/${toPass}`, {
      params: toPass
    })
      .then(res => formatSentences(res.data))
      .catch(e => console.log(e.message))
  }, [])

  const formatSentences = (resData) => {
    const statements = [{
      id: 1,
      statement: []
    }, {
      id: 2,
      statement: []
    }, {
      id: 3,
      statement: []
    }]
    resData.forEach((item, index) => {
      item.forEach((i, idx) => {
        statements[idx].statement.push(`${state.name} ${i.string}.`)
      })
    })
    setData(statements)
  }


  return (
    <>
      <div className="head">
        <Nav />
      </div>
      <div className="template-boxes">
        {data.map(statement => (
          <CreateStatement key={statement.id} statement={statement} myKeyWords={data} keywords={toPass} />
        ))}
      </div>
    </>
  )
}
