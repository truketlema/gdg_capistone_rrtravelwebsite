import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export const PaymentForm = () => {
  const location = useLocation();
  const { price, bookingType } = location.state || {};

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("credit-card");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [paypalEmail, setPaypalEmail] = useState<string>("");
  const [bankAccount, setBankAccount] = useState<string>("");
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);

  const paymentMethods: PaymentMethod[] = [
    { id: "credit-card", name: "Credit Card", icon: "💳" },
    { id: "paypal", name: "PayPal", icon: "💰" },
    { id: "bank-transfer", name: "Bank Transfer", icon: "🏦" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreeToTerms) {
      alert("You must agree to the payment terms.");
      return;
    }

    alert("Payment method details submitted successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Payment Form
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Booking Details */}

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Booking Type: {bookingType}
            </label>
            <label className="block text-sm font-semibold mb-2">
              Total Amount: ${price}
            </label>
          </div>

          {/* Payment Method Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Select Payment Method
            </label>
            <div className="space-x-4 flex">
              {paymentMethods.map((method) => (
                <button
                  type="button"
                  key={method.id}
                  className={`w-1/3 py-2 text-[14px] rounded-md text-center border ${
                    selectedPaymentMethod === method.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                >
                  <div className="text-xl">{method.icon}</div>
                  <div>{method.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Conditional Form Fields */}
          {selectedPaymentMethod === "credit-card" && (
            <div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Enter your card number"
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>

              <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-2">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    placeholder="MM/YY"
                    className="w-full border px-4 py-2 rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-semibold mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="Enter CVV"
                    className="w-full border px-4 py-2 rounded-md"
                  />
                </div>
              </div>
            </div>
          )}

          {selectedPaymentMethod === "paypal" && (
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                PayPal Email
              </label>
              <input
                type="email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                placeholder="Enter your PayPal email"
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>
          )}

          {selectedPaymentMethod === "bank-transfer" && (
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Bank Account Number
              </label>
              <input
                type="text"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                placeholder="Enter your bank account number"
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>
          )}

          {/* Terms and Conditions */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
              className="mr-2"
            />
            <label className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-blue-500 underline">
                terms and conditions
              </a>
            </label>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-4 px-6 rounded-md w-full sm:w-auto text-[14px]"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>

      <Link
        to={{ pathname: "/profile" }}
        className="text-blue-500 underline block mt-8 text-center"
      >
        ⬅ Back to Profile
      </Link>
    </div>
  );
};
