import { useState } from "react";
import Counter from "./Counter";


function Likes (){
    let [likes, setLikes] = useState(6)

    const increaseLike = () => {
        setLikes(likes+1);
      }


    return (
        <div>
            <button onClick={increaseLike}>Like!</button>
            <Counter count={likes} />
        </div>
    )


}

export default Likes