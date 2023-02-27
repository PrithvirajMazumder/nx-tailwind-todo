import { Route, Routes as RouteList } from 'react-router-dom';
import { Completed } from '@/pages/Completed';
import { TodoDetails } from '@/pages/TodoDetails';
import { Upcoming } from '@/pages/Upcoming';
import { Today } from '@/pages/Today';

export const Routes = () => (
  <RouteList>
    <Route path="/" element={<Today />}></Route>
    <Route path="/upcoming" element={<Upcoming />}></Route>
    <Route path="/completed" element={<Completed />}></Route>
    <Route
      path="/todo/:todoId"
      action={({ params }) => params}
      element={<TodoDetails />}
    />
  </RouteList>
);
