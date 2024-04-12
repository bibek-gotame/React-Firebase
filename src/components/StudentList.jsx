import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../../firebase";
import { useEffect, useState } from "react";

function StudentList() {
  const [StudentData, setStudentData] = useState(null);
  useEffect(() => {
    const db = getDatabase(app);
    const studentRef = ref(db, "student");

    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      setStudentData(data);
    });
  }, []);
  return (
    <>
    <div className="p-10">
      <div className="font-bold text-2xl mb-4">Student Lists</div>
      <div >
        {StudentData && (
          <div className="flex gap-3 flex-wrap">
            {Object.entries(StudentData).map(([key, value]) => (
              <div key={key} className="border-2 w-48 p-2">
                <h1>ID : {key}</h1>
                <h1> Name: {value.Name}</h1>
                <h1> Number: {value.Number}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default StudentList;
