import React from 'react';
import renderer from "react-test-renderer";
import Search from "../../../components/search.js";


describe('Search', () => {
  it('lives', () => {
    expect(true).toBeTruthy();
  });

  it('contains a map image', () => {
    let component = shallow(<Search/>);
    expect(component.find('img').exists()).toBeTruthy();
  });

  it('generates an h2 tag', () => {
    let component = shallow(<Search/>);
    expect(component.find('h2').exists()).toBeTruthy();
  })

  it('changes on submit', () => {
    let component = mount(<Search/>);
    let submission = component.find('form');
    submission.simulate('submit');
    expect(component.find('img')).toBeTruthy();
    expect(component.find('#query-container')).toBeTruthy();
  });

  it('renders the map', () => {
      let component = mount(<Search/>);
      let submission = component.find('form');
      submission.simulate('submit');
      expect(component.find('#map')).toBeTruthy();
  });

  it('renders the columns', () => {
    let component = mount(<Search/>);
    let submission = component.find('form');
    submission.simulate('submit');
    expect(component.find('#column-container')).toBeTruthy();
  });

  it('renders the columns', () => {
    let component = mount(<Search/>);
    let submission = component.find('form');
    submission.simulate('submit');
    expect(component.find('#column-container')).toBeTruthy();
  });

  it('renders the weather', () => {
    let component = mount(<Search/>);
    let submission = component.find('form');
    submission.simulate('submit');
    expect(component.find('.weather-results')).toBeTruthy();
  });

  it('renders yelp', () => {
    let component = mount(<Search/>);
    let submission = component.find('form');
    submission.simulate('submit');
    expect(component.find('.yelp-results')).toBeTruthy();
  });

  it('renders movies', () => {
    let component = mount(<Search/>);
    let submission = component.find('form');
    submission.simulate('submit');
    expect(component.find('.movies-results')).toBeTruthy();
  });

  it('renders trails', () => {
    let component = mount(<Search/>);
    let submission = component.find('form');
    submission.simulate('submit');
    expect(component.find('.trails-results')).toBeTruthy();
  });

  it('renders meetups', () => {
    let component = mount(<Search/>);
    let submission = component.find('form');
    submission.simulate('submit');
    expect(component.find('.meetups-results')).toBeTruthy();
  });

});
