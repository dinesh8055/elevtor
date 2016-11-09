import * as types from '../actions/actionTypes';

export default function jobReducer(state=[], action) {
  switch (action.type) {
    case types.CREATE_JOB_POSTING:
      return [...state,
        Object.assign({}, action.job)
      ];

    case types.LOAD_JOBS_SUCCESS:
      return action.jobs;

    case types.LOAD_SAVED_JOBS_SUCCESS:
      return action.savedJobs;

    case types.LOAD_INTERVIEWS_SUCCESS:
      return action.interviews;

    default:
      return state;
  }
}
