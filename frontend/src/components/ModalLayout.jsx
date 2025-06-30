const ModalLayout = ({ isOpen, close, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative bg-[#1a1a1a] rounded-3xl shadow-xl max-w-lg w-full mx-4 p-6 text-gray-200 transition-transform transform scale-100">
        <button
          onClick={close}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition text-2xl font-semibold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
export default ModalLayout;
