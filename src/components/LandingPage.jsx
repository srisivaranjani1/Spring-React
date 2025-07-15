// import { useNavigate } from "react-router-dom";
// import './LandingPage.css';

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="landing-wrapper">
//       {/* Header */}
//       <header className="landing-header">
//         <h1><span className="highlight">EMS</span> - Smart Employee Management</h1>
//       </header>

//       {/* Main Content */}
//       <main className="landing-main">
//         <div className="landing-content">
//           <h2>Welcome to EMS</h2>
//           <p>Empower your organization with intelligent employee management.</p>
//           <div className="landing-buttons">
//             <button onClick={() => navigate("/register")}>Get Started</button>
//             <button onClick={() => navigate("/login")}>Login</button>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="landing-footer">
//         &copy; 2025 EMS. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;


import { useNavigate } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      {/* Header */}
      <header className="landing-header">
        <h1><span className="highlight">EMS</span> - Smart Employee Management</h1>
      </header>

      {/* Main Content */}
      <main className="landing-main">
        <div className="landing-content">
          <h2>Welcome to EMS</h2>
          <p>Empower your organization with intelligent employee management.</p>
          <div className="landing-buttons">
            <button onClick={() => navigate("/register")}>Get Started</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        &copy; 2025 EMS. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
