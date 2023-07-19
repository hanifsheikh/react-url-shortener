import { useState } from 'react';
import FancyTable from '../components/FancyTable';
import { URLEntry } from '@/utils/types';

type Props = {
  entries: Array<URLEntry>;
};
const List: React.FC<Props> = ({ entries }) => {
  const [_, setDeleteID] = useState<number | undefined>();

  return (
    <>
      <div className="font-bold text-xl text-center uppercase mt-5">Shortened url list</div>
      <FancyTable rows={entries} setDeleteID={setDeleteID} />
    </>
  );
};

export default List;
