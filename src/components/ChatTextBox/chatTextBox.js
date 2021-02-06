import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

class ChatTextBoxComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      chatText: ''
    };
  }

  render() {

    const { classes } = this.props;

    return(
      <>
        <div className={classes.chatTextBoxContainer}>
          <form style={{flex: '1', display: 'flex'}}>
            <input type='text' placeholder='Type your message..' onKeyUp={(e) => this.userTyping(e)} id='chattextbox' className={classes.chatTextBox} onFocus={this.userClickedInput} 
            style={{
              flex: '1 1',
              borderRadius: '30px',
              padding: '10px',
              border: 'none',
              marginLeft: '1vw',
            }}/>
            <button type='submit' onClick={this.submitMessage} className={classes.sendBtn} style={{
              border: 'none',
              background: 'none',
            }} ><SendIcon /></button>
          </form>
        </div>
      </>
    );
  }
  userTyping = (e) => e.keyCode === 13 ? this.submitMessage() : this.setState({ chatText: e.target.value });
  messageValid = (txt) => txt && txt.replace(/\s/g, '').length;
  userClickedInput = () => this.props.userClickedInputFn();
  submitMessage = (e) => {
    try{
      e.preventDefault();
    }catch(err) {
      console.log(err);
    };
    

    if(this.messageValid(this.state.chatText)) {
      this.props.submitMessageFn(this.state.chatText);
      document.getElementById('chattextbox').value = '';
    }
  }
}

export default withStyles(styles)(ChatTextBoxComponent);