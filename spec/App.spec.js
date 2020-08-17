/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { shallow, mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
// import App from '../client/index.jsx';
import ButtonComp from '../client/components/ButtonComp.jsx';
import ImageComp from '../client/components/ImageComp.jsx';

const setup = function () {
  const props = {
    imgPath: '/images/',
  };
  const wrapper = shallow(<ImageComp />);
  return { wrapper, props };
};

// describe('WelcomeMessage Test Suite', () => {
//   it('Should have an image', () => {
//     const { wrapper } = setup();
//     expect(wrapper.find('img').exists()).toBe(true);
//   });
// });

// const wrapper = shallow(<ButtonComp/>);
// expect(wrapper.find('button')).to.equal(1);
it('works', () => {
  const wrap = mount(
    <ButtonComp name="bag" />,
  );

  expect(wrap.text()).toEqual('Add to bag');
});
// describe('App', ()=>{
//   it ('should render a <Row />', ()=>{
//     const wrapper = mount(<App />);
//     expect(wrapper.find('Row').tohavelength(1));
//   });
// });
//   it('has 4 children', () => {
//     const tree = renderer.create(<App />).toJSON();
//     expect(tree.children.length).toBe(4);
//   });
// });

// describe ('Search snapshot test', () => {
//   const test = mount(<BottomComp/>);
//   expect(test).toMatchSnapshot();
// });
// describe ('App', ()=> {
//   let wrapper;
//   beforeEach(()=> {
//     wrapper = mount(<App/>);
//     wrapper.setState({
//       index: 0,
//     });
//   });
//   it ('should render button component', () => {
//     expect(wrapper.find(ButtonComp));
//   });
// });

// describe('buttonComp', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(<ButtonComp/>);
//   });

//   it('displays buttons ', () => {
//     expect(wrapper.find('div.container'));
//   });
// });

// test('hello world', () => {
//   const wrapper = mount(<p>Hello Jest!</p>);
//   expect(wrapper.text()).toMatch('Hello Jest!');
// });
