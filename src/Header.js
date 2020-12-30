import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import './Header.css';

export default function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/sub1-1">Sub</Link>
          <ul className="sub">
            <li><Link to="/sub1-1">Sub1-1</Link></li>
            <li><Link to="/sub1-2">Sub1-2</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
      </ul>
  </nav>
  )
}
