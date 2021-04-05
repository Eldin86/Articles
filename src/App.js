import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import NewsList from './pages/NewsList'
import Article from './pages/Article'

const App = () => {
  return (
    <Router>
        <Header />
        <main className="py-4">
          <Route path="/article" component={Article} />,
          <Route exact path="/" component={NewsList} />
          <Redirect to="/"/>
        </main>
    </Router>

  );
}

export default App;
