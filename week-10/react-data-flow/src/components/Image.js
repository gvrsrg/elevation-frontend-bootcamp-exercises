function Image(props) {
    return (<div>
                <button onClick={() => props.shiftImageBack()}>Prev</button>
                <img src={props.imageBank.images[props.imageBank.currentImgIndex]}/>
                <button onClick={() => props.shiftImageForward()}>Next</button>
            </div> )
}

export default Image