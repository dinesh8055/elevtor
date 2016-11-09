// This file mocks a web API by working with the hard-coded data below.
// All calls return promises.
const jobs = [
  {
    id: 1,
    title: 'Head of Sales',
    city: 'Palo Alto',
    state: 'CA',
    company: 'Facebook',
    salary: '$170,000',
    salaryPer: 'year',
    description: 'Hiring a head of sales pro to build our book of business and create endless income for us',
    sponsored: true,
    expired: false,
    postedDaysAgo: 2
  },
  {
    id: 2,
    title: 'Head of Marketing',
    city: 'New York',
    state: 'NY',
    company: 'Google',
    salary: '$130,000',
    salaryPer: 'year',
    description: 'Hiring a head of marketing',
    sponsored: false,
    expired: false,
    postedDaysAgo: 6
  },
  {
    id: 3,
    title: 'CTO',
    city: 'Seattle',
    state: 'WA',
    company: 'Amazon',
    salary: '$150,000',
    salaryPer: 'year',
    description: 'Hiring a head of technology',
    sponsored: false,
    expired: false,
    postedDaysAgo: 62
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (jobs) => {
  return jobs.length;
};

class JobApi {
  static getAllJobs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], jobs));
      }, 100);
    });
  }

  static saveJob(job) {
	job = Object.assign({}, job); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minJobTitleLength = 3;
        if (job.firstName.length < minJobTitleLength) {
          reject(`Job Title must be at least ${minJobNameLength} characters.`);
        }

        if (job.id) {
          const existingJobIndex = jobs.findIndex(a => a.id == job.id);
          jobs.splice(existingJobIndex, 1, job);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new jobs in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          job.id = generateId(job);
          jobs.push(job);
        }

        resolve(job);
      }, 100);
    });
  }

  static deleteJob(jobId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfJobToDelete = jobs.findIndex(job => {
          job.jobId == jobId;
        });
        jobs.splice(indexOfJobToDelete, 1);
        resolve();
      }, 100);
    });
  }
}

export default JobApi;
