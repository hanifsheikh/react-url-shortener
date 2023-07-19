import type { URLEntry } from '@/utils/types';
import { FancyInput, FancyButton, ShortenedURLBox } from '@/components';
import { useState } from 'react';

export default function Edit() {
  const entry: URLEntry = {
    id: 1,
    short_url: 'https://short.ly/8zJDistA',
    original_url: 'https://github.com/foyzulkarim/mock-interviews-2023/blob/main/01-junior-react-dev.md',
  };
  const [originalURL, setOriginalURL] = useState('https://github.com/foyzulkarim/mock-interviews-2023/blob/main/01-junior-react-dev.md');

  const handleUpdate = () => {};
  return (
    <div>
      {entry && (
        <div className="mt-10">
          <div className="font-bold text-xl text-center uppercase mt-5">Edit URL</div>
          <div className="block text-center md:text-left">
            <ShortenedURLBox title="Shortened URL" url={entry.short_url} />
          </div>
          <div className="py-5"></div>
          <div className="flex w-full items-center flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-3">
            <FancyInput value={originalURL} onChange={(value: string) => setOriginalURL(() => value)} selectOnClick={false} />
            <FancyButton onClick={handleUpdate}>Update URL</FancyButton>
          </div>
        </div>
      )}
    </div>
  );
}
