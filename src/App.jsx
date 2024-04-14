import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import SignIn from "./components/SignIn";
import { store } from "./store/store";
import { Provider } from "react-redux";
function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/dashBoard",
      element: <Dashboard />,
      children:[
        {
          path: "addStudent",
          element: <AddStudent />,
        },
        {
          path: "studentList",
          element: <StudentList />,
        },
      ]
    },
   
  ]);

  return (
    <>
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>
    </>
  );
}

export default App;
