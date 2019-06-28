import React from 'react';
import renderer from 'react-test-renderer'; 
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
  // 2. write this test
  it('matches snapshot default values', () => {
    const tree = renderer.create(<Display />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('matches snapshot with closed gate ', () => {
    const tree = renderer.create(<Display closed={true} />); // generates a DOM tree

    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('matches snapshot with closed and locked gate ', () => {
    const tree = renderer.create(<Display closed={true} locked={true} />); // generates a DOM tree

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
