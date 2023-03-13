import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './pages/HomeScreen'
import ProductScreen from './pages/ProductScreen'

function App() {
  return (
    <Router className="App">
      <Header/>
      <main className='py-3'>
        <Container>
        <Routes>
          <Route path='/' element={<HomeScreen/>} exact />
        </Routes>
        <Routes>
          <Route path='/product/:id' element={<ProductScreen/>}/>
        </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
