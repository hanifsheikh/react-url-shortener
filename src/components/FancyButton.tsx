import type { FancyButtonProps } from '@/utils/types';

const FancyButton: React.FC<FancyButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={() => onClick()} className="w-48 bg-green/75 py-3 px-5 text-white uppercase font-bold hover:bg-green transition duration-300 ease-in-out button-effect">
      <span className="drop-shadow">{children}</span>
    </button>
  );
};

export default FancyButton;
