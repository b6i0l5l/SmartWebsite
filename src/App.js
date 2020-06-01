import React, { Component } from "react"
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';


//------------------------SPEECH RECOGNITION-----------------------------

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'zh-TW'


//------------------------COMPONENT-----------------------------

class Speech extends Component {

  constructor() {
    super()
    this.state = {
      listening: false,
      showlistening: "Power Off",
      bgcolor:'#282c34'
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen() {

    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
      this.setState({
        bgcolor:'#282c34',
      })
    }

    let intermiTranscript = ''
    recognition.onresult = event => {
      let finalTranscript = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) intermiTranscript += transcript + ' ';
        else finalTranscript += transcript;
      }
      console.log(finalTranscript)
      if (finalTranscript === "開始煮飯" || finalTranscript === "打開電源"){
        console.log("指令成功！")
        this.setState({
          bgcolor:'#006400',
          showlistening:"Power On"
        })
        $.ajax({
          url:"https://maker.ifttt.com/trigger/ricecookeron/with/key/dyMeTmyKz4_uQNNPyqZABx",
          data: {"value1":"rice cooker on"},
          success:function(result){alert(result)}
        })
      }
      else if(finalTranscript === "關掉電源" || finalTranscript === "關掉"){
        console.log("指令成功！")
        this.setState({
          bgcolor:'#006400',
          showlistening:"Power Off"
        })
        $.ajax({
          url:"https://maker.ifttt.com/trigger/ricecookeroff/with/key/dyMeTmyKz4_uQNNPyqZABx",
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

  render() {
    return (
        <div>
          <header className="App-header" style={{backgroundColor: this.state.bgcolor}}>
            <div id='listening' className='listening' style={{position: "absolute", top: 10, left: 10}}>{this.state.showlistening}</div>
            <button id='microphone-btn' className="button" onClick={this.toggleListen}>
              <img src={logo} className="App-logo" alt="logo"/>
            </button>
            <div id='final' className="final"></div>
          </header>
        </div>
    )
  }
}

export default Speech




