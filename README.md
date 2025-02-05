# Project Setup & Overview

## Setup

Ensure that **npm** is installed.

### Install npm
1. **Install Node.js** (npm comes bundled with Node.js).  
   - Download it from [Node.js official website](https://nodejs.org).
2. **Verify installation** by running the following command in your terminal:
   ```sh
   npm -v
   ```

### Install Static File Server
Run the following command to install the static file server globally:
```sh
npm install -g serve
```

### Run the Server
To start the server, use:
```sh
serve
```

### Set a Custom Port
To run the server on a specific port (e.g., 8080), use:
```sh
serve -p 8080
```

---

## Design Overview & Technology

### Tech Stack
- **JavaScript**
- **HTML/CSS**

### Overview
This project utilizes a **static file server** to run **modular JavaScript**, ensuring a structured and efficient development approach.

### Features
- Modular JavaScript implementation  
- Static file serving for better performance  
- Responsive design with HTML/CSS  

---

## Unit Testing

A customized JavaScript file (`test.js`) is used for unit testing.  

### Setup
1. Ensure `test.js` is linked in `index.html` using the following script tag:
   ```html
   <script type="module" src="tests/test.js"></script>
   ```
2. Open the project in a browser.  

### View Test Results
1. Press **F12** or **Ctrl + Shift + I** to open Developer Tools.  
2. Navigate to the **Console** tab to view test results.

---
