import React, { useState, useEffect } from "react";
import MicIcon from '@material-ui/icons/Mic';
import logo from './logo.svg';
import './Core.css';
import $ from 'jquery';
import Init from './CoreInit.js';
import Clock from './Clock.js';
import GetApi from './GetApi.js';
import { useHistory, useLocation} from 'react-router-dom';


//------------------------SPEECH RECOGNITION-----------------------------

const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'


//------------------------COMPONENT-----------------------------

const Speech = () => {
  const [{listening, showlistening,
    microphone, bgcolor}, setState] = useState(Init);
  
  const [states, setPassState] = useState({
    username:''
  });
  const location = useLocation();
  useEffect (async () => {
    console.log(location);
    setPassState(states =>({...states, username: location.state['username']}));
    const getCommandsByUser = await GetApi.getCommandsByUser(location.state['username']);
  }, [])
  
  const toggleListen = () => {
    setState(state => ({ ...state, listening: !listening}));
    console.log(listening);
    handleListen();
  }

  const handleListen = () => {
    console.log('listening?', listening)
    if (listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        setState(state => ({ ...state, microphone: 'red'}));
        console.log("Stopped listening per click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
      setState(state => ({ ...state, bgcolor: '#282c34', microphone:"green"}));
    }

    let intermiTranscript = ''
    recognition.onresult = event => {
      let finalTranscript = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) intermiTranscript += transcript + ' ';
        else finalTranscript += transcript;
      }
      if (finalTranscript === "turn on power"){
        console.log("指令成功！")
        setState(state => ({ ...state, bgcolor:'#006400', showlistening:"Power On"}));
        $.ajax({
          url:"https://maker.ifttt.com/trigger/ricecookeron/with/key/dyMeTmyKz4_uQNNPyqZABx",
          dataType: 'JSONP',
          jsonpCallback: 'callback',
          data: {"value1":"rice cooker on"},
          success:function(result){alert(result)}
        })
      }
      else if(finalTranscript === "turn off power"){
        console.log("指令成功！")
        setState(state => ({ ...state, bgcolor:'#006400', showlistening:"Power Off"}));
        $.ajax({
          url:"https://maker.ifttt.com/trigger/ricecookeroff/with/key/dyMeTmyKz4_uQNNPyqZABx",
          dataType: 'JSONP',
          jsonpCallback: 'callback',
          data: {"value1":"rice cooker off"},
          success:function(result){alert(result)}
        })
      }
      document.getElementById('final').innerHTML = finalTranscript

      //-------------------------COMMANDS------------------------------------

      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening'){
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          document.getElementById('final').innerHTML = finalText
        }
      }
    }

    //-----------------------------------------------------------------------

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }

  }

  const history = useHistory();
  const handleClick = () => {
    // console.log("This is the lcoation state: ", location.state)
    // console.log("This is the states: ", states)
    history.push(("/finddevices"), location.state);
  }
    return (
        <div>
          <header className="App-header" style={{backgroundColor: bgcolor}}>
            <Clock></Clock>
            <div>Click React to speak</div>
            
            <button style={{position: "absolute", top: 10, left: 10}} onClick={handleClick}>update commands</button>
            <button id='microphone-btn' className="button" onClick={toggleListen}>
              <img src={logo} className="App-logo" alt="logo"/>
            </button>
            <div id='final' className="final"></div>
          </header>
          <MicIcon fontSize="large" style={{position:"absolute", color:microphone, top:10, right:10}}/>
        </div>
    )
}

export default Speech




