import React from 'react';
import renderer from 'react-test-renderer'; 
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('<Controls />', () => {

  it('should be able to close gate when its open', () => {
    // testing that the function is being fired
    let toggleClosed = jest.fn()

    let { getByText } = render(<Controls
    closed={false} toggleClosed={toggleClosed} />)
 
    let button = getByText(/Close Gate/i)

    fireEvent.click(button)

    expect(toggleClosed).toBeCalled()


  })
  it('should be able to open the gate when its closed', () => {
    let toggleClosed = jest.fn()

    let { getByText } = render(<Controls
    closed={true} toggleClosed={toggleClosed} />)
 
    let button = getByText(/Open Gate/i)

    fireEvent.click(button)

    expect(toggleClosed).toBeCalled()

  })
  it('should be able to lock the gate when its unlocked and closed', () => {
    let toggleLocked = jest.fn()

    let { getByText } = render(<Controls
    closed={true} locked={false} toggleLocked={toggleLocked} />)
 
    let button = getByText(/Lock Gate/i)

    fireEvent.click(button)

    expect(toggleLocked).toBeCalled()

  })
  it('should be able to unlock the gate when its locked and closed', () => {
    let toggleLocked = jest.fn()

    let { getByText } = render(<Controls
    closed={true} locked={true} toggleLocked={toggleLocked} />)
 
    let button = getByText(/\bunLock Gate\b/i)

    fireEvent.click(button)

    expect(toggleLocked).toBeCalled()

  })
});