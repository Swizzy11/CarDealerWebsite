import React from 'react'
import { routes } from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ComponentToNode } from './utils/hoc/componentToNode';
import { NotFound } from './pages/NotFound';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {
            routes.map((route, index) => {
              const { component, path } = route
              const Page = (
                  <ComponentToNode Component={component} />
                )
              
              return <Route key={index} path={path} element={Page} />
            })
          }
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
