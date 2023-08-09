import './App.css';
import About from './components/About/About';
import Application from './components/Application/Application';
import Blog from './components/Blog/Blog';
import Featured from './components/FeaturedProducts/Featured';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import BrandProduct from './components/ProductBrand/BrandProduct';
import Category from './components/ProductCategory/Category';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Home />
      <BrandProduct />
      <Featured />
      <Category />
      <Featured />
      <Application />
      <About />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
