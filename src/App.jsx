import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Leaderboard from "./pages/Leaderboard";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:1000";

function App() {
  const [LoginId, setLoginId] = useState(121);
  const [projects, SetProjects] = useState();
  const [desktopIdData, setDesktopIdData] = useState();
  useEffect(
    function () {
      async function fetchProjects() {
        try {
          const res = await fetch(`${BASE_URL}/project`);
          const data = await res.json();
          console.log(data);
          SetProjects(data);
        } catch {
          console.log("error faced");
        }
      }
      fetchProjects();
    },
    [SetProjects]
  );

  useEffect(
    function () {
      async function GetSelectedPerson(id) {
        try {
          const res = await fetch(`${BASE_URL}/Developers/${id}`);

          const data = await res.json();
          setDesktopIdData(data);
        } catch {
          console.log("Problem faced in getting the selected id");
        }
      }
      GetSelectedPerson(LoginId);
    },
    [LoginId]
  );

  const image = "https://i.pravatar.cc/100?";
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="leaderBoard" element={<Leaderboard />} />
            <Route path="projects" element={<Projects projects={projects} />} />
            <Route
              path="dashboard"
              element={<Dashboard image={image} data={desktopIdData} />}
            />
            <Route path="signup" element={<Projects />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
