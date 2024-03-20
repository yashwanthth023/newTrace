import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import withAdminLayout from '../../layout/withAdminLayout';

const version = lazy(() => import('../../container/pages/versionDetailPage'))

function versionDetailRoute() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={version} />
    </Switch>
  );
}

export default withAdminLayout(versionDetailRoute);
