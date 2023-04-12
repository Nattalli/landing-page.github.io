import React from 'react';
import './App.scss';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <div className="layout">
      <Header />
        <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
