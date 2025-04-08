import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import contact from '../assets/contacts.png';

const Contact = () => {
  return (
    <div className="w-full">
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-auto object-cover mx-auto"
          src={contact}
          alt="Contact"
        />
        <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="text-sm mt-2">Home &gt; Contact</p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="flex flex-col md:flex-row justify-between w-full mx-auto p-5 bg-[#ffffff]">
        {/* Form */}
        <div className="flex-1 max-w-[500px] p-6 pr-12 bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full py-2 px-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full py-2 px-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full py-2 px-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              required
              className="w-full p-2 border border-gray-300 rounded h-32"
            ></textarea>
            <button
              type="button"
              className="button"
              onClick={() => window.location.href = 'mailto:contact@domain.com?subject=New Message&body=Message Content'}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="flex-1 p-5 md:pl-20 mt-8 md:mt-0">
          <h2 className="mb-4 text-3xl font-semibold">Get In Touch</h2>
          <p className="mb-4 text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 p-6 rounded-lg">
          <div className="space-y-2 text-gray-800 text-sm">
            <p><strong>Lhokseumawe, Aceh</strong></p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" /> +62 6243 6965
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" /> contact@domain.com
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faMapPin} className="w-4 h-4" /> Jl. Darussalam Hagu Selatan
            </p>
            </div>
            <div className="space-y-2 text-gray-800 text-sm">
            <p><strong>Lhokseumawe, Aceh</strong></p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" /> +62 6243 6965
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" /> contact@domain.com
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faMapPin} className="w-4 h-4" /> Jl. Darussalam Hagu Selatan
            </p>
            </div>
            <div className="space-y-2 text-gray-800 text-sm">
            <p><strong>Lhokseumawe, Aceh</strong></p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" /> +62 6243 6965
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" /> contact@domain.com
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faMapPin} className="w-4 h-4" /> Jl. Darussalam Hagu Selatan
            </p>
            </div>
            <div className="space-y-2 text-gray-800 text-sm">
            <p><strong>Lhokseumawe, Aceh</strong></p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" /> +62 6243 6965
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" /> contact@domain.com
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FontAwesomeIcon icon={faMapPin} className="w-4 h-4" /> Jl. Darussalam Hagu Selatan
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
}
