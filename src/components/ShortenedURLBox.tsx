import useURLShortener from '@/hooks/useURLShortener';
import type { ShortenedURLBoxProps } from '@/utils/types';

const ShortenedURLBox: React.FC<ShortenedURLBoxProps> = ({ title, url }) => {
  const { select } = useURLShortener();
  return (
    <div className="inline-block items-center mt-10 shadow">
      <div className="block text-center py-2 bg-green text-white uppercase font-bold">
        <span className="drop-shadow">{title}</span>
      </div>
      <div className="bg-white inline-block py-2 px-2">
        <input id="short-url" onClick={(e) => select(e)} readOnly type="text" value={url} className="flex text-center text-base sm:text-lg outline-none flex-grow text-green-700 bg-green/10 rounded px-1 md:px-2 py-1" />
      </div>
    </div>
  );
};

export default ShortenedURLBox;
