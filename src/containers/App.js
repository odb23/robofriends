import React, { Component } from 'react';
import CardList from '../CardList';
import SearchBox from '../SearchBox';
import './App.css';
import Scroll from '../Scroll';
import ErrorBoundry from './ErrorBoundry';
import { setSearchField } from '../actions'
import {connect } from 'react-redux';

const mapStateToProps = state => ({
    searchField: state.searchField
});

const mapDispatchToProps = dispatch => ({
    onSearChange: (event) => dispatch(setSearchField(event.target.value))
})

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

    render() {
        const{searchField, onSearchChange} = this.props
        const { robots } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return (!robots.length) ?
            <h1>Loading</h1>
            : (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);