import { Request, Response, NextFunction } from 'express'

const validParams = (req: Request, res: Response, next: NextFunction) => {
  const name = req.params.name,
    width = parseInt(req.params.width),
    height = parseInt(req.params.height)

  handler({ name, width, height }, res, next)
}

const handler = (
  data: { name: string; width: number; height: number },
  res: Response,
  next: NextFunction
) => {
  if (!data.name || !data.width || !data.height) {
    res.status(400)
    res.json({ message: 'bad request configuration' })
  } else if (data.name.length < 3) {
    res.status(400)
    res.json({ message: 'Image name must be at least 3 characters long' })
  } else if (data.width < 1) {
    res.status(400)
    res.json({ message: 'Image width must be at least greater than 1' })
  } else if (data.height < 1) {
    res.status(400)
    res.json({ message: 'Image height must be at least greater than 1' })
  } else {
    next()
  }
}
export default validParams
