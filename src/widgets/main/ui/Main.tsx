import { Outlet } from "react-router-dom";

import Sidebar from "widgets/sidebar/ui/Sidebar";

const MainContainer = (): JSX.Element => {
  return (
    <div className="grid grid-cols-10 h-full">
      <Sidebar />
      <main className="col-span-7 bg-mid-grey">
        <Outlet />
      </main>
    </div>
  );
};

export default MainContainer;
