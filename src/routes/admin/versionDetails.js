import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import withAdminLayout from '../../layout/withAdminLayout';

const version = lazy(() => import('../../container/pages/versionDetailPage'))

function VersionDetailRoute() {
  const { path } = useRouteMatch();
  return (

    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route exact path={path} component={version} />
      </Suspense>
    </Switch>
  );
}

export default withAdminLayout(VersionDetailRoute);
