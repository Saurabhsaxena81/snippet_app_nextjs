import Link from "next/link";
export default function NotFoundPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-500 mb-6">
            Oops! Looks like you got lost 😅<br />
            The page you’re looking for doesn’t exist.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }
  
  