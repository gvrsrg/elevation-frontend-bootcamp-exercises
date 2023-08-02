import { useState } from "react";

function Houdini() {
    const [show, setShow] = useState(false);

    const toggleShow = function() {
        setShow(!show);
    }
    return ( <div class="houdini">
                <div>{show ? "Now you see me" : "Now you don't"}</div>
                <button onClick={toggleShow}>Toggle visibility</button>
            </div> );
}

export default Houdini;