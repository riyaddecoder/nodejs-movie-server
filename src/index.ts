import path from 'path'
import express from 'express'
import { getIpAddress } from './helper/getIpAddress'

const app = express()
const port = 5000

//Setting up views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Server static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index', { username: 'Riyad' })
})

app.listen(port, () => {
  const ipAddress = getIpAddress()
  console.log(`Server started running at http://localhost:${port}`)
  if (ipAddress) {
    console.log(`Ip server at http://${ipAddress}:${port}`)
  }
})
