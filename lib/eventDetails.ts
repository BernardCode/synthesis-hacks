const EVENT_TITLE = 'Synthesis Hacks'
const EVENT_DATE = 'Saturday, May 23, 2026'
const EVENT_TIME = '8:00 AM - 8:00 PM'
const EVENT_TIME_SHORT = 'May 23 · 8 AM-8 PM'
const EVENT_VENUE = 'Google Campus'
const EVENT_ADDRESS = '1225 Crossman Ave, 3rd Floor'
const EVENT_CITY = 'Sunnyvale, CA 94089'

const GOOGLE_CALENDAR_DATES = '20260523T150000Z/20260524T030000Z'
const GOOGLE_CALENDAR_TEXT = encodeURIComponent(EVENT_TITLE)
const GOOGLE_CALENDAR_DETAILS = encodeURIComponent(
  `A beginner-friendly, collaborative high school hackathon at ${EVENT_VENUE}.`
)
const GOOGLE_CALENDAR_LOCATION = encodeURIComponent(
  `${EVENT_VENUE}, ${EVENT_ADDRESS}, ${EVENT_CITY}`
)

export const eventDetails = {
  title: EVENT_TITLE,
  date: EVENT_DATE,
  time: EVENT_TIME,
  timeShort: EVENT_TIME_SHORT,
  venue: EVENT_VENUE,
  address: EVENT_ADDRESS,
  city: EVENT_CITY,
  locationLabel: `${EVENT_VENUE} · ${EVENT_ADDRESS}`,
  fullLocation: `${EVENT_VENUE}, ${EVENT_ADDRESS}, ${EVENT_CITY}`,
  mapUrl: 'https://maps.google.com/?q=1225+Crossman+Ave+3rd+Floor+Sunnyvale+CA+94089',
  calendarUrl:
    `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${GOOGLE_CALENDAR_TEXT}` +
    `&dates=${GOOGLE_CALENDAR_DATES}&details=${GOOGLE_CALENDAR_DETAILS}&location=${GOOGLE_CALENDAR_LOCATION}`,
}
