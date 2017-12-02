import { shallow, mount } from 'enzyme';
import React from 'react';
import { assert, expect } from 'chai';
import { spy } from 'sinon';
import { Forms, Modal, ModalContent, ModalHead, Close } from '../../../src/components/Styles.jsx';
import {Auth} from '../../../src/components/Auth.jsx';


describe('<Auth />', () => {
const props = {};
const testAuth = shallow(<Auth {...props}/>);

it('should render a Forms component', () => {
  expect(testAuth
    .find(Forms))
    .to
    .have
    .length(1);
  });

it('should render a Modal', () => {
  expect(testAuth
    .find(Modal))
    .to
    .have
    .length(1);
  });
it('should render a ModalContent', () => {
  expect(testAuth
    .find(ModalContent))
    .to
    .have
    .length(1);
  });
it('should render a ModalHead', () => {
  expect(testAuth
    .find(ModalHead))
    .to
    .have
    .length(1);
  });
  it('should render a Close', () => {
    expect(testAuth
      .find(Close))
      .to
      .have
      .length(1);
    });
});
