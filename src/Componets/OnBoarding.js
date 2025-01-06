import React from 'react';
import Login from './OnBoardingState/Login';
import Logout from './OnBoardingState/Logout';

class OnBoarding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLogedin : true}
        this.LogedInFunction = this.LogedInFunction.bind(this)
        this.LogedOutFunction = this.LogedOutFunction.bind(this)
    }
    LogedInFunction (){
        this.setState ({isLogedin : true})
    }
    LogedOutFunction (){
        this.setState ({isLogedin : false})
    }
    render(){

        // const isLogedin = this.state.isLogedin; methord --1 
        // if(isLogedin){ 
        //     return <Login onClick={this.LogedOutFunction}/>
        // }
        // else{
        //     return <Logout onClick={this.LogedInFunction}/>
        // }

        // if(this.state.isLogedin){ 
        //     return <Login onClick={this.LogedOutFunction}/>
        // }
        // else{
        //     return <Logout onClick={this.LogedInFunction}/>
        // }

        // return(
        //     <div>
        //         {this.state.isLogedin && <Logout onClick={this.LogedOutFunction}/>}
        //         {!this.state.isLogedin && <Login onClick={this.LogedInFunction}/>}
        //     </div>
        // )

        return(
            <div>
                {this.state.isLogedin ? <Logout onClick={this.LogedOutFunction}/> : <Login onClick={this.LogedInFunction}/>}
            </div>
        )
    }
}
export default OnBoarding;