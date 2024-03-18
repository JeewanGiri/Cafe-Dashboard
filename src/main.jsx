import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import PageRouter from './Routes/PageRouter.jsx';
// import Admin from './Pages/Admin.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={new QueryClient()}>
  <BrowserRouter>
  <RecoilRoot>
  <ToastContainer/>
    <PageRouter />
    {/* <Admin/> */}
  </RecoilRoot>
  </BrowserRouter>
  </QueryClientProvider>
  </React.StrictMode>,
)
