import {ActivityList, EventType} from '../../store/Calender/types'

export const timings = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000', '2100', '2200', '2300']

export const days = [
  {id: 'mon', day: 'Mon'},
  {id: 'tue', day: 'Tue'},
  {id: 'wed', day: 'Wed'},
  {id: 'thu', day: 'Thu'},
  {id: 'fri', day: 'Fri'},
]

export const colors: Record<EventType, string> = {
  academic: '#8be9fd',
  hall: '#50fa7b',
  others: '#ffb86c',
  events: '#ffb86c',
  cca: '#bd93f9'
}

export const events: Record<string, ActivityList> = {
  'Inter Hall Hackathon': {
    wed: [
      {
        id: 'asd',
        event: 'UI/UX Workshop',
        location: 'Online',
        type: 'Others',
        time: {start: '1600', end: '1800'}
      },
      {
        id: 'poi',
        event: 'Down the Crypto Rabbit Hole',
        location: 'Online',
        type: 'Others',
        time: {start: '1400', end: '1600'}
      }], thu: [
      {
        id: 'utqeow',
        event: 'InterHall Hackathon Judging',
        location: 'Online',
        type: 'Others',
        time: {start: '1300', end: '1400'}
      }
    ]
  }
}

export const initialForm = {
  type: 'activity',
  name: '',
  time: {start: '0600', end: '0600'},
  day: 'mon',
  location: 'Kuok'
}

export type FormValues = { type: string, name: string, time: { start: string, end: string }, day: string, location: string, group: string }

export const locations = ['Upper Lounge', 'Lower Lounge', 'TV Room', 'Kuok Conference Room', 'Kuok', 'Comm Hall', 'Gym']