import { useState } from 'react';

const InputTest = () => {
    const [text, setText] = useState("")
    const [check, setCheck] = useState(true)

    const updateText = (event) => {
        setText(event.target.value)
    }

    const updateCheckbox = (event) => {
        setCheck(event.target.checked)
    }



    return (
      <div>
        <input type="checkbox" checked={check} onChange={updateCheckbox} />
        <input type="text" value={text} onChange={updateText} />
        <button>Alert</button>
      </div>
    )
  }
  
  export default InputTest