import { shallow, mount } from 'enzyme';
import React from 'react';
import { assert, expect } from 'chai';
import { spy } from 'sinon';
import {AddSpeciality} from '../../../src/components/AddSpecialityForm.jsx';


describe('<AddSpeciality />', () => {
  const props = {};
  const testAddSpeciality = shallow(<AddSpeciality {...props}/>);

  it('should render a Form', () => {
    expect(testAddSpeciality
      .find('form'))
      .to
      .have
      .length(1);
    });

    it('should render a InputField', () => {
      expect(testAddSpeciality
        .find('input'))
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
