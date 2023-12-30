import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import {useEffect, useState} from "react";
import Item from "./components/Item";

function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let url = "https://fakestoreapi.com/products";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <Router>
                <Routes>
                    <Route
                        path="/products"
                        element={<HomePage products={products} />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                    {products.map((elem) => (
                        <Route
                            key={elem.id}
                            path={`/products/${elem.id}`}
                            element={<Item productInfo={elem} />}
                        />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
