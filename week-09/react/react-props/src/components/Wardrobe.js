import Article from "./Article";

function Wardrobe(props) {
    return ( 
        <div>
            {props.articles.filter(a => a.color==="blue")
                    .map(a => <Article key={a.color + a.type} article={a}/>)}
        </div>
     );
}

export default Wardrobe;