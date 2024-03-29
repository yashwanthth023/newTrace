import React, { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import withAdminLayout from '../../layout/withAdminLayout';

const version = lazy(() => import('../../container/pages/electrochemDetailsPage'))

function ElectrochemDetailRoute() {
  const { path } = useRouteMatch();
  return (

    <Switch>
      <Suspense fallback={
        <div className='spin'>
          <Spin />
        </div>
      }>
        <Route exact path={path} component={version} />
      </Suspense>
    </Switch>
  );
}

export default withAdminLayout(ElectrochemDetailRoute);
