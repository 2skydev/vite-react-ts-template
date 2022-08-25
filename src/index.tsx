import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import FileSystemRoutes from './components/FileSystemRoutes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <RecoilRoot>
      <Suspense>
        <FileSystemRoutes />
      </Suspense>
    </RecoilRoot>
  </BrowserRouter>,
);
