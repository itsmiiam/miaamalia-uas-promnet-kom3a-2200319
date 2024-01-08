import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                <nav style={{ backgroundColor: 'black' }} className="navbar navbar-dark">
                        <div>
                            <a href="/list" className="navbar-brand">
                                GoIP
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header
