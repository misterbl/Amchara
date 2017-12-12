import { shallow, mount } from 'enzyme';
import React from 'react';
import { assert, expect } from 'chai';
import { spy } from 'sinon';
import {EditProfileForm} from '../../../src/components/EditProfileForm';


describe('<EditProfileForm />', () => {
  const props = {
    user: {
      data: 'dataTest',
      specialities:['speciality1', 'speciality2'],
    }};

  const testEditProfileForm = shallow(
    <EditProfileForm {...props}
      redirect={sinon.spy()}
    />);

  it('should render a Form component', () => {
    expect(testEditProfileForm
      .find('form'))
      .to
      .have
      .length(1);
    });
  it('should render a InputField', () => {
    expect(testEditProfileForm
      .find('input'))
      .to
      .have
      .length(7);
    });
  it('should render a Flex', () => {
    expect(testEditProfileForm
      .find('div'))
      .to
      .have
      .length(1);
    });
  it('should render 2 buttons', () => {
    expect(testEditProfileForm
      .find('button'))
      .to
      .have
      .length(2);
    });
});
