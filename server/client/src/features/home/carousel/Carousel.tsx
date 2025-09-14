
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useFetch } from "./useFetch";
import type { Soldier } from '../../../../../src/types/soldierType';
import { useRef } from "react";
import { Link } from "react-router-dom";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

type CarouselProps = { query: string | undefined }

// Element for displaying the soldiers in a carousel. Takes a query props, can be undefined.
function CarouselElement({ query }: CarouselProps) {

    const carouselRef = useRef<Carousel | null>(null);
    const { soldiers, fetchNext, fetchPrevious } = useFetch(query);

    // create the slides and the previous and next buttons
    const slides = [
        <div key='previous-button'><button onClick={fetchPrevious}>Previous</button></div>,
        ...soldiers.map(soldier => <CarouselCard soldier={soldier} key={soldier.id} />),
        <div key='next-button'><button onClick={() => { fetchNext(); carouselRef.current?.goToSlide(0, true) }}>Next</button></div>
    ]



    return (
        <div>
            <Carousel
                responsive={responsive}
                centerMode={true}
                ref={carouselRef}>

                {slides}

            </Carousel>
        </div>
    )
}



interface CarouselCardProps {
    soldier: Soldier;
}

function CarouselCard({ soldier }: CarouselCardProps) {

    return (
        <Link to={`/${soldier.id}`}>
            <div className="soldierCarouselCard">
                <img className="soldierCarouselImage" src={soldier.image} alt="Picture of soldier" />
                <p className="soldierName">{soldier.name}</p>
                <p>Date Fell: {soldier.dateFell}</p>
            </div>
        </Link>
    )

}

export default CarouselElement;