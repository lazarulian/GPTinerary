// utils/itinerary-parser.js
import * as chrono from "chrono-node";

export function parseItinerary(itinerary) {
  const lines = itinerary.split("\n");
  let currentDateString = "";
  const events = [];

  lines.forEach((line) => {
    const isDateLine = line.match(/^\s*Date \((\d{2}\/\d{2}\/\d{4})\):/);
    if (isDateLine) {
      currentDateString = isDateLine[1];
    } else {
      const eventLine = line.match(
        /^\s*(\d{1,2}:\d{2} [AP]M) - (\d{1,2}:\d{2} [AP]M) \u2022 (.+?) \u2022 (.+)/
      );
      if (eventLine) {
        const startTimeString = `${currentDateString} ${eventLine[1]}`;
        const endTimeString = `${currentDateString} ${eventLine[2]}`;
        const summary = eventLine[3];
        const description = eventLine[4];

        const startTime = chrono.parseDate(startTimeString);
        const endTime = chrono.parseDate(endTimeString);

        events.push({
          start: startTime,
          end: endTime,
          summary: summary,
          description: description,
        });
      }
    }
  });

  return events;
}
