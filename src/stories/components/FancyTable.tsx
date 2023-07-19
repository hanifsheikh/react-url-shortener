import type { FancyTableProps, URLEntry } from '@/utils/types';

const FancyTable: React.FC<FancyTableProps> = ({ rows, setDeleteID }) => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-xl rounded-t bg-white paper-effect my-10">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase border-b border-grey/20">
            <tr>
              <th scope="col" className="px-2 md:px-4 lg:px-6 py-3">
                Short URL
              </th>
              <th scope="col" className="px-2 md:px-4 lg:px-6 py-3">
                Full URL
              </th>
              <th scope="col" className="px-2 md:px-4 lg:px-6 py-3 text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((entry: URLEntry) => (
              <tr key={entry.id} className="bg-white hover:bg-grey/5 border-b border-grey/20 transition">
                <td className="px-2 md:px-4 lg:px-6 py-2 font-medium break-all w-[250px] text-xs lg:text-sm">
                  <a className="text-green-700" target="_blank" href={entry.original_url}>
                    {entry.short_url}
                  </a>
                </td>
                <td className="px-2 md:px-4 lg:px-6 py-2 w-[320px] sm:w-[450px] md:w-[550px] break-all text-xs lg:text-sm"> {entry.original_url} </td>
                <td className="px-2 md:px-4 lg:px-6 py-2 text-center">
                  <div className="flex justify-end items-center space-x-4">
                    <span className="flex">
                      <img className="flex h-3.5 lg:h-4" src="/assets/edit.svg" alt="edit" />
                    </span>
                    <button className="flex">
                      <img className="flex h-3.5 lg:h-4" src="/assets/trash.svg" alt="trash" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FancyTable;
