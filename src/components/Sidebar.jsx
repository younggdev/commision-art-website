import ListSidebar from "./ListSidebar";

function Sidebar() {
  return (
    <div>
      <div className="sidebar bg-white min-h-screen w-[3.35rem] overflow-hidden transition-all duration-200 ease-linear border-r hover:w-44 hover:bg-white hover:shadow-lg fixed z-50">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
          <div>
            <div className="w-max p-2.5">
              <div className="w-32"></div>
            </div>
            <ul className="mt-6 space-y-2 tracking-wide">
              <ListSidebar label={"Home"} icon={"home"} />
              <ListSidebar
                pathName={"terms"}
                label={"Terms"}
                icon={"file-list-3"}
              />
              <ListSidebar
                pathName={"prices"}
                label={"Prices"}
                icon={"money-dollar-box"}
              />
              <ListSidebar
                pathName={"samples"}
                label={"Samples"}
                icon={"image"}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
