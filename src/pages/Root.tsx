import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/components/Header';
export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer position="top-center" closeButton={false} autoClose={3000} hideProgressBar={true} newestOnTop={false} closeOnClick draggable={false} pauseOnHover={false} theme="light" />
    </>
  );
}
