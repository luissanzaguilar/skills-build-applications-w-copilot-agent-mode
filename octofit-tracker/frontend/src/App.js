

import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} className="octofit-logo" alt="Octofit Logo" />
        <span className="App-title">Octofit Tracker</span>
        <nav className="App-nav">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/activities" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Activities</NavLink>
          <NavLink to="/teams" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Teams</NavLink>
          <NavLink to="/leaderboard" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Leaderboard</NavLink>
          <NavLink to="/workouts" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Workouts</NavLink>
          <NavLink to="/users" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Users</NavLink>
        </nav>
      </header>
      <main className="App-content">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div style={{textAlign: 'center', marginTop: '3rem'}}><h2>Welcome to <span style={{color: '#0033a0'}}>Octofit Tracker</span>!</h2><p style={{fontSize: '1.2rem'}}>Track your fitness, join teams, and compete on the leaderboard.</p></div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
