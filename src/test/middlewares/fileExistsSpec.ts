import app from '../../index'
import supertest from 'supertest'

const request = supertest(app)

describe('test fileExists middleware 📦', () => {
  describe('Check the file exists in model 📋', () => {
    it('the file exists✅', async () => {
      const response = await request.get('/cat/100/50')
      expect(response.status).toBe(200)
    })

    it('the wrong file name give error🚫', async () => {
      const response = await request.get('/bee/100/50')
      expect(response.status).toBe(404)
    })
  })
  describe('Check the thumbnail file exists in model 📋', () => {
    it('the thumbnail exists give cached file✅', async () => {
      const response = await request.get('/cat/100/50')
      expect(response.status).toBe(200)
    })

    it('the thumbnail not exists will resize image to create new one✅', async () => {
      const width = Math.floor(Math.random() * 200) + 1
      const height = Math.floor(Math.random() * 200) + 1

      const response = await request.get(`/cat/${width}/${height}`)
      expect(response.status).toBe(200)
    })
  })
})
