import React,{ Component } from 'react'
import CardList from './CardList'
import Scroll from './Scroll'
import SearchBox from './SearchBox'


class App extends Component{
	constructor()
	{
		super();
		this.state={						// this.state works in class
			robots:[],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots: users}))
	}
	onSearchChange=(event)=>{								//if = () => is not used "this" will refer to input in SarchBox.js
		this.setState({searchfield:event.target.value})		// setState is used to change the 'state'
	
	}
	render(){
		const filterRobot=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots.length===0)
		{
			return <h1> LOADING </h1>
		}else{
		return(
			<div className='tc'>
				<h1> ROBOFRIENDS </h1>
				<SearchBox searchchange={this.onSearchChange}/>
				<Scroll>
				<CardList robots={filterRobot}/>
				</Scroll>
			</div>
		  );} 
	}
	
}

export default App;