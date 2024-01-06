import express from 'express'
import { getIpAddress } from './helper/getIpAddress'

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.json('Got the request')
})

app.listen(port, () => {
  const ipAddress = getIpAddress()
  console.log(`Server started running at http://localhost:${port}`)
  if (ipAddress) {
    console.log(`Ip server at http://${ipAddress}:${port}`)
  }
})
