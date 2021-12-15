import {Dispatch} from '../types'
import {ActionTypes, activity, ActivityList, CALENDER_ACTIONS, EventQuery} from "./types";
import API from '../api'

//API reference
//  API.get("user/query/", {params: query}).then(res => console.log(res.data, res))

export const addEvent = (eventId: number) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CALENDER_ACTIONS.ADD_EVENT,
    response: eventId
  })
}

export const deleteEvent = (eventId: number) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CALENDER_ACTIONS.DELETE_EVENT,
    response: eventId
  })
}

export const addActivity = (a: activity, d: string) => (dispatch: Dispatch<ActionTypes>) => {
  const queryBody: EventQuery = {
    eventID: a.id,
    eventName: a.event,
    location: a.location,
    startDate: d + ' ' + a.time.start,
    endDate: d + ' ' + a.time.end
  }
  const query: Record<string, unknown> = {
    userID: 'A1237895B'
  }
  API.get("user/query/", {params: query}).then(res => console.log(res.data, res))
  // axios({
  //   method: 'GET',
  //   url: 'https://calenrher-backend.herokuapp.com/user/query/',
  //   params: query
  // })
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   })
  dispatch({
    type: CALENDER_ACTIONS.ADD_ACTIVITY,
    response: {day: d, activity: a}
  })
}

export const deleteActivity = (a: activity, d: string) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CALENDER_ACTIONS.DELETE_ACTIVITY,
    response: {day: d, activity: a}
  })
}

export const addActivities = (activities: ActivityList) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CALENDER_ACTIONS.ADD_ACTIVITIES,
    response: activities
  })
}

export const deleteActivities = (activities: ActivityList) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CALENDER_ACTIONS.DELETE_ACTIVITIES,
    response: activities
  })
}