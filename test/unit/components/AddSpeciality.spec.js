import { shallow, mount } from 'enzyme';
import React from 'react';
import { assert, expect } from 'chai';
import { spy } from 'sinon';
import { Form, InputField } from '../../../src/components/Styles.jsx';
import {AddSpeciality} from '../../../src/components/AddSpeciality.jsx';


describe('<AddSpeciality />', () => {
  const props = {};
  const testAddSpeciality = shallow(<AddSpeciality {...props}/>);

  it('should render a Form', () => {
    expect(testAddSpeciality
      .find(Form))
      .to
      .have
      .length(1);
    });

    it('should render a InputField', () => {
      expect(testAddSpeciality
        .find(InputField))
        .to
        .have
        .length(1);
      });
      it('should render a button', () => {
        expect(testAddSpeciality
          .find('button'))
          .to
          .have
          .length(1);
        });

  });
