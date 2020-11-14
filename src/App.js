import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import BookTrip from './Components/BookTrip';
import { Contact } from './Components/Contact';
import FeedBack from './Components/FeedBack';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import NavigationBar from './Components/NavigationBar';
import Packages from './Components/Packages';
import Register from './Components/Register';
import Tours from './Components/Tours';
import Stays from './Components/Stays';

function App() {
  return (

    <div>
      <div class="page-wrapper">
	  <span>TourTrippyChange</span>
				<div class="container-fluid">
					<div class="row">

            <BrowserRouter>
              <NavigationBar/>
              
              <Route path='/' exact={true} component={Home} />
              
              <Route path='/packages' exact={true} component={Packages}/>
              <Route path='/about' exact={true} component={AboutUs}/>
              <Route path='/book-trip' exact={true} component={BookTrip}/>
              <Route path='/feedback' exact={true} component={FeedBack}/>
              <Route path='/contact' exact={true} component={Contact}/>
              <Route path='/login' exact={true} component={Login}/>
              <Route path='/register' exact={true} component={Register}/>
              <Route path='/tours' exact={true} component={Tours}/>
              <Route path='/stays' exact={true} component={Stays}/>

              <Footer/>
            </BrowserRouter>

          </div>
        </div>
      </div>-
    </div>
  );
}

export default App;
