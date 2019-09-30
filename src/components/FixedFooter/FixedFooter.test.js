import React from 'react'
import { shallow } from 'enzyme';

import FixedFooter from './FixedFooter';

describe('FixedFooter', () => {
  it('Footer without last update date', () => {
    const component = shallow(<FixedFooter />);

    expect(component).toMatchSnapshot();
  });
  
  it('Footer with last update date', () => {
    const component = shallow(<FixedFooter lastTimeUpdate="11/12/2013"/>);

    expect(component).toMatchSnapshot();
  });
})