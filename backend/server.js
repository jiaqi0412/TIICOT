import express from 'express'
import data from './data'
const app = express()

app.get("/api/students", (req, res) => {
  res.send(data.students)
})

app.listen(3000, () => {console.log("Sever start at:local:3000")})