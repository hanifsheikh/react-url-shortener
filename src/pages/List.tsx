import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useURLShortener from '@/hooks/useURLShortener';
import { Modal, FancyTable } from '@/components';

export default function List() {
  const { entries, destroy } = useURLShortener();
  const [open, setOpen] = useState<boolean>(false);
  const [deleteID, setDeleteID] = useState<number | undefined>();

  const handleDelete = () => {
    if (deleteID) {
      const deleted = destroy(deleteID);
      if (deleted) {
        toast.success('URL Deleted!');
      } else {
        toast.error('Something went wrong!');
      }
    }
  };

  useEffect(() => {
    if (deleteID) {
      setOpen(true);
    }
  }, [deleteID]);

  useEffect(() => {
    if (!open) {
      setDeleteID(undefined);
    }
  }, [open]);

  return (
    <>
      <div className="font-bold text-xl text-center uppercase mt-5">Shortened url list</div>
      <FancyTable rows={entries} setDeleteID={setDeleteID} />
      <Modal open={open} setOpen={setOpen} destroy={handleDelete} />
    </>
  );
}
