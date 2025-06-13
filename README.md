# React Redux Toolkit CRUD

A simple CRUD (Create, Read, Update, Delete) application built with **React**, **Redux Toolkit**, and **Vite**. This project demonstrates how to manage user data using Redux Toolkit's async thunks and slices, and interact with a mock API.

## Features

- Add new users
- View all users
- Edit user details
- Delete users
- Search and filter users by gender
- Modal popup for user details
- Routing with React Router
- Bootstrap 5 for styling

## Tech Stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [React Router DOM](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/react-redux-toolkit-crud.git
   cd react-redux-toolkit-crud
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  components/         # React components (CRUD, Navbar, Modal, etc.)
  features/           # Redux slices and async thunks
  redux/              # Redux store configuration
  assets/             # Static assets
  App.jsx             # Main app component
  main.jsx            # Entry point
  index.css           # Global styles
```

## API

This project uses [MockAPI](https://mockapi.io/) for demonstration. You can change the API endpoint in [`src/features/userDetailSlice.js`](src/features/userDetailSlice.js).

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using React 