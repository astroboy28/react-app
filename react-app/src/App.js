import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

function App() {
  
  return (
    
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
   
  );
}

export default App;
