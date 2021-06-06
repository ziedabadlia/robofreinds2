import React, { Component } from 'react'
import Cardlist from '../components/Cardlist'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends Component { 
    constructor() {
        super()
        this.state = {
            robots: [],
            Searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({ robots : users }))
    }

    onSerachchange = (event) => {
        this.setState({Searchfield: event.target.value})
    }
    render(){
        const {Searchfield , robots} = this.state
        const filtredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        })
        if (robots.length === 0) {
            return (<h1 className='tc f1' >LODING...</h1>)
        }
        else {  
    return ( 
        
        <div className='tc' >
        <h1 className='f1' >ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSerachchange} />
        <Scroll>
        <Cardlist robots={filtredRobots}/>
        </Scroll>
        </div>
    )}}
}
export default App