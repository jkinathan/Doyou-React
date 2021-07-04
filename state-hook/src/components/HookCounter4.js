import React, {useState} from 'react'

function HookCounter4() {
    // first argument is current state or what to pick from the array more like first content of array
    // second argument is the method that updates that current state
    //argument in the useState() is the initial state 
    const [items,setItems] = useState([])

    //an array of objects being added upon each other without over writing the existing
    //since inside setItems the second argument overrides the existing in the first arg
    const addItem = ()=>{
        setItems([
            ...items, 
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
        
    }

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {
                    //items is the array to map through
                    //item is the single instance element in the array
                    //id is the index of that current element
                    items.map((item,id) => {
                        return(
                            <li key="id"> { item.value } </li>
                        )
                    })
                }
            </ul>
                    
        </div>
    )
}

export default HookCounter4
