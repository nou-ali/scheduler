function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find((currentDay) => currentDay.name === day);
  const filteredAppointment = filteredDay ? filteredDay.appointments.map((id) => state.appointments[id]) : [];
  return filteredAppointment;
}

function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewData = state.interviewers[interview.interviewer];
  return {
    student: interview.student,
    interviewer: interviewData
  }
}


module.exports = {getAppointmentsForDay, getInterview}