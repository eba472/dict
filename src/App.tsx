import React from 'react'
import Translation from './app/Translation/Translation'
import "antd/dist/antd.css"
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import CreateUser from './CreateUser'
import User from './User'
import HorizontalNavBar from './app/MenuBar/HorizontalNavBar'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/', // your GraphQL Server 
})

const App: () => JSX.Element = () => {
  const REACT_VERSION = React.version
  return (
    <>
      <HorizontalNavBar />
      <Translation />
      <ApolloProvider client={client}>
        <div style={{
          backgroundColor: '#00000008',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
          marginTop: "20px",
          flexDirection: 'column',
        }}>
          <h2>React version: {REACT_VERSION} </h2>
          <h2>My first Apollo app: It manages to connect back-end with front-end <span role="img" aria-label="rocket">🚀</span></h2>
          <User />
          <CreateUser />
        </div>
      </ApolloProvider>
    </>
  )
}

export default App