import { useState } from 'react';
import { toast } from 'react-toastify';
import type { URLEntry } from '@/utils/types';
import { FancyButton, FancyInput, ShortenedURLBox } from '@/components';
import useURLShortener from '@/hooks/useURLShortener';

export default function Entry() {
  const { isValidUrl, generateURL, save } = useURLShortener();
  const [originalURL, setOriginalURL] = useState<string>('');
  const [entry, setEntry] = useState<URLEntry>();

  const handleSave = (): void => {
    if (!isValidUrl(originalURL)) {
      toast.warning('Enter a valid URL');
      return;
    }
    const entry: URLEntry = save(originalURL);
    setEntry(() => entry);
  };

  return (
    <>
      <div className="font-bold text-2xl text-center tracking-wider mt-20 uppercase">
        Little <span className="text-green">URL.</span> Big <span className="text-green">Control</span>
      </div>
      <div className="py-5"></div>
      <div className="flex w-full items-center flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-3">
        <FancyInput onChange={(value: string) => setOriginalURL(() => value)} />
        <FancyButton onClick={handleSave}>Short URL</FancyButton>
      </div>
      {entry && (
        <div className="block text-center">
          <ShortenedURLBox title="Shortened URL" url={entry.short_url} />
        </div>
      )}
    </>
  );
}
