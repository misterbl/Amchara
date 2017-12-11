import { shallow, mount } from 'enzyme';
import React from 'react';
import { assert, expect } from 'chai';
import { spy } from 'sinon';
import {LogSignForm} from '../../../src/components/LogSignForm';

describe('<LogSignForm />', () => {
  const testLogSignForm = shallow(
    <LogSignForm />);

  it('should render a Form component', () => {
    expect(testLogSignForm
      .find(Form))
      .to
      .have
      .length(1);
    });
  it('should render a InputField', () => {
    expect(testLogSignForm
      .find(InputField))
      .to
      .have
      .length(2);
    });
  it('should render a Button', () => {
    expect(testLogSignForm
      .find(Button))
      .to
      .have
      .length(1);
    });
});
