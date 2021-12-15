import {Reducer} from 'redux'
import {ActionTypes, ActivityList, CALENDER_ACTIONS} from "./types";
import {days} from "../../pages/calender/data";

const initialState = {
  eventList: [1, 2, 3],
  activityList: {
    mon: [
      {id: '1', event: 'RHDevs Training', location: 'Upper Lounge', type: 'academic', time: {start: '0800', end: '1000'}},
      {id: '2', event: 'RHMP Recording', location: 'Raffles Hall', type: 'hall', time: {start: '1000', end: '1200'}},
      {id: '3', event: 'RHMP Bonding Event', location: 'UTown', type: 'hall', time: {start: '1200', end: '1400'}},
      {id: '4', event: 'Hall event', location: 'Raffles Hall', type: 'hall', time: {start: '1400', end: '1700'}},
      {id: '5', event: 'GET1020 Lecture', location: 'Online', type: 'academic', time: {start: '1700', end: '1800'}},
    ], tue: [], wed: [], thu: [], fri: []
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
      return {...state, activityList: days.map((d) => [...state.activityList[d.id], ...action.response[d.id]])}

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
      return state

    case CALENDER_ACTIONS.DELETE_ACTIVITY:
      return state

    default:
      return state
  }
}