import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About/About';
import Login from './pages/Account/Login';
import Signup from './pages/Account/SignUp';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import { Toaster } from 'react-hot-toast';
import NotFound from './components/NotFound';
import RequireAuth from './pages/Account/RequireAuth';
import ToolDetail from './pages/Home/ToolDetail';

const App = () => {
    return (
        <div>
            <Navbar>
                <ScrollToTop>
                    <Routes >
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/tool/:toolId' element={
                            <RequireAuth><ToolDetail/></RequireAuth>
                        }></Route>
                        <Route path='/blog' element={<Blog />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/signup' element={<Signup />}></Route>
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                    <Toaster />
                </ScrollToTop>
            </Navbar>
        </div>
    );
};

export default App;