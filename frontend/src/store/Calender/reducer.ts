import {Reducer} from 'redux'
import {ActionTypes, activity, ActivityList, CALENDER_ACTIONS} from "./types";
import {days} from "../../pages/calender/data";

const initialState = {
  eventList: [1, 2, 3],
  activityList: {
    mon: [], tue: [], wed: [], thu: [], fri: []
  }
}

type State = {
  eventList: number[]
  activityList: ActivityList
}

// @ts-ignore
export const calender: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case CALENDER_ACTIONS.ADD_EVENT:
      return {...state, eventList: [...state.eventList, action.response]}

    case CALENDER_ACTIONS.DELETE_EVENT:
      return {...state, eventList: state.eventList.filter((e) => e !== action.response)}

    case CALENDER_ACTIONS.ADD_ACTIVITIES:
      const value = action.response
      Object.keys(value).forEach((k) => {
        value[k] = [...state.activityList[k], ...value[k]]
      })
      // console.log(value)
      return {...state, activityList: {...state.activityList, ...value}}

    case CALENDER_ACTIONS.DELETE_ACTIVITIES:
      return {
        ...state,
        activityList: days.map((d) => state.activityList[d.id].filter((a) => !action.response[d.id].includes(a)))
      }

    case CALENDER_ACTIONS.ADD_ACTIVITY:
      const val = action.response
      return {
        ...state,
        activityList: {...state.activityList, [val.day]: [...state.activityList[val.day], val.activity]}
      }

    case CALENDER_ACTIONS.GET_ACTIVITIES:
      const init = action.update
      const r: Partial<ActivityList> = {}
      init.forEach((e) => {
        console.log(e, 'e')
        const day = e.startDate.split(' ')[0]
        const start = e.startDate.split(' ')[1]
        const end = e.endDate.split(' ')[1]
        console.log(day)
        // @ts-ignore
        r[day] ? r[day].push({id: e.eventID, location: e.eventLocation, event: e.eventName, type: 'hall', time: {start, end}})
          : r[day] = [{
            id: e.eventID,
            location: e.eventLocation,
            event: e.eventName,
            type: 'hall',
            time: {start, end}
          }]
      })

      console.log(r)

      Object.keys(r).forEach((k) => {
        // @ts-ignore
        r[k] = [...r[k], ...state.activityList[k]]
      })

      console.log(r)
      return {...state, activityList: {...state.activityList, ...r}}

    case CALENDER_ACTIONS.DELETE_ACTIVITY:
      return state

    default:
      return state
  }
}