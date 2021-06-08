import React from 'react'

function person({person}) {
    return (
        <div>
            <h3>I am {person.name }. Of {person.age} years old</h3>
        </div>
    )
}

export default person
