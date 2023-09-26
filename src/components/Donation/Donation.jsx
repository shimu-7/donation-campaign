import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import DisplayDonated from "../DisplayDonated/DisplayDonated";

const Donation = () => {
    const cards = useLoaderData();

    const [donations, setDonations] = useState([]);
    const [allDonation, setAllDonation] = useState([]);
    const [num , setNum] = useState(4);

    useEffect(() => {
        const donationIds = getStoredDonation();
        if (donationIds.length > 0) {
            const donated = cards.filter(card => donationIds.includes(card.id))
            setDonations(donated);
            setAllDonation(donated);
        }

    }, [cards])

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
                {
                    donations.slice(0,num).map(card => <DisplayDonated card={card} key={card.id}></DisplayDonated>)
                }
            </div>
            <div className={donations.length===num? 'hidden': 'text-center mb-10'}>
                <button onClick={()=>setNum(donations.length)} className="text-white font-medium bg-green-700 px-4 py-2  rounded-lg">Show all</button>
            </div>
        </div>
    );
};

export default Donation;