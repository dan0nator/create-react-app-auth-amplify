import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App() {
    const[file, setFile] = useState();
    const[uploaded, setUploaded] = useState(false);

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
            }}>Upload Document</button>

            <div>
                {uploaded
                    ? <div>Your document is uploaded!</div>
                    : <div>Upload a document to get started</div>}
            </div>
        </div>
    );

}

export default withAuthenticator(App, true);
