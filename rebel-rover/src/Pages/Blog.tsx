import blogintro from "../assets/blogIntro.png";
import traveller from "../assets/traveller.png";
import couples from "../assets/couples.png";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Blog = () => {
  return (
    <div className="w-full">
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-auto object-cover mx-auto"
          src={blogintro}
          alt="Contact"
        />
        <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold">
            Travel Stories for now and the future
          </h1>
          <p className="text-sm mt-2">Home &gt; Contact</p>
        </div>
      </div>
      <div className="[height:138px]"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white">
        <div className="md:col-span-2 space-y-6">
          <img
            src={traveller}
            alt="Traveler"
            className="rounded-2xl w-full h-auto"
          />
          <p className="text-gray-600 leading-[1.625]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Rice Terraces, Tegallalang
            </h2>
            <p className="text-gray-600 leading-[1.625]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
          <img
            src={couples}
            alt="Couple Travelers"
            className="rounded-2xl w-full h-auto"
          />
          <div>
            <p className="text-gray-600 leading-[1.625]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="max-w-2xl mx-auto p-6">
            {/* Tag and Social Sharing Section */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm">
                <span>Tags:</span>
                <span className="font-bold ml-2">Destination, Travel</span>
              </div>
              <div className="flex space-x-3">
                <p>Share this: </p>
                <a href="#" className="text-gray-700">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-700">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-700">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Leave a Reply Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Leave a Reply</h2>
              <p className="text-sm mb-6">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form>
                {/* Comment Field */}
                <div className="mb-4">
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium mb-2"
                  >
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    className="w-full p-2 border border-gray-300 rounded"
                    rows={4}
                  ></textarea>
                </div>

                {/* Name Field */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                {/* Website Field */}
                <div className="mb-4">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium mb-2"
                  >
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Checkbox */}
                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm">
                      Save my name, email, and website for the next time I
                      comment.
                    </span>
                  </label>
                </div>

                {/* Post Comment Button */}
                <button type="submit" className="button">
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Posts */}
          <div className="bg-white shadow-md rounded-xl p-4 space-y-4">
            <h3 className="text-lg font-semibold">Recent Post</h3>
            <div className="space-y-2">
              {[
                {
                  title: "Travel Stories for Now and the Future",
                  date: "14 Dec 2022",
                  img: post1,
                },
                {
                  title: "9 Popular Travel Destination on Sale in 2022",
                  date: "14 Dec 2022",
                  img: post2,
                },
                {
                  title: "How Are We Going to Travel in 2022?",
                  date: "14 Dec 2022",
                  img: post3,
                },
              ].map((post, index) => (
                <div key={index} className="flex space-x-2 items-center">
                  <img
                    src={post.img}
                    alt="thumb"
                    className="rounded-md w-16 h-16 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      {post.title}
                    </p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-4">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="text-sm text-gray-700 divide-y divide-gray-200">
              {["Travel", "Tips", "Stories", "Destination"].map(
                (item, index) => (
                  <li key={index} className="py-1">
                    → {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Box */}
          <div className="bg-black text-white shadow-md rounded-xl p-4 space-y-2">
            <h3 className="font-semibold text-white">Have Any Question?</h3>
            <p className="text-sm text-white">
              Do not hesitate to give us a call. We are an expert team and we
              are happy to talk to you.
            </p>
            <div className="space-y-2 text-sm">
              {/* Phone */}
              <div
                className="flex items-center space-x-2 text-blue-600 cursor-pointer hover:underline"
                onClick={() => {
                  navigator.clipboard.writeText("+62 6943 6966");
                  window.location.href = "tel:+6269436966";
                }}
                title="Click to call and copy"
              >
                <FontAwesomeIcon icon={faPhone} />
                <span>+62 6943 6966</span>
              </div>

              {/* Email */}
              <div
                className="flex items-center space-x-2 text-blue-600 cursor-pointer hover:underline"
                onClick={() => {
                  navigator.clipboard.writeText("contact@domain.com");
                  window.location.href = "mailto:contact@domain.com";
                }}
                title="Click to email and copy"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>contact@domain.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
