import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Landing from './components/Landing/index.js';
import Login from './components/UserAuth/Login.js';
import Signup from './components/UserAuth/Signup.js';

import CreateResume from './components/Candidates/Resume/CreateResume.js';
import EditProfile from './components/Candidates/Profile/EditProfile.js';
import Profile from './components/Candidates/Profile/Profile.js';
import SavedJobsPage from './components/Candidates/SavedJobs/SavedJobsPage';
import InterviewsPage from './components/Candidates/Interviews/InterviewsPage.js';
import SearchPage from './components/Candidates/Search/SearchPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing}></IndexRoute>
    <Route path="/login" component={Login}></Route>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/createresume" component={CreateResume}></Route>
    <Route path="/editprofile" component={EditProfile}></Route>
    <Route path="/profile" component={Profile}></Route>
    <Route path="/savedjobs" component={SavedJobsPage}></Route>
    <Route path="/interviews" component={InterviewsPage}></Route>
    <Route path="/search" component={SearchPage}></Route>
  </Route>
);
