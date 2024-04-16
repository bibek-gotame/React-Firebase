
import { Link, Outlet} from "react-router-dom";
import Header from "./Header";
// import SignIn from "./SignIn";

function Dashboard() {


   return (
    <>
    <Header/>
      <div className="flex h-screen text-white  ">
        <div className="w-1/4 bg-black flex flex-col p-6 font-bold text-xl">
          <Link to={"/dashBoard/addStudent"}>Add Student</Link>
          <Link to={"/dashBoard/studentList"}>Student List</Link>
        </div>
        <div className="w-3/4 bg-slate-600"><Outlet /></div>
      </div>
    </>
  );
}

export default Dashboard;
