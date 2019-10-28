import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import Nav from './sharedComponents/Nav';
import Axios from 'axios';
import picture from '../img/pencil.png';
import WordBox from './sharedComponents/WordBox';
import FavBoxes from './sharedComponents/FavBoxes';
import { link } from 'fs';



export default function Favorties() {
  const [myFaves, setMyFaves] = useState([]);
  const myItems = JSON.parse(localStorage.getItem('myStatements'))


  useEffect(() => {
    if (myItems && myItems.length > 0) {
      let arr = []
      myItems.forEach(item => {
        Axios.get(`/api/mybrands/${item}`)
          .then(res => {
            if (res.data != null) {
              console.log()
              arr.push(res.data)
              setMyFaves(arr)
            }
          })
      })
    }
  }, [])



  return (
    <>
      <Nav />
      <body className="body">
        <div className="template-boxes">
          {myFaves.map(statement => (
            <FavBoxes statement={statement} />
          ))}
        </div>
      </body>
    </>
  )
}






// export default function Favorties({ location }) {
//   const [data, setData] = useState([])
//   const [favs, setFavs] = useState([])
//   const [input, setInput] = useState('');
//   const [redirect, setRedirect] = useState(false);
//   const [editOpen, setEditOpen] = useState(false);
//   const myItems = JSON.parse(localStorage.getItem('myStatements'))

//   useEffect(() => {
//     if (location.state) {
//       Axios.get(`/api/brandstatement/${location.state.id}`)
//         .then(res => {
//           setData(res.data)
//           setInput(res.data.statement)
//         })
//     }

//     if (myItems && myItems.length > 0) {
//       myItems.forEach(item => {
//         Axios.get(`/api/mybrands/${item}`)
//           .then(res => {
//             let arr = favs
//             arr.push(res.data)
//             setFavs(arr)
//           })
//       })

//     }
//   }, [])

//   const handleDelete = () => {
//     Axios.delete(`/api/brandstatement/${location.state.id}`)
//       .then(res => {

//       })
//     setRedirect(true)
//   }

//   const handleInput = (e) => {
//     let text = e.target.value
//     setInput(text)
//   }

//   const handleEditClick = () => {
//     setEditOpen(!editOpen)
//   }

//   const handleSaveClick = () => {
//     setEditOpen(!editOpen)
//     Axios.put(`/api/brandstatement/${location.state.id}`, {
//       statement: input
//     }).then(res => console.log('saved'))
//   }

//   if (redirect) {
//     return <Redirect to='/' />
//   }

//   if (editOpen) {
//     return (
//       <>
//         <Nav />
//         <body className="body">
//           <div className="template-boxes">
//             <div>
//               <textarea className="create-template" onChange={handleInput} type="text" value={input} />
//               <button onClick={handleSaveClick}>save</button>
//             </div>
//           </div>
//         </body>
//       </>
//     )
//   }

//   return (
//     <>
//       <Nav />
//       <body className="body">
//         <div className="template-boxes">
//           <div className="word-box">
//             <p>{data.statement}</p>
//             <img onClick={handleEditClick} className="edit-button" src={picture}></img>
//           </div>
//           <button onClick={handleDelete} className="delete-button">Delete</button>
//         </div>
//       </body>
//     </>
//   )
// }