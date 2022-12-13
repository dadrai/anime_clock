import React from "react";
import "animate.css";


class Clock extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            date: props.date
        }
    }

    componentDidMount(){

        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);

    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date: new Date()
        });

    }
    render(){
        const {date} =this.state; //{date: 06.12.2022}
        const min =date.getMinutes();
        const second = date.getSeconds();
        const hour = date.getHours();
        let className='';
        if(second % 10 ==0){
            className = 'animate__backInLeft';
        } else  if(second % 5 ==0){
            className = 'animate__backInRight';
        } 


        if ((second % 5 ==0) || (second==0)) {
       
            return  <div> 
            {date.toLocaleDateString()} <br/>
            {hour}:{min}:{second}
                    <div className="circle"> <div className="text"> <b>Krug</b></div></div>
                    <h1 className={"animate__animated " + className}>Animate</h1>
              </div>;
        } else {
        
        return  <div>    
        {/* {date.toLocaleTimeString()} */}
        {date.toLocaleDateString()} <br/>
        {hour}:{min}:{second}
        <div className="circle2"> <div className="text"><b>Krug</b></div></div>

        <h1 className={"animate__animated " + className}>Animate</h1>
      </div>;

        }
    }
}
export default Clock;
