import React from 'react';
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";
import Form from "components/Appointment/Form";
import Confirm from "components/Appointment/Confirm";
import useVisualMode from "hooks/useVisualMode";


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((err) => {
        console.log(err)
      });

  }

  function deleteInterview() {
    transition(DELETING);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((err) => {
        console.log(err)
      });

  }

  return (
    <article
      className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === SAVING && <Status message="Saving..." />}
      {mode === DELETING && <Status message="Deleting..." />}
      {mode === CONFIRM && <Confirm message="Are you sure you would like to delete this appointment?"
        onConfirm={deleteInterview}
        onCancel={back}
      />}
      {mode === CREATE && (
        <Form
          // name={props.name}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      )}

      {mode === EDIT && 
        <Form
          student={props.interview.student}
          value={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      }

    </article>
  )
}


