// This file mocks a web API by working with the hard-coded data below.
// All calls return promises.
const interviews = [
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
    postedDaysAgo: 2,
    matchedDaysAgo: 6,
    status: 'Pending Interview',
    dateScheduled: 'No Date Scheduled'
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
    postedDaysAgo: 62,
    matchedDaysAgo: 2,
    status: 'Pending Feedback',
    dateScheduled: '2016 - 5 - 5'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (interviews) => {
  return interviews.length;
};

class InterviewApi {
  static getAllInterviews() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], interviews));
      }, 100);
    });
  }

  static saveInterview(interview) {
	interview = Object.assign({}, interview); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minInterviewTitleLength = 3;
        if (interview.firstName.length < minInterviewTitleLength) {
          reject(`Interview Title must be at least ${minInterviewNameLength} characters.`);
        }

        if (interview.id) {
          const existingInterviewIndex = interviews.findIndex(a => a.id == interview.id);
          interviews.splice(existingInterviewIndex, 1, interview);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new savedInterviews in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          interview.id = generateId(interview);
          interviews.push(interview);
        }

        resolve(interview);
      }, 100);
    });
  }

  static deleteInterview(interviewId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfInterviewToDelete = interviews.findIndex(interview => {
          interview.interviewId == interviewId;
        });
        interviews.splice(indexOfInterviewToDelete, 1);
        resolve();
      }, 100);
    });
  }
}

export default InterviewApi;
