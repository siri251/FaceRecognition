import React,{Component} from 'react';
import Navigation from './components/Navigation';
import Logo from './components/logo';
import Imagelink from './components/Imagelink';
import './App.css';
import Rank from './components/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Image from './components/image';

const app = new Clarifai.App({
 apiKey: '054a8db347504ea2920681a52d9d044e'
});

class App extends Component {
  constructor(){
	  super();
	  this.state={
		  input:'',
		  imageurl:'',
		  box:{},

	  }
  }

  onChangeevent=(event)=>{
	  
	  this.setState({input:event.target.value})
  }

  displaybox = (lines)=>{
	  this.setState({box:lines})
  }

  Imagebox=(box)=>{
	const Clarifaiimage=box.outputs[0].data.regions[0].region_info.bounding_box
	const image=document.getElementById("faceimage")
	const width=Number(image.width)
	const height=Number(image.height)
	return {
		leftcol:width*Clarifaiimage.left_col,
		topRow:height*Clarifaiimage.top_row,
		rightcol:width - (width*Clarifaiimage.right_col),
		bottomrow:height - (height*Clarifaiimage.bottom_row)

	}


  }

  onSubmitevent=()=>{
	  
	  this.setState({imageurl:this.state.input});
	  
	  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imageurl)
	  .then(response => this.displaybox(this.Imagebox(response))).catch(err=> console.log(err));
  }


  render() {
    return (
    <div className="App">
       <Particles className="bgparticles"
    params={{
	    "particles": {
	        "number": {
	            "value": 80
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	  }} />
      <Navigation/>
      <Logo className="logo"/>
      <Rank/>
      <Imagelink onChangeevent={this.onChangeevent} onSubmitevent={this.onSubmitevent}/>
	  <Image ImageMain={this.state.imageurl} box={this.state.box}/>
      

      
    </div>
  );
}
}

export default App;
