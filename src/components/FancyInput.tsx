import { ChangeEvent } from 'react';
import useURLShortener from '@/hooks/useURLShortener';
import type { FancyInputProps } from '@/utils/types';

const FancyInput: React.FC<FancyInputProps> = ({ value, onChange, selectOnClick = true }) => {
  const { select } = useURLShortener();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <div className="flex-grow w-full md:w-auto bg-white paper-effect">
      <input defaultValue={value} id="full-url" onClick={(e) => (selectOnClick ? select(e) : null)} onChange={handleInputChange} type="text" className="outline-none py-3 px-3 w-full h-full text-lg" placeholder="Paste URL here..." autoFocus />
    </div>
  );
};

export default FancyInput;
