import React from 'react';
class  ShowTime extends React.Component{
    constructor (props){
        super(props);
        this.state = {time:new Date()}
    }
    componentDidMount(){
        this.timeFuction = setInterval( ()=> this.setClock()
        , 1000);
        
    }
    componentWillUnmount(){
        clearInterval(this.timeFuction)
    }
    setClock(){
        this.setState({time:new Date()})
    }
    render(){
        return (
            <div>
                 <h1 className='text-black'> time is {this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
export default ShowTime;