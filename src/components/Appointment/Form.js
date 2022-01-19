import React from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";
import "components/Appointment/styles.scss";

export default function Form(props) {
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder={props.student}
            
          /*
            This must be a controlled component
            your code goes here
          */
          />
        </form>
        <InterviewerList
        interviewer= {props.interviewer}
        interviewers={props.interviewers} 
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={props.onCancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
}
