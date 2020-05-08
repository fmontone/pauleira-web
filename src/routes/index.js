import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import About from '~/pages/About';
import Courses from '~/pages/Courses';
import Course from '~/pages/Course';
import Galleries from '~/pages/Galleries';
import Contact from '~/pages/Contact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/sobre" component={About} />

      <Route path="/cursos" exact component={Courses} />

      <Route
        path="/cursos/setup-regulagem-guitarra-basico"
        component={Course}
      />
      <Route
        path="/cursos/setup-regulagem-guitarra-avancado"
        component={Course}
      />
      <Route
        path="/cursos/construcao-de-guitarra-braco-parafusado"
        component={Course}
      />
      <Route
        path="/cursos/construcao-de-guitarra-braco-colado"
        component={Course}
      />
      <Route path="/cursos/curso-livre-de-luthieria" component={Course} />

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
