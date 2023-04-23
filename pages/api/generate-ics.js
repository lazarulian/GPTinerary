// pages/api/generate-ics.js
import { calendar } from "../../utils/ics";
import { parseItinerary } from "../../utils/itinerary-parser";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { itinerary } = req.body;
      const events = parseItinerary(itinerary);
      const icsData = calendar(events);

      res.setHeader("Content-Type", "text/calendar");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=itinerary.ics"
      );
      res.status(200).send(icsData);
    } catch (error) {
      console.error("Error generating ICS file:", error);
      res.status(500).json({ error: "Failed to generate ICS file" });
    }
  } else {
    // Handle other HTTP methods (e.g., GET) if necessary
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
