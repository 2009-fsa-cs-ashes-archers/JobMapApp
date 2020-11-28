/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {MapHome} from './user-home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('UserHome', () => {
  let mapHome

  beforeEach(() => {
    mapHome = shallow(<MapHome email="cody@email.com" />)
  })

  it('renders the email in an h3', () => {
    expect(mapHome.find('h3').text()).to.be.equal('Welcome, cody@email.com')
  })
})
