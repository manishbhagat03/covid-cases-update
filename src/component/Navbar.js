import React from 'react'

function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.home}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.about}</a>
                    </li>
                </ul>
                
            </div>
        </nav>
    </>
    )
}

export default Navbar
