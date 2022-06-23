import app from '../../index'
import supertest from 'supertest'

const request = supertest(app)

describe('test validParams middleware 📦', () => {
  describe('Check the parameters (name, width, height) are there and have a right type📋', () => {
    it('the parameters exists✅', async () => {
      const response = await request.get('/cat/100/100')
      expect(response.status).toBe(200)
    })

    it('the wrong parameters name give error🚫', async () => {
      const response = await request.get('/100/100/50')
      expect(response.status).toBe(404)
    })

    it('the wrong parameters width give error🚫', async () => {
      const response = await request.get('/cat/cat/50')
      expect(response.status).toBe(400)
    })

    it('the wrong parameters height give error🚫', async () => {
      const response = await request.get('/cat/100/cat')
      expect(response.status).toBe(400)
    })
  })
  describe('validate the parameter (name)📋', () => {
    it('the parameter at least 3 charcter✅', async () => {
      const response = await request.get('/cat/100/50')
      expect(response.status).toBe(200)
    })

    it('the parameter less than 3 charcter give error🚫', async () => {
      const response = await request.get('/ca/100/50')
      expect(response.status).toBe(400)
    })
  })
  describe('validate the parameter (width)📋', () => {
    it('the parameter length at least 1✅', async () => {
      const response = await request.get('/cat/100/50')
      expect(response.status).toBe(200)
    })

    it('the parameter length less than 1 give error🚫', async () => {
      const response = await request.get('/ca/0/50')
      expect(response.status).toBe(400)
    })
  })
  describe('validate the parameter (height)📋', () => {
    it('the parameter length at least 1✅', async () => {
      const response = await request.get('/cat/100/50')
      expect(response.status).toBe(200)
    })

    it('the parameter length less than 1 give error 🚫', async () => {
      const response = await request.get('/ca/100/0')
      expect(response.status).toBe(400)
    })
  })
})
