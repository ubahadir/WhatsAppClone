import styled from "styled-components";
import ContactListComponent from "./components/ContactListComponents";
import ConversationComponent from "./components/ConversationComponents";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import TutorialsList from "./components/ConversationComponents";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import AddTutorial from "./components/AddTutorial";
// import Tutorial from "./components/Tutorial";
// import TutorialsList from "./components/TutorialsList";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #f8f9fb;
`;

// function App() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <a href="/tutorials" className="navbar-brand">
//           bezKoder
//         </a>
//         <div className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link to={"/tutorials"} className="nav-link">
//               Tutorials
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to={"/add"} className="nav-link">
//               Add
//             </Link>
//           </li>
//         </div>
//       </nav>

//       <div className="container mt-3">
//         <Routes>
//           <Route path="/" element={<ContactListComponent />} />
//           {/* <Route path="/tutorials" element={<TutorialsList />} />
//           <Route path="/add" element={<AddTutorial />} />
//           <Route path="/tutorials/:id" element={<Tutorial />} /> */}
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <Container>
      <ContactListComponent />
      <TutorialsList />
    </Container>
  );
}

export default App;
