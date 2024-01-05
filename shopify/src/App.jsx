import './App.css'
//import Footer from './components/Footer';
 //import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import  Order from './components/Order';
import Contact from './components/Contact'
import Shopping from './components/Shopping';
import { Route, Routes } from 'react-router';
import MainHeader from '../MainHeader'
import AddToCard from './AddCard/AddToCard';
import {createStore} from 'redux'
import {reducer} from './redux/Reducer'
import { Provider } from 'react-redux';
import Login from './components/Login'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const store = createStore(reducer);
  return (
  <>
       {/* <Slideshow/> */}
    <div className='App'>
     <Provider store={store}>
     <Header/>
     <Routes>  
        <Route path='/'  element={<MainHeader/>} />
        <Route  path='/home' index  element={<Home/>} />
        <Route path='/order' element={<Order/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/shopping' element={<Shopping/>}/>
        <Route path='/addtocard' element={<AddToCard/>}/>
        <Route path='/login' element={<Login/>}/>
       
      </Routes>
      <Footer/>
      </Provider>
      </div>
    </>
  )
}

export default App;
