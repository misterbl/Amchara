import { shallow, mount } from 'enzyme';
import React from 'react';
import { assert, expect } from 'chai';
import { spy } from 'sinon';
import {EditProfileForm} from '../../../src/components/EditProfileForm';
import { Form, InputField, Button, Flex} from '../../../src/components/Styles.jsx';


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
      .find(Form))
      .to
      .have
      .length(1);
    });
  it('should render a InputField', () => {
    expect(testEditProfileForm
      .find(InputField))
      .to
      .have
      .length(7);
    });
  it('should render a Flex', () => {
    expect(testEditProfileForm
      .find(Flex))
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
