import { Link } from 'react-router-dom';


const DisplayDonated = ({ card }) => {
    const { title, card_bg, category_bg, category, text_color,price,button_bg, image } = card
    return (
        <div>
            {/* <div>
                <h2 className="bg-lime-100">fgkjth</h2>
                <h2 className="bg-lime-300">hjh </h2>
                <h2 className="bg-lime-600">jvhfkj</h2>
                <h2 className="bg-green-100">fgkjth</h2>
                <h2 className="bg-green-300">hjh </h2>
                <h2 className="bg-green-600">jvhfkj</h2>
                <h2 className="bg-red-100">fgkjth</h2>
                <h2 className="bg-red-300">hjh </h2>
                <h2 className="bg-red-600">jvhfkj</h2>
                <h2 className="bg-cyan-100">fgkjth</h2>
                <h2 className="bg-cyan-300">hjh </h2>
                <h2 className="bg-cyan-600">jvhfkj</h2>
            </div> */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} className="w-[250px] h-full" alt="Movie" /></figure>
                <div className={`${card_bg} flex-grow`}>
                    <div className="card-body">
                        <div className={`${category_bg} w-24 text-center rounded-md ps-1`}>
                            <p className={text_color}>{category}</p>
                        </div>
                        <h2 className={`text-lg font-medium `}>{title}</h2>
                        <h2 className={text_color}>${price}</h2>
                        <Link to={`/details/${card.id}`}>
                            <button className={`${button_bg} px-4 py-2  mt-2 text-white font-medium rounded-md`}>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayDonated;