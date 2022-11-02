import './ListIcon.scss'
const ListIcon = ({data, name}) => {
  return (
    <div className="list-icon">
      {data
      .filter((item => item.name.toLowerCase().includes(name)))
      .map((item, idx) => {
        return(
          <div className="card-item" key={idx}>
            <div className="card-background">
              <div className="card-img">
                <img src={item.url} alt={item.name} />
              </div>
            </div>
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ListIcon