import { useLocation } from 'react-router-dom';

export function FlashGetPageName() {
    const location = useLocation();
    return location.pathname == '/' ?  "Home" : location.pathname[1].toUpperCase() + location.pathname.slice(2);
}      