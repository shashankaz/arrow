import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 bg-black">
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-300 text-lg mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <p className="px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 hover:bg-purple-700 transition duration-200 rounded-xl border-t-2 border-purple-500">
          Go Back Home
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
