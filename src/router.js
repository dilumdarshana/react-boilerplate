import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Home from './components/home';
import About from './components/about';

const appRouter = () => (
    <Router>
        <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Footer />
        </div>
    </Router>
);

export default appRouter;
