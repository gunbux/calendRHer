import React from 'react'
import {
  MainContainer,
  HeaderContainer,
  WeekContainer,
  TimingContainer,
  CalendarContainer,
  DayContainer,
  Days,
  HourContainer,
  Time,
  EventCard
} from './styles/Calender.styled'

// TODO:
// Colors
// Add Events
// - Use MUI to create panel and selectors
// - Use Redux Form for form validation
// - Use Reducer to create unique ID
// Attach API Calls
// Import NUSMods
// Month View
// Account for stacking (Optional)

const Calender = () => {
  const getSize = () => {
    return (1 / timings.length) * 200
  }

  const getMargin = (startTime: string) => {
    const m = ((parseInt(startTime) - 600) / (timings.length * 100) * 100).toString()
    // console.log('margin:', m)
    return m
  }

  const getWidth = (time: { start: string, end: string }) => {
    const w = ((parseInt(time.end) - parseInt(time.start)) / (timings.length * 100) * 100).toString()
    // console.log('width:', w)
    return w
  }

  const getSpecialDayStyle = (day: string) => {
    if (day === 'Mon') {
      return {borderRadius: '5px 0 0 0'}
    }
    if (day === 'Fri') {
      return {borderRadius: '0 0 0 5px'}
    }
    return {}
  }

  return (
    <MainContainer>
      <HeaderContainer>
        Hall Calender
      </HeaderContainer>

      <WeekContainer>
        <TimingContainer>
          {timings.map((t) => (
            <Time key={t}>{t}</Time>
          ))}
        </TimingContainer>
        <DayContainer>
          {days.map((d) => (
            <>
              <CalendarContainer key={d.id}>
                <Days style={getSpecialDayStyle(d.day)}>{d.day}</Days>
                <HourContainer size={getSize().toString()}>
                  {mockValues.map((e) => (
                    <EventCard margin={getMargin(e.time.start)} width={getWidth(e.time)}>{e.event}</EventCard>
                  ))}
                </HourContainer>
              </CalendarContainer>
            </>
          ))}
        </DayContainer>
      </WeekContainer>
    </MainContainer>

  )
}

const timings = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000', '2100', '2200', '2300']

const days = [
  {id: 1, day: 'Mon'},
  {id: 2, day: 'Tue'},
  {id: 3, day: 'Wed'},
  {id: 4, day: 'Thu'},
  {id: 5, day: 'Fri'},
]

const mockValues = [
  {id: 1, event: 'CS1101S Tutorial', location: 'COM1', type: 'academic', time: {start: '0800', end: '1000'}},
  {id: 2, event: 'RHMP Recording', location: 'Raffles Hall', type: 'hall', time: {start: '1000', end: '1200'}},
  {id: 3, event: 'Meetup with friends', location: 'UTown', type: 'others', time: {start: '1200', end: '1400'}},
  {id: 4, event: 'Hall event', location: 'Raffles Hall', type: 'hall', time: {start: '1400', end: '1700'}},
  {id: 5, event: 'GET1020 Lecture', location: 'Online', type: 'academic', time: {start: '1700', end: '1800'}},
]

export default Calender