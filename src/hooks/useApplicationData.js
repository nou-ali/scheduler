
import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  function bookInterview(id, interview) {
    // console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    //  a new days array to save back into state 

    const dayArray = state.days.map(day => {
      if (day.name === state.day && state.appointments[id].interview === null) {
        // day.spots -= 1;
        return  { ...day, spots: day.spots - 1 }
      }
      return {...day};
    });

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(res => {
        setState({
          ...state,
          appointments,
          days: dayArray
        });
      })
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const dayArray = state.days.map(day => {
      if (day.name === state.day) {
        // day.spots += 1;
        return  { ...day, spots: day.spots + 1 }
      }
      return {...day};
    });

    return axios.delete(`/api/appointments/${id}`)
      .then(res => {
        setState({
          ...state,
          appointments,
          days: dayArray
        });
      })
  }

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers'),
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);


  return { state, setDay, bookInterview, cancelInterview }

}