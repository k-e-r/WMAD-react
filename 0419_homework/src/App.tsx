import React from 'react';
import { useRoutes } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const UserList = React.lazy(() => import('./components/UserList'));
const UserDetail = React.lazy(() => import('./components/UserDetail'));

function App() {

  const routes = useRoutes([
    { path: '/', element: <UserList /> },
    {
      path: '/userdetail',
      element: <UserDetail />,
      children: [{ path: ":id", element: <UserDetail /> }]
    },
  ]);

  return (
    <div className="container py-3">
      <div className="grid">
        <div className="row">
          <div className="col">
            <div className="h3 fw-bold text-success">App Component</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              amet possimus laborum. Nesciunt architecto, ea molestiae a quia
              voluptas, illo exercitationem facilis adipisci laborum ipsa totam
              error quo distinctio voluptate.
            </p>

            <button className="btn btn-success btn-sm">
              <i>
                <FontAwesomeIcon icon={faBook} />
                &nbsp;&nbsp;Read More
              </i>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <React.Suspense>
              {routes}
            </React.Suspense>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
