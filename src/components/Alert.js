import React from 'react'

export default function Alert({ alertCls, alertMsg }) {
    return (
        <div className='container'>
            <div className={`alert alert-${alertCls} alert-dismissible fade show my-3`} role="alert">
                {alertMsg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>

    )
}
