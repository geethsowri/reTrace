const About = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 my-10">
      <div className="w-full max-w-3xl bg-base-200 shadow-xl hover:shadow-2xl rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-7">About reTrace</h1>
        <p className="text-lg text-center mb-4">
          reTrace is your personal stronghold for thoughts and memories.
          Designed with a focus on privacy and performance, it delivers a clean,
          distraction-free journaling experience. Built for those who value
          security and clarity, reTrace keeps your story locked, simple, and
          powerful.
        </p>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">What You Can Do</h2>
        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>✅</span>
            <span>
              <strong>Command Your Journal:</strong> Instantly create, edit, or
              erase entries with total control — all while keeping them secure.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>📅</span>
            <span>
              <strong>Track Your Journey:</strong> Log moments from any day,
              building a clear, lasting record of your life.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🎨</span>
            <span>
              <strong>Personalize Your Profile:</strong> Customize your identity
              while maintaining account security.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🔒</span>
            <span>
              <strong>Advanced Security Features:</strong> Protect your reTrace
              entries with encrypted authentication, strong passwords, and
              secure cookies.
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">Tech Stack</h2>
        <p className="text-lg text-center mb-4">
          Built with modern technologies to ensure a <strong>secure</strong> and
          <strong> efficient</strong> journaling experience:
        </p>
        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>⚛️</span>
            <span>
              <strong>Frontend:</strong> React.js with DaisyUI & TailwindCSS
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🖥️</span>
            <span>
              <strong>Backend:</strong> Node.js & Express.js
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🔑</span>
            <span>
              <strong>Auth:</strong> JWT with secure HTTP cookies
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>📡</span>
            <span>
              <strong>State:</strong> Redux Toolkit (RTK) & RTK Query
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🗄️</span>
            <span>
              <strong>Database:</strong> MongoDB with server-side validation
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <p className="text-lg text-center">
          Start your journaling journey with <strong>reTrace</strong> - where
          your memories are <strong>secure</strong>, <strong>personal</strong>,
          and always accessible.
        </p>

        <div className="text-center mt-5">
          <a href="https://github.com/geethsowri/reTrace" target="_blank">
            <button className="btn btn-primary">
              Explore the Code on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
