import react, { useEffect, useState } from "react";

function Clock(){
    const [cloclState,setClockState] = useState();
    useEffect(()=>{
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);

    },[])

    return <div>{cloclState}</div>
}

export default Clock;