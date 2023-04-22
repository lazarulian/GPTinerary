# GPTinerary

Creating customized itineraries that are easily importable into all calendars utilizing the LLM's like GPT

# GPTinerary

GPTinerary is a web application designed to effortlessly generate travel itineraries using ChatGPT and convert them into universally compatible ICS calendar files. With GPTinerary, users can easily manage their travel schedules by importing generated itineraries directly into their favorite calendar applications, such as Google Calendar, Apple Calendar, or Microsoft Outlook.

## Features

- Interaction with ChatGPT to generate customized travel itineraries
- Automatic conversion of text-based itineraries into ICS calendar files
- Seamless integration with popular calendar applications
- User-friendly interface for hassle-free itinerary management

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
