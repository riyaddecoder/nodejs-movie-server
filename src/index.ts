import * as path from 'path'
import express from 'express'
import { getIpAddress } from './helper/getIpAddress'
import { getAllFiles } from './helper/getAllFiles'

export const ROOT_DIR = '/home/riyad/Movies'

const app = express()
const port = 5000

//Setup json format
app.use(express.json())

//Setting up views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Server static files
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(ROOT_DIR))

app.get('/', (req, res) => {
  res.render('index', {
    files: getAllFiles(ROOT_DIR),
    subPath: '',
  })
})

app.post('/goto-folder', (req, res) => {
  let requestPath = req.body.path

  res.render('fileList', {
    files: getAllFiles(path.join(ROOT_DIR, requestPath)),
    subPath: requestPath,
  })
})

app.listen(port, () => {
  const ipAddress = getIpAddress()
  console.log(`Server started running at http://localhost:${port}`)
  if (ipAddress) {
    console.log(`Ip server at http://${ipAddress}:${port}`)
  }
})
