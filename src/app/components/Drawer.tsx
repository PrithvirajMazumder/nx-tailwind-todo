import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  IoCheckmarkDoneCircleOutline,
  MdCalendarToday,
  MdChevronLeft,
  MdChevronRight,
  MdOutlineUpcoming,
} from 'react-icons/all';

const Drawer = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  return (
    <div className="drawer drawer-mobile">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-100 flex flex-col px-4">
        {children}
      </div>
      <div className="drawer-side bg-base-200">
        <label htmlFor="main-drawer" className="drawer-overlay"></label>
        <aside>
          <div
            className={`z-20 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-2 py-4 hidden lg:flex ${
              !isCollapsed && 'justify-center'
            }`}
          >
            {isCollapsed && (
              <a
                href="/"
                aria-current="page"
                aria-label="Homepage"
                className="flex-0 btn btn-ghost px-2"
              >
                <div className="text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
                  <span>WW-</span>
                  <span className="text-base-content lowercase">todos</span>
                </div>
              </a>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={`btn btn-ghost btn-square btn-ghost ${
                isCollapsed && 'ml-auto'
              }`}
            >
              <span className="text-2xl">
                {isCollapsed ? <MdChevronLeft /> : <MdChevronRight />}
              </span>
            </button>
          </div>
          <ul className={`menu px-2 ${isCollapsed && 'w-80'}`}>
            <li>
              <Link
                to="/"
                className={`${location.pathname === '/' ? 'active' : ''}`}
              >
                <span className="text-2xl">
                  <MdCalendarToday />
                </span>{' '}
                {isCollapsed && 'Today'}
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/upcoming"
                className={`${
                  location.pathname === '/upcoming' ? 'active' : ''
                }`}
              >
                <span className="text-2xl">
                  <MdOutlineUpcoming />
                </span>{' '}
                {isCollapsed && 'Upcoming'}
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/completed"
                className={`${
                  location.pathname.startsWith('/completed') ? 'active' : ''
                }`}
              >
                <span className="text-2xl">
                  <IoCheckmarkDoneCircleOutline />
                </span>{' '}
                {isCollapsed && 'Completed'}
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Drawer;
