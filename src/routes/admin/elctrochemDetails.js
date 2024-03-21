import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import withAdminLayout from '../../layout/withAdminLayout';
import { Spin } from 'antd';

const version = lazy(() => import('../../container/pages/electrochemDetailsPage'))

function electrochemDetailRoute() {
  const { path } = useRouteMatch();
  return (
    
    <Switch>
      <Suspense fallback={
        <div className='spin'>
          <Spin/>
        </div>
      }>
      <Route exact path={path} component={version} />
      </Suspense>
    </Switch>
  );
}

export default withAdminLayout(electrochemDetailRoute);
