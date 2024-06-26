# Recoil Application

## Overview

This is a React application created with Vite that demonstrates the use of Recoil for state management. The application features a notification system with different types of notifications: network, jobs, messages, and general notifications. It also includes a total notifications count calculated using a Recoil selector.

## Project Structure

The project directory structure is as follows:

Recoil_deep_dive/
└── Recoil_application/
├── node_modules/
├── public/
├── src/
│ ├── assets/
│ │ └── atom.js
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── package.json
├── package-lock.json
└── ...


## Installation


## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Allmight-456/React_recoil_CounterApp.git
    ```

2. Navigate to the project directory:

    ```sh
    cd Recoil_deep_dive/Recoil_application
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

### Running the Application

1. Start the development server:

    ```sh
    npm run dev
    ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

This application includes several buttons representing different notification categories (e.g., network, jobs, messages, notifications) and a total notifications counter. The state is managed using Recoil atoms and selectors.

## Folder Structure

- `src/assets/atom.js`: Contains the Recoil atoms and selectors for managing the state.
- `src/App.jsx`: Main application component that displays the buttons and notification counts.
- `src/index.css` and `src/App.css`: Stylesheets for the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.



## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
