import { shallow, mount, render, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
// import App from '../client/index.jsx';
import ButtonComp from '../client/components/ButtonComp.jsx';



describe('App', ()=>{
  it ('should render a <Row />', ()=>{
    const wrapper = mount(<App />);
    expect(wrapper.find('Row').tohavelength(1));
  });
  it('has 4 children', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(4);
  });
});

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