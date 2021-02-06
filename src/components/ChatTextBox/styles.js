const styles = theme => ({

    sendBtn: {
      color: 'blue',
      cursor: 'pointer',
      '&:hover': {
        color: 'gray'
      }
    },
  
    chatTextBoxContainer: {
      position: 'absolute',
      bottom: '0',
      left: '300px',
      boxSizing: 'border-box',
      overflow: 'auto',
      width: 'calc(100% - 300px)',

      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '62px',
      borderTop: '1px solid lightgray',
    },
  
    chatTextBox: {
      width: 'calc(100% - 25px)',
      color: 'black',
      '&:focus': {
          outline: 'none',
        }
    },

  
  });
  
  export default styles;