import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import DisplayDonated from "../DisplayDonated/DisplayDonated";

const Donation = () => {
    const cards = useLoaderData();

    const [donations, setDonations] = useState([]);

    useEffect(()=>{
        const donationIds = getStoredDonation();
        if(donationIds.length>0){
            const donated = cards.filter(card => donationIds.includes(card.id))
            setDonations(donated);
        }

    },[cards])

    return (
        <div>
            {
                donations.map(card =><DisplayDonated card={card} key={card.id}></DisplayDonated>)
            }
        </div>
    );
};

export default Donation;