import controller from '../../controllers/index'
import path from 'path'

describe('test index controller 📦', () => {
  describe('Check the resize function 📋', () => {
    it('resize function run successfuly ✅', async () => {
      const width = Math.floor(Math.random() * 200) + 1,
        height = Math.floor(Math.random() * 200) + 1,
        filePath = path.join(
          __dirname,
          '..',
          '..',
          '..',
          'assets',
          'images',
          'cat.jpg'
        ),
        thumbPath = path.join(
          __dirname,
          '..',
          '..',
          '..',
          'assets',
          'images',
          'thumbnail',
          `cat_${width}_${height}.jpg`
        )

      expect(async () => {
        await controller.resize(filePath, width, height, thumbPath)
      }).not.toThrow()
    })
  })
})
