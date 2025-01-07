import styled from "styled-components";

export const Container = styled.div``

export const Header = styled.header`
  padding: 32px 0;
  background-color: #28262e;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  >img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }

  svg {
    color: #999491;
    width: 20px;
    height: 20px;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }

  span {
    color: #f4ede8;
  }

  a {
    text-decoration: none;
    color: #ff9000;

    &:hover{
      opacity: 0.8;
    }
  }
`
export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: #ff9000;
    display: flex;
    align-items: center;
    font-weight: 500;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin-left: 8px;
      margin: 0 8px;
    }
  }

`

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;


      &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: '';
      background: #ff9000;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }
  }
`
export const Section = styled.section`
  margin-top: 48px;

  > strong {
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color:#999591
  }
`

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #f4efe8;
      width: 70px;

      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }

    div {
      flex: 1;
      background: #3e3b47;
      display: flex;
      align-items: center;
      padding: 16px 24px;
      border-radius: 10px;
      margin-left: 24px;

      img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
      }

      strong {
        margin-left: 24px;
        color: #fff;
        font-size: 20px;
      }
    }
`

export const Calendar = styled.aside`
  width: 380px;

  .rdp-root {
    --rdp-accent-color: #ff9000 !important;
    --rdp-today-color: #ff9000 !important;
    --rdp-day-height: 40px;
    --rdp-day-width: 40px;
    --rdp-day_button-border-radius: 10px;
    --rdp-day_button-width: 45px;

    .rdp-day_button {
      background: #3e3b47;
      padding: 0;
      margin: 4px;
      cursor: pointer;
      font: inherit;
      color: inherit;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .rdp-today {
      color: var(--rdp-today-color) !important;
    }

    .rdp-disabled.rdp-today .rdp-day_button {
      color: var(--rdp-today-color) !important;
      background: transparent !important;
    }

    .rdp-selected .rdp-day_button {
      background: var(--rdp-accent-color);
      color: #232129 !important;
      border: none;
      border-radius: 10px;
    }

    .rdp-disabled .rdp-day_button {
      color: #a0a0a0 !important;
      background: transparent !important;
    }

    .rdp-month {
      background: #28262e;
      padding: 24px;
    }

    .rdp-nav {
      inset-block-start: 24px;
      inset-inline-end: 0;
    }

    .rdp-chevron {
      fill: #f0f0ff;
    }

  }
`

