import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {userName :"",
            age : '',
            errMsg : ''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler (e) {
        let key = e.target.name;
        let val = e.target.value;
        let err ='';
        if(key === "age"){
            if(val !== '' && !Number(val)){
                err=<strong>enter must be number</strong>
            }else{
                this.setState({[key]: val})
            }
        }else{
            this.setState({[key]: val})
        }
        this.setState({errMsg : err})
        // if(key === "age"){
        //     if(!Number(val)){
        //         alert("this is not a number " + this.state.age)
        //     }
        //     else{
        //         this.setState({[key]: val})
        //     }
        // }
        // else{
        //     this.setState({[key]: val})
        // }
    }

    // onChangeHandler = (e) => {
    //     this.setState({name : e.target.value})
    // }

    onSubmitHandler = (e) => {
        e.preventDefault();
        let ag = this.state.age;
        if(!Number(ag)){
            alert(ag +"this is not a number")
        }else{
            alert("complite you form")
        }
    }

    render(){
        // null checker for asign element
        let conditionNullCheckerName ='';
        if(this.state.userName){
                conditionNullCheckerName = <p>text : {this.state.userName}</p>;
        }
        else{
                 conditionNullCheckerName = '';
        }
        let conditionNullCheckerAge ='';
        if(this.state.age){
                conditionNullCheckerAge = <p>text : {this.state.age}</p>;
        }
        else{
                 conditionNullCheckerAge = '';
        }

        return(
        <form className='flex flex-col gap-2' onSubmit={this.onSubmitHandler}> 
            <label>
                enter your name :
            </label>
            <input type="text" name="userName" className="ml-1 border-[1px] border-black w-60" onChange={this.onChangeHandler}/>
            <input type="text" name="age" className="ml-1 border-[1px] border-black w-60" onChange={this.onChangeHandler}/>
            {this.state.errMsg}
            {conditionNullCheckerName}
            {conditionNullCheckerAge}
            <input type='submit' /> 
        </form>
        )
    }
}
export default Form ;