import React from "react"

class UserClass extends React.Component{
    constructor (props){
        super(props);
        console.log( this.props.name +"Constructor")

        
        this.state={
            count: 0,
            count1: 1
        }
    }

    componentDidMount(){
        console.log(this.props.name +"childMount")

    }

    render()
    
    {   
        console.log(this.props.name +"render")

        const {count,count1}=this.state
        const {name,location}=this.props
    return (
        <div>
            <h1>Count: {count} {count1}</h1>
            <button onClick={()=>this.setState({
                count: this.state.count+1
            }


            )}>Increase Count</button>
            <h2>functional Based Component</h2>
            <h3>Name:{name}</h3>
            <h4>Location:{location}</h4>
           
        </div>
      );
    }
}
export default UserClass;