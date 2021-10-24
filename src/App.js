import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import firestore from './Components/Firebase'
import Message from './Components/Message';
import FlipMove from 'react-flip-move';
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'bammrdhi', message: 'hai' },
    { username: 'bamm2', message: 'hai' }
  ]);
  const [username, setUsername] = useState('');


  useEffect(() => {
    firestore.db.collection('messages').orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })));
      })
  }, [])


  useEffect(() => {
    setUsername(prompt("Enter Username"));
  }, [])

  const sendMessage = (event) => {
    firestore.sendMessage({ username, message: input })
    // setMessages([...messages, { username, text: input }]);
    setInput('');
  }
  return (
    <div className="App">
      <img className="img" src="https://www.pnglib.com/wp-content/uploads/2021/02/facebook-messenger-icon_6020387b02c5a.png" />
      <h1>Messenger Clone using React Js</h1>
      <h2>Hi {username || 'Unknown User'}</h2>
      <div className="flexDiv">
        <form className="app_form">
          <FormControl className="app_controlform">
            <Input className="input" placeholder="Enter a Message" value={input} onChange={(event) => setInput(event.target.value)} />
            {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
            <IconButton className="iconButton" aria-label="delete" variant="contained" type="submit" disabled={!input} onClick={sendMessage}>
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>

      </div>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
