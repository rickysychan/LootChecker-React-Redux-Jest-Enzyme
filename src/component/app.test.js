import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
    const app = shallow(<App />)
    
    it('renders properly', () => {
        expect(app).toMatchSnapshot()
    })    

    it('contains a connected wallet component', () => {
        // console.log(app.debug())
        expect(app.find('Connect(Wallet)').exists()).toBe(true)
    })

    it('contains a connected Loot Component', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true)
    })
    it('contains a link to the coindesk price page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price')
    })
})