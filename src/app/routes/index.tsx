import { Route, Routes as RouteList } from 'react-router-dom';
import { Completed } from '@/pages/Completed';
import { Details } from '@/pages/Details';
import { Upcoming } from '@/pages/Upcoming';

export const Routes = () => (
  <RouteList>
    <Route path="/" element={<Upcoming />}></Route>
    <Route path="/upcoming" element={<Completed />}></Route>
    <Route
      path="/todo/:todoId"
      action={({ params }) => params}
      element={<Details />}
    />
  </RouteList>
);
