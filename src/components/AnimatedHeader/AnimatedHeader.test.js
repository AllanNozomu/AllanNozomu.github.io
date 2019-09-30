import React from 'react'
import { shallow } from 'enzyme';

import AnimatedHeader from './AnimatedHeader';

// header, secondColorHeader

describe('AnimatedHeader', () => {
  it('Animated Header without params', () => {
    const component = shallow(<AnimatedHeader />);

    expect(component).toMatchSnapshot();
  });
  
  it('Animated Header with header only', () => {
    const component = shallow(<AnimatedHeader header="Hello World!" />);

    expect(component).toMatchSnapshot();
  });

  it('Animated Header with secondColorHeader only', () => {
    const component = shallow(<AnimatedHeader secondColorHeader="Hello World!" />);

    expect(component).toMatchSnapshot();
  });

  it('Animated Header', () => {
    const component = shallow(<AnimatedHeader header="Hello " secondColorHeader="World!" />);

    expect(component).toMatchSnapshot();
  });
})