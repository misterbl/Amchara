import { shallow, mount } from 'enzyme';
import React from 'react';
import { assert, expect } from 'chai';
import { spy } from 'sinon';
import {Dashboard} from '../../../src/components/Dashboard.jsx';


describe('<Dashboard />', () => {
  const props = {
    user: {
      data: 'dataTest',
      specialities:['speciality1', 'speciality2'],
    }};

  const testDashboard = shallow(
    <Dashboard {...props}
      saveUserDetails={sinon.spy()}
      retrieveUserInfo={sinon.spy()}
      signOut={sinon.spy()}
      editProfile={sinon.spy()}
    />);

  it('should render 2 Container component', () => {
    expect(testDashboard
      .find(Container))
      .to
      .have
      .length(2);
    });
  it('should render a Edit', () => {
    expect(testDashboard
      .find(Edit))
      .to
      .have
      .length(1);
    });
  it('should render a Quarter', () => {
    expect(testDashboard
      .find(Quarter))
      .to
      .have
      .length(1);
    });
  it('should render a SignOut', () => {
    expect(testDashboard
      .find(SignOut))
      .to
      .have
      .length(1);
    });
});
