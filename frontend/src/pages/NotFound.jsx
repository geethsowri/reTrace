import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="hero bg-base-200 min-h-[calc(100dvh-64px-52px)]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Page Not Found (404)</h1>
          <p className="py-6">
            The page you’re after doesn’t exist. It might’ve been moved,
            deleted, or the URL’s off. Check your link and try again.
          </p>
          <button onClick={handleClick} className="btn btn-primary">
            Go back to the homepage
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
