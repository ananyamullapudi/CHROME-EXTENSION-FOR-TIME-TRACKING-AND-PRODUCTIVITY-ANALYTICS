# Productivity Time Tracker – Chrome Extension with Backend & Dashboard
### CODTECH Internship – Task 4  
### Author: <YOUR NAME>

---

## 1. Introduction

The Productivity Time Tracker is a Chrome Extension designed to monitor the amount of time a user spends on various websites. It categorizes websites as **productive**, **unproductive**, or **neutral**, and provides users with insights through a backend-powered analytics dashboard.

The primary focus of this project is to help users understand their online behavior, improve focus, and enhance productivity.

---

## 2. Objectives

The goals of this project include:

- Tracking time spent on each website automatically.
- Logging meaningful usage data into a backend server.
- Classifying websites to measure productivity levels.
- Displaying daily and weekly usage analytics.
- Providing a clean, interactive dashboard for visualization.

---

## 3. Tools & Technologies Used

### Chrome Extension:
- Manifest v3
- JavaScript
- Chrome Tabs API
- Chrome Storage API
- Service Worker (background.js)

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs

### Dashboard:
- HTML
- CSS
- JavaScript
- Chart.js

---

## 4. System Architecture

### Components:
1. **Chrome Extension**: Tracks user activity and time spent.
2. **Backend Server**: Stores logs, classifies websites, and processes analytics.
3. **Database (MongoDB)**: Stores daily usage logs.
4. **Dashboard**: Visual interface for time analytics.

---

## 5. Features Implemented

### ✔ Chrome Extension
- Tracks active tab and time spent.
- Detects URL changes.
- Sends time logs to the backend.
- Popup interface for quick summary.

### ✔ Backend (Node + Express + MongoDB)
- Stores time logs in database.
- Classifies websites as productive / unproductive.
- Provides daily & weekly reports via API endpoints.

### ✔ Dashboard
- Displays total time spent today.
- Shows productive vs unproductive time.
- Shows website-wise time split in a table.
- Weekly usage report via bar chart (Chart.js).

---

## 6. API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/time/save` | Save a new time log |
| GET  | `/api/time/today` | Fetch today's usage |
| GET  | `/api/time/weekly` | Weekly usage analytics |

---

## 7. Database Schema

### TimeLog Model:


---

## 8. Extension Workflow

1. User opens a website.
2. `background.js` starts tracking time.
3. When tabs change, time difference is calculated.
4. Time log is stored locally and sent to backend.
5. Backend classifies websites.
6. Dashboard fetches and displays analytics.

---

## 9. Screenshots

(Add these images from `docs/screenshots/`)

- popup-screenshot  
- dashboard-screenshot  
- backend-running  
- extension-working  

---

## 10. Conclusion

This project successfully demonstrates an end-to-end productivity time tracking system using a Chrome extension, backend server, and analytics dashboard. It helps users understand their daily browsing patterns and manage time more efficiently.

---

## 11. Future Enhancements

- Add user login authentication.
- Sync data across multiple devices.
- Add pie/donut charts for visualization.
- Add website blocking & focus mode.
- Export report as PDF from dashboard.

---

## 12. References

- Chrome Extensions Documentation  
- MDN JavaScript  
- Express.js Documentation  
- MongoDB Documentation  
