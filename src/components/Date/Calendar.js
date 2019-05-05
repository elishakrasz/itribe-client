import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment)

export class Calendar extends Component {
    state = {
        events: [
          {
            start: new Date(),
            end: new Date(moment().add(1, "days")),
            title: "Some title"
          }
        ]
      };
    render () {
        return (
            <div>
    <BigCalendar
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={this.state.events}
      style={{ height: "100vh" }}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
        )
    }
}


