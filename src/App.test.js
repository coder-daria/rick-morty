import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import { PageLayout } from './components';

const setup = () => shallow(<App />);

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = setup();

    expect(wrapper).toBeDefined();
  });

  it('renders initial page', () => {
    const wrapper = setup();

    expect(wrapper.find(PageLayout)).toBeDefined();
  });
});
