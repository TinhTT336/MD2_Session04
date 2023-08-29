// import React, { useState } from "react";

// export default function ToDoList() {
//   let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
//   const [job, setJob] = useState("");
//   // ham lay du lieu tu o input
//   const handleChange = (event) => {
//     // console.log(event.target.value);
//     setJob(event.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     jobs = [...jobs, job];
//     localStorage.setItem("jobs", JSON.stringify(jobs));
//     setJob("");
//   };
//   const handleDelete = (index) => {
//     // console.log(index);
//     // jobs.splice(index, 1);
//     jobs = jobs.filter((job, i) => i !== index);
//     localStorage.setItem("jobs", JSON.stringify(jobs));
//     window.location.reload(false);
//   };

//   return (
//     <>
//       <div className="todolist">
//         <h2>To do List</h2>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <input
//             type="text"
//             onChange={handleChange}
//             style={{ padding: 12, width: "50%" }}
//             value={job}
//           />
//           <button type="submit" className="btn btn-primary">
//             Save
//           </button>
//         </form>
//         <ul>
//           {jobs.map((job, index) => (
//             <li key={job}>
//               {job}
//               <button
//                 style={{ backgroundColor: "red", color: "white" }}
//                 onClick={() => handleDelete(index)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// cach 2:
import React, { useRef, useState } from "react";
export default function ToDoList() {
  const [job, setJob] = useState(""); // Lấy giá trị từ ô input
  const [jobs, setJobs] = useState(() => {
    let jobLocal = JSON.parse(localStorage.getItem("jobs")) || [];
    return jobLocal; // Giá trị khởi tạo của state
  });

  const jobRef = useRef(null);

  // Thêm mới job
  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = [...jobs, job]; // bảo lưu giá trị cũ và thêm giá trị mới vào mảng
    // set lại state cho jobs
    setJobs(newJob);
    // Lưu lên local
    localStorage.setItem("jobs", JSON.stringify(newJob));
    // clean ô input
    setJob("");
    //   focus vao o input sau khi them ham thanh cong
    jobRef.current.focus();
  };
  // cac buoc xoa du lieu
  //buoc 1: lay duoc vi tri can xoa
  //buoc 2: loc cong viec do theo danh sach
  //buoc 3: ghi de va gui du lieu le local
  const handleDelete = (index) => {
    //loc danh sach cac cong viec co index khac voi index can xoa
    const newJobs = jobs.filter((_, i) => i !== index);
    //luu mang du lieu moi len local
    localStorage.setItem("jobs", JSON.stringify(newJobs));
    //set lai state de re-render giao dien
    setJobs(newJobs);
  };

  return (
    <>
      <div className="todolist">
        <h2>To do List</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            style={{ padding: 12, width: "50%" }}
            ref={jobRef}
            type="text"
            placeholder="Enter new job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {jobs.map((job, index) => (
            <li key={job}>
              {job}
              <button
                className="btn btn-danger "
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
