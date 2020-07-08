import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import About from '~/pages/About';
import Courses from '~/pages/Courses';
import Galleries from '~/pages/Galleries';
import Contact from '~/pages/Contact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/sobre" component={About} />

      <Route path="/cursos" exact component={Courses} />

      <Route
        path="/galerias"
        exact
        render={props => <Galleries {...props} />}
      />
      <Route
        path="/galerias/:id/:title"
        render={props => <Galleries {...props} modalGallery />}
      />

      <Route path="/contato" component={Contact} />
    </Switch>
  );
}
