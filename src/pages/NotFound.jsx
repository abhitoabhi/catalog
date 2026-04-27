import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound-shell">
      <div className="notfound-card">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="back-btn">
          Go home
        </Link>
      </div>
    </div>
  );
}
