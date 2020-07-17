import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
// import data from "../data"
import axios from "axios"
import { useCombobox } from 'downshift'
import { Input } from "antd"

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/students")
      setStudents(data)
    }
    fetchData()
    return () => {
      //
    };
  }, []);

  const [inputItems, setInputItems] = useState([])
  const [users, setUsers] = useState([])
  const [singleUser, setSingleUser] = useState("")


  console.log(students)
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        students.filter((item) =>
          item.firstName.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      )
    },
  })

  return (
    <div>
      <h1>Welcome to Students page</h1>
      <br />
      <Link to="/">
        <div className="button_cont">
          <a class="example_a" href="add-website-here" target="_blank" rel="nofollow noopener">Go back to home page</a>

        </div>
      </Link>
      <br />
      <h2>All Students:</h2>
      <ol className="students">
        {students.map(student => <li>
          {student.firstName + " " + student.lastName}
        </li>)}
      </ol>


      <div className="result">
        <h2>Search for Students: </h2>
        <div className="search-label" htmlFor="search-input">
          <br />

          <div {...getComboboxProps()}>
            <Input
              {...getInputProps()}
              placeholder="Search for First Name"
              enterButton="Search"
              size="large"
            />
          </div>

          <ul {...getMenuProps()}>
            {isOpen &&
              inputItems.map((item, index) => (
                <span
                  key={item.id}
                  {...getItemProps({ item, index })}
                  onClick={() => setSingleUser(item.firstName)}
                >
                  <li
                    style={highlightedIndex === index ? { background: "#ede" } : {}}
                  >
                    <h4>{item.firstName}</h4>
                  </li>
                </span>
              ))}
          </ul>

        </div>
      </div>
    </div>
  )
}
