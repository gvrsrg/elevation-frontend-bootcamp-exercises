import { useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    const changeFruit = function(e){
        setFruit(e => e.target.value)

        showFruit()
    }

    const showFruit = function(){
        console.log(`${name} chose ${fruit}`)
        

    }


    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={changeFruit} value={fruit}>
                <option value="banana">banana</option>
                <option value="mango">mango</option>
                <option value="pineapple">pineapple</option>
                <option value="orange">orange</option>
            </select>
        </div>
    );
}
export default Exercise2;