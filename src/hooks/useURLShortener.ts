import { useState } from 'react';
import type { URLEntry } from '@/utils/types';
import { HOST, STORAGE_TITLE, URL_LENGTH } from '@/utils/constants';

const useURLShortener = () => {
  const [entries, setEntries] = useState<Array<URLEntry> | []>(list());

  // List All Data From Browser Local Storage
  function list(): Array<URLEntry> | [] {
    const storage_data: string | null = localStorage.getItem(STORAGE_TITLE); // STORAGE_TITLE = shortened_urls_storage_by_md_hanif_sheikh_01725467151
    if (storage_data) {
      const entries: Array<URLEntry> = JSON.parse(storage_data); // Parse Raw String Data to JSON
      return entries;
    }
    return [];
  }

  const updateStorage = (entries: Array<URLEntry> | []): void => {
    setEntries(entries);
    localStorage.setItem(STORAGE_TITLE, JSON.stringify(entries));
  };

  // * Check if the short URL already exists.
  const isExist = (short_url: string): boolean => {
    return entries.find((e) => e.short_url === short_url) ? true : false;
  };

  // * Generate URL
  const generateURL = (): string => {
    let random_string = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < URL_LENGTH; i++) {
      random_string += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    const short_url = HOST + random_string;

    // Generated Short URL Should Be Unique
    if (isExist(short_url)) {
      return generateURL();
    }

    return short_url;
  };

  // * Save URL
  const save = (original_url: string): URLEntry => {
    const short_url = generateURL();
    const newEntry: URLEntry = {
      id: 1,
      short_url,
      original_url,
    };
    if (entries.length) {
      const maxId = Math.max(...entries.map((entry: URLEntry) => entry.id));
      newEntry.id = maxId + 1;
    }
    updateStorage([newEntry, ...entries]);
    return newEntry;
  };

  // * Edit URL
  const edit = (id: number): URLEntry | null => {
    // Find the entry. If it exists, return it; otherwise, return null
    return entries.find((e) => e.id === id) ?? null;
  };

  // * Update URL
  const update = (id: number, original_url: string): boolean => {
    const entry = entries.find((e) => e.id === id); // Find the entry by id
    // If the entry exists, update entry original URL, save and return true; otherwise, return false.
    if (entry) {
      entry.original_url = original_url; // Update the original URL
      updateStorage(entries);
      return true;
    }
    return false;
  };

  // * Delete URL
  const destroy = (id: number): boolean => {
    const updatedEntries = entries.filter((e) => e.id !== id); // Filter the entries array, excluding it if it matches with the ID parameter."
    updateStorage(updatedEntries);
    return true;
  };

  // * Select all text inside input type text when clicked.
  const select = (e: React.MouseEvent<HTMLInputElement>) => {
    let input = e.target as HTMLInputElement;
    input.select();
  };

  // *  Check if the input URL is valid.
  const isValidUrl = (urlString: string): boolean => {
    var urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // validate fragment locator
    return !!urlPattern.test(urlString.trim());
  };

  return { entries, isValidUrl, generateURL, save, edit, update, destroy, select };
};

export default useURLShortener;
