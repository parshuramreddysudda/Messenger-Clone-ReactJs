import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import db from './Components/Firbase';
import Message from './Components/Message';
import { collection, getDocs, getFirestore } from "firebase/firestore";

function App() {


  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'bammrdhi', text: 'hai' },
    { username: 'bamm2', text: 'hai' }
  ]);
  const [username, setUsername] = useState('');

  const querySnapshot2 = (async () => {
    await getDocs(collection(db, "messages")).then((querySnapshot) => {
      let data = querySnapshot.forEach((doc) => {
        return doc;
      });
      console.log(data);
    });
  })();
  useEffect(() => {
   
  }, [db])


  useEffect(() => {
    setUsername('prompt("Enter the Username ")');
  }, [])

  const sendMessage = (event) => {
    setMessages([...messages, { username, text: input }]);
    setInput('');
  }
  return (
    <div className="App">
      <form>
        <h1>Messenger CLone</h1>
        <h2>Hi {username}</h2>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter Your Message</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value)} />
          {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
        </FormControl>
        <Button variant="contained" type="submit" disabled={!input} onClick={sendMessage}>SendMessage</Button>
        {messages.map((message, index) => (
          <Message username={username} message={message} />
        ))}
      </form>
    </div>
  );
}

export default App;
