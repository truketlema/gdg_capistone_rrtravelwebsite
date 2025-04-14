import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import travelimage from "../assets/travel-image.jpg";
import image from "../assets/package-image.png";
import Header from "../Components/Header";

interface User {
  email: string;
  password: string;
  profilePicture: string;
}

interface Booking {
  userEmail: string;
  destinationName: string;
  country: string;
  price: number;
  image: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  dateRange?: string;
}

export const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [editing, setEditing] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newProfilePicture, setNewProfilePicture] = useState<File | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (!storedUser) {
      navigate("/Login");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
    setNewEmail(parsedUser.email);
    setNewPassword(parsedUser.password);

    const allBookings: Booking[] = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    const userBookings = allBookings.filter(
      (b) => b.userEmail === parsedUser.email
    );
    setBookings(userBookings);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/Login");
  };

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) setNewProfilePicture(file);
  };

  const handleSaveChanges = () => {
    if (!user) return;

    const updatedUser: User = {
      ...user,
      email: newEmail,
      password: newPassword,
      profilePicture: newProfilePicture
        ? URL.createObjectURL(newProfilePicture)
        : user.profilePicture,
    };

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((u) =>
      u.email === user.email ? updatedUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditing(false);
  };

  const handleDeletePending = (bookingToDelete: Booking) => {
    const updatedBookings = bookings.map((b) =>
      b === bookingToDelete ? { ...b, status: "Cancelled" as "Cancelled" } : b
    );
    setBookings(updatedBookings);

    const allBookings: Booking[] = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    const updatedAllBookings = allBookings.map((b) =>
      b === bookingToDelete ? { ...b, status: "Cancelled" as "Cancelled" } : b
    );
    localStorage.setItem("bookings", JSON.stringify(updatedAllBookings));
  };

  const renderBookingCard = (
    booking: Booking,
    index: number,
    allowDelete = false
  ) => (
    <div
      key={index}
      className="bg-white shadow-md border rounded-lg overflow-hidden relative"
    >
      <img
        src={image || booking.image}
        alt={booking.destinationName}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{booking.destinationName}</h3>
        <p className="text-sm text-gray-500">{booking.country}</p>
        <p className="text-sm mt-1">
          <strong>Price:</strong> ${booking.price}
        </p>
        {booking.dateRange && (
          <p className="text-sm mt-1 text-gray-600">{booking.dateRange}</p>
        )}
        <p className="mt-2 text-xs font-medium px-2 py-1 inline-block rounded bg-gray-100 text-gray-600">
          {booking.status}
        </p>
        {allowDelete && (
          <button
            onClick={() => handleDeletePending(booking)}
            className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
          >
            Delete
          </button>
        )}
        {booking.status === "Pending" && (
          <Link
            to="/payment_form"
            state={{
              price: booking.price,
              bookingType: booking.destinationName,
              booking: booking,
            }}
            className="mt-2  ml-36 inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
          >
            Pay Now
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <div className="bg-blue-900 w-full h-20 mx-auto"></div>

      <div className="bg-gray-100 min-h-screen  px-4 md:px-10">
        {user && (
          <div className=" mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="relative">
                <div
                  className="h-32 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${travelimage})`,
                  }}
                />

                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <img
                    src={user.profilePicture || "/default-avatar.png"}
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-4 border-white object-cover"
                  />
                </div>
              </div>

              <div className="pt-16 px-6 pb-4 text-center">
                <h2 className="text-xl font-bold">
                  {user.email.split("@")[0]}
                </h2>
                <p className="text-sm text-gray-500">
                  "The world is a book, and those who do not travel read only
                  one page." — Saint Augustine
                </p>
                <div className="mt-3 flex gap-4 justify-center text-center">
                  <div>
                    <p className="text-lg font-semibold">{bookings.length}</p>
                    <p className="text-sm text-gray-500">Trips Booked</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      {new Set(bookings.map((b) => b.destinationName)).size}
                    </p>
                    <p className="text-sm text-gray-500">Destinations</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      {bookings.filter((b) => b.status === "Completed").length *
                        100}
                    </p>
                    <p className="text-sm text-gray-500">Reward Points</p>
                  </div>
                </div>

                <div className="mt-4  flex gap-2 justify-center flex-wrap">
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white text-[14px] px-4 py-3 rounded"
                  >
                    Logout
                  </button>
                  {!editing ? (
                    <button
                      onClick={() => setEditing(true)}
                      className="bg-green-500 text-white text-[14px] px-4 py-3 rounded"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <>
                      <input
                        type="email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="New Email"
                        className="border rounded px-2 py-1"
                      />
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New Password"
                        className="border rounded px-2 py-1"
                      />
                      <input
                        type="file"
                        onChange={handleProfilePictureChange}
                        className="border rounded px-2 py-1"
                      />
                      <button
                        onClick={handleSaveChanges}
                        className="bg-green-500 text-white text-[14px] px-4 py-3 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditing(false)}
                        className="bg-gray-500 text-white text-[14px] px-4 py-3 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Your Trips</h3>
              {["Confirmed", "Pending", "Completed", "Cancelled"].map(
                (status) => (
                  <div className="mb-6" key={status}>
                    <h4
                      className={`text-md font-semibold mb-2 ${
                        status === "Confirmed"
                          ? "text-blue-600"
                          : status === "Pending"
                          ? "text-yellow-600"
                          : status === "Cancelled"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {status}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {bookings.filter((b) => b.status === status).length ===
                      0 ? (
                        <p>No bookings found.</p>
                      ) : (
                        bookings
                          .filter((b) => b.status === status)
                          .map((b, i) =>
                            renderBookingCard(b, i, status === "Pending")
                          )
                      )}
                    </div>
                  </div>
                )
              )}
            </div>

            <Link
              to="/"
              className="text-blue-500 underline block mt-8 text-center"
            >
              ⬅ Back to Home
            </Link>
          </div>
        )}
      </div>
      <div className="bg-blue-900 w-full h-20 mx-auto"></div>
    </div>
  );
};
