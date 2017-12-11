import { shallow, mount } from 'enzyme';
import React from 'react';
import { assert, expect } from 'chai';
import { spy } from 'sinon';
import EditProfileForm from '../../../src/components/EditProfileForm';
import {EditProfile} from '../../../src/components/EditProfile.jsx';


describe('<EditProfile />', () => {
  const props = {
    user: {
      data: 'dataTest',
      specialities:['speciality1', 'speciality2'],
    }};

  const testEditProfile = shallow(
    <EditProfile {...props}
      addSpeciality={sinon.spy()}
      editProfile={sinon.spy()}
    />);

  it('should render a Container component', () => {
    expect(testEditProfile
      .find(Container))
      .to
      .have
      .length(2);
    });
  it('should render a Speciality', () => {
    expect(testEditProfile
      .find(Speciality))
      .to
      .have
      .length(2);
    });
  it('should render a Flex', () => {
    expect(testEditProfile
      .find(Flex))
      .to
      .have
      .length(1);
    });
  it('should render a EditProfileForm', () => {
    expect(testEditProfile
      .find(EditProfileForm))
      .to
      .have
      .length(1);
    });
});
