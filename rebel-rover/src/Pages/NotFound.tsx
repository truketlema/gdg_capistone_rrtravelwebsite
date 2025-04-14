export const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold text-purple-500 relative">
          4
          <span className="relative inline-block">
            0
            <span className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-purple-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  className="text-black"
                  fill="black"
                />
              </svg>
            </span>
          </span>
          4
        </h1>
        <p className="text-2xl mt-4">Oops, you've lost in space.</p>
        <p className="text-lg mt-2">
          We can't find the page that you're looking for...
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 bg-purple-500 text-white rounded-lg"
        >
          GO HOME
        </a>
      </div>
    </div>
  );
};
