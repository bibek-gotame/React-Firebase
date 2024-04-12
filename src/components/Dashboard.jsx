import {Link, Outlet} from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="flex h-screen text-white  ">
        <div className="w-1/4 bg-black flex flex-col p-6 font-bold text-xl">
          <Link to={"/addStudent"}>Add Student</Link>
          <Link to={"/studentList"}>Student List</Link>
        </div>
        <div className="w-3/4 bg-slate-600">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
