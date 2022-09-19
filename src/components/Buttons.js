import { Link } from "react-router-dom";
import {useEffect} from 'react';

export function orangeLink(props) {
    return (
        <Link className="btn-1 mt-4" to={props.to}>
            <span>{props.HTML}</span>
        </Link>            
    );
}

export function BoxLink(props) {
    return (
        <Link className="w-100 h-100 text-decoration-none border-white border-2 border-lg-5 border d-flex flex-column justify-content-center align-items-start p-4" to={props.to}>
            <h4 className="smaller-cursive-title text-white w-100">{props.title}</h4>
            <h3 className="bigger-title-3 mt-lg-n3 text-white w-100">{props.subtitle}</h3>
            <h5 className="bigger-text-2 w-100">{props.text}</h5>
        </Link>            
    );
}

export function BoxLink2(props) {
    return (
        <Link className="box-link-2 w-100 h-100 text-decoration-none text-center black-rotated-box-parent d-flex  justify-content-start justify-content-lg-center align-items-start" to={props.to}>
            <div className="box-link-2-rotated-box black-rotated-box">
                <i className={props.icon}></i>
            </div>
            <div className="box-link-2-container text-start">
                <h4 className="box-link-2-title smaller-text w-100">{props.title}</h4>
                <h5 className="box-link-2-text smaller-text w-100 mt-1">{props.text}</h5>
            </div>    
        </Link>            
    );
}

export function BackToTopBtn() {

    useEffect(() => {

        const backtoTopBtn = document.querySelector('.back-to-top-btn');
        document.body.style.setProperty('scoll-behaviour','smooth');

        const show = () => document.documentElement.scrollTop > 20 ? backtoTopBtn.classList.add('show') : hide();
        const hide = () =>  backtoTopBtn.classList.remove('show'); 
        const toTop = () => document.documentElement.scrollTop = 0; 
    
        backtoTopBtn.addEventListener('click', hide);
        backtoTopBtn.addEventListener('click', toTop);
        window.addEventListener('scroll', show);
        show();
    
    }, []);

    return <button className="back-to-top-btn rotate-icon"><i className="fa fa-chevron-up"></i></button>   
}

export default orangeLink;
  
