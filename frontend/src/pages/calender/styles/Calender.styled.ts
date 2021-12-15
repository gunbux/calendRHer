import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #282a36;
  color: white;
`

export const HeaderContainer = styled.div`
  width: 100%;
  background: #44475a;
  font-size: 30px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WeekContainer = styled.div`
  display: flex;
  flex-direction: column;
  //min-width: 57 rem;
  min-width: 90vw;
  margin: 2%;
  overflow: auto;
`

export const TimingContainer = styled.div`
  min-height: 100%;
  width: 1950px;
  display: flex;
  margin-left: 3rem;
  justify-content: space-between;
`

export const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const CalendarContainer = styled.div<{ fontSize?: string }>`
  display: flex;
  width: 2000px;
  flex-direction: row;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
  min-height: 3rem;
`

export const Days = styled.div<{ fontSize?: string }>`
  position: sticky;
  left: 0;
  z-index: 90;
  background: #282a36;
  min-height: 5rem;
  min-width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

export const Time = styled.div`
  width: 100%;
`

export const HourContainer = styled.div<{ size: string }>`
  background: linear-gradient(to right, #44475a 50%, transparent 50%);
  background-size: ${(props) => props.size && `${props.size}% ${props.size}%`};
  border: 1px solid gray;
  width: 100%;
  position: relative;
`

export const EventCard = styled.div<{ margin: string, width: string, color: string }>`
  position: absolute;
  left: -1px;
  margin-left: ${(props) => props.margin && `${props.margin}%`};
  height: 95%;
  width: ${(props) => props.width && `${props.width}%`};;
  overflow: hidden;
  white-space: initial;
  text-overflow: ellipsis;
  z-index: 2;
  color: black;
  background: ${(props) => props.color && props.color};
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);`

export const EventText = styled.div`
  padding: 5px 0 0 10px;
`

export const EventSubText = styled.div`
  font-size: 13px;
  padding: 0 10px;
`

export const TimeSelect = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`

export const FlexSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
