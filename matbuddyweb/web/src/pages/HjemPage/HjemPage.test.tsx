import { render } from '@redwoodjs/testing/web'

import HjemPage from './HjemPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HjemPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HjemPage />)
    }).not.toThrow()
  })
})
