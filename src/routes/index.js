import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import About from '~/pages/About';
import Courses from '~/pages/Courses';
import Course from '~/pages/Course';
import Gallery from '~/pages/Gallery';
import Contact from '~/pages/Contact';
import Address from '~/pages/Address';

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

      <Route path="/galeria" component={Gallery} />
      <Route path="/contato" component={Contact} />
      <Route path="/endereco" component={Address} />
    </Switch>
  );
}
