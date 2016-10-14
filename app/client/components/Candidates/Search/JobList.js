import React, {PropTypes} from 'react';
import JobListing from './JobListing';

const JobList = ({jobs}) => {
  return (
    <div class="row">
      {jobs.map(job =>
        <JobListing key={job.id} job={job} />
      )}
    </div>
  );
};

JobList.propTypes = {
  jobs: PropTypes.array.isRequired
};

export default JobList;
