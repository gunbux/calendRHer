import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/types";

import {
  CalendarContainer,
  DayContainer,
  Days,
  EventCard,
  EventSubText,
  EventText,
  HeaderContainer,
  HourContainer,
  MainContainer,
  Time,
  TimingContainer,
  WeekContainer,
  TimeSelect,
  DateSelect
} from './styles/Calender.styled'
import {colors, days, initialForm, timings} from "./data";
import Fab from '@mui/material/Fab'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from "@mui/material/DialogContent";
import AddIcon from '@mui/icons-material/Add'
import Select from '@mui/material/Select'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from '@mui/material/TextField'
import {Form, Field} from 'react-final-form'

// TODO:
// Attach API Calls
// Add Events
// - Validation of Values
// - Using actions/reducer
// - Use Reducer to create unique ID
// Set Hovers
// Import NUSMods
// Month View
// Account for stacking (Optional)

const Calender = () => {
  const dispatch = useDispatch()
  const {eventList, activityList} = useSelector((state: RootState) => state.calender)
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () =>
    setMenuOpen(!isMenuOpen)

  const closeMenu = () =>
    setMenuOpen(false)


  const getSize = () => {
    return (1 / timings.length) * 200
  }

  const getMargin = (startTime: string) => {
    return ((parseInt(startTime) - 600) / (timings.length * 100) * 100).toString()
  }

  const getWidth = (time: { start: string, end: string }) => {
    return ((parseInt(time.end) - parseInt(time.start)) / (timings.length * 100) * 100).toString()
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

  // @ts-ignore
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
                  {activityList[d.id].map((e) => (
                    <EventCard margin={getMargin(e.time.start)} width={getWidth(e.time)} color={colors[e.type]}>
                      <EventText>{e.event}</EventText>
                      <EventSubText>{e.location}</EventSubText>
                    </EventCard>
                  ))}
                </HourContainer>
              </CalendarContainer>
            </>
          ))}
        </DayContainer>
      </WeekContainer>
      <Fab color="secondary"
           aria-label="add"
           style={{position: 'absolute', right: '20px', bottom: '20px'}}
           onClick={toggleMenu}>
        <AddIcon/>
      </Fab>
      <Dialog open={isMenuOpen}
              onClose={closeMenu}
              fullWidth
              PaperProps={{style: {background: '#282a36', color: 'white', padding: '15px'}}}>
        <DialogTitle>{'Add Event/Activity'}</DialogTitle>
        <Form onSubmit={(values) => console.log(values)}
              initialValues={{...initialForm}}
              render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                  <DialogContent style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    minHeight: '250px'
                  }}>
                    <DateSelect>
                      <Field name='day'>
                        {props => (
                          <FormControl>
                            <InputLabel style={{background: '#282a36', color: 'white'}}>Day</InputLabel>
                            <Select label={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}>
                              {days.map((d) => (
                                <MenuItem value={d.id}>{d.day}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        )}
                      </Field>
                      <TimeSelect>

                        <Field name='time.start'>
                          {props => (
                            <FormControl>
                              <InputLabel style={{background: '#282a36', color: 'white'}}>Start</InputLabel>
                              <Select label={props.input.name}
                                      value={props.input.value}
                                      onChange={props.input.onChange}>
                                {timings.map((t) => (
                                  <MenuItem value={t}>{t}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>)}
                        </Field>
                        <Field name='time.end'>
                          {props => (
                            <FormControl>
                              <InputLabel style={{background: '#282a36', color: 'white'}}>End</InputLabel>
                              <Select label={props.input.name}
                                      value={props.input.value}
                                      onChange={props.input.onChange}>
                                {timings.map((t) => (
                                  <MenuItem value={t}>{t}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        </Field>
                      </TimeSelect>

                    </DateSelect>
                    <Field name='name'>
                      {props => (
                        <FormControl>
                          <TextField label='Name'
                                     value={props.input.value}
                                     onChange={props.input.onChange}
                                     fullWidth
                                     InputLabelProps={{style: {background: '#282a36', color: 'white'}}}>

                          </TextField>
                        </FormControl>
                      )}
                    </Field>
                    <Field name='type'>
                      {props => (
                        <div>
                          <FormControl>
                            <InputLabel style={{background: '#282a36', color: 'white'}}>Type</InputLabel>
                            <Select label={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}>
                              <MenuItem value='event'>Event</MenuItem>
                              <MenuItem value='activity'>Activity</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      )}
                    </Field>
                  </DialogContent>
                  <DialogActions>
                    <Button variant="contained" onClick={closeMenu}>Cancel</Button>
                    <Button variant="contained" onClick={closeMenu} type='submit'>Add</Button>
                  </DialogActions>
                </form>
              )}/>
      </Dialog>
    </MainContainer>

  )
}


export default Calender