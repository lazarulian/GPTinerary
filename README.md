# GPTinerary

![GPTinerary](/public/static/images/Press/GPTinerary.jpg)

GPTinerary is a web application designed to effortlessly generate travel itineraries using ChatGPT and convert them into universally compatible ICS calendar files. With GPTinerary, users can easily manage their travel schedules by importing generated itineraries directly into their favorite calendar applications, such as Google Calendar, Apple Calendar, or Microsoft Outlook.

## Features

- Interaction with ChatGPT to generate customized travel itineraries
- Automatic conversion of text-based itineraries into ICS calendar files
- Seamless integration with popular calendar applications
- User-friendly interface for hassle-free itinerary management

### Example

For instance, you can convert something like this into a ICS file to be imported into GCal, Apple Calendar, or Outlook!

```
Date (04/21/2023):
11:00 AM - 11:30 AM • Arrival at Dublin Airport • Land at Dublin Airport.
11:30 AM - 12:00 PM • Airport to Hostel • Take the Airlink Express 747 bus to O'Connell Street (Abbey Street stop) and walk to Abbey Court Hostel.
12:00 PM - 12:30 PM • Check-in at Hostel • Check-in at Abbey Court Hostel and drop off your luggage.
12:30 PM - 1:30 PM • Lunch • Have lunch at The Woollen Mills, a local restaurant offering Irish cuisine.
1:30 PM - 3:00 PM • Trinity College • Visit Trinity College and the Book of Kells exhibition.
3:00 PM - 4:30 PM • Dublin Castle • Explore Dublin Castle and its surrounding gardens.
4:30 PM - 6:00 PM • Temple Bar • Walk through Temple Bar, Dublin's cultural and entertainment quarter.
6:00 PM - 8:00 PM • Dinner • Have dinner at Fade Street Social, a popular restaurant in the city.
8:00 PM - 10:00 PM • Irish Music • Enjoy a traditional Irish music session at The Cobblestone pub.

Date (04/22/2023):
9:00 AM - 10:00 AM • Breakfast • Have breakfast at Queen of Tarts, a local café known for its pastries.
10:00 AM - 11:00 AM • St. Stephen's Green • Stroll through St. Stephen's Green, a beautiful city park.
11:00 AM - 12:30 PM • National Museum • Visit the National Museum of Ireland - Archaeology.
12:30 PM - 1:30 PM • Lunch • Have lunch at Cornucopia, a vegetarian and vegan-friendly restaurant.
1:30 PM - 2:00 PM • Ha'Penny Bridge • Stop by the iconic Ha'Penny Bridge and snap a photo.
2:00 PM - 2:30 PM • Hostel Checkout • Head back to Abbey Court Hostel to pick up your luggage and check out.
2:30 PM - 3:00 PM • Hostel to Airport • Take the Airlink Express 747 bus from O'Connell Street (Abbey Street stop) back to Dublin Airport.
3:00 PM - 6:15 PM • Airport Lounge • Relax at one of the airport lounges before your flight, such as the 51st & Green Lounge (Terminal 2) or the Dublin Airport Executive Lounge (Terminal 1).
6:15 PM - 6:15 PM • Departure • Depart from Dublin Airport.
```

## Getting Started

These instructions will help you set up and run the GPTinerary project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js (v14.x.x or higher)
- npm (v6.x.x or higher)
- A code editor (e.g., Visual Studio Code)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/gptinerary.git
```

2. Change to the project directory:

```bash
cd gptinerary
```

3. Install dependencies:

```bash
npm install
```

4. Set up the required environment variables:

Create a `.env.local` file in the root folder of the project and add the following variables:

```
OPENAI_API_KEY=your_openai_api_key
```

Replace `your_openai_api_key` with your actual OpenAI API key.

5. Start the development server:

```bash
npm run dev
```

Now, the application should be running at `http://localhost:3000`.

## Usage

1. Open the GPTinerary application in your web browser.
2. Log in or sign up for an account (if authentication is implemented).
3. Interact with ChatGPT to generate a customized itinerary for your trip.
4. Click the "Generate ICS" button to convert the itinerary into an ICS calendar file.
5. Download the generated ICS file and import it into your preferred calendar application.

## Contributing

We welcome contributions to the GPTinerary project. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b my-new-feature`.
3. Commit your changes: `git commit -am 'Add my new feature'`.
4. Push the feature branch to your fork: `git push origin my-new-feature`.
5. Create a new Pull Request on the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
