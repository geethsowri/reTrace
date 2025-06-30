import ModalLayout from "../ModalLayout";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import {
  useGetEntryQuery,
  useUpdateEntryMutation,
} from "../../redux/api/entriesApiSlice";
import toast from "react-hot-toast";

const EditEntry = ({ id }) => {
  const [open, setOpen] = useState(false);
  const { data: getEntry, isLoading: entryLoading } = useGetEntryQuery(id, {
    skip: !open,
  });
  const [updateEntry, { isLoading: entryUpdating }] = useUpdateEntryMutation();
  const isLoading = entryLoading || entryUpdating;

  const [formData, setFormData] = useState({
    title: "",
    mood: "",
    content: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (getEntry) {
      setFormData({
        title: getEntry.data?.title || "",
        mood: getEntry.data?.mood || "",
        content: getEntry.data?.content || "",
        date: new Date(getEntry.data?.date).toISOString().slice(0, 10) || "",
      });
    }
  }, [getEntry]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateEntry({ id, data: formData }).unwrap();
      setOpen(false);
      toast.success(res?.message || "Entry updated.");
    } catch (err) {
      toast.error(err?.data?.message || "Update failed.");
    }
  };

  return (
    <>
      <p
        onClick={() => setOpen(true)}
        className="text-green-400 hover:text-green-300 cursor-pointer"
      >
        <Pencil size={18} />
      </p>

      <ModalLayout isOpen={open} close={() => setOpen(false)}>
        <div className="bg-[#1a1a1a] text-gray-200 rounded-2xl p-6 space-y-5 max-w-lg mx-auto shadow-xl">
          <h2 className="text-center text-xl font-semibold">Edit Your Entry</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm" htmlFor={`title.${id}`}>
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                id={`title.${id}`}
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Give your entry a title"
                className="w-full mt-1 px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-sm" htmlFor={`date.${id}`}>
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  id={`date.${id}`}
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg"
                />
              </div>

              <div className="flex-1">
                <label className="text-sm" htmlFor={`mood.${id}`}>
                  Mood <span className="text-red-500">*</span>
                </label>
                <select
                  name="mood"
                  id={`mood.${id}`}
                  value={formData.mood}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg"
                >
                  <option value="🙂">🙂 Happy</option>
                  <option value="😔">😔 Sad</option>
                  <option value="😡">😡 Angry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm" htmlFor={`content.${id}`}>
                Content <span className="text-red-500">*</span>
              </label>
              <textarea
                name="content"
                id={`content.${id}`}
                value={formData.content}
                onChange={handleChange}
                required
                placeholder="Write your thoughts..."
                className="w-full mt-1 px-3 py-2 h-40 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      </ModalLayout>
    </>
  );
};

export default EditEntry;
