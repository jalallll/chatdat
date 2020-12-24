import React, {useState} from "react";
import {Link} from "react-router-dom";

import './Join.css'

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="joinOuter">
            <div className="joinInner">
            <h1>Connect To The Room</h1>
            <div><input placeholder="Name" className="joinInput" type="text" onChange={(event)=> setName(event.target.value)} /></div>
            <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event)=> setRoom(event.target.value)} /></div>
            <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}> 
                <button className="button" type="submit">Connect</button>
            </Link>
            </div>
        </div>

    );
}


export default Join;