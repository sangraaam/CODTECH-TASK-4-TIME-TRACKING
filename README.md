# CODTECH-TASK-4-TIME-TRACKING

COMPANY NAME : CODTECH IT SOLUTIONS

NAME : SANGRAM RAJENDRA SHIROLE

INTERN ID : CT04DA426

DOMAIN : FULL STACK WEB DEVELOPMENT

DURATION : 4 WEEKS

MENTOR : NEELA SANTOSH KUMAR

PROJECT TITLE: CHROME EXTENSION FOR TIME TRACKING

Project Description:
The Web Time Tracker & Productivity Dashboard is a full-stack web-based solution developed to help users monitor and analyze how they spend time on various websites through a Chrome Extension integrated with a modern React dashboard. The goal of this project is to promote self-awareness and improve time management by providing insights into online activities.

This project is built with four major components: a Chrome Extension, a Node.js backend, a MongoDB database, and a React frontend dashboard.

1. Chrome Extension (Manifest V3):
The Chrome Extension uses service workers and event listeners to track user activity in real time. It listens for browser tab events (onActivated, onUpdated) and records the amount of time a user spends on each domain. The script calculates the duration a website stays active in the current tab and sends this data to the backend using a POST request. The logic ensures that tab switching and page reloading are correctly handled to maintain accurate timing.

2. Backend (Node.js + Express):
The backend receives time-tracking data from the extension and stores it in a MongoDB database. Each entry includes the domain name, the duration of time spent, and a timestamp. The backend also includes classification logic to label domains as productive or unproductive, which can be modified to suit individual users or organizational requirements.

  RESTful APIs are provided for:

  Posting time logs

  Retrieving productivity summaries

  Fetching daily and weekly usage data

3. Database (MongoDB):
MongoDB is used to store the structured data collected from the browser extension. Collections are designed to hold domain names, timestamps, durations, and productivity classification. The database allows for aggregation queries to calculate total productive/unproductive time and weekly reports efficiently.

4. React Dashboard:
The frontend is developed using React.js and provides users with a clean, responsive dashboard. It fetches analytics from the backend and displays:

Total time spent on websites

Productive vs unproductive time

Weekly productivity score (as a percentage)

Visual summaries and future support for charts and graphs

The dashboard enables users to evaluate their browsing habits, identify time-wasting websites, and take control of their digital productivity.

Key Features:
Real-time browser activity tracking

Domain classification system (productive/unproductive)

Weekly productivity reports

REST API integration

Clean and modern React UI

Tech Stack:
Frontend: React.js, HTML, CSS

Backend: Node.js, Express.js

Database: MongoDB

Browser Extension: Chrome Extension (Manifest V3, JavaScript)

Conclusion:
This project is a powerful demonstration of full-stack development and browser extension integration. It showcases skills in JavaScript, backend API handling, database management, Chrome Extension development, and frontend visualization. The Web Time Tracker not only serves a useful personal purpose but also has potential for wider use in productivity tools and digital well-being platforms.
