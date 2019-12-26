import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import Home from '../pages/Home';
import Sorting from '../pages/Sorting';
import About from '../pages/About';
import Physics from '../pages/Physics';
import Encryption from '../pages/Encryption';
import Projects from '../pages/Projects';

const { Content } = Layout;

const AppRouter = () => {

    return (
        <Content>
            <Route path='/' exact component={Home} />
            <Route path='/projects/sorting' exact component={Sorting} />
            <Route path='/about' exact component={About} />
            <Route path='/projects/physics' exact component={Physics} />
            <Route path='/projects' exact component={Projects} />
            <Route path='/projects/encryption' exact component={Encryption} />
        </Content>
    )
}

export default AppRouter;