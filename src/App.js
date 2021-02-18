import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth, Storage } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

class App extends Component {
    render() {
        const [file, setFile] = useState()
        const [uploaded, setUploaded] = useState(false)
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        <button onClick={async () => {
                            const storageResult = await Storage.put('testfile.png', file, {
                                level: 'public',
                                type: 'image/png'
                            })
                            setUploaded(true)
                            console.log(storageResult);
                        }}>Upload</button>
          </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
          </a>
                </header>
            </div>
        );
    }
}

export default withAuthenticator(App, true);