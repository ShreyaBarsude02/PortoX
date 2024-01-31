# PortoX - Portfolio Website
PortoX is a web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to upload their portfolios, including a resume PDF, which recruiters can explore.

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB (Atlas or locally)
- Nodemon (for development)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/ShreyaBarsude02/PortoX.git
    ```

2. **Navigate to the client directory:**
    ```bash
    cd PortoX/client
    ```

3. **Install client dependencies:**
    ```bash
    npm install
    ```

4. **Navigate to the server directory:**
    ```bash
    cd ../backend
    ```

5. **Install server dependencies:**
    ```bash
    npm install
    ```

6. **Create an "uploads" folder in the server directory:**
    ```bash
    mkdir uploads
    ```

### Configuration

1. Open the `backend/db.js` file.
2. Find the MongoDB connection URL. If using MongoDB Compass, replace the placeholder with your MongoDB Compass connection URL.

### Running the Application

1. **Start the React client:**
    ```bash
    cd ../client
    npm start
    ```

2. **Start the Node.js server:**
    ```bash
    cd ../backend
    nodemon index.js
    ```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Contributing

If you would like to contribute to PortoX, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.

### License

This project is licensed under the ISC License.
