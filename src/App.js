
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageServices from './Components/ManageServices/ManageServices';
import PrivateRoute from './Components/ManageServices/PrivateRoute';
import MyOrder from './Components/MyOrder/MyOrder';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';

import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route exact path="/home">
         <Home></Home>
       </Route>
       <Route exact path="/home">
         <Home></Home>
       </Route>
       <Route exact path="/myOrder">
         <MyOrder></MyOrder>
       </Route>
       <PrivateRoute exact path="/service/:serviceId">
         <Booking></Booking>
       </PrivateRoute>
       <Route exact path="/manageServices">
        <ManageServices></ManageServices>
       </Route>
       <Route exact path="/login">
        <Login></Login>
       </Route>
       <Route exact path="/register">
        <Register></Register>
       </Route>
       <Route exact path="*">
        <NotFound></NotFound>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     
    </AuthProvider>
    </div>
  );
}

export default App;
