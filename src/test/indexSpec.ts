import supertest from 'supertest'
import app from '../index'

const request = supertest(app)
describe('Test the main index server file📦', () => {
  describe('Test the API  responses📋', () => {
    it('gets the api endpoint✅', async () => {
      const response = await request.get('/')
      expect(response.status).toBe(200)
    })
    it('gets 404 if have wrong path 🚫', async () => {
      const response = await request.get('/hello')
      expect(response.status).toBe(404)
    })
  })
})
