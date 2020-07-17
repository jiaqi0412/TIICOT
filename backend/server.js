import express from 'express'
import data from './data'
const app = express()

app.get("/api/students", (req, res) => {
  res.send(data.students)
})

const port = process.env.PORT || 3000
app.listen(port, () => {console.log("Sever start at:local:3000")})