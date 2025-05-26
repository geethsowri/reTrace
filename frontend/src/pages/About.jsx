const About = () => {
  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-10 my-10">
      <div className="w-full max-w-3xl bg-base-200 shadow-xl hover:shadow-2xl rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-7">
          About DailyGrind
        </h1>
        <p className="text-lg text-center mb-4">
          DailyGrind is a robust, dependable digital journal crafted to secure
          your thoughts and experiences. Built for clarity and performance, it
          empowers you to record your life with assurance. Prioritizing privacy
          and a clean interface, DailyGrind guarantees your journaling remains
          private, protected, and purposeful.
        </p>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">Capabilities</h2>
        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>✅</span>
            <span>
              <strong>Create & Manage Entries:</strong> Seamlessly add, modify,
              and remove DailyGrind entries while ensuring their security.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>📅</span>
            <span>
              <strong>Document Your Journey:</strong> Log experiences from any
              date to maintain a comprehensive record of your progress.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🎨</span>
            <span>
              <strong>Customize Your Profile:</strong> Establish your identity
              with full control, maintaining strict account protection.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🔒</span>
            <span>
              <strong>Enhanced Security:</strong> Safeguard your DailyGrind data
              with encrypted authentication, robust passwords, and secure
              cookies.
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold text-center mb-4">
          Technology Stack
        </h2>
        <p className="text-lg text-center mb-4">
          Engineered with cutting-edge technologies to deliver a{" "}
          <strong>secure</strong> and
          <strong> high-performance</strong> journaling platform:
        </p>
        <ul className="space-y-3 text-lg px-4 sm:px-6">
          <li className="flex items-start gap-2">
            <span>⚛️</span>
            <span>
              <strong>Frontend:</strong> React.js paired with DaisyUI &
              TailwindCSS
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
              <strong>Authentication:</strong> JWT secured with HTTP-only
              cookies
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>📡</span>
            <span>
              <strong>State Management:</strong> Redux Toolkit (RTK) & RTK Query
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>🗄️</span>
            <span>
              <strong>Database:</strong> MongoDB with rigorous server-side
              validation
            </span>
          </li>
        </ul>

        <div className="divider"></div>

        <p className="text-lg text-center">
          Begin your journaling discipline with <strong>DailyGrind</strong> —
          where your experiences remain <strong>confidential</strong>,{" "}
          <strong>controlled</strong>, and instantly available.
        </p>

        <div className="text-center mt-5">
          <a
            href="https://github.com/thenileshnishad/DailyGrind"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary">
              Review the Source Code on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
