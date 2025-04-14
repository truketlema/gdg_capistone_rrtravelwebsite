import suitcase from "../assets/suitcaseimage.png";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import happytravelimage from "../assets/happytravelimage.png";
import whychooseusbg from "../assets/whychooseusbgimage.png";
import oceanimage from "../assets/oceanImage.png";
import statueoflibertyimage from "../assets/statueofliberty.png";
import servicelogo from "../assets/servicelogo.png";
import handipickedlogo from "../assets/handipickedlogo.png";
import guaranteeLogo from "../assets/guaranteelogo.png";
import katana from "../assets/Katana.png";
import travava from "../assets/travava.png";
import bigui from "../assets/bigui.png";
import booking from "../assets/Booking.com.png";
import jakmaen from "../assets/Jakmaen.png";
import testifier1 from "../assets/testifier1.jpg";
import testifier2 from "../assets/testifier2.webp";
import testifier3 from "../assets/testifier3.jpg";
import testifier4 from "../assets/testifier4.jpg";
import testifier5 from "../assets/testifier5.jpg";
import testifier6 from "../assets/testifier6.jpg";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface Destination {
  id: string;
  name: string;
  country: string;
  price: string;
  image: string;
  description: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
}

export default function Home() {
  const [showAddress, setShowAddress] = useState(false);
  const navigate = useNavigate();

  const User = () => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      navigate("/profile");
    } else {
      navigate("/signup");
    }
  };
  // Featured destinations state
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDestinationIndex, setCurrentDestinationIndex] = useState(0);

  // fetching destinations from API
  useEffect(() => {
    axios
      .get(
        "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations"
      )
      .then((response) => {
        setDestinations(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching destinations:", error);
        setIsLoading(false);
      });
  }, []);

  // navigation for featured destinations
  const nextDestination = () => {
    if (destinations.length > 0) {
      setCurrentDestinationIndex((prev) =>
        prev >= destinations.length - 3 ? 0 : prev + 1
      );
    }
  };

  const prevDestination = () => {
    if (destinations.length > 0) {
      setCurrentDestinationIndex((prev) =>
        prev <= 0 ? destinations.length - 3 : prev - 1
      );
    }
  };

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John more",
      role: "Traveller",
      image: testifier1,
      rating: 5,
      comment:
        "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
    },
    {
      id: 2,
      name: "Sara Daniel",
      role: "Traveller",
      image: testifier2,
      rating: 5,
      comment:
        "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
    },
    {
      id: 3,
      name: "Kausar Hasan",
      role: "Traveller",
      image: testifier3,
      rating: 5,
      comment:
        "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
    },
    {
      id: 4,
      name: "Emma Wilson",
      role: "Traveller",
      image: testifier4,
      rating: 5,
      comment:
        "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
    },
    {
      id: 5,
      name: "Alex Brown",
      role: "Traveller",
      image: testifier5,
      rating: 5,
      comment:
        "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
    },
    {
      id: 6,
      name: "Olivia Smith",
      role: "Traveller",
      image: testifier6,
      rating: 5,
      comment:
        "Before we define any approach, we need to deline the brands overall goal. We then need to dive.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = testimonials.length - 3;
  //navigation for testimonals section
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };
  return (
    <div className="overflow-hidden">
      {/* hero section */}
      <div className="absolute top-0 left-0 w-full z-10 ">
        <Header />
      </div>
      <div
        className="bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: `url(${suitcase})` }}
      >
        <div className="lg:pl-16 md:pl-8 pl-4">
          <div className="flex flex-col pt-36 pl-10 lg:pl-0 ">
            <h1 className="text-[6vw]  font-semibold mb-2 leading-[1.1] whitespace-pre-line pb-6">
              Make in {"\n"}your journey
            </h1>

            <div className="flex flex-row items-center">
              <p className="opacity-90 leading-[1.1] whitespace-pre-line">
                Explore the world with what you love beautiful {"\n"} natural
                beauty.
              </p>
            </div>
          </div>
          <div className="bg-white text-black  max-md:w-[95%] max-lg:w-[70%]  lg:w-[55%]   py-2   rounded-full  pl-6 pr-2 mt-8 ">
            <ul className="flex flex-row justify-between items-center relative ">
              <li className="opacity-50 p-0 flex flex-col relative">
                <div className="flex flex-row items-center">
                  <Link to="#">Location</Link>
                  <RiArrowDropDownLine
                    className="text-[26px] cursor-pointer"
                    onClick={() => setShowAddress(!showAddress)}
                  />
                </div>

                {showAddress && (
                  <div className="mt-1 text-sm text-black bg-white p-2 pt-4 rounded w-[220px] shadow-md absolute top-full z-10">
                    732 Despard St, Atlanta
                  </div>
                )}
              </li>
              <li className="opacity-50 p-0 flex flex-row">
                <Link to="#">Data</Link>
                <RiArrowDropDownLine className="text-[26px]" />
              </li>
              <li className="opacity-50 p-0 flex flex-row">
                <Link to="#">People</Link>
                <RiArrowDropDownLine className="text-[26px]" />
              </li>
              <Link to="/about_us">
                <button className="bg-black text-white  rounded-full hover:scale-105 transition-all duration-300 ">
                  Explore now
                </button>
              </Link>
            </ul>
          </div>
          <div className="">
            {" "}
            <p className="opacity-70 pt-6">
              Popular Place : Bali, Istanbul, Rome, Paris.
            </p>
          </div>
        </div>
      </div>
      {/* Featured destination section */}
      <div className="container2 pt-16 pb-24">
        <div className="flex flex-col items-center justify-center pb-[64px] gap-0">
          <h1 className="text-[4.5vw] leading-[0.9] whitespace-pre-line text-center font-semibold">
            Explore new worlds with
            {"\n"}exotic natural scenery
          </h1>

          <p className="opacity-70 pt-4 text-center">
            Explore the world with what you love beautiful natural beauty.
          </p>
          <div className="flex flex-row pt-4">
            <Link to="/signup">
              <button
                onClick={User}
                className="bg-black text-white hover:scale-105 transition-all duration-300  rounded-full  mt-3"
              >
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-transparent text-black hover:scale-105 transition-all duration-300 rounded-full  mt-3">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Left arrow */}
          <button
            onClick={prevDestination}
            className="absolute left-1 top-1 -translate-y-1/2 z-10 w-12 h-12 bg-white text-black opacity-50 p-3 rounded-md shadow-lg hover:bg-gray-100 transition-colors shadow-md"
            aria-label="Previous slide"
            disabled={isLoading}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {isLoading ? (
            <div className="flex justify-center items-center h-[300px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : destinations.length > 0 ? (
            <div className="flex gap-14 mx-8">
              {/* First destination */}
              <div className="hidden md:block w-full md:w-[50%] lg:w-[40%] relative">
                <img
                  src={happytravelimage || "/placeholder.svg"}
                  className="w-full h-[300px] rounded-lg shadow-xl"
                  alt="Happy travelers"
                  width={400}
                  height={0}
                />
              </div>

              {/* middle destination-always visible */}
              <div className="w-full md:w-[50%] lg:w-[40%] relative ">
                <img
                  src={
                    destinations[
                      (currentDestinationIndex + 1) % destinations.length
                    ]?.image || oceanimage
                  }
                  className="w-full h-[300px] object-cover rounded-lg shadow-xl"
                  alt={
                    destinations[
                      (currentDestinationIndex + 1) % destinations.length
                    ]?.name || "Bali, Indonesia"
                  }
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = oceanimage;
                  }}
                />
                <div className="p-4 bg-white rounded-b-lg shadow-xl">
                  <h3 className="font-bold text-[20px]">
                    {destinations[
                      (currentDestinationIndex + 1) % destinations.length
                    ]?.country || "Bali, Indonesia"}
                  </h3>
                  <p className="opacity-70 leading-[1.6] whitespace-pre-line">
                    {destinations[
                      (currentDestinationIndex + 1) % destinations.length
                    ]?.description ||
                      "Bali is a beautiful tourist spot and is visited by many travelers."}
                  </p>
                </div>
              </div>

              {/* third destination */}
              <div className="hidden lg:block w-full md:w-[40%] relative">
                <img
                  src={statueoflibertyimage || "/placeholder.svg"}
                  className="w-full h-[300px] object-cover rounded-lg shadow-xl"
                  alt="Statue of Liberty"
                  width={400}
                  height={0}
                />
              </div>
            </div>
          ) : (
            <div className="flex gap-4 mx-8"></div>
          )}

          {/* Right arrow */}
          <button
            onClick={nextDestination}
            className="absolute right-2 top-1 -translate-y-1/2 z-10 bg-transparent w-12 h-12 bg-white text-black opacity-50 p-3 rounded-md shadow-lg hover:bg-gray-100 transition-colors shadow-md"
            aria-label="Next slide"
            disabled={isLoading}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Why chose us section */}
      <div
        className=" container3 bg-cover bg-center bg-no-repeat relative md:h-screen "
        style={{ backgroundImage: `url(${whychooseusbg})` }}
      >
        <div className="flex flex-col items-center justify-center pt-16 pb-28 text-white">
          <h1 className="text-[5vw] font-semibold">Why choose us?</h1>
          <p>our services have been trusted by world travelers.</p>
          <div className="flex flex-row pt-4">
            <Link to="/signup">
              <button
                onClick={User}
                className="bg-white text-black rounded-full mt-3 hover:scale-105 transition-all duration-300"
              >
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-transparent text-white hover:scale-105 transition-all duration-300  rounded-full  mt-3">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className="cardcontainer  md:absolute flex flex-col sm:flex-col md:flex-row gap-8 lg:gap-16 justify-center items-center mx-10 lg:mx-32">
          <div className="bg-white w-[80%] md:w-[33.3%] px-4 pt-10 pb-14 rounded-lg shadow-xl">
            <img
              src={servicelogo || "/placeholder.svg"}
              alt=""
              width={60}
              height={0}
              className="pb-6"
            />
            <h2 className="font-bold text-[18px] pb-2">Best service</h2>
            <p className="opacity-50 pb-6">
              our service is reliable and convenient, our service is quality.
            </p>
            <p className="flex flex-row gap-2 items-center pb-8 ">
              Learn more <FaLongArrowAltRight className="translate-y-[1px]" />
            </p>
          </div>
          <div className="bg-white w-[80%] md:w-[33.3%] px-4 pt-10 pb-14 rounded-lg shadow-xl">
            <img
              src={guaranteeLogo || "/placeholder.svg"}
              alt=""
              width={60}
              height={0}
              className="pb-6"
            />
            <h2 className="font-bold text-[18px] pb-2">Price Guarantee</h2>
            <p className="opacity-50 pb-6">
              our service is reliable and convenient, our service is quality.
            </p>
            <p className="flex flex-row gap-2 items-center pb-8  ">
              Learn more
              <FaLongArrowAltRight className="translate-y-[1px]" />
            </p>
          </div>
          <div className="bg-white w-[80%] md:w-[33.3%] px-4 pt-10 pb-14 rounded-lg shadow-xl">
            <img
              src={handipickedlogo || "/placeholder.svg"}
              alt=""
              width={60}
              height={0}
              className="pb-6"
            />
            <h2 className="font-bold text-[18px] pb-2">Handpicked Hotels</h2>
            <p className="opacity-50 pb-6">
              our service is reliable and convenient, our service is quality.
            </p>
            <p className="flex flex-row gap-2 items-center pb-8  ">
              Learn more
              <FaLongArrowAltRight className="translate-y-[1px]" />
            </p>
          </div>
        </div>
      </div>
      {/* partners section */}
      <div className="container4 mt-48 items-center justify-center flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-[4.5vw] pb-2">Our tour partner</h1>
          <p className="opacity-50 leading-[1.6] whitespace-pre-line text-center">
            There are many variation of passage of lorem ipsum available but
            {"\n"} the majority have suffered alteration
          </p>
        </div>
        <div className="flex flex-row gap-16 items-center justify-center pt-10 pb-24 mx-4">
          <Link to="#">
            <img
              src={katana || "/placeholder.svg"}
              alt=""
              width={100}
              height={0}
            />
          </Link>
          <Link to="#">
            <img
              src={travava || "/placeholder.svg"}
              alt=""
              width={100}
              height={0}
            />
          </Link>
          <Link to="#">
            <img
              src={bigui || "/placeholder.svg"}
              alt=""
              width={100}
              height={0}
            />
          </Link>
          <Link to="#">
            <img
              src={booking || "/placeholder.svg"}
              alt=""
              width={100}
              height={0}
            />
          </Link>
          <Link to="#">
            <img
              src={jakmaen || "/placeholder.svg"}
              alt=""
              width={100}
              height={0}
            />
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container5 testimonials px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="pb-8 relative">
            <div className="pb-10 pl-3">
              <h2 className="opacity-70 text-[20px] font-semibold tracking-widest leading-[1]  whitespace-pre-line">
                TESTIMONIAL
              </h2>
              <h1 className="text-[4vw] font-semibold ">What our client say</h1>
              <p className="opacity-50 leading-[1.6] whitespace-pre-line">
                Create a visual identity for your company and a {"\n"}overall
                brand
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-32 right-0 flex gap-10">
              <button
                onClick={prevSlide}
                className="bg-white text-black opacity-50 p-3 rounded-md shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white text-black opacity-50 p-3 rounded-md shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Testimonials Slider  */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="  max-sm:min-w-[100%] sm:min-w-[50%] md:min-w-[50%] lg:min-w-[33%] px-4 flex-shrink-0"
                  style={{ width: "calc(100% / 3)" }}
                >
                  <div className="bg-white p-10 mb-20 rounded-lg shadow-xl">
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                        <img
                          src={testimonial.image || "testifier1"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="font-medium text-lg">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>

                    <div className="flex flex-col ">
                      <div className="flex text-yellow-500 mb-3 gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <IoMdStar key={i} />
                        ))}
                      </div>
                      <p className="opacity-50 ">{testimonial.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer section */}
      <Footer />
    </div>
  );
}
