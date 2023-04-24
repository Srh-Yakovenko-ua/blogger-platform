const Sidebar = (): JSX.Element => {
  return (
    <div className="bg-light-grey pl-64 col-span-3">
      <nav>
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
