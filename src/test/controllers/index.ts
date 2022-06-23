import app from '../../index'
import supertest from 'supertest'

const request = supertest(app)

describe('test index controller 📦', () => {
  describe('Check the resize function 📋', () => {
    it('resize function run successfuly ✅', async () => {
      const width = Math.floor(Math.random() * 200) + 1
      const height = Math.floor(Math.random() * 200) + 1

      const response = await request.get(`/cat/${width}/${height}`)
      expect(response.status).toBe(200)
    })
  })
})
