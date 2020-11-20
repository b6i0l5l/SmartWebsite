import React, { useState, useEffect } from "react";
import MicIcon from '@material-ui/icons/Mic';
import logo from './logo.svg';
import './Core.css';
import $ from 'jquery';
import Init from './CoreInit.js';
import Clock from './Clock.js';
import GetApi from './GetApi.js';
import LogOut from './LogOut.js';
import { useHistory, useLocation} from 'react-router-dom';


//------------------------SPEECH RECOGNITION-----------------------------

const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continous = true
recognition.interimResults = true
recognition.lang = "en-US"

//------------------------VOICE RECOGNITION-----------------------------

const confirmCommand = new SpeechSynthesisUtterance("Yes");

//------------------------COMPONENT-----------------------------

const Speech = () => {
  const [{listening, microphone, bgcolor, commandsAndDevices}, setState] = useState(Init);
  const location = useLocation();

  useEffect (() => {
    let unmounted = false;
    async function getCommandsAndDevicesByUser(){
      const CommandsAndDevices = await GetApi.getCommandsAndDevicesByUser(location.state['username']);
      setState(states => ({...states, commandsAndDevices: CommandsAndDevices}));
    }
    getCommandsAndDevicesByUser();
    return () => { unmounted = true };
  }, [])

  const toggleListen = () => {
    setState(state => ({ ...state, listening: !listening}));
    handleListen();
  }

  const getDeviceBytriggerCommand = async (command) => {
    for (let i = 0; i < commandsAndDevices.length; i++){
      if (command === commandsAndDevices[i]["command"]){
        await GetApi.getTriggerByCommand(commandsAndDevices[i]["action"]);
        speechSynthesis.speak(confirmCommand);
      }
      else{
        console.log("no command");
      }
    }
  }

  const handleListen = () => {
    if (listening) {
      setState(states => ({ ...states, microphone:"green"}));
      recognition.start()
      recognition.onend = () => {
        recognition.start()
      }
    } else {
      recognition.stop()
      recognition.onend = () => {
        setState(states => ({ ...states, microphone: "red"}));
      }
    }

    recognition.onresult = (event) => {
      let finalTranscript = " ";
      finalTranscript = event.results[0][0]["transcript"];
      if (event.results[0].isFinal){
        getDeviceBytriggerCommand(finalTranscript);
      }
      document.getElementById("final").innerHTML = finalTranscript
    }

    //-----------------------------------------------------------------------
    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }
  }

  const history = useHistory();
  const handleClick = () => {
    recognition.stop();
    recognition.onend = () => {
        setState(state => ({ ...state, microphone: "red"}));
    }
    history.push(("/DevicesAndCommands"), location.state);
  }

  return (
      <div>
        <header className="AppHeader" style={{backgroundColor: bgcolor}}>
          <Clock></Clock>
          <div>Click React to speak</div>
          <button style={{position: "absolute", top: 40, left: 10, width: 150, height: 20}} onClick={handleClick}>Update Commands</button>
          <LogOut></LogOut>
          <button id='microphone-btn' className="CoreButton" onClick={toggleListen}>
            <img src={logo} className="AppLogo" alt="logo"/>
          </button>
          <div id="final" className="CoreFinalScript"></div>
        </header>
        <MicIcon fontSize="large" style={{position:"absolute", color:microphone, top:10, right:10}}/>
      </div>
  )
}

export default Speech