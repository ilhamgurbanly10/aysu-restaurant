import '../../assets/css/flash/changeContainers.css';
import { useEffect } from 'react';

export function FlashChangeContainers(props) {

    const changeContainers = (el) => {

        const buttons = el.querySelectorAll('.fl-change-containers-btn');
        const items = el.querySelectorAll('.fl-change-containers-item');
        
        // functions
        function show() {
            const index = this.getAttribute('data-index');
            for (let i = 0; i < items.length; i++) { i == index ? active(i) : deactive(i); }
        }
    
        const active = (i) => { items[i].classList.add('fl-show'); buttons[i].classList.add('fl-active'); }
    
        const deactive = (i) => { items[i].classList.remove('fl-show'); buttons[i].classList.remove('fl-active'); }
    
        // adding-functions
        for (let i = 0; i < buttons.length; i++) { 
            buttons[i].addEventListener('click', show);
            buttons[i].setAttribute('data-index', i); 
            if (i == 0) { 
                buttons[i].classList.add('fl-active');
                items[i].classList.add('fl-show');
            }
        }
    
    }

    useEffect(() => { 
        const el = document.querySelector('#'+props.id+'');
        changeContainers(el)
    }, []);
    
    return <div className={"fl-change-containers" + (props.restClassName ? " " + props.restClassName : "")} id={props.id}>{props.children}</div>
}

export function BtnList(props) {
    return <div className={"fl-change-containers-btn-list" + (props.restClassName ? " " + props.restClassName : "")} >{props.children}</div>
}

export function Btn(props) {
    return <button type="btn" className={"fl-change-containers-btn" + (props.restClassName ? " " + props.restClassName : "")}>{props.children}</button>
}

export function List(props) {
    return <div className={"fl-change-containers-list" + (props.restClassName ? " " + props.restClassName : "")}>{props.children}</div>
}

export function Item(props) {
    return <div className={"fl-change-containers-item" + (props.restClassName ? " " + props.restClassName : "")}>{props.children}</div>
}
