import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Admin() {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("permit")) === null ||
      JSON.parse(localStorage.getItem("permit")).length === 0 ||
      JSON.parse(localStorage.getItem("permit"))[0].role === "USER"
    )
      return navigate("/");
  }, []);

  return (
    <div className="AdminPanel">
      <div className="sidebar">
        <div className="logo">
          <h1>Eats</h1>
        </div>
        <ul className="list">
          <NavLink
            to="/admin/products"
            className={({ isActive, isPending }) =>
              isPending
                ? "sidebarli pending"
                : isActive
                ? "sidebarli active"
                : ""
            }
          >
            <i className="fa-solid fa-bag-shopping"></i>
            <span>Products</span>
          </NavLink>
          <NavLink
            to="/admin/orders"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <i className="fa-solid fa-square"></i>
            <span>Orders</span>
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <i className="fa-solid fa-fire-flame-curved"></i>
            <span>Users</span>
          </NavLink>
        </ul>
        <div className="created">
          <a target="_blank" href="https://www.shoxruxasadov.uz/"></a>
        </div>
      </div>
      <div className="AdminMain">
        <Outlet />
      </div>
    </div>
  );
}
