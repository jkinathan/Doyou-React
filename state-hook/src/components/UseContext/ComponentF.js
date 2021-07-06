import React, {useContext} from 'react'
import {UserContext} from '/home/kinathan/Desktop/Doyou-React/state-hook/src/App.js'

function ComponentF() {

    const myname = useContext(UserContext)
    console.log(myname)
    return (
        <div>
            Component F
            My name is: { myname }
        </div>
    )
}

export default ComponentF
