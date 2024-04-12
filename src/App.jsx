import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children: [
        {
          path: "/",
          element: <StudentList/>,
        },
        {
          path: "/addStudent",
          element: <AddStudent/>,
        },
        {
          path: "/studentList",
          element: <StudentList/>,
        },
      ],
    },
  ]);

  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;
