import React, {Component} from 'react';
import {shallow} from 'enzyme';
import Intro from '../Components/Intro'

describe('<Intro/>', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = <Intro />;
    });

    it('should render', ()=>{
        expect(wrapper).toMatchSnapshot();
    });
    


})
