import { useEffect, useState } from "react";
import DisplayDonationCard from "../DisplayDonationCard/DisplayDonationCard";

const Banner = () => {
    const [cards, setCards] = useState([]);
    const [displayCard, setDisplayCard] = useState([])

    useEffect(() => {
        fetch('info.json')
            .then(res => res.json())
            .then(data => {setCards(data)
                setDisplayCard(data)
            })
    }, [])
    const handleSubmit = e => {
        e.preventDefault();
        const value = e.target.search.value.toLowerCase();
        const searched = cards.filter(card => card.category.toLowerCase() === value);
        setDisplayCard(searched)
        console.log(displayCard)
    }
    console.log(displayCard);
    return (
        <div>
            {/* <div>
                <div className="bg--200">gfy</div>
                <div className="bg-lime-300">ghj</div>
                <div className="text-lime-500">jju</div>
                <div className="bg-red-200">gfy</div>
                <div className="bg-red-300">ghj</div>
                <div className="text-cyan-500">jju</div>
            </div> */}

            <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/people-meeting-community-center_23-2149155300.jpg?size=626&ext=jpg&ga=GA1.2.450165047.1695670968&semt=ais)' }}>
                <div className="hero-overlay bg-opacity-80 bg-slate-100"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-max text-black ">
                        <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                        <div>
                            <div className="flex justify-center items-start">
                                <form onSubmit={handleSubmit}>
                                    <input type="search" name="search" placeholder="Search here..." id="" className="px-3 py-2 border rounded-l-md w-auto" />
                                    <input type="submit" value="Search" name="submit" className="bg-[#FF444A] px-3 py-2 rounded-r-md text-white w-24" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-6xl mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap:5">
                    {

                        displayCard.map(card => <DisplayDonationCard key={card.id} card={card}></DisplayDonationCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Banner;