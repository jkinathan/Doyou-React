import React from 'react'
import Person from './Person';

function NameList() {
    const persons = [
        {
            id: 1,
            name: "Rachel",
            age:22
        },
        {
            id: 2,
            name: "Gemmy",
            age:24
        },
        {
            id: 2,
            name: "Tracey",
            age:20
        },
    ]
    return (
        <div>
            {
                persons.map(person => <Person key={person.name} person={person}></Person>)
                // Look at also keys using indexes, though not a good soln always stick to ids
            }
        </div>
    )
}

export default NameList
