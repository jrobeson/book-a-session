import { Outlet } from 'react-router-dom';
import MainHeader from '../components/Navigation/MainHeader';

export default function Root() {
  return (
    <>
      {/* Todo: Add Header */}
      <MainHeader />
      <Outlet />
    </>
  );
}
