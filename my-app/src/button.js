import React,{ Component } from 'react'
import {useState}  from 'react'
import './button.css'
class Button extends Component {
   constructor(props) {
       super(props)
       this.state = {
           active: false,
           deltaX: 0,
           deltaY: 0
       }
       this.circleRef = React.createRef();  
   }
   hideCircle() {
       this.setState({
           active: false
       })
   }
   getClientPosition(e) {
       //获取鼠标针对视口的距离
       let { clientX,clientY } = e 
       //获取按钮针对视口的距离
       let { x,y } = this.circleRef.current.getBoundingClientRect();
       //差值就是鼠标相对于按钮button的距离 
       let deltaX = clientX - x - 3;
       let deltaY = clientY - y -3;
       console.log(this.state.deltaX)
       this.setState({
          active: true,
          deltaX: deltaX,
          deltaY: deltaY
       })
       console.log(this.state.deltaX)
    }
    render() {
        return (
            <div className="button">
                <button ref={this.circleRef} onClick={this.getClientPosition.bind(this)}>
                    {this.state.active ? 
                        <span className="circle" 
                            onAnimationEnd={this.hideCircle.bind(this)}
                            style={{ left: this.state.deltaX, top: this.state.deltaY}}>
                        </span> : ''}
                    <span className="value">{this.props.value}</span>
                </button>
            </div> 
        )
    }
}
export default Button