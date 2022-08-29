import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import useStyles from './styles';

import { Actors, Profile, Movies, MovieInformation, NavBar } from '.';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Movies />} />
        </Routes>
        <Routes>
          <Route exact path="/actors/:id" element={<Actors />} />
        </Routes>
        <Routes>
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>

    </div>
  );
};

export default App;
