import HamburgerBar from "./HamburgerBar"
import SearchComponent from "./SearchComponent"
import ToolsComponent from "./ToolsComponent"

export default function() {
  return (

    <div className="header">
        <HamburgerBar />
        <SearchComponent />    
        <ToolsComponent />
    </div>
  )
}
