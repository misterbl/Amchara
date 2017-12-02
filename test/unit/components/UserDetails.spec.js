import { shallow, mount } from 'enzyme';
import React from 'react';
import { assert, expect } from 'chai';
import { spy } from 'sinon';
import { Specialities, Speciality, Category, Infos, Card} from '../../../src/components/Styles.jsx';
import {UserDetails} from '../../../src/components/UserDetails.jsx';

describe('<UserDetails />', () => {
  const props = {
    user: {
      data: 'dataTest',
      specialities:['speciality1', 'speciality2'],
    }};

  const testUserDetails = shallow(
    <UserDetails {...props}/>);

  it('should render a Specialities', () => {
    expect(testUserDetails
      .find(Specialities))
      .to
      .have
      .length(1);
    });
  it('should render a Speciality', () => {
    expect(testUserDetails
      .find(Speciality))
      .to
      .have
      .length(2);
    });
});
