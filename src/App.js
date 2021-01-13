import React, { Component } from 'react';



class assignment6 extends Component {
  constructor() {
    super()
    this.state = {

      cityLocation: [],
      city: "",
      isThere: false
    }

    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
        
    this.setState({
      city: event.target.value

    })
    
   // let theZip = this.target.value;
    fetch("http://ctp-zip-api.herokuapp.com/city/"+event.target.value.toUpperCase())
    .then(res => {
      if(res.ok)
      {
        this.setState({isThere: true})
        res.json()
        .then((result) => {     
        this.setState({cityLocation: [...result]})
        })
      }
      else
      this.setState({isThere: false}) })
    
   
    }
    





render() {
return (
   <form>
    <div className="App">
        <header className="App-header">
        <h1>City Name</h1>
        </header>      
    </div>
    <input type="text" name="city" placeholder="City" onChange={this.handleChange} />
    <br />
     {<h2>{this.state.isThere?  'Results':'No results' }</h2>}
     { this.state.isThere? this.state.cityLocation.map(item =>(
      <div>
      <div className = "innerDataContainer">
            <ul>
             Zip Code: {item}
            </ul>
      </div>
      </div>

     )):''}

    </form>
)
}
}

  export default assignment6


