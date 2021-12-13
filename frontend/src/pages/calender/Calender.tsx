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
  Time
} from './styles/Calender.styled'

// TODO:
// Render mock values
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
                <Days>{d.day}</Days>
                <HourContainer size={getSize().toString()}/>
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
  { id: 1, event: 'CS1101S Tutorial', location: 'COM1', type: 'academic', time: { start: '0800', end: '1000' } },
  { id: 2, event: 'RHMP Recording', location: 'Raffles Hall', type: 'hall', time: { start: '1000', end: '1200' } },
  { id: 3, event: 'Meetup with friends', location: 'UTown', type: 'others', time: { start: '1200', end: '1400' } },
  { id: 4, event: 'Hall event', location: 'Raffles Hall', type: 'hall', time: { start: '1400', end: '1700' } },
  { id: 5, event: 'GET1020 Lecture', location: 'Online', type: 'academic', time: { start: '1700', end: '1800' } },
]

export default Calender