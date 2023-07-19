export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <a className="select-none" draggable={false} href="#">
        <img className="select-none" draggable={false} src="/assets/logo.svg" alt="logo.svg" height={28} width={117} />
      </a>
      <a href="#">
        <div className="flex space-x-2">
          <img className="flex" src="/assets/list.svg" alt="list.svg" />
          <span className="flex"> My List</span>
        </div>
      </a>
    </div>
  );
}
