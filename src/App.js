import React from 'react';
import './assets/App.css';
import Footer from './components/footer';
import Header from './components/header';
import Myteams from './components/myteams';
import FormTeam from './components/createTeam';
import Top from './components/top';
import Picked from './components/picked';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

function App() {

  function Home() {
    return (
      <div className="content-wrap">
        {/* <GlobalProvider> */}
        <Container>
          <Row>
            <Col>
              <Myteams />
            </Col>
            <Col>
              <Top />
              <Picked/>
            </Col>
          </Row>
        </Container>
        <Route path='/' exact />
        {/* </GlobalProvider> trying to use ContextApi to manipulate data */}
      </div>
    );
  }

  function Create() {
    return <FormTeam/>
  }

  return (
    <div className="App">

      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/team/create">
            <Create />
          </Route>

        </Switch>


        <Footer />
      </Router>
    </div>

  );
}

export default App;
