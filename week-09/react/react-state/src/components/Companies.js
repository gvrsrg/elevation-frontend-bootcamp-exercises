import { useState } from "react";
import Company from "./Company";


function Companies({companiesData}) {
     
      let [companies, setCompanies] = useState(companiesData)
    
      return (
        <div className="ex-space">
          {companies.map(company => <Company  name={company.name} revenue={company.revenue} />)}
        </div>
      )
}

export default Companies;