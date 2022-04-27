import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile';

const userDetails = {
  imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name: "Sivaram",
  role: "Software Developer"
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = () => <h1>Users List App</h1>
const App = () => <UserProfile />

export default App;
