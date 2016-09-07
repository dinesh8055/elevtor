// This file mocks a web API by working with the hard-coded data below.
// All calls return promises.
const savedJobs = [
  {
    id: 1,
    jobid: 1,
    title: 'Head of Sales',
    city: 'Palo Alto',
    state: 'CA',
    company: 'Facebook',
    salary: '$170,000',
    salaryPer: 'year',
    description: 'Hiring a head of sales pro to build our book of business and create endless income for us',
    sponsored: true,
    expired: false,
    expiresinDays: 58,
    postedDaysAgo: 2
  },
  {
    id: 2,
    jobid: 2,
    title: 'Head of Marketing',
    city: 'New York',
    state: 'NY',
    company: 'Google',
    salary: '$130,000',
    salaryPer: 'year',
    description: 'Hiring a head of marketing',
    sponsored: false,
    expired: false,
    expiresinDays: 54,
    postedDaysAgo: 6
  },
  {
    id: 3,
    jobid: 3,
    title: 'CTO',
    city: 'Seattle',
    state: 'WA',
    company: 'Amazon',
    salary: '$150,000',
    salaryPer: 'year',
    description: 'Hiring a head of technology',
    sponsored: false,
    expired: true,
    expiresinDays: 0,
    postedDaysAgo: 62
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (savedJobs) => {
  return savedJobs.length;
};

class SavedJobApi {
  static getAllSavedJobs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], savedJobs));
      }, 100);
    });
  }

  static saveSavedJob(savedJob) {
	savedJob = Object.assign({}, savedJob); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minSavedJobTitleLength = 3;
        if (savedJob.firstName.length < minSavedJobTitleLength) {
          reject(`SavedJob Title must be at least ${minSavedJobNameLength} characters.`);
        }

        if (savedJob.id) {
          const existingSavedJobIndex = savedJobs.findIndex(a => a.id == savedJob.id);
          savedJobs.splice(existingSavedJobIndex, 1, savedJob);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new savedSavedJobs in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          savedJob.id = generateId(savedJob);
          savedJobs.push(savedJob);
        }

        resolve(savedJob);
      }, 100);
    });
  }

  static deleteSavedJob(savedJobId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfSavedJobToDelete = savedJobs.findIndex(savedJob => {
          savedJob.savedJobId == savedJobId;
        });
        savedJobs.splice(indexOfSavedJobToDelete, 1);
        resolve();
      }, 100);
    });
  }
}

export default SavedJobApi;
