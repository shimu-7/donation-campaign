const getStoredDonation = () =>{
    const storedDonation =localStorage.getItem('donations')
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = id =>{
    const storedDonation = getStoredDonation();
    const exist = storedDonation.find(donationId => DonationId == id)
    if(!exist){
        storedDonation.push(parseInt(id));
        localStorage.setItem('donations',JSON.stringify(storedDonation))
    }

}



export  {saveDonation,getStoredDonation};