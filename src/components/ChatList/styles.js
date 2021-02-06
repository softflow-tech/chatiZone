const styles = theme => ({
    root: {
      // backgroundColor: 'white',
      height: '100%',
      position: 'absolute',
      left: '0',
      width: '300px',
      backgroundColor: '#130f19',
      color: '#d1d2d3',
      

    },
    
    listItem: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#20192a',
      },
      '&:focus': {
        backgroundColor: '#20192a',
      },
      '&:enabled': {
        backgroundColor: '#20192a',
      },

      '&:active': {
        backgroundColor: '#20192a',
      },


    },
    newChatBtn: {
      borderRadius: '0px'
    },
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    }
  });
  
  export default styles;