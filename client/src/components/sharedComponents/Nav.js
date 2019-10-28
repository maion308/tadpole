import React from 'react';
import {Link} from "react-router-dom";



export default function Nav() {
  return (
    <header className="head">
      <div className="nav">
      <Link to="/" className="links"><p className="home-nav">Home</p></Link>
      <Link to="/createtemplate" className="links"><p className="home-nav">Create Template</p></Link>
      <Link to="/favorites" className="links"><p className="home-nav">Favorites</p></Link>
      <Link to="/toptemplates" className="links"><p className="home-nav">Top Templates</p></Link>
      </div>
    </header>
  )
}
