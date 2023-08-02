import Item from "./Item"

function Home(props) {

    return ( <div>
        {props.store.map((item, i) => 
            <Item key={i} item={item.item} 
            price={item.price * (props.shouldDiscount ?(1-item.discount):1 )}/>)}
    </div> )
}

export default Home