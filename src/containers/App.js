import React, { Component } from 'react';
import CardList from '../CardList';
import SearchBox from '../SearchBox';
import './App.css';
import Scroll from '../Scroll';
import ErrorBoundry from './ErrorBoundry';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchFieldValue: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.tyicode/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users });
            });

    }

    onSearchChange = (event) => {
        this.setState({
            searchFieldValue: event.target.value
        });
    }

    render() {
        const { robots, searchFieldValue } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchFieldValue.toLowerCase());
        });
        return (!robots.length) ?
            <h1>Loading</h1>
            : (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default App;