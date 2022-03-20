import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import useAuthentication from './customHooks/useAuthentication';
import MainRouter from './routes/MainRoute';

function App() {

  const { initialize, isInitialized } = useAuthentication();

  useEffect(() => {
    initialize()
  }, [initialize])

  return (
    <>
      {
        isInitialized &&
        <>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            limit={2}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
          />

          <MainRouter />
        </>
      }
    </>
  );
}

export default App;
