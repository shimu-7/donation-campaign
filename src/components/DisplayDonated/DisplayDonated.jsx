
const DisplayDonated = ({ card }) => {
    const { title, card_bg, category_bg, category, text_color, image } = card
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
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayDonated;