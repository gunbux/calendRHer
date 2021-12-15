export type activity = { id: string, event: string, location: string, type: string, time: { start: string, end: string } }

export type EventType = string

export type EventQuery = { startDate: string, endDate: string, eventName: string, eventID: string, location: string }

type days = string

export type ActivityList = Record<days, activity[]>

export enum CALENDER_ACTIONS {
  //follow naming convention <enum name>.<enum item name>
  // SET_EXAMPLE_LIST = 'SHOPPING_LIST_ACTIONS.SET_EXAMPLE_LIST',
  GET_EVENTS = 'CALENDER_ACTIONS.GET_EVENTS',
  GET_ACTIVITIES = 'CALENDER_ACTIONS.GET_ACTIVITIES',
  ADD_EVENT = 'CALENDER_ACTIONS.ADD_EVENT',
  DELETE_EVENT = 'CALENDER_ACTIONS.DELETE_EVENT',
  ADD_ACTIVITY = 'CALENDER_ACTIONS.ADD_ACTIVITY',
  DELETE_ACTIVITY = 'CALENDER_ACTIONS.DELETE_ACTIVITY',
  ADD_ACTIVITIES = 'CALENDER_ACTIONS.ADD_ACTIVITIES',
  DELETE_ACTIVITIES = 'CALENDER_ACTIONS.DELETE_ACTIVITIES'
}

type getActivities = {
  type: typeof CALENDER_ACTIONS.GET_ACTIVITIES
  update: string
}

type addEvent = {
  type: typeof CALENDER_ACTIONS.ADD_EVENT
  response: number
}

type deleteEvent = {
  type: typeof CALENDER_ACTIONS.DELETE_EVENT
  response: number
}

type addActivity = {
  type: typeof CALENDER_ACTIONS.ADD_ACTIVITY
  response: { day: string, activity: activity }
}

type deleteActivity = {
  type: typeof CALENDER_ACTIONS.DELETE_ACTIVITY
  response: { day: string, activity: activity }
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
  | addActivity
  | deleteActivity
  | getActivities