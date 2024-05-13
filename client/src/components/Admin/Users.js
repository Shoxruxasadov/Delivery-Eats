import { Link } from "react-router-dom";
import { BsFillHouseFill, BsPlusCircleFill } from "react-icons/bs";
import { RiEditCircleFill } from "react-icons/ri";
import { HiLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function Users() {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_USERS" });
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="home">
          <Link to="/admin">
            <BsFillHouseFill />
          </Link>
        </div>
        <Link to="/">
          <span>EXIT</span>
          <HiLogout />
        </Link>
      </div>
      <div className="content goods">
        <h1>Users</h1>
        <table className="userTable">
          <thead>
            <tr>
              <th className="idth">Photo</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th className="actionth">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item.id}>
                <td className="userId">
                  <img src={item.image} />
                  <span>{index + 1}</span>
                </td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td className="emailTableTbody">{item.email}</td>
                <td className="emailTableTbody">{item.password}</td>
                <td>{item.role}</td>
                <td className="actionGoods">
                  <RiEditCircleFill className="fa-solid fa-pen-to-square" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
