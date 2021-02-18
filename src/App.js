import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth, Storage } from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

class App extends Component {
    get file() {
        return useState();
    }
    get setFile() {
        return useState();
    }
    get uploaded() {
        return useState(false);
    }
    get setUploaded() {
        return useState(false);
    }

    render() {
        return (
            <div className="App">
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <button onClick={async () => {
                    const storageResult = await Storage.put('file.png', file, {
                        level: 'public',
                        type: 'image/png'
                    })
                    // Insert predictions code here later
                    setUploaded(true)
                    console.log(storageResult);
                }}>Upload</button>

                <div>
                    {uploaded
                        ? <div>Your image is uploaded!</div>
                        : <div>Upload a photo to get started</div>}
                </div>
            </div>


          //  <div className="App">
          //      <header className="App-header">
          //          <img src={logo} className="App-logo" alt="logo" />
          //          <p>
          //              Textract document application
          //</p>
          //          <a
          //              className="App-link"
          //              href="https://reactjs.org"
          //              target="_blank"
          //              rel="noopener noreferrer"
          //          >
          //              Learn React
          //</a>
          //      </header>
          //  </div>
        );
    }
}

export default withAuthenticator(App, true);