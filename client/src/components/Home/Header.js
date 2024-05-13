import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const navigate = useNavigate();

  console.log(currentUser);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>Eats</h1>
        </div>
        <div className="basket">
          {JSON.parse(localStorage.getItem("permit")) === null ||
          JSON.parse(localStorage.getItem("permit")).length === 0 ? (
            <>
              <button onClick={() => navigate("/login")} className="log">
                Login
              </button>
              <button onClick={() => navigate("/register")} className="reg">
                Sign up
              </button>
            </>
          ) : currentUser.length === 0 ? (
            ""
          ) : (
            <>
              <button onClick={() => navigate("/basket")} className="bas">
                Basket
              </button>
              <img
                onClick={() => navigate("/profile")}
                src={currentUser[0].image}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
