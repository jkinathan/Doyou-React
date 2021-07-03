import React, {useState} from 'react'


function HookCounter3() {

    const [name,setName] = useState({firstname: '', lastname: ''})

    return (
        <div>
            <form>
                <input type="text" value={name.firstname} onChange={(event) => setName({...name, firstname: event.target.value})}/>
                {/* make a replica of the name object and then only update the firstname property of the new value ...name spread operator */}
                <input type="text" value={name.lastname} onChange={(event) => setName({...name, lastname: event.target.value})}/>   

                <p>
                    Your firstname is : {name.firstname}</p>
                <p>
                    Your Lastname is : {name.lastname}
                </p>   
            </form>  
        </div>
    )
}

export default HookCounter3
