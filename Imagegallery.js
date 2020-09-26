import React, { Component } from 'react';
import '../App.css';
import backside from '../img/backside.png';
import blackapple from '../img/black apple.png';
import blueapple from '../img/blue apple.png';
import body from '../img/body.png';
import lens from '../img/lens.png';


export default class Imagegallery extends Component {

    state = {
        index: 0, 
        gallery: [backside, blackapple, blueapple, body, lens]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.gallery.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.gallery.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div>
            <img
            src={this.state.gallery[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} /> <br/>
            <button className="leftshift1" style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Prev </button>
            <button className="leftshift2" style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
          </div>
        );
      }

}
