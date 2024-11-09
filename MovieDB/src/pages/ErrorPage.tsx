import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div className="bg-slate-900 flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-white">404</h1>
        <p className="text-2xl text-white mt-4">Oops! Page not found.</p>
        <p className="text-white mt-2">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 bg-white text-slate-600 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors">Go Home</Link>
      </div>
    </div>

  )
}

export default ErrorPage