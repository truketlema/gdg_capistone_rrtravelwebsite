import Banner from "../Components/Banner";
import image from "../assets/package-image.png";
import { Article } from "../Components/Article";
import { useEffect, useState } from "react";
import axios from "axios";

interface Destination {
    id: string;
    name: string;
    country: string;
    price: string;
    image: string;
    description: string;
}

export const Packages = () => {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(
        () => {
          axios.get(
            'https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations'
          )
          .then(response=>response.data)
          .then(data=>setDestinations(data))
        }, []
    )

    const toggleCollapse = () => {
        setIsCollapsed(prevState => !prevState); // Toggle the collapsed state
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toLowerCase());
    }
      
    const filteredDestinations = destinations.filter(destination => {
        const priceMatch = destination.price.includes(search);
        const countryMatch = destination.country.toLowerCase().includes(search);

        return priceMatch || countryMatch;
    })
  return (
    <div>
        <Banner />
        <div className="my-[178px] mx-4 sm:my-16 sm:mx-8">
            <h2 className="text-3xl sm:text-5xl font-semibold">Popular Destination</h2>
            <div className="flex flex-col sm:flex-row justify-between items-center pt-4 pb-16">
                <p className="leading-6 sm:leading-8 text-faded-color text-base sm:text-lg w-full sm:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                <button onClick={toggleCollapse} className="mt-4 sm:mt-0 text-sm sm:text-lg">{isCollapsed ? "Discover more" : "View Less"}</button>
            </div>
            <div className="relative w-full min-w-[300px] max-w-[60%] border-black border-2 rounded-[72px] mb-[66px] mx-auto"> 
                <input 
                    type="text"
                    placeholder="Search here..."
                    onChange={handleSearch}
                    className="rounded-[72px] h-[78px] px-[20px] w-full pr-[120px]"
                />
                <button 
                    type="submit" 
                    className="absolute right-0 top-0 px-6 rounded-[72px] m-[10px]"
                >
                    <span className="sm:hidden"><i className="fa-solid fa-search"></i></span>
                    <span className="hidden sm:inline">Explore now</span> 
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                filteredDestinations.slice(0, isCollapsed ? 6 : filteredDestinations.length).map(destination => (
                    <div className="rounded-lg overflow-hidden shadow-lg flex flex-col" key={destination.id}>
                        <img src={image} className="w-full h-auto" />
                        <div className="mx-4 mb-4 flex-grow flex flex-col">
                            <div className="flex justify-between items-center pt-4 pb-2">
                                <h3 className="text-lg sm:text-xl font-semibold leading-tight">{destination.country}</h3>
                                <p className="text-lg sm:text-xl font-normal">${destination.price}<span className="font-light">/2days</span></p>
                            </div>
                            <p className="leading-6 text-package-description text-base sm:text-lg flex-grow">{destination.description}</p>
                            <div className="flex justify-between items-center pt-4 pb-2">
                                <div>
                                    <i className="fa-solid fa-star text-star-color"></i>
                                    <i className="fa-solid fa-star text-star-color"></i>
                                    <i className="fa-solid fa-star text-star-color"></i>
                                    <i className="fa-solid fa-star text-star-color"></i>
                                    <i className="fa-solid fa-star text-star-color"></i>
                                </div>
                                <button className="text-sm sm:text-lg">Booking now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        <Article />
    </div>
  )
}
