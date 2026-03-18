# 🚀 Todo App Frontend (React)

## 📌 Project Description

This is a simple Todo List frontend built using **React.js**.
It connects with an ASP.NET MVC 5 backend using Axios API calls.

---

## 🖼️ UI Preview

(<img width="462" height="513" alt="Screenshot 2026-03-18 135749" src="https://github.com/user-attachments/assets/8547d277-327f-427f-8da2-27639e90257a" />
)

---

## ⚙️ Technologies Used

* React.js
* Axios
* Bootstrap

---

## 📦 Installation Steps

```bash
npx create-react-app todo-ui
cd todo-ui
npm install axios bootstrap
```

---

## ▶️ Run Project

```bash
npm start
```

App runs on:

```
http://localhost:3000
```

---

## 🔗 API Configuration

Update API URL in `App.js`:

```js
const API = "https://localhost:44325/Todo/";
```

---

## 📡 API Calls (Axios)

### 🔹 Get Todos

```js
axios.get(API + "GetTodos")
```

### 🔹 Add Todo

```js
axios.post(API + "AddTodo", { Title: title })
```

### 🔹 Delete Todo

```js
axios.post(API + "DeleteTodo?id=" + id)
```

### 🔹 Toggle Todo

```js
axios.post(API + "ToggleTodo?id=" + id)
```

---

## 📁 Folder Structure

```
todo-ui/
│── src/
│   ├── App.js
│   ├── index.js
│── package.json
```

---

## 🧠 Features

* Add Todo
* Delete Todo
* Mark Complete
* Responsive UI

---

## ⚠️ Notes

* Make sure backend is running before starting React
* Allow HTTPS localhost in browser if using SSL

---

## 🎯 Purpose

This project is built for **learning React with ASP.NET MVC 5 integration**

---
