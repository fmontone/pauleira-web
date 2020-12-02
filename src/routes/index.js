import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import About from '~/pages/About';
import Courses from '~/pages/Courses';
import Showcase from '~/pages/Showcase';
import Contact from '~/pages/Contact';
import NotFound404 from '~/pages/NotFound404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/sobre" component={About} />

      <Route path="/cursos" exact component={Courses} />

      <Route path="/showcase" exact render={props => <Showcase {...props} />} />
      <Route
        path="/showcase/:id/:title"
        render={props => <Showcase {...props} modalGallery />}
      />

      <Route path="/contato" component={Contact} />

      <Route component={NotFound404} />
    </Switch>
  );
}
