import { NavLink } from "react-router-dom";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("permit")) === null ||
      JSON.parse(localStorage.getItem("permit")).length === 0
    ) return;
    dispatch({
      type: "CURRENT_USER",
      payload: {
        email: JSON.parse(localStorage.getItem("permit"))[0].email,
        password: JSON.parse(localStorage.getItem("permit"))[0].password,
      },
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="sidebar">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <div className="categories">All</div>
          </NavLink>
          <NavLink
            to="/drinks"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <div className="categories">Drinks</div>
          </NavLink>
          <NavLink
            to="/pizza"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <div className="categories">Pizza</div>
          </NavLink>
          <NavLink
            to="/burgers"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <div className="categories">Burgers</div>
          </NavLink>
          <NavLink
            to="/sweets"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <div className="categories">Sweets</div>
          </NavLink>
        </div>
        <div className="eats">
          <Outlet />
        </div>
      </main>
    </>
  );
}
