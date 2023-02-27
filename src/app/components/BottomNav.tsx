import { Link, useLocation } from 'react-router-dom';
import {
  IoCheckmarkDoneCircleOutline,
  MdCalendarToday,
  MdOutlineUpcoming,
} from 'react-icons/all';

export const BottomNav = () => {
  const location = useLocation();
  return (
    <div className="btm-nav bg-opacity-90 backdrop-blur z-40 lg:hidden">
      <Link
        to="/"
        className={`text-2xl ${
          location.pathname === '/' && 'active text-primary'
        }`}
      >
        <MdCalendarToday />
      </Link>
      <Link
        to="/upcoming"
        className={`text-2xl ${
          location.pathname.endsWith('/upcoming') && 'active text-primary'
        }`}
      >
        <MdOutlineUpcoming />
      </Link>
      <Link
        to="/completed"
        className={`text-2xl ${
          location.pathname.endsWith('/completed') && 'active text-primary'
        }`}
      >
        <IoCheckmarkDoneCircleOutline />
      </Link>
    </div>
  );
};
