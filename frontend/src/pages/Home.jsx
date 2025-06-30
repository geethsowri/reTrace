import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="bg-[#0f0f0f] text-gray-200 min-h-screen font-sans">
      <div className="flex justify-center items-center min-h-[calc(100svh-64px)] relative px-4">
        <div className="text-center max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {user ? `Welcome back, ${user.data.firstName}` : "Welcome to reTrace"}
          </h1>
          <p className="text-gray-400 text-lg">
            {user
              ? "Your entries are private, encrypted, and always ready."
              : "Log in to keep your journal secure and within reach."}
          </p>
          <Link
            to="/entries"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-2xl transition duration-200"
          >
            {user ? "Go to Your Entries" : "Get Started"}
          </Link>
        </div>
        <div className="absolute bottom-6 animate-bounce text-sm text-gray-500">
          ↓ Scroll to Explore
        </div>
      </div>

      <div className="py-20 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Working & Key Features</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Getting Started */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-gray-300">Getting Started is Simple</h3>
            {[
              {
                title: "1. Sign Up",
                desc: "Create your free account. Your thoughts stay encrypted and private, always.",
              },
              {
                title: "2. Start Writing",
                desc: "Capture emotions, thoughts, and milestones freely and revisit anytime.",
              },
              {
                title: "3. Manage Profile",
                desc: "Update your personal info and keep your profile secured."
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#1a1a1a] p-5 rounded-2xl shadow-inner border border-gray-800">
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>

          {/* Right: Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-gray-300">Features Designed for You</h3>
            {[
              {
                title: "Daily Journaling",
                desc: "Build your habit with focused writing sessions and track emotional growth.",
              },
              {
                title: "Entry Management",
                desc: "Add, edit, or delete entries with ease. Total control, zero clutter.",
              },
              {
                title: "Secure & Private",
                desc: "Cloud-synced, encrypted, and yours only. Safety meets simplicity.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#1a1a1a] p-5 rounded-2xl shadow-inner border border-gray-800">
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
