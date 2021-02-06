const styles = theme => ({

    content: {
      color: 'white',
      height: '82vh',
      overflow: 'auto',
      padding: '25px',
      marginLeft: '300px',
      boxSizing: 'border-box',
      overflowY: 'auto',
      top: '50px',
      width: '35vw',
      position: 'absolute',

      '&::-webkit-scrollbar-track':
        {
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
          borderRadius: '10px',
          backgroundColor: 'rgb(36, 39, 43)',
        },

        '&::-webkit-scrollbar':
        {
          width: '12px',
          backgroundColor: 'rgb(36, 39, 43)',
        },

        '&::-webkit-scrollbar-thumb':
        {
          borderRadius: '10px',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,.3)',
          backgroundColor: '#3f51b5',
        },

    },
  
    userSent: {
      float: 'right',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      backgroundColor: '#d1d2d3',
      color: 'black',
      width: '300px',
      borderRadius: '20px'
    },
  
    friendSent: {
      float: 'left',
      clear: 'both',
      padding: '20px',
      boxSizing: 'border-box',
      wordWrap: 'break-word',
      marginTop: '10px',
      background: '#3f51b5',
      color: 'white',
      width: '300px',
      borderRadius: '20px'
    },
  
    chatHeader: {
      color: 'white',
      height: '8%',
      alignItems: 'center',
      position: 'relative',
      fontSize: '18px',
      boxSizing: 'border-box',
      textAlign: 'center',
      marginLeft: '301px',
      background: '#3f51b5',
      justifyContent: 'center',
      display: 'flex',
    }
  
  });
  
  export default styles;