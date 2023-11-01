import React from 'react'

export default function Popup(props) {
    return props.trigger ? (
        <div className="popup">
          <div className="dashboard-popup-inner">
            <div className="">{props.children}</div>
          </div>
        </div>
      ) : ("");
}
