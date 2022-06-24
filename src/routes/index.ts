import express, { Router, Request, Response } from 'express'
import controllers from '../controllers/index'
import validParams from '../middlewares/validParams'
import fileExists from '../middlewares/fileExists'

const routes: Router = express.Router()

routes.get(
  '/:name/:width/:height',
  [validParams, fileExists],
  controllers.handler
)

routes.use((req: Request, res: Response): void => {
  res.status(404)
  res.json({ message: '404 not found page' })
})

export default routes
