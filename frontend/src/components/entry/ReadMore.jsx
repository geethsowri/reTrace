import { useState } from "react";
import ModalLayout from "../ModalLayout";

const ReadMore = ({
  formattedDate,
  title,
  mood,
  content,
  formattedUpdateAt,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="text-sm px-3 py-1 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition"
        onClick={() => setOpen(true)}
      >
        Read More
      </button>

      <ModalLayout isOpen={open} close={() => setOpen(false)}>
        <div className="bg-[#1a1a1a] text-gray-200 rounded-2xl p-6 space-y-4 max-w-xl mx-auto shadow-lg">
          <div className="text-center text-xl font-semibold tracking-tight">
            <span className="text-blue-400">{mood}</span> – {title}
          </div>

          <div className="text-sm text-gray-500">Date: {formattedDate}</div>

          <div className="text-base text-gray-300 leading-relaxed whitespace-pre-wrap">
            {content}
          </div>

          <div className="text-right text-xs text-gray-500 mt-4">
            Last edit: {formattedUpdateAt}
          </div>
        </div>
      </ModalLayout>
    </>
  );
};

export default ReadMore;
