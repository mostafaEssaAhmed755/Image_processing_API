import { Request, Response } from 'express'
import path from 'path'
import sharp from 'sharp'

const ImagesPath = path.join(__dirname, '..', '..', 'assets', 'images')

const resize = async (
  filePath: string,
  width: number,
  height: number,
  thumbPath: string
): Promise<void> => {
  await sharp(filePath).resize(width, height).toFile(thumbPath)
}

const handler = async (req: Request, res: Response): Promise<void> => {
  try {
    const width = parseInt(req.params.width),
      height = parseInt(req.params.height),
      filePath = path.join(
        __dirname,
        '..',
        '..',
        'assets',
        'images',
        `${req.params.name}.jpg`
      ),
      thumbPath = path.join(
        __dirname,
        '..',
        '..',
        'assets',
        'images',
        'thumbnail',
        `${req.params.name}_${width}_${height}.jpg`
      )
    await resize(filePath, width, height, thumbPath)

    res.status(200)
    res.sendFile(`${req.params.name}_${width}_${height}.jpg`, {
      root: `${ImagesPath}/thumbnail`,
    })
  } catch (error) {
    res.status(500)
    res.json({ message: `cant resize :${error}` })
  }
}

export default {
  resize,
  handler,
}
