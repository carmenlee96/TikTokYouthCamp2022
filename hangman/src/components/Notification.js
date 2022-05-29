import React from 'react'

const Notification = ({ show }) => {
  return (
    <div className={`notification-container ${show ? 'show' : ''}`}>
      <p>Enter a different letter.</p>
    </div>
  )
}

export default Notification
