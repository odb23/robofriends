import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component {
    constructor () {
        super();
        this.state = {
            robots: [],
            searchFieldValue: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.tyicode/users')
            .then(response =>{
                return response.json();
                })
            .then(users => {
                this.setState({ robots : users });
            });
      
    }
    
    onSearchChange =  (event) => {
        this.setState({
            searchFieldValue: event.target.value 
        });      
    }

    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchFieldValue.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;