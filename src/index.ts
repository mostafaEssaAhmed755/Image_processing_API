import express, { Application } from 'express'
import path from 'path'
import routes from './routes/index'

const app: Application = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, '..', 'assets')))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`)
})

export default app
