import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    const robotsList = robots.map((user, i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return (
        <div>
            {robotsList}
        </div>
    );
}


export default CardList;