import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localStorage";

const DonationDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const card = cards.find(card => parseInt(card.id) === parseInt(id));
    const {button_bg,title,description}=card;
    console.log(card, id, card.button_bg);

    const notify = () => {
        saveDonation((id));
        toast("Thank you for your kindness");
    }
    return (
        <div className="max-w-6xl mx-auto mt-10">
        <div>
        <div  className='bg-green-600'>hghjyj</div>
        <div  className='bg-lime-600'>hghjyj</div>
        <div  className='bg-cyan-600'>hghjyj</div>
        <div className="bg-red-600">fdg</div>
        </div>
                <div>
                    <div className="relative">
                        <img src={card.image} alt="" className="w-full h-[500px]" />
                        <div className="bg-black bg-opacity-50 h-20 absolute bottom-0 w-full ">
                            <button onClick={notify} className={`${button_bg} px-4 py-2 ml-5 mt-5 text-white font-medium rounded-md`}>Donate${card.price}</button>
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>

                    <div className="my-10">
                        <h3 className="text-3xl font-medium">{title}</h3>
                        <p className="my-3">{description}</p>
                    </div>
                </div>
        </div>
    );
};

export default DonationDetails;