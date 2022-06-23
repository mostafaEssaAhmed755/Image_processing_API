import express, { Application } from 'express'
import routes from './routes/index'

const app: Application = express()
const PORT = 3000

app.use(express.static('assets'))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`)
})

export default app
