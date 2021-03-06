import React from 'react';
import { render } from 'enzyme';
import HelloWorld from '../app/components/HelloWorld';

describe('<HelloWorld>', () => {
  it('should render a H1 tag', () => {
    expect(
      render(<HelloWorld />).find('h1').length
    ).toBe(1);
  });
  it('should say "Hello World!" inside of the H1 tag', () => {
    expect(
      render(<HelloWorld />).find('h1').text()
    ).toBe('Hello World!');
  });
});
