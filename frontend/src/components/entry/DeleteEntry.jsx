import ModalLayout from "../ModalLayout";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import { useDeleteEntryMutation } from "../../redux/api/entriesApiSlice";
import { toast } from "react-toastify";

const DeleteEntry = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [deleteEntry, { isLoading }] = useDeleteEntryMutation();

  const handleDelete = async () => {
    try {
      const response = await deleteEntry(id).unwrap();
      toast.success(response.message);
    } catch (error) {
      toast.error("Failed to delete the entry!");
    }
  };

  return (
    <div>
      <p
        onClick={() => setOpen(true)}
        className="text-error hover:cursor-pointer"
      >
        <Trash2 size={20} />
      </p>

      <ModalLayout isOpen={open} close={() => setOpen(false)}>
        <h1 className="text-lg">
          Are you sure you want to delete this entry?
        </h1>
        <div className="modal-action">
          <button onClick={() => setOpen(false)} className="btn btn-success">
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-error"
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Confirm"}
          </button>
        </div>
      </ModalLayout>
    </div>
  );
};
export default DeleteEntry;