const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 text-sm py-6 px-4 mt-auto w-full">
      <p className="text-center flex flex-wrap justify-center items-center gap-1">
        <span className="font-semibold text-gray-200">reTrace</span> — designed & built by{" "}
        <a
          href="https://geethsowri-dev.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-white transition"
        >
          Geeth Sowri ↗
        </a>
      </p>
    </footer>
  );
};

export default Footer;
