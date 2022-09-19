import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Error404 from '../pages/Error_404';

function Routing() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<Error404 />} />
        </Routes>    
    );
}

export default Routing;
