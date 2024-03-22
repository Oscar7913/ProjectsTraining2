import request from 'supertest'
import app from '../../src/app'

describe("Test Make PNG File",()=>{

    const bodyText = 'ELB("lb") >> EC2("web") >> RDS("userDB")'

    it("should return a PNG file",async ()=>{
        const res = await request(app).post('/api/diagram').send(bodyText).set('Content-Type','text/plain')
        expect(res.type).toBe('text/html');
    })
})