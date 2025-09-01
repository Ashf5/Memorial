import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useFetch } from "./useFetch";
import type {Soldier} from '../../../../../src/types/soldierType';

    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

// Element for displaying the soldiers in a carousel
function CarouselElement() {
    
    const {soldiers} = useFetch()
    
   

    return (
        <>
            <Carousel responsive={responsive}>
                {soldiers.map(soldier => <CarouselCard soldier={soldier} key={soldier.id}/>)}
            </Carousel>
        </>
    )
}



interface CarouselCardProps {
  soldier: Soldier;
}

function CarouselCard({soldier} : CarouselCardProps) {

    return (<div>
        <img src={soldier.image} alt="Picture of soldier" />
        <h3>{soldier.name}</h3>
        <p>Date Fell: {soldier.dateFell}</p>
    </div>)
}

export default CarouselElement;