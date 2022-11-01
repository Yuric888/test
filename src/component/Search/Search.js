import IconMicro from '../Images/Icon/IconMicro'
import IconSearch from '../Images/IconSearch'
import './Search.css'
const Search = () => {
  return (
    <div className="search">
        <input 
            placeholder="Search Google or type a URL" 
            
        />
        <span className="icon-search"> <IconSearch /></span>
        <span className="icon-micro"> <IconMicro /></span>
    </div>
  )
}

export default Search