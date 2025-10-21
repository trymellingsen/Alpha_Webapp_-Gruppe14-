import { render } from '@redwoodjs/testing/web'

import HjemPage from './HjemPage'


describe('HjemPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HjemPage />)
    }).not.toThrow()
  })
})
