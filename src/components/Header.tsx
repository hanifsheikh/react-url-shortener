import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <Link className="select-none" draggable={false} to="/">
        <img className="select-none" draggable={false} src="/assets/logo.svg" alt="logo.svg" height={28} width={117} />
      </Link>
      <Link to="/list">
        <div className="flex space-x-2">
          <img className="flex" src="/assets/list.svg" alt="list.svg" />
          <span className="flex"> My List</span>
        </div>
      </Link>
    </div>
  );
}
