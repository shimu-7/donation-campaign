import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const DisplayDonationCard = ({ card }) => {
    const { title, card_bg, category_bg, category, text_color, image } = card
    //console.log(card_bg,category_bg,text_color);
    //console.log(card); 
    
    return (
        <Link to={`/details/${card.id}`}>
             {/* <div>
                <h2 className="bg-lime-100">fgkjth</h2>
                <h2 className="bg-lime-300">hjh </h2>
                <h2 className="text-lime-600">jvhfkj</h2>
                <h2 className="bg-green-100">fgkjth</h2>
                <h2 className="bg-green-300">hjh </h2>
                <h2 className="text-green-600">jvhfkj</h2>
                <h2 className="bg-red-100">fgkjth</h2>
                <h2 className="bg-red-300">hjh </h2>
                <h2 className="text-red-600">jvhfkj</h2>
                <h2 className="bg-cyan-100">fgkjth</h2>
                <h2 className="bg-cyan-300">hjh </h2>
                <h2 className="text-cyan-600">jvhfkj</h2>
            </div> */}
            <div className="my-5">
                <div className="card card-compact w-[275px] bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" className="h-[194px] w-full" /></figure>
                    <div className={card_bg}>
                        <div className={`card-body`} >
                            <div>
                                <div className={`${category_bg} w-20 text-center rounded-lg`}>
                                    <h2 className={text_color}>{category}</h2>
                                </div>
                            </div>
                            <p className={text_color}>{title}</p>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
DisplayDonationCard.propTypes = {
    card: PropTypes.object
}

export default DisplayDonationCard;