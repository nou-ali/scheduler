export default function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find((currentDay) => currentDay.name === day);
  const filteredAppointment = filteredDay ? filteredDay.appointments.map((id) => state.appointments[id]) : [];
  return filteredAppointment;
}
