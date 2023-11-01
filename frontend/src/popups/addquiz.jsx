import React from 'react'

export default function Quiz(props) {
    return props.trigger ? (
        <div className="popup">
          <div className="time-popup-inner">
            <div className="text-center">{props.children}</div>
          </div>
        </div>
      ) : ("");
}
