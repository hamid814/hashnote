import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// redux
import { loadUser } from 'store/actions/auth';

// pages
import Home from 'components/pages/home/Home';
import TagPage from 'components/pages/tag/TagPage';
import Tags from 'components/pages/tags/Tags';
import NotePage from 'components/pages/note/NotePage';
import Statistics from 'components/pages/statistics/Statistics';
import Rules from 'components/pages/rules/Rules';
import CurrentTasks from 'components/pages/currenttasks/CurrentTasks';
import LoginPage from 'components/pages/login/LoginPage';
import SearchPage from 'components/pages/search/SearchPage';

const RoutesContainer = ({ loadUser }) => {
  const publicUrl = process.env.PUBLIC_URL;

  useEffect(() => {
    loadUser();
  });

  return (
    <Switch>
      <Route exact path={`${publicUrl}/`} component={Home} />
      <Route exact path={`${publicUrl}/tagnote`} component={Home} />
      <Route exact path={`${publicUrl}/tags`} component={Tags} />
      <Route exact path={`${publicUrl}/tags/:id`} component={TagPage} />
      <Route exact path={`${publicUrl}/notes/:id`} component={NotePage} />
      <Route exact path={`${publicUrl}/statics`} component={Statistics} />
      <Route exact path={`${publicUrl}/rules`} component={Rules} />
      <Route exact path={`${publicUrl}/search`} component={SearchPage} />
      <Route
        exact
        path={`${publicUrl}/current-tasks`}
        component={CurrentTasks}
      />
      <Route exact path={`${publicUrl}/auth/login`} component={LoginPage} />
    </Switch>
  );
};

RoutesContainer.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(RoutesContainer);