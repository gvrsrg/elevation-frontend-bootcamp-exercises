import { useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    const changeFruit = function(e){
        setFruit(e)

        showFruit(e)
    }

    const showFruit = function(e){
        console.log(`${name} chose ${e}`)
        

    }


    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={(e) => changeFruit(e.target.value)} value={fruit}>
                <option value="banana">banana</option>
                <option value="mango">mango</option>
                <option value="pineapple">pineapple</option>
                <option value="orange">orange</option>
            </select>
        </div>
    );
}
export default Exercise2;