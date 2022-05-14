// import "./App.css";

// function App() {
//   return (
//     <>
//       <h1>hello</h1>
//     </>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Electronics from './components/pages/Electronics/Electronics';
import LocalStores from './components/pages/LocalStores/LocalStores';
// import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/pages/Footer/Footer';

const App = () => {

  

//   $(document).ready(function () {
//     let webpage = document.querySelector('.webpage');
//     let preloader = document.querySelector('#loader-section');
//     let count = 0;
//     let counter = setInterval(function () {
//         if (count < 101) {
//             $('.count').text(count + '%');
//             $('.loader').css('width', count + '%');
//             webpage.style.display = "none";
//             count++;
//         }
//         else {
//             clearInterval(counter)
//             webpage.style.display = "block";
//             preloader.style.display = "none";
//         }
//     }, 50)

// })

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/electronics' component={Electronics} />
        <Route path='/localstores' component={LocalStores} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
       <Footer />
    </Router>
  );
}

export default App;

