
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {

  return <div>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<layout/>}>
            <Route path="/" element={<Landing />} />
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </div>
}

function Layout() {
  return (
    <div style={{ height: '100vh' }}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/neet/online-coaching-class-11">Class 11</Link>
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function Landing() {
  return <div>
    Welcome to allen
  </div>
}

function Class11Program() {
  return <div>
      NEET programs for Class 11th
  </div>
}

function Class12Program() {
  const nav = useNavigate()

  function goBack() {
    nav("/")
  }
  return <div>
      NEET programs for Class 12th
      <br />
      <button onClick={goBack}>Go back</button>
  </div>
}

function NotFound() {
  return <div>
    Page not found
  </div>
}

export default App