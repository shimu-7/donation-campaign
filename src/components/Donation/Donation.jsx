import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import DisplayDonated from "../DisplayDonated/DisplayDonated";

const Donation = () => {
    const cards = useLoaderData();

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const donationIds = getStoredDonation();
        if (donationIds.length > 0) {
            const donated = cards.filter(card => donationIds.includes(card.id))
            setDonations(donated);
        }

    }, [cards])

    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                {
                    donations.map(card => <DisplayDonated card={card} key={card.id}></DisplayDonated>)
                }
            </div>
            <div className="text-center">
                <button className="text-white font-medium bg-green-700 px-4 py-2 mt-5 rounded-lg">Show all</button>
            </div>
        </div>
    );
};

export default Donation;