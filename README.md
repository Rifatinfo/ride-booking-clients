# 🚖 Ride Sharing App (Frontend)

A modern **React + Tailwind CSS + Redux Toolkit** frontend for the Ride Sharing System.  
Users can request rides, drivers can accept them, and admins can manage everything from a responsive UI.

---

## 🚀 Live Demo

👉 Frontend 
```
https://ride-booking-clients.vercel.app

```
👉 Backend 

```
https://ride-booking-system-server.vercel.app/api

```


---

## 🔑 Test Login Credentials


### 👤 Rider
- **Email:**   
- **Password:**  

### 🚗 Driver
- **Email:**  
- **Password:**

### 🛠️ Admin
- **Email:** mdrifathossainsinfo@gmail.com  
- **Password:** 12345678  



---

## 🛠️ How It Works

### 👤 User Flow
1. Register or login as **User**.  
2. Enter **pickup** and **destination** to request a ride.  
3. Wait until a **driver accepts the ride**.  
4. Track ride progress:  
   - `Requested → Accepted → Picked Up → In Transit → Completed`  
5. Make payment after ride completion.  
6. Cancel rides if needed (before acceptance).  

---

### 🚗 Driver Flow
1. Register or login as **Driver**.  
2. Admin must **approve the driver account** before login access.  
3. Once approved, the driver can:  
   - View available ride requests.  
   - Accept or reject rides.  
   - Update ride status (Accepted → Picked Up → In Transit → Completed).  

---

### 🛠️ Admin Flow
1. Login as **Admin**.  
2. Approve or block drivers from the dashboard.  
3. Manage all users (block/unblock accounts).  
4. View ride history, monitor transactions, and handle disputes.  

---

## ✨ Features

- **Role-based Authentication** (User / Driver / Admin)  
- **Ride Booking System** with real-time status  
- **Driver Approval System** (Admin controlled)  
- **Block/Unblock Users & Drivers**  
- **Ride History** for Users & Drivers  
- **Payment Tracking** (`UNPAID → PAID`)  
- **Responsive UI** with Tailwind CSS  

---

## ⚙️ Tech Stack

- **React** (Vite)  
- **Redux Toolkit & RTK Query**  
- **React Router v6**  
- **Tailwind CSS**  
- **React Hook Form + Zod**  
  

---


