import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import type { URLEntry } from '@/utils/types';
import useURLShortener from '@/hooks/useURLShortener';
import { FancyInput, FancyButton, ShortenedURLBox } from '@/components';
import NotFound from './NotFound';

export default function Edit() {
  const { edit, isValidUrl, update } = useURLShortener();
  const { id } = useParams();
  const [entry, setEntry] = useState<URLEntry>();
  const [originalURL, setOriginalURL] = useState<string>('');

  const handleUpdate = () => {
    if (!isValidUrl(originalURL)) {
      toast.warning('Enter a valid URL');
      return;
    }
    const updated: boolean = update(Number(id), originalURL);
    if (updated) {
      toast.success('URL Updated!');
    } else {
      toast.error('Something went wrong!');
    }
  };

  useEffect(() => {
    const entry = edit(Number(id));
    if (entry) {
      setEntry(() => entry);
      setOriginalURL(() => entry.original_url);
    }
  }, [id]);

  return (
    <div>
      {entry ? (
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
      ) : (
        <NotFound />
      )}
    </div>
  );
}
