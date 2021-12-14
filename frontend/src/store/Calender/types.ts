export type activity = { id: number, event: string, location: string, type: string, time: { start: string, end: string } }

export type EventType = string

type days = string

export type ActivityList = Record<days, activity[]>

export enum CALENDER_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  // SET_EXAMPLE_LIST = 'SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST',
  GET_EVENTS = 'CALENDER_ACTIONS.GET_EVENTS',
  GET_ACTIVITIES = 'CALENDER_ACTIONS.GET_ACTIVITIES',
  ADD_EVENT = 'CALENDER_ACTIONS.ADD_EVENT',
  DELETE_EVENT = 'CALENDER_ACTIONS.DELETE_EVENT',
  ADD_ACTIVITIES = 'CALENDER_ACTIONS.ADD_ACTIVITIES',
  DELETE_ACTIVITIES = 'CALENDER_ACTIONS.DELETE_ACTIVITIES'
}

type addEvent = {
  type: typeof CALENDER_ACTIONS.ADD_EVENT
  response: number
}

type deleteEvent = {
  type: typeof CALENDER_ACTIONS.DELETE_EVENT
  response: number
}

type addActivities = {
  type: typeof CALENDER_ACTIONS.ADD_ACTIVITIES
  response: ActivityList
}

type deleteActivities = {
  type: typeof CALENDER_ACTIONS.DELETE_ACTIVITIES
  response: ActivityList
}

export type ActionTypes =
  | addEvent
  | deleteEvent
  | addActivities
  | deleteActivities