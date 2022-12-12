import React from "react";


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


        if ((second % 5 ==0) || (second==0)) {
       
            return  <div> 
             {date.toLocaleDateString()} <br/>
        {hour}:{min}:{second}
                    <div className="circle"> <h4>Круг</h4></div>
            
              </div>;
        } else {
        
        return  <div>    
        {/* {date.toLocaleTimeString()} */}
        {date.toLocaleDateString()} <br/>
        {hour}:{min}:{second}
        <div className="circle2"> <h4>Круг</h4></div>
      </div>;

        }
    }
}
export default Clock;