# Productivity Time Tracker – Chrome Extension + Dashboard

This project is built as part of **CODTECH Internship - Task 4**.

It tracks:
- Time spent on websites
- Classifies websites as Productive / Unproductive / Neutral
- Sends usage data to backend (MongoDB)
- Shows analytics on dashboard with charts

---

## 📌 Features

### ✔ Chrome Extension
- Tracks active website time automatically
- Background worker logs website usage
- Sends logs to backend API

### ✔ Backend (Node.js + Express + MongoDB)
- Stores time logs
- Classifies websites
- Provides APIs:
  - `POST /api/time/save`
  - `GET /api/time/today`
  - `GET /api/time/weekly`

### ✔ Dashboard (HTML + CSS + JS)
- Shows:
  - Total time today
  - Productive time
  - Unproductive time
  - Website-wise table
  - Weekly report (Chart.js graph)

---

## 📁 Project Structure

