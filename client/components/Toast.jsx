import React from 'react';

const ToastAnimation = window.styled.keyframes`
  from {
    top: 40px;
    right: 3px;
  }
  to {
    top: 40px;
    right: 10px;
  }
`;

const position = window.styled.div`
  top: 40px;
  right: 10px;
  transition: transform .6s ease-in-out;
  animation: ${ToastAnimation} 1s;
;`;


const ToastContainer = window.styled.div`
  font-size: 12px;
  box-sizing: border-box;
  transition: transform .6s ease-in-out;

;`;

const ToastNotification = window.styled.div`
  color: white;
  background: black;
  font-size: 17px;
  padding: 15px 7px 15px 15px;
  width: 350px;
  font-fami;y: 'Noto Sans'

`;

const Ddiv = window.styled.div`
position:absolute;
top:40px;
right:10px;
position:${position};
animation:${ToastAnimation} 1s;

`;

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: ''
    };
    console.log('hello1');
  }

  toggleBox() {
    const { note } = this.state;
    this.setState({
      note: true,
    });
  }

  render (props) {
    console.log('hello');
    console.log(this.props);
    const t = this.props;
    const note = this.props.name;
    window.abc = this.props;
    console.log('Got Note.........1', note);
    if (note) {
      console.log('Got Note.........2 noteval->' + note);
    }
    return (
      <Ddiv>
        { note && (
          <ToastContainer>
            <ToastNotification>
              {this.props.noteName} was saved to the shopping list
            </ToastNotification>
          </ToastContainer>
        )
        }
      </Ddiv>
    );
  }
}


export default Toast;