// utils/ics.js
import ical from "ical-generator";

export function calendar(events) {
  // Create a new calendar instance
  const cal = ical({ name: "GPTinerary" });

  // Iterate through events and add them to the calendar
  events.forEach((event) => {
    cal.createEvent({
      start: event.start,
      end: event.end,
      summary: event.summary,
      description: event.description,
    });
  });

  // Return the ICS data string
  return cal.toString();
}
