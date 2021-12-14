import {Dispatch} from '../types'
import {ActionTypes, ActivityList, CALENDER_ACTIONS} from "./types";

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