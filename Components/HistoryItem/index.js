import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const deleteHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="history-item-container">
        <h1 className="time-accessed">{timeAccessed}</h1>
        <div className="flex-container">
          <div className="logo-app-domain-container">
            <img src={logoUrl} alt={title} className="apps-logo" />
            <h1 className="title">{title}</h1>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={deleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
