#ConTrack

Hey there! Welcome to CodeRadar — a tool I built to help competitive programmers stay updated with contests and easily access high-quality solution videos across various coding platforms. No more missing events or hunting for tutorials!

#What It Does

This app gathers contest information from leading competitive programming platforms and seamlessly integrates with YouTube channels that publish top-tier solution videos. With CodeRadar, you can:

- View all upcoming, live, and completed contests in a single dashboard
- Save contests to your personal watchlist for easy access
- Watch expert-led video solutions directly within the app

#Tech Under the Hood

The project is built using the MERN stack, which offers a powerful and modern development setup:
- MongoDB handles all the data storage for contests, users, and solutions
- React combined with Chakra UI delivers a clean, responsive, and user-friendly interface
- Node.js serves as the runtime environment, tying everything together efficiently
- Express.js powers the backend API, ensuring smooth communication between client and server

#User Interface

The user interface is designed to be clean, intuitive, and functional. Key screens include:

1. **Contest Dashboard**:Browse all contests with advanced filters by platform and status. Each contest card highlights essential details like platform, title, date, and current status.

2. **Contest Detail**:  Dive deeper into any contest to view comprehensive information and available video solutions.

3. **Authentication Pages: Simple and user-friendly login and registration forms for secure access.

#Getting Started

1. Clone the repo
2. Set up MongoDB
3. Add your YouTube API key to the `.env` file (see below)
4. Run the backend: `cd backend && npm install && npm run dev`
5. Run the frontend: `cd frontend && npm install && npm start`

Required `.env` variables:
```
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_for_tokens
YOUTUBE_API_KEY=get_this_from_google_cloud_console
```

#That’s a Wrap!

If you come across bugs or have suggestions to improve the app, feel free to open an issue or submit a pull request — contributions are always welcome.

Hope CodeRadar makes your competitive programming journey smoother, smarter, and more efficient!

~ Akhil
