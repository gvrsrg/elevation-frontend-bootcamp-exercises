function Company({name, revenue}) {
    return ( 
        <h4 key={name}>Company {name} earns {revenue}</h4>
     );
}

export default Company;