const Notification = props => {
  //  Write your code here.
  const {message, iconUrl, className} = props
  return (
    <div className={`msg-card ${className}`}>
      <img src={iconUrl} className='icon-img' />
      <div>
        <p className='msg'>{message}</p>
      </div>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='notification-container'>
    <h1 className='heading'>Notifications</h1>
    <div className='notification-card'>
      <Notification
        message='Information Message'
        iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        className='information'
      />
      <Notification
        message='Success Message'
        iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        className='success'
      />
      <Notification
        message='Warning Message'
        iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        className='warning'
      />
      <Notification
        message='Error Message'
        iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        className='danger'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
