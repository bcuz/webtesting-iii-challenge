import React from 'react';
import renderer from 'react-test-renderer'; 
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('can close and lock the gate', () => {
    let { getByText, queryByText} = render(<Dashboard />)
 
    let close = getByText(/\bClose Gate\b/i)
    let lock = getByText(/\block Gate\b/i)

    fireEvent.click(close)
    fireEvent.click(lock)

    let locked = queryByText(/\blocked\b/i)
    let closed = queryByText(/\bclosed\b/i)

    expect(locked).toBeInTheDocument()
    expect(closed).toBeInTheDocument()

  })
  it('can close and lock the gate, then unlock and open it', () => {
    let { getByText, queryByText} = render(<Dashboard />)
 
    let close = getByText(/\bClose Gate\b/i)
    let lock = getByText(/\block Gate\b/i)

    fireEvent.click(close)
    fireEvent.click(lock)

    let unlock = getByText(/\bunlock Gate\b/i)
    let open = getByText(/\bopen Gate\b/i)

    fireEvent.click(unlock)
    fireEvent.click(open)

    let unlocked = queryByText(/\bunlocked\b/i)
    let opened = queryByText(/\bopen\b/i)

    expect(unlocked).toBeInTheDocument()
    expect(opened).toBeInTheDocument()

  })


})