import React, { useState, useEffect } from 'react'
import Nav from './sharedComponents/Nav';
import WordBox from './sharedComponents/WordBox'
import Axios from 'axios';


export default function TopTemplates() {
  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get('/api/brandstatements')
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
  }, [])

  return (
    <>
      <Nav />
      <body className="body">
        <div className="template-boxes">

          {data.map(statement => (
            <WordBox key={statement.id} statement={statement} />
          ))}
        </div>
      </body>
    </>
  )
}