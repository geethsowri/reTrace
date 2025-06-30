import ModalLayout from "../ModalLayout";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { useDeleteEntryMutation } from "../../redux/api/entriesApiSlice";
import toast from "react-hot-toast";

const DeleteEntry = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [deleteEntry, { isLoading }] = useDeleteEntryMutation();

  const handleDelete = async () => {
    try {
      const response = await deleteEntry(id).unwrap();
      toast.success(response?.message || "Entry deleted successfully");
      setOpen(false);
    } catch (error) {
      toast.error(error?.data?.message || "Failed to delete the entry");
    }
  };

  return (
    <>
      <p
        onClick={() => setOpen(true)}
        className="text-red-500 hover:text-red-400 cursor-pointer"
      >
        <Trash2 size={18} />
      </p>

      <ModalLayout isOpen={open} close={() => setOpen(false)}>
        <div className="bg-[#1a1a1a] text-gray-200 rounded-2xl p-6 max-w-sm mx-auto shadow-lg space-y-5">
          <h2 className="text-center text-lg font-medium text-gray-300">
            Are you sure you want to delete this entry?
          </h2>

          <div className="flex justify-between gap-4 mt-4">
            <button
              onClick={() => setOpen(false)}
              className="flex-1 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition"
            >
              Cancel
            </button>

            <button
              onClick={handleDelete}
              disabled={isLoading}
              className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white transition disabled:opacity-50"
            >
              {isLoading ? "Deleting..." : "Confirm"}
            </button>
          </div>
        </div>
      </ModalLayout>
    </>
  );
};

export default DeleteEntry;
