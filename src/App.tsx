import React from 'react'
import { routes } from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ComponentToNode } from './utils/hoc/componentToNode';
import { NotFound } from './pages/NotFound';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore()

function App() {
  return (
    <Provider store={store} >
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
      </Provider>
  );
}

export default App;
