import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import withAdminLayout from '../../layout/withAdminLayout';

const AddComponent = lazy(() => import('../../container/pages/AddComponent'))

function AddComponentRoute() {
  const { path } = useRouteMatch();
  return (

    <Switch>
      <Suspense fallback={
        <div className='spin'>
          <Spin />
        </div>
      }>
        <Route exact path={path} component={AddComponent} />
      </Suspense>
    </Switch>
  );
}

export default withAdminLayout(AddComponentRoute);
