
const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/people-meeting-community-center_23-2149155300.jpg?size=626&ext=jpg&ga=GA1.2.450165047.1695670968&semt=ais)' }}>
                <div className="hero-overlay bg-opacity-60 bg-[#ffffffe7]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-max text-black ">
                        <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center items-start">
                            <input type="text" placeholder="Search here" className="input border w-full max-w-xs " />
                            <button className="bg-[#FF444A] px-3 py-3 text-white w-20 rounded-lg">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;