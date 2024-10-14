import Navbar from './components/Navbar';
import Categories from './components/Categories';
import SaleImage from './components/SaleImage';
import Recommended from './components/Recommended';
import Topic from './components/Topic';
import PopularSection from './components/PopularSection';
import Footer from './components/Footer';
import './style.css'

const App = () => {
    return (
        <>
            <Navbar />
            <Categories />
            <SaleImage />
            <Recommended />
            <Topic />
            <PopularSection />
            <Footer />
        </>
    )
}

export default App;