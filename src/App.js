import React from 'react';
import './App.css';

const data = [

  { id: 'Applause', letter: 'A', src: '..sounds/spplause.mp3' },
  { id: 'Air Horn', letter: 'S', src: '..sounds/airhorn.mp3' },
  { id: 'Bowling', letter: 'D', src: 'sounds/bowling.mp3' }
  { id: 'Chewbacca', letter: 'F', src: 'sounds/chewbacca.mp3' }
  { id: 'Dial Up', letter: 'G', src: 'sounds/dialup.mp3' }
  { id: 'Duck', letter: 'H', src: 'sounds/duck.mp3' }
  { id: 'Microsoft', letter: 'J', src: 'sounds/microsoft.mp3' }
  { id: 'Police', letter: 'K', src: 'sounds/police.mp3' }
]

class DrumPad extends React.Component {
 
  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeydown)
 }
  
  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render() {
    return (
      <div 
          className='drum-pad' 
          id={this.props.id}
          onClick={this.handleClick}
      >
        <h1>{this.props.letter}</h1>
        <audio id={this.props.letter}
               className='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
          ></audio>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Click or Press a Key'
    }
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(
    <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        
        <div id='drum-pads'>{data.map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />   
         ))}</div>
    </div>
    )
  }
}


export default App;
