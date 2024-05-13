import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbArrowBack } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("permit")) === null ||
      JSON.parse(localStorage.getItem("permit")).length === 0
    )
      return navigate("/");
    if (
      JSON.parse(localStorage.getItem("permit")) === null ||
      JSON.parse(localStorage.getItem("permit")).length === 0
    )
      return;
    setUser(JSON.parse(localStorage.getItem("permit"))[0]);
  }, []);

  return (
    <section className="profile">
      <div onClick={() => navigate("/")} className="backPage">
        <TbArrowBack />
      </div>
      <div className="banner"></div>
      <div className="content">
        <div className="profileHead">
          <img src={user.image} />
        </div>
        <div className="profileTitle">
          <h1>{`${user.firstName} ${user.lastName}`}</h1>
          <h3>Email | {user.email}</h3>
          <h3>Password | {user.password}</h3>
          <h3>Role | {user.role}</h3>
        </div>
      </div>
      <div className="footer">
        <button className="log">Save</button>
        <button
          onClick={() => {
            localStorage.setItem("permit", null);
            navigate("/");
          }}
          className="reg"
        >
          Log Out
        </button>
        {user.role === "ADMIN" ? (
          <button onClick={() => navigate("/admin")} className="admin">
            Admin
          </button>
        ) : user.role === "CHEFF" ? (
          <button onClick={() => navigate("/cheff")} className="admin">
            Cheff
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
