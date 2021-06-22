import {React, useEffect} from 'react'
import './Info.css'
import image1 from '../images/print1.jpg'
import mail from './icons/mail.svg'

export default function Information4(props){

    useEffect(()=>{

        window.addEventListener('scroll', scrollAnimate);
        
        function scrollAnimate(){

            let container = document.getElementById('info4-container');
            let rect = container.getBoundingClientRect();
  
            if (window.pageYOffset >= 3*rect.top && window.pageYOffset <= rect.top + 4*container.clientHeight){
                container.classList.remove('info4-container-start');
                container.classList.add('info4-container');
            } else {
                container.classList.remove('info4-container');
                container.classList.add('info4-container-start');
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
        <div className="pg-container">
            <li className="pg-li">
               <img className="pg-img" src = {image.src} alt={image.id}></img>
               <p id = {image.id} className="pg-p">{image.id}</p>
            </li>
        </div>)
    });

   return(

    <section id = "info4-container" className="info4-container">
        <div className="info4-wrap">
        <h1 className="heading4">{props.heading}</h1>
        <div className="info4-wrapper">
            <ul className="pg-ul">{imageShow}</ul>
        </div>
        </div>
 
    </section>

   )
 }

