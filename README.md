# Interview Scheduler
Interview Scheduler is a single-page application (SPA) that allows users to book, edit and cancel interviews between students and interviewers. The front end of this project is built with React framework and data is persisted by API server using Postgre SQL database. 

# Requirements

* Interviews can be booked between Monday and Friday.
* A user can switch between weekdays.
* A user can book an interview in an empty appointment slot.
* Interviews are booked by typing in a student name and clicking on an interviewer from a list of 5.available interviewers.
* A user can cancel an existing interview.
* A user can edit the details of an existing interview.
* The list of days informs the user how many slots are available for each day.
* The expected day updates the number of spots available when an interview is booked or canceled.
* A user is presented with a confirmation when they attempt to cancel an interview.
* A user is shown an error if an interview cannot be saved or deleted.
* A user is shown a status indicator while asynchronous operations are in progress.
* When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
* The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Screenshots

!["scheduler-img1.png"](https://github.com/nou-ali/scheduler/blob/master/docs/scheduler-img1.png)
!["scheduler-img2.png"](https://github.com/nou-ali/scheduler/blob/master/docs/scheduler-img2.png)
!["scheduler-img3.png"](https://github.com/nou-ali/scheduler/blob/master/docs/scheduler-img3.png)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
