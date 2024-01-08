import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className="footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px' }}>
                    <span className="text-muted">
                        All Rights Reserved &#169; 2024 by Mia Amalia
                    </span>
                </footer>
            </div>
        )
    }
}

export default Footer
