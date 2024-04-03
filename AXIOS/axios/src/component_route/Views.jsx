// import React, { useEffect, useState } from "react";
// import axiosInstance from "../HELPER/axiosInstance";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Views = () => {
//   let [users, setUsers] = useState([]);
//   useEffect(() => {
//     let fetchdata = async () => {
//       let { data } = await axiosInstance.get("/userdetails");
//       setUsers(data);
//     };
//     fetchdata();
//   }, []);
//   useEffect(() => {
//     let handledelete = () => {
//       toast.success("DELETED SUCCESSFULLY");
//     };
//   }, []);
//   let handledelete = (id) => {
//     let data = axiosInstance.delete(`/userdetails/${id}`);
//     console.log(data);
//     // toast.success("DELETED SUCCESSFULLY");
//     window.location.assign("/views");
//   };
//   return (
//     <div className="view">
//       <ToastContainer />
//       <h1>User Details</h1>
//       <div className="block">
//         {users.map((x) => (
//           <div key={x.id} className="card">
//             <h2>{x.email}</h2>
//             <p>{x.password}</p>
//             <div className="card-buttons">
//               <button className="update-button">
//                 <Link to={`/update/${x.id}`}>Update</Link>
//               </button>
//               <button
//                 className="delete-button"
//                 onClick={() => {
//                   handledelete(x.id);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Views;








import React, { useEffect, useState } from "react";
import axiosInstance from "../HELPER/axiosInstance";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Views = () => {
  const navigate = useNavigate(); // Use useNavigate hook
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const { data } = await axiosInstance.get("/userdetails");
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  const handledelete = async (id) => {
    try {
      await axiosInstance.delete(`/userdetails/${id}`);
      toast.success("DELETED SUCCESSFULLY");
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));//important line
      navigate("/views"); // Use navigate to perform navigation
    
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="view">
      <ToastContainer />
      <h1>User Details</h1>
      <div className="block">
        {users.map((x) => (
          <div key={x.id} className="card">
            <h3>{x.id}</h3>
            
            <h2>{x.email}</h2>
            <p>{x.password}</p>
            <div className="card-buttons">
              <button className="update-button">
                <Link to={`/update/${x.id}`}>Update</Link>
              </button>
              <button
                className="delete-button"
                onClick={() => {
                  handledelete(x.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Views;
