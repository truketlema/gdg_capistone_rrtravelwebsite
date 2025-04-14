import Banner from "../Components/Banner";
import image from "../assets/package-image.png";
import { Article } from "../Components/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";
import banner from "../assets/banner-package-image.png";
import Header from "../Components/Header";
import travel_destination from "../assets/travel-destination.jpg";
interface Booking {
  userEmail: string;
  destinationId: string;
  destinationName: string;
  country: string;
  price: string;
  image: string;
  status: string;
}

interface Destination {
  id: string;
  name: string;
  country: string;
  price: string;
  image: string;
  description: string;
}

export const Destination = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations"
      )
      .then((response) => response.data)
      .then((data) => setDestinations(data));
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredDestinations = destinations.filter((destination) => {
    const priceMatch = destination.price.includes(search);
    const countryMatch = destination.country.toLowerCase().includes(search);

    return priceMatch || countryMatch;
  });
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>
      <div
        className="  flex bg-cover bg-no-repeat h-screen text-white items-center justify-center"
        style={{ backgroundImage: `url(${travel_destination})` }}
      >
        <h2 className="text-3xl sm:text-5xl font-semibold  mt-[50px] items-center justify-center  ">
          {" "}
          Search for Destinations
        </h2>
      </div>

      <div className="sm:mx-8 ">
        <div className="relative w-full min-w-[300px] max-w-[60%] border-black border-2 rounded-[72px] mb-[66px] mx-auto mt-16">
          <input
            type="text"
            placeholder="Search here..."
            onChange={handleSearch}
            className="rounded-[72px] h-[78px] px-[20px] w-full pr-[120px]"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 px-6 rounded-[72px] m-[10px] hover:scale-105 transition-all duration-300"
          >
            <span className="sm:hidden">
              <i className="fa-solid fa-search"></i>
            </span>
            <span className="hidden sm:inline">Explore now</span>
          </button>
        </div>
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations
              .slice(0, isCollapsed ? 6 : filteredDestinations.length)
              .map((destination) => (
                <div
                  className="rounded-lg overflow-hidden shadow-lg flex flex-col"
                  key={destination.id}
                >
                  <img src={image} className="w-full h-auto" />
                  <div className="mx-4 mb-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-center pt-4 pb-2">
                      <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                        {destination.country}
                      </h3>
                      <p className="text-lg sm:text-xl font-normal">
                        ${destination.price}
                        <span className="font-light">/2days</span>
                      </p>
                    </div>
                    <p className="leading-6 text-package-description text-base sm:text-lg flex-grow">
                      {destination.description}
                    </p>
                    <div className="flex justify-between items-center pt-4 pb-2">
                      <div>
                        <i className="fa-solid fa-star text-star-color"></i>
                        <i className="fa-solid fa-star text-star-color"></i>
                        <i className="fa-solid fa-star text-star-color"></i>
                        <i className="fa-solid fa-star text-star-color"></i>
                        <i className="fa-solid fa-star text-star-color"></i>
                      </div>
                      <button
                        className="text-sm sm:text-lg text-green-600 hover:underline hover:scale-105 transition-all duration-300"
                        onClick={() => {
                          const loggedInUser = JSON.parse(
                            localStorage.getItem("loggedInUser") || "null"
                          );

                          if (!loggedInUser) {
                            alert("Please login to book a package.");
                            return;
                          }

                          const existingBookings: Booking[] = JSON.parse(
                            localStorage.getItem("bookings") || "[]"
                          );

                          console.log(
                            "Existing bookings before adding new:",
                            existingBookings
                          );

                          const newBooking: Booking = {
                            userEmail: loggedInUser.email,
                            destinationId: destination.id,
                            destinationName: destination.name,
                            country: destination.country,
                            price: destination.price,
                            image: destination.image || image,
                            status: "Pending", // Adding status field
                          };

                          const updatedBookings = [
                            ...existingBookings,
                            newBooking,
                          ];
                          console.log("New bookings array:", updatedBookings);

                          // Saving to localStorage
                          localStorage.setItem(
                            "bookings",
                            JSON.stringify(updatedBookings)
                          );
                          console.log(
                            "Saved bookings to localStorage:",
                            updatedBookings
                          );

                          alert("Package booked successfully!");
                        }}
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            <div className="flex flex-col sm:flex-row justify-between items-center pt-4 pb-16">
              <div className="flex justify-end">
                <button
                  onClick={toggleCollapse}
                  className="mt-4 sm:mt-0 text-sm sm:text-lg hover:scale-105 transition-all duration-300"
                >
                  {isCollapsed ? "Discover more" : "View Less"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="mb-[120px] text-xl font-semibold text-gray-500 mt-[120px] items-center text-center">
            No destinations in sight!
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};
