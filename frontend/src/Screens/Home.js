import React, { Component, useState } from 'react'
import data from '../data'
import { Link } from "react-router-dom"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'


export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: ""
    }
  }
  handleOnInputChange = (event) => {
    const query = event.target.value
    this.setState({ query: query })
  }

  render() {


    return (
      <div>
        <h1>Welcome to Home page</h1>
        <br />

        <Link to="/Students" >
          <div className="button_cont">
            <a class="example_a" href="add-website-here" target="_blank" rel="nofollow noopener">View all students</a>

          </div>
        </Link>


      </div>
    );
  }
}
