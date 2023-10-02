import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));  
const client = new ApolloClient({
  uri: 'https://tokengifts-dev.saleor.cloud/graphql/',
  cache: new InMemoryCache(),
});

root.render(
  // <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  // </React.StrictMode>,
  document.getElementById('root'),
);