const express = require('express')
const kycRoute = require("./routes/kycRoute")
const cors = require('cors');

const app = express()
const port = 8000;


app.use(cors())


app.use(express.json());

app.get('/', (req, res) => {
  res.json({message:'Hello World i am alive!'})
})

app.use('/api/', kycRoute)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})