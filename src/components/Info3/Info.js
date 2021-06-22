import {React, useEffect} from 'react'
import './Info.css'
import image1 from '../images/print1.jpg'
import mail from './icons/mail.svg'

export default function Information3(props){

    useEffect(()=>{

        window.addEventListener('scroll', scrollAnimate);
        
        function scrollAnimate(){

            let container = document.getElementById('info3-container');
            let rect = container.getBoundingClientRect();

            console.log(rect.top);
            console.log(window.pageYOffset);
            console.log(window.pageYOffset>=2*rect.top);

            if (window.pageYOffset >= 2*rect.top && window.pageYOffset <= rect.top + 3*container.clientHeight){
                container.classList.remove('info3-container-start');
                container.classList.add('info3-container');
            } else {
                container.classList.remove('info3-container');
                container.classList.add('info3-container-start');
            }
          }
        
        return ()=>window.removeEventListener('scroll',scrollAnimate);
    })

    const image = [
        {alt: 'image1', src:mail, id:'image1'},
        {alt: 'image2', src:mail, id:'image2'},
        {alt: 'image2', src:mail, id:'image3'},
    ];

    const imageShow = image.map(image=>{
        return (
        <div className="pg3-container">
            <li className="pg3-li">
               <img className="pg3-img" src = {image.src} alt={image.id}></img>
               <p id = {image.id} className="pg3-p">{image.id}</p>
            </li>
        </div>)
    });

   return(
    
    <div id = "info3-container" className="info3-container">
        <div className="info3-wrap">
        <h1 className="heading3">{props.heading}</h1>
        <div className="info3-wrapper">
            <ul className="pg3-ul">{imageShow}</ul>
        </div>
        </div>
    </div>

   )
 }

