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
});