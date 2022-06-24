import { Request, Response } from 'express'
import path from 'path'
import sharp from 'sharp'

const ImagesPath = path.join(__dirname, '..', '..', 'assets', 'images')

const resize = async (req: Request, res: Response): Promise<void> => {
  const name = req.params.name,
    width = parseInt(req.params.width),
    height = parseInt(req.params.height),
    thumbnailName = `${name}_${width}_${height}.jpg`

  try {
    await sharp(`${ImagesPath}/${name}.jpg`)
      .resize(width, height)
      .toFile(`${ImagesPath}/thumbnail/${thumbnailName}`)

    res.status(200)
    res.sendFile(thumbnailName, {
      root: `${ImagesPath}/thumbnail`,
    })
  } catch (error) {
    res.status(500)
    res.json({
      message: `An error occurred while resizing the image Error: ${error}`,
    })
  }
}

export default {
  resize,
}
