import * as types from './actionTypes';
import jobsApi from '../api/mockSearchApi';
import savedJobsApi from '../api/mockSavedApi';
import interviewsApi from '../api/mockInterviewsApi';

export function createJobPosting(job) {
  return { type: types.CREATE_JOB_POSTING, job};
}

export function loadJobsSuccess(jobs) {
  return { type: types.LOAD_JOBS_SUCCESS, jobs};
}

export function loadJobs() {
  return function(dispatch) {
    return jobsApi.getAllJobs().then(jobs => {
      dispatch(loadJobsSuccess(jobs));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadSavedJobsSuccess(savedJobs) {
  return { type: types.LOAD_SAVED_JOBS_SUCCESS, savedJobs};
}

export function loadSavedJobs() {
  return function(dispatch) {
    return savedJobsApi.getAllSavedJobs().then(savedJobs => {
      dispatch(loadSavedJobsSuccess(savedJobs));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadInterviewsSuccess(interviews) {
  return { type: types.LOAD_INTERVIEWS_SUCCESS, interviews};
}

export function loadInterviews() {
  return function(dispatch) {
    return interviewsApi.getAllInterviews().then(interviews => {
      dispatch(loadInterviewsSuccess(interviews));
    }).catch(error => {
      throw(error);
    });
  };
}
