import React from 'react';

class Leaderboard extends Component {
    render()
    {
        return(
            <div></div>
        );
    }

    componentDidMount() {
        // 1. Load the JavaScript client library.
        window.gapi.load("client", this.initClient);
    }

    initClient = () => {
        // 2. Initialize the JavaScript client library.
        window.gapi.client
          .init({
            apiKey: config.apiKey,
            // Your API key will be automatically added to the Discovery Document URLs.
            discoveryDocs: config.discoveryDocs
          })
          .then(() => {
          // 3. Initialize and make the API request.
          load(this.onLoad);
        });
    };

    
}