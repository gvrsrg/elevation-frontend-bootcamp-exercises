import { useEffect, useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    useEffect(() => {
        console.log(`useEffect: ${name} chose ${fruit}`)
    }, [name, fruit]
    )

    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={(e) => setFruit(e.target.value)} value={fruit}>
                <option value="banana">banana</option>
                <option value="mango">mango</option>
                <option value="pineapple">pineapple</option>
                <option value="orange">orange</option>
            </select>
        </div>
    );
}
export default Exercise2;