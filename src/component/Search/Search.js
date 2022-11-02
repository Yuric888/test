import IconMicro from '../Images/Icon/IconMicro'
import IconSearch from '../Images/IconSearch'
import './Search.scss'
const Search = ({handle}) => {
  return (
    <div className="search">
        <span className="icon-search"> <IconSearch color="#1a1a1a" width="22"/></span>
        <input 
            placeholder="Search Google or type a URL" 
            // eslint-disable-next-line no-unused-expressions
            onKeyPress={e => {(e.key === 'Enter' ? handle(e.target.value) : null)}}
        />
        <span className="icon-micro"> <IconMicro color="#1a1a1a" /></span>
    </div>
  )
}

export default Search