import { Request, Response, NextFunction } from 'express'
import ImageModel from '../model/Image'
import path from 'path'

const ImagesPath = path.join(__dirname, '..', '..', 'assets', 'images')

const fileExists = (req: Request, res: Response, next: NextFunction): void => {
  const name = req.params.name,
    width = parseInt(req.params.width),
    height = parseInt(req.params.height)

  handler({ name, width, height }, res, next)
}

const handler = (
  data: { name: string; width: number; height: number },
  res: Response,
  next: NextFunction
): void => {
  const thumbnailName = `${data.name}_${data.width}_${data.height}`

  if (!ImageModel.data.includes(data.name)) {
    res.status(404)
    res.json({ message: `file ${data.name} not found` })
  } else if (ImageModel.thumbnail.includes(thumbnailName)) {
    res.status(200)
    res.sendFile(`${thumbnailName}.jpg`, {
      root: `${ImagesPath}/thumbnail`,
    })
  } else {
    next()
  }
}
export default fileExists
