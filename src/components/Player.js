import React, { Component } from 'react';
import '../components/css/Player.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Player extends Component{
    constructor(){
        super();
        this.state = {
            isPlay: false,
            currentTrack: 'lonely.mp3',
            position: 0
        }
    }
    componentDidMount = () => {
        this.player = new Audio(this.state.currentTrack)
    }
    play = () => {
        this.player.play();
    }
    pause = () => {
        this.player.pause();
    }
    stop = () => {
        if(this.state.isPlay){
            this.togglePlay(false);    
        }
        this.player.currentTime = 0; 
    }
    togglePlay = (value) => {
        value ? this.play() : this.pause();
        this.setState({isPlay: value})
    }
    render(){
        return(
            <div>
                <i className="fa fa-backward player-control"></i>
                {
                    !this.state.isPlay ? <i onClick={() => this.togglePlay(true)} className="fa fa-play-circle player-control"></i>:
                    <i onClick={() => this.togglePlay(false)} className="fa fa-pause-circle player-control"></i>
                }
                <i onClick={() => {this.stop()}} className="fa fa-stop-circle player-control"></i>
                <i className="fa fa-forward player-control"></i>
            </div>
        )
    }
}
export default Player;