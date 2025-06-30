const About = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 my-10">
      <div className="w-full max-w-3xl bg-[#1a1a1a] shadow-xl hover:shadow-2xl rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-7">About reTrace</h1>
        <p className="text-lg text-center mb-4">
          reTrace is your private command center for thoughts and memories. Built with performance and security at the core, it’s designed for individuals who value clarity, control, and resilience. No distractions. No compromise.
        </p>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">What You Can Do</h2>
        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>
              Create, edit, and delete entries on your terms. Everything stays locked and secure.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>
              Record key moments and build a clear timeline of personal growth.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>
              Personalize your profile while keeping your data protected.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>
              Your data is encrypted, protected by JWT, and stored with hardened server logic.
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <div className="text-center mt-5">
          <a href="https://github.com/geethsowri/reTrace" target="_blank">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-2xl transition duration-200 cursor-pointer">
              View Code on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
